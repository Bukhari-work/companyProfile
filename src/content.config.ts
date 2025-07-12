// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const people = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/people" }),
  schema: z.object({
    title: z.string(),
    role: z.enum(["Advisor", "Leadership", "Expert", "Member"]),
    description: z.string().optional(),
    responsibility: z.string().optional(),
    expertise: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    social: z
      .array(
        z.object({
          platform: z.string(),
          icon: z.string(),
          href: z.string().url(),
        }),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Project collection schema
const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/news" }),
  schema: z.object({
    title: z.string(),
    author: reference("people"),
    description: z.string().optional(),
    subtitle: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    date: z.coerce.date().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    relatedPosts: z.array(reference("blogs")),
    draft: z.boolean().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { people, news };
