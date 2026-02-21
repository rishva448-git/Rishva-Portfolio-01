require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
// The credentials will be loaded from the .env file
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});

// Verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log("Error configuring Nodemailer:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// Contact Form POST Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    try {
        // Setup email data
        const mailOptions = {
            from: `"${name}" <${email}>`, // sender address
            to: 'techveons.creation.official@gmail.com', // target email receiver
            subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: 
${message}
            `,
            html: `
                <h3>New Contact Request from Portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
