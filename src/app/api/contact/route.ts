import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendContactEmail, sendAutoReply } from '@/lib/emailService';

// Email validation function
const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Email sending function using the actual email service
const sendEmail = async (email: string, message: string): Promise<boolean> => {
    try {
        console.log('EMAIL_MODE:', process.env.EMAIL_MODE);
        
        // Check EMAIL_MODE to determine which service to use
        const mode = process.env.EMAIL_MODE?.toLowerCase() === 'app' ? 'app' : 'oauth2';
        console.log(`Using ${mode.toUpperCase()} email service`);
        
        return await sendContactEmail(email, message, mode);
    } catch (error) {
        console.error('Email sending failed:', error);
        return false;
    }
};

// Auto-reply function with mode switching
const sendAutoReplyEmail = async (email: string): Promise<boolean> => {
    try {
        // Check EMAIL_MODE to determine which service to use
        const mode = process.env.EMAIL_MODE?.toLowerCase() === 'app' ? 'app' : 'oauth2';
        console.log(`Using ${mode.toUpperCase()} auto-reply service`);
        
        return await sendAutoReply(email, mode);
    } catch (error) {
        console.error('Auto-reply failed:', error);
        return false;
    }
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, message } = body;

        // Validate message (required)
        if (!message || !message.trim()) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        let emailSent = false;
        let autoReplySent = false;
        let savedToDb = false;
        let responseMessage = '';

        // Check if email is provided and valid
        const hasValidEmail = email && email.trim() && validateEmail(email.trim());

        // Always save to database
        try {
            await prisma.contactMessage.create({
                data: {
                    message: message.trim(),
                    email: hasValidEmail ? email.trim() : null,
                }
            });
            savedToDb = true;
        } catch (dbError) {
            console.error('Database save failed:', dbError);
            return NextResponse.json(
                { error: 'Failed to save message' },
                { status: 500 }
            );
        }

        // Send emails if valid email is provided
        if (hasValidEmail) {
            try {
                // Send notification email to you
                emailSent = await sendEmail(email.trim(), message.trim());
                
                // Send auto-reply to user if notification was successful
                if (emailSent) {
                    autoReplySent = await sendAutoReplyEmail(email.trim());
                }
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Don't fail the request if email fails, since we saved to DB
            }
        }

        // Determine response message
        if (hasValidEmail && emailSent) {
            responseMessage = autoReplySent 
                ? "Message sent! 🚀 Check your email for confirmation. I'll get back to you soon!"
                : "Message sent via email and saved! I'll get back to you soon.";
        } else if (hasValidEmail && !emailSent) {
            responseMessage = "Message saved! Email sending failed, but I'll still see your message.";
        } else {
            responseMessage = "Message saved! Add your email next time for a direct response.";
        }

        return NextResponse.json({
            message: responseMessage,
            emailSent,
            autoReplySent,
            savedToDb,
        });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}
