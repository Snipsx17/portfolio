import { MailtrapClient } from 'mailtrap';

interface Props {
  name: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
  recipientEmail: string;
}

export const sendEmail = async ({
  name,
  email,
  telephone,
  subject,
  message,
  recipientEmail,
}: Props) => {
  const TOKEN = import.meta.env.MAILTRAP_TOKEN;
  const SENDER_EMAIL = import.meta.env.SENDER_EMAIL;

  const client = new MailtrapClient({ token: TOKEN });

  const sender = {
    name: 'New message from UHERNANDEZ',
    email: SENDER_EMAIL,
  };

  try {
    await client.send({
      from: sender,
      to: [{ email: recipientEmail }],
      template_uuid: import.meta.env.TEMPLATE_UUID,
      template_variables: {
        name,
        email,
        telephone,
        subject,
        message,
      },
    });
    return { message: 'Message was send' };
  } catch (error) {
    throw new Error('Error sending message');
  }
};
