import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const canonicalSitemapPaths = new Set([
  '/',
  '/experience/',
  '/projects/',
  '/awards/',
  '/about/',
  '/cv/',
]);

export default defineConfig({
  site: 'https://rogerbaiges.github.io',
  integrations: [
    sitemap({ filter: (page) => canonicalSitemapPaths.has(new URL(page).pathname) }),
  ],
  output: 'static',
});
