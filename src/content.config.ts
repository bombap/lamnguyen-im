// import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const post = defineCollection({
  // Load Markdown and MDX files in the `src/content/post/` directory.
  // loader: glob({ base: "./src/content/post", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
  }),
});

export const collections = { post };