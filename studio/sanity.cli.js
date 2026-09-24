import { defineCliConfig } from 'sanity/cli';

const dataset = process.env.SANITY_STUDIO_DATASET;

export default defineCliConfig({
  api: {
    projectId: '2vfoxb3h',
    dataset: dataset,
  },
  // The hosted studio at circulaw.sanity.studio; `sanity deploy` only targets production.
  deployment: {
    appId: '05ce4e06225294bf0715745b',
  },
  // `sanity deploy` loads the studio config in a Node worker that bundles
  // every dependency as ESM. lexorank (used by @sanity/orderable-document-list)
  // is CommonJS-only, so schema extraction failed with "exports is not
  // defined". Leaving it external lets Node load it natively. This only
  // affects server-side loading; the browser bundle is unchanged.
  vite: (config) => ({
    ...config,
    ssr: {
      ...config.ssr,
      external: [...(config.ssr?.external ?? []), 'lexorank'],
    },
  }),
});
