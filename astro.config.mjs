
import { defineConfig } from 'astro/config';

const isPreview = process.env.GITHUB_PAGES_PREVIEW === 'true';

export default defineConfig({
  site: isPreview
    ? 'https://imleonel-cm.github.io'
    : 'https://downtownescrow.net',

  ...(isPreview ? { base: '/downtown' } : {}),

  output: 'static',
  trailingSlash: 'always',

  redirects: {
    '/services': {
      status: 302,
      destination: '/#services'
    },
    '/es/servicios': {
      status: 302,
      destination: '/es/#services'
    }
  }
});
