import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    language: z.enum(['en', 'es']),
    pubDate: z.coerce.date().optional(),
    editorialOrder: z.number().optional(),
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
