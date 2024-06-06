const nodemailer = require('nodemailer');

async function sendEmail(recipientEmail) {
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
        from: 'ketest12370@gmail.com',   // Sender email address
        to: recipientEmail,              // Receiver email address (dynamic)
        subject: 'Test Email',          // Subject line
        text: 'This is a test email.'   // Plain text body
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

// Call the function to send the email with a dynamic recipient email address
sendEmail('kolby.ellis@yahoo.com');
