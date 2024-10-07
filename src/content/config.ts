import { z, defineCollection } from 'astro:content';

const experiencesCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    address: z.string(),
    date: z.string(),
    description: z.string().array(),
    stack: z.string(),
  }),
});

const projectCollections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    git: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  experiences: experiencesCollections,
  projects: projectCollections,
};
