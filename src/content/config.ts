import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
		description: z.string(),
		coverImage: z.string(),
		lang: z.string().default('cs'),
		categories: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };