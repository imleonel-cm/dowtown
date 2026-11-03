import { defineConfig } from 'astro/config';

const isPreview = process.env.GITHUB_PAGES_PREVIEW === 'true';
const previewBase = '/dowtown';
const deploymentBase = isPreview ? previewBase : '';

export default defineConfig({
  site: isPreview
    ? 'https://imleonel-cm.github.io'
    : 'https://downtownescrow.net',

  ...(isPreview ? { base: `${previewBase}/` } : {}),

  output: 'static',
  trailingSlash: 'always',

  redirects: {
    '/services': {
      status: 302,
      destination: `${deploymentBase}/#services`,
    },
    '/es/servicios': {
      status: 302,
      destination: `${deploymentBase}/es/#services`,
    },
  },
});
