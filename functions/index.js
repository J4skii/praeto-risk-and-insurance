const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors');

const corsHandler = cors({ origin: true });
let transporter;

function getSmtpConfig() {
  const smtp = functions.config().smtp || {};
  const { host, port, user, pass, secure, from, to } = smtp;

  if (!host || !port || !user || !pass || !to) {
    throw new Error(
      'SMTP settings are incomplete. Please set smtp.host, smtp.port, smtp.user, smtp.pass and smtp.to via firebase functions:config:set.'
    );
  }

  return {
    host,
    port: Number(port),
    user,
    pass,
    secure: secure ? String(secure).toLowerCase() === 'true' : Number(port) === 465,
    from: from || user,
    to
  };
}

function getTransporter() {
  if (transporter) {
    return transporter;
  }
  const config = getSmtpConfig();
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass
    }
  });
  return transporter;
}

exports.sendQuoteEmail = functions.region('us-central1').https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.status(204).send('');
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
    }

    const { fullName, email, phoneNumber, requirement, message, popiaConsent } = req.body || {};

    if (!fullName || !email || !phoneNumber || !requirement) {
      res.status(400).json({ message: 'Missing required fields.' });
      return;
    }

    try {
      const smtpConfig = getSmtpConfig();
      const consent = Boolean(popiaConsent);
      const plainMessage = `A new quote request was submitted via the Praeto website.\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phoneNumber}\n` +
        `Required Cover: ${requirement}\n` +
        `POPIA Consent: ${consent ? 'Yes' : 'No'}\n\n` +
        `Message:\n${message ? message : 'N/A'}`;

      const htmlMessage = `
        <p><strong>A new quote request was submitted via the Praeto website.</strong></p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Required Cover:</strong> ${requirement}</p>
        <p><strong>POPIA Consent:</strong> ${consent ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? message.replace(/\n/g, '<br />') : 'N/A'}</p>
      `;

      await getTransporter().sendMail({
        from: smtpConfig.from,
        to: smtpConfig.to,
        replyTo: email,
        subject: `New Quote Request from ${fullName}`,
        text: plainMessage,
        html: htmlMessage
      });

      res.status(200).json({ message: 'Quote submitted successfully.' });
    } catch (error) {
      functions.logger.error('Failed to send quote email', error);
      res.status(500).json({ message: 'Failed to send quote request.' });
    }
  });
});
