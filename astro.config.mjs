// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://castworks.co',
  integrations: [
    sitemap({
      // Exclude internal-only pages from the sitemap.
      filter: (page) =>
        !page.includes('/og') && !page.includes('/linkedin-banner'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
