module.exports = {
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};


const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route for handling form submissions
app.post('/sendEmail', (req, res) => {
    const { email } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ketest12370@gmail.com', // Your email address
            pass: 'txlj fhaw fdip wkwp'  // Your email password
        }
    });

    // Email content
    const mailOptions = {
        from: 'ketest12370@gmail.com', // Sender email address
        to: email,                    // Receiver email address (dynamic)
        subject: 'New Subscription',  // Subject line
        text: `New subscription from ${email}`  // Email body
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ', info.messageId);
            res.status(200).send('Email sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
