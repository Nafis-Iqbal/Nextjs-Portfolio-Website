import { NextRequest, NextResponse } from 'next/server';
import { testEmailConfiguration } from '@/lib/emailService';

export async function GET() {
    try {
        console.log('EMAIL_MODE:', process.env.EMAIL_MODE);
        
        // Check EMAIL_MODE to determine which service to test
        const mode = process.env.EMAIL_MODE?.toLowerCase() === 'app' ? 'app' : 'oauth2';
        const modeName = mode === 'app' ? 'App Password' : 'OAuth2';
        
        console.log(`Testing ${modeName} email configuration`);
        const isValid = await testEmailConfiguration(mode);
        
        if (isValid) {
            return NextResponse.json({
                success: true,
                message: `Email configuration (${modeName}) is valid and ready to use!`,
                mode: modeName
            });
        } else {
            return NextResponse.json({
                success: false,
                message: `Email configuration (${modeName}) test failed. Please check your credentials.`,
                mode: modeName
            }, { status: 500 });
        }
    } catch (error) {
        console.error('Email test error:', error);
        return NextResponse.json({
            success: false,
            message: 'Email configuration test failed with error.',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

// Handle other HTTP methods
export async function POST() {
    return NextResponse.json(
        { error: 'Method not allowed. Use GET to test email configuration.' },
        { status: 405 }
    );
}
