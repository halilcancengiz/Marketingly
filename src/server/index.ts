import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email sending endpoint
app.post('/api/send-mail', async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      phonenumber = '• Keine Angabe',
      message = '• Keine Angabe',
    } = req.body;

    // Email HTML template
    const htmlContent = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Vorname:</strong> ${firstname}</p>
      <p><strong>Nachname:</strong> ${lastname}</p>
      <p><strong>E-Mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phonenumber}</p>
      <p><strong>Nachricht:</strong> ${message}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'Neue Kontaktanfrage von der Website',
      html: htmlContent,
      replyTo: email,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 