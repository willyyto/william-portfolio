import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.williamto.com',
    integrations: [tailwind(), compress(),
        sitemap({
          changefreq: "weekly",
          priority: 0.7,
          lastmod: new Date(),
          entryLimit: 10000,
        }),
        robotsTxt()],
});
