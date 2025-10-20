// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      // Variables privadas del servidor
      SENDER_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
      GOOGLE_PASSWORD: envField.string({
        context: 'server',
        access: 'secret',
      }),
      RECAPTCHA_SECRET_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),

      RECAPTCHA_SITE_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      MAILTRAP_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      TEMPLATE_UUID: envField.string({
        context: 'server',
        access: 'secret',
      }),
      RECIPIENT_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
  output: 'server',
  integrations: [tailwind(), icon(), react()],

  adapter: node({
    mode: 'standalone',
  }),
});
