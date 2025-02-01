import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name should be at least 2 characters long.',
    })
    .max(30, {
      message: 'Name should not exceed 30 characters.',
    }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  telephone: z.string(),
  subject: z.string({ message: 'Subject is required.' }),
  message: z
    .string()
    .min(5, {
      message: 'Message must be at least 5 characters.',
    })
    .max(250, {
      message: 'Message must not be longer than 250 characters.',
    }),
});
