const schedule = require('node-schedule');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Create a SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ketest12370@gmail.com',
    pass: 'txlj fhaw fdip wkwp'
  }
});

// Define the email content for scheduled emails
const scheduledMailOptions = {
  from: 'ketest12370@gmail.com',
  to: 'kolby.ellis@yahoo.com',
  subject: 'Scheduled Email',
  text: 'This is a scheduled email.'
};

// Schedule sending the email immediately
transporter.sendMail(scheduledMailOptions, function(error, info) {
  if (error) {
    console.log('Error sending scheduled email:', error);
  } else {
    console.log('Scheduled email sent:', info.response);
  }
});

const app = express();
const port = 3000;

// Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Route to handle POST requests to "/send-email"
app.post('/send-email', (req, res) => {
    // Extract email address from request body
    const { email } = req.body;

    // Define email options
    const mailOptions = {
        from: 'ketest12370@gmail.com',
        to: email,
        subject: 'Subject of the email',
        text: 'Body of the email'
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
