import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
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
    image: z.string(),
    git: z.string(),
    url: z.string(),
    stack: z.string(),
  }),
});

const studiesCollections = defineCollection({
  type: 'content',
  schema: z.object({
    education: z.string(),
    school: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  blog,
  experiences: experiencesCollections,
  projects: projectCollections,
  studies: studiesCollections,
};
