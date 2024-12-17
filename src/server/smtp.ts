import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailData {
  firstname?: string;
  lastname?: string;
  email: string;
  phonenumber?: string;
  message?: string;
  pn?: string;
  dt?: string;
}

export async function sendEmail(data: EmailData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = `
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Name:</strong> ${data.firstname || ''} ${data.lastname || ''}</p>
    <p><strong>E-Mail:</strong> ${data.email}</p>
    ${data.phonenumber ? `<p><strong>Telefon:</strong> ${data.phonenumber}</p>` : ''}
    ${data.message ? `<p><strong>Nachricht:</strong> ${data.message}</p>` : ''}
    ${data.pn ? `<p><strong>Formular:</strong> ${data.pn}</p>` : ''}
    ${data.dt ? `<p><strong>Datum:</strong> ${data.dt}</p>` : ''}
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'Neue Kontaktanfrage von der Website',
      html: htmlBody,
      replyTo: data.email,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
} 