import { defineCollection, z } from 'astro:content';

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    language: z.enum(['en', 'es']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    featuredImage: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().optional(),
    translationRef: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { resources };
