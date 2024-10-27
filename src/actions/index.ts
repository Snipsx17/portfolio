import { sendEmail } from '@utils/sendEmail';
import { validateCaptcha } from '@utils/validateCaptcha';
import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  sendForm: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      telephone: z.string(),
      subject: z.string(),
      message: z.string(),
      recaptchaToken: z.string(),
    }),
    handler: async ({
      name,
      email,
      telephone,
      subject,
      message,
      recaptchaToken,
    }) => {
      const captchaValidation = await validateCaptcha(recaptchaToken);

      if (!captchaValidation.success || captchaValidation.score <= 0.5) {
        console.error('Failed to verify reCAPTCHA score:', captchaValidation);
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Failed to verify reCAPTCHA',
        });
      }

      try {
        const emailData = {
          name,
          email,
          telephone,
          subject,
          message,
          recipientEmail: import.meta.env.RECIPIENT_EMAIL,
        };
        await sendEmail(emailData);
      } catch (error) {
        console.error('Error sending email:', error);
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Failed to send email',
        });
      }
    },
  }),
};
