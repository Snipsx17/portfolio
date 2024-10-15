import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { MailtrapClient } from 'mailtrap';

export const server = {
  sendForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      telephone: z.string(),
      subject: z.string(),
      message: z.string(),
    }),
    handler: async ({ name, email, telephone, subject, message }) => {
      const TOKEN = import.meta.env.MAILTRAP_TOKEN;
      const SENDER_EMAIL = import.meta.env.SENDER_EMAIL;
      const RECIPIENT_EMAIL = import.meta.env.RECIPIENT_EMAIL;

      const client = new MailtrapClient({ token: TOKEN });

      const sender = {
        name: 'New message from UHERNANDEZ',
        email: SENDER_EMAIL,
      };

      client
        .send({
          from: sender,
          to: [{ email: RECIPIENT_EMAIL }],
          template_uuid: import.meta.env.TEMPLATE_UUID,
          template_variables: {
            name,
            email,
            telephone,
            subject,
            message,
          },
        })
        .then(console.log)
        .catch(console.error);
    },
  }),
};
