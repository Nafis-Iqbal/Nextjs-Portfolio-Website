import nodemailer from 'nodemailer';

// Unified transporter creation that handles both OAuth2 and App Password
const createTransporter = (mode: 'oauth2' | 'app' = 'oauth2') => {
    if (mode === 'app') {
        // App Password configuration
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.APP_PASSWORD!,
            },
        });
    } else {
        // OAuth2 configuration
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2' as const,
                user: process.env.EMAIL_USER!,
                clientId: process.env.GMAIL_CLIENT_ID!,
                clientSecret: process.env.GMAIL_CLIENT_SECRET!,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN!,
            },
        });
    }
};


export const sendContactEmail = async (email: string, message: string, mode: 'oauth2' | 'app' = 'oauth2'): Promise<boolean> => {
    console.log({
        DATABASE_URL: process.env.DATABASE_URL,
        GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID,
        GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
        GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
        EMAIL_USER: process.env.EMAIL_USER,
        APP_PASSWORD: process.env.APP_PASSWORD ? 'SET' : 'NOT SET',
        EMAIL_MODE: process.env.EMAIL_MODE,
        USING_MODE: mode
    });
    
    try {
        const transporter = createTransporter(mode);
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Your email to receive messages
            replyTo: email, // User's email for easy reply
            subject: `🚀 New Contact Form Message from ${email}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
                    <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
                            💌 New Portfolio Contact
                        </h1>
                    </div>
                    
                    <div style="padding: 30px; background-color: white; margin: 0;">
                        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 12px; border-left: 4px solid #059669;">
                            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">
                                📧 Contact Details
                            </h2>
                            <p style="margin: 8px 0; color: #475569;">
                                <strong style="color: #1e293b;">From:</strong> 
                                <span style="color: #059669; font-weight: 500;">${email}</span>
                            </p>
                            <p style="margin: 8px 0; color: #475569;">
                                <strong style="color: #1e293b;">Received:</strong> 
                                ${new Date().toLocaleString('en-US', { 
                                    timeZone: 'UTC',
                                    dateStyle: 'full',
                                    timeStyle: 'short'
                                })}
                            </p>
                        </div>

                        <div style="margin: 25px 0;">
                            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px;">
                                💬 Message Content
                            </h3>
                            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                                <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                            </div>
                        </div>

                        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 25px;">
                            <p style="margin: 0; color: #92400e; font-size: 14px;">
                                <strong>💡 Quick Actions:</strong> Click reply to respond directly to ${email}
                            </p>
                        </div>
                    </div>
                    
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">
                            📱 Sent from your portfolio website contact form
                        </p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Contact notification email sent successfully (${mode.toUpperCase()})`);
        return true;
    } catch (error) {
        console.error(`Email sending failed (${mode.toUpperCase()}):`, error);
        return false;
    }
};

export const sendAutoReply = async (userEmail: string, mode: 'oauth2' | 'app' = 'oauth2'): Promise<boolean> => {
    try {
        const transporter = createTransporter(mode);
        
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Thanks for reaching out! 🚀 I'll be in touch soon",
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc;">
                    <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
                            🎉 Message Received!
                        </h1>
                    </div>
                    
                    <div style="padding: 30px; background-color: white;">
                        <div style="text-align: center; margin-bottom: 25px;">
                            <div style="font-size: 48px; margin-bottom: 15px;">👋</div>
                            <h2 style="color: #1e293b; margin: 0; font-size: 20px;">Hi there!</h2>
                        </div>

                        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 12px; border-left: 4px solid #059669; margin: 20px 0;">
                            <p style="color: #374151; line-height: 1.6; margin: 0;">
                                Thanks for reaching out through my portfolio! I've received your message and I'm excited to learn more about your project.
                            </p>
                        </div>

                        <div style="margin: 25px 0;">
                            <h3 style="color: #1e293b; font-size: 16px; margin: 0 0 15px 0;">🚀 What happens next?</h3>
                            <ul style="color: #475569; line-height: 1.6; padding-left: 20px;">
                                <li style="margin: 8px 0;">I'll review your message within 24 hours</li>
                                <li style="margin: 8px 0;">I'll get back to you with any questions or next steps</li>
                                <li style="margin: 8px 0;">We can schedule a call to discuss your project in detail</li>
                            </ul>
                        </div>

                        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <p style="color: #92400e; margin: 0; font-size: 14px;">
                                <strong>💡 In the meantime:</strong> Feel free to check out my latest projects and case studies on my portfolio!
                            </p>
                        </div>

                        <div style="text-align: center; margin: 25px 0;">
                            <p style="color: #374151; margin: 0;">
                                Looking forward to working together! 🤝
                            </p>
                            <p style="color: #059669; font-weight: 600; margin: 10px 0 0 0;">
                                Best regards,<br>
                                Your Name
                            </p>
                        </div>
                    </div>
                    
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #64748b; font-size: 12px; margin: 0;">
                            📧 This is an automated response. Please don't reply to this email directly.
                        </p>
                        <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">
                            If you need immediate assistance, please use the contact form again.
                        </p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(autoReplyOptions);
        console.log(`Auto-reply email sent successfully (${mode.toUpperCase()}) to:`, userEmail);
        return true;
    } catch (error) {
        console.error(`Auto-reply failed (${mode.toUpperCase()}):`, error);
        return false;
    }
};

// Test email configuration
export const testEmailConfiguration = async (mode: 'oauth2' | 'app' = 'oauth2'): Promise<boolean> => {
    try {
        const transporter = createTransporter(mode);
        await transporter.verify();
        console.log(`Email configuration is valid (${mode.toUpperCase()})`);
        return true;
    } catch (error) {
        console.error(`Email configuration test failed (${mode.toUpperCase()}):`, error);
        return false;
    }
};
