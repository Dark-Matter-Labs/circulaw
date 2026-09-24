import { Iframe } from 'sanity-plugin-iframe-pane';

// Site that renders the preview, per Studio location. The Studio embedded in
// the site (www.circulaw.nl/studio) is same-origin; the hosted Studio
// (circulaw.sanity.studio) and local dev point at the matching site.
function previewOrigin() {
  switch (window.location.origin) {
    case 'http://localhost:3333':
      return 'http://localhost:3000';
    case 'https://circulaw-staging-studio.vercel.app':
      return 'https://circulaw-staging.vercel.app';
    case 'https://www.circulaw.nl':
    case 'http://localhost:3000':
      return 'same-origin';
    default:
      return 'https://www.circulaw.nl';
  }
}

// The Studio creates a short-lived secret, /api/draft-mode/enable checks it
// and turns on draft mode, then /api/draft-mode/resolve finds the page for
// this document and shows it with unpublished changes.
const previewPane = (S) =>
  S.view
    .component(Iframe)
    .options({
      url: {
        origin: previewOrigin(),
        preview: (doc) =>
          doc?._id ? `/api/draft-mode/resolve?id=${encodeURIComponent(doc._id)}` : undefined,
        draftMode: '/api/draft-mode/enable',
      },
      reload: { button: true },
    })
    .title('Preview');

const PREVIEW_TYPES = new Set([
  'instrument',
  'aboutPage',
  'thema',
  'simpleThema',
  'newsItem',
  'euLaw',
  'transitionAgenda',
]);

export const defaultDocumentNode = (S, { schemaType }) =>
  PREVIEW_TYPES.has(schemaType)
    ? S.document().views([S.view.form(), previewPane(S)])
    : S.document().views([S.view.form()]);
