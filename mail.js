const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const sendEmail = async({ recipient, subject, message, htmlMessage }) => {
    return await transporter.sendMail({
        from: `"Fajar" <bot@gmail.com>`,
        to: recipient,
        subject,
        text: message,
        html: htmlMessage
    })
}

module.exports = { sendEmail }