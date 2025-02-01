import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // 1️⃣ Configure the email transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Or use your SMTP service (Zoho, Outlook, etc.)
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // 2️⃣ Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email
            to: 'support@koacook.com', // Replace with the recipient email
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // 3️⃣ Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ message: 'Failed to send email', error });
    }
}
