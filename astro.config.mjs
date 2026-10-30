import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://downtownescrow.net',
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
