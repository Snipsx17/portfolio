import { createTransport } from 'nodemailer';
import { emailTemplate } from 'src/email/template';
import { SENDER_EMAIL, GOOGLE_PASSWORD } from 'astro:env/server';

interface Props {
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
  recipientEmail: string[];
}

export const sendEmail = async ({
  name,
  email,
  telephone,
  subject,
  message,
  recipientEmail,
}: Props) => {

  const transport = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: SENDER_EMAIL,
      pass: GOOGLE_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: 'New message from UHERNANDEZ.COM <contact@uhernandez.com>',
      to: recipientEmail,
      subject: subject,
      html: emailTemplate({ name, email, telephone, subject, message }),
    });
  } catch (error) {
    console.error(error);
    throw new Error('Error sending message');
  }
};
