import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.fossilizedbits.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    // Shiki with the css-variables theme: token colors come from the site palette in global.css.
    // Untagged ``` blocks (the formulas) render as plaintext with no token colors.
    shikiConfig: { theme: "css-variables" },
  },
  vite: {
    // File-change events don't reach the container machine through the shared folder, so poll.
    server: { watch: { usePolling: true, interval: 300 } },
  },
});
