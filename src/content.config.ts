import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    profession: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
