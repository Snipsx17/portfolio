interface captchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  score: number;
}

export const validateCaptcha = async (
  recaptchaToken: string
): Promise<captchaResponse> => {
  const secretKey = import.meta.env.RECAPTCHA_SECRET_KEY;
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  const googleResponse = await fetch(verificationUrl, { method: 'POST' });
  const captchaValidation: captchaResponse = await googleResponse.json();

  return captchaValidation;
};
