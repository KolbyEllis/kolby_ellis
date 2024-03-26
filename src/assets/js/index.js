const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

// Create a SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ketest12370@gmail.com',
    pass: 'txlj fhaw fdip wkwp'
  }
});

// Define the email content
const mailOptions = {
  from: 'ketest12370@gmail.com',
  to: 'kolby.ellis@yahoo.com',
  subject: 'Scheduled Email',
  text: 'This is a scheduled email.'
};

// Send the email immediately
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
