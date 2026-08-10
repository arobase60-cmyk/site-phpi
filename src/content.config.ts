import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const architecture = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/architecture",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    hero: z.string().optional(),
  }),
});

const historique = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/historique",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    date: z.string(),
    hero: z.string().optional(),
  }),
});


const fonctionnement = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/fonctionnement",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});


const essais = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/essais",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
    hero: z.string().optional(),
  }),
  
});
export const collections = {
  architecture,
  historique,
essais,
};