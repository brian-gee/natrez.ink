import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { resolve } from "path"; // Import resolve from path

// https://astro.build/config
export default defineConfig({
  site: "https://natrez.ink",
  integrations: [mdx(), sitemap()],

  vite: {
    resolve: {
      alias: {
        '@fonts': resolve('./public/fonts/') // Ensure resolve works properly
      }
    }
  }
});
