const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ketest12370@gmail.com',
        pass: 'txlj fhaw fdip wkwp'
    }
});

exports.handler = async (event, context) => {
  const { email } = JSON.parse(event.body);

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'ketest12370@gmail.com',
        to: email,
        subject: 'Thank you for subscribing!',
        text: 'Thank you for subscribing to our newsletter and promotions!'
    });

    console.log('Email sent: ', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    console.error('Error sending email: ', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' })
    };
  }
};
