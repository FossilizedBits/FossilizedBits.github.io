import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fossilizedbits.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    // Formula blocks are plain text, so skip syntax highlighting and style them in CSS.
    syntaxHighlight: false,
  },
  vite: {
    // File-change events don't reach the container machine through the shared folder, so poll.
    server: { watch: { usePolling: true, interval: 300 } },
  },
});
