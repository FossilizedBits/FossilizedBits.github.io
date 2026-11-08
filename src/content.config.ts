import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { platforms, rocks } from "./lib/lithology";

// One Markdown file per app in src/content/apps/. The filename becomes the URL: /apps/<filename>/
const apps = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/apps" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string().optional(), // short label on the /apps/ cards, e.g. "Weather"
    summary: z.string(),
    order: z.number(),
    status: z.enum(["planned", "in-development", "testing", "released"]),
    platforms: z.array(z.enum(platforms)).min(1),
    // Optional: overrides the rock pattern, which otherwise comes from the platforms.
    lithology: z.enum(rocks).optional(),
    icon: z.string().optional(), // path under /public, e.g. /images/apps/bottoms-up/icon.png
    iconDark: z.string().optional(), // optional dark-mode variant of the icon
    appStoreId: z.string().optional(), // numeric ID; enables the store button and Smart App Banner
    testFlightUrl: z.string().url().optional(),
    price: z.string().optional(),
    version: z.string().optional(),
    requires: z.string().optional(),
    units: z.string().optional(),
    highlights: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          device: z.enum(["iphone", "ipad", "mac"]).default("iphone"),
        }),
      )
      .default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Add this block only once you've confirmed what the app collects.
    // It generates /apps/<slug>/privacy/.
    privacy: z
      .object({
        collects: z.array(z.string()).default([]),
        updated: z.coerce.date(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

// Stand-alone pages whose text lives in Markdown, e.g. src/content/pages/about.md.
// The page layout stays in src/pages/<name>.astro.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(), // the big heading on the page
    description: z.string(), // for search results and link previews
    // Contact page only. A blank email hides the email button.
    email: z.union([z.string().email(), z.literal(""), z.null()]).optional(),
    // Contact page only. One profile URL per line; the icon comes from the domain.
    social: z.array(z.string().url()).default([]),
  }),
});

export const collections = { apps, blog, pages };
