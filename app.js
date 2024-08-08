const express = require('express');
const { sendEmail } = require('./mail');

const app = express();

app.use(express.json());

app.post('/send-verification-email', (req, res) => {
    const { judul, email, pesan, link } = req.body;

    const subject = 'Email Verifikasi';
    const message = `${judul}\n\n${pesan}\n\nVisit this link: ${link}`;
    const htmlMessage = `<h1>${judul}</h1><p>${pesan}</p><p><a href="${link}">Visit this link</a></p>`;

    const recipient = email;

    sendEmail({ recipient, subject, message, htmlMessage })
    .then(result => {
        res.status(200).json({ message: 'Email verifikasi telah dikirim.' });
    })
    .catch(error => {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Gagal mengirim email.' });
    });
});

module.exports = app;
