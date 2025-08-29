interface ContactSubmissionData {
    email?: string;
    message: string;
}

interface ContactSubmissionResult {
    success: boolean;
    message: string;
    emailSent?: boolean;
    autoReplySent?: boolean;
    savedToDb?: boolean;
}

export const handleContactSubmission = async (
    formData: ContactSubmissionData
): Promise<ContactSubmissionResult> => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email || null,
                message: formData.message,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            return {
                success: true,
                message: result.message,
                emailSent: result.emailSent,
                savedToDb: result.savedToDb
            };
        } else {
            return {
                success: false,
                message: result.error || 'Failed to send message'
            };
        }
    } catch (error) {
        return {
            success: false,
            message: 'Network error. Please try again.'
        };
    }
};
