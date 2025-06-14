interface EmailOptions {
    name: string
    to: string
    subject: string
    html: string
    from?: string
}

export async function sendEmail({
    name,
    to,
    subject,
    html,
    from,
}: EmailOptions): Promise<void> {
    const url = 'https://api.brevo.com/v3/smtp/email'

    // Construct the payload for the email
    const payload = {
        sender: {
            name: 'Oferte Terminatorul de Insecte [Terminatorul.EU]', // Replace with your name
            email: from || process.env.EMAIL_ADDRESS, // Use alias if provided, otherwise default email
        },
        cc: [
            {
                email: 'contact@terminatorul.eu',
            },
        ],
        to: [
            {
                name: name,
                email: to,
            },
        ],
        subject: subject,
        htmlContent: html,
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) {
            const errorData = await response.json()
            console.error('Error sending email:', errorData)
            throw new Error('Failed to send email!')
        }
        const data = await response.json()
        console.log('Email sent successfully:', data)
    } catch (error) {
        console.error('Error sending email:', error)
        throw new Error('Failed to send email')
    }
}
