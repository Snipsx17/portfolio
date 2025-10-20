import { sendEmail } from '@utils/sendEmail';
import { validateCaptcha } from '@utils/validateCaptcha';
import { ActionError, defineAction } from 'astro:actions';
import { z } from 'zod';
import { RECIPIENT_EMAIL } from 'astro:env/server';

const inputSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
  recaptchaToken: z.string().min(1),
});

export const sendFormAction = defineAction({
  input: inputSchema,
  handler: async (input, _context) => {
    const { name, email, telephone, subject, message, recaptchaToken } = input;

    const captchaValidation = await validateCaptcha(recaptchaToken);

    if (!captchaValidation.success || captchaValidation.score <= 0.5) {
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
        recipientEmail: [RECIPIENT_EMAIL],
      };

      await sendEmail(emailData);

      return { success: true };
    } catch (error) {
      throw new ActionError({
        code: 'BAD_REQUEST',
        message: 'Failed to send email',
      });
    }
  },
});
