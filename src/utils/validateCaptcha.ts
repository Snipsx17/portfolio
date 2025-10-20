import { RECAPTCHA_SECRET_KEY } from 'astro:env/server';

interface captchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
}

export const validateCaptcha = async (
  recaptchaToken: string
): Promise<captchaResponse> => {
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

  const googleResponse = await fetch(verificationUrl, { method: 'POST' });
  const captchaValidation: captchaResponse = await googleResponse.json();

  return captchaValidation;
};
