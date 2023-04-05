import Iframe from 'sanity-plugin-iframe-pane';

// this function will not work on individual branches
function getPreviewUrl(doc) {
  if (window.location.origin === 'http://localhost:3333') {
    return doc?.slug?.current
      ? `http://localhost:3000/api/preview?slug=${encodeURIComponent(doc.slug.current)}`
      : 'http://localhost:3000/api/preview';
  } else if (window.location.origin === 'https://circulaw-staging-studio.vercel.app') {
    return doc?.slug?.current
      ? `https://circulaw-staging.vercel.app/api/preview?slug=${encodeURIComponent(doc.slug.current)}`
      : `https://circulaw-staging.vercel.app/api/preview`;
  } else window.location.origin === 'https://circulaw.sanity.studio';
  {
    return doc?.slug?.current
      ? `https://www.circulaw.nl/api/preview?slug=${encodeURIComponent(doc.slug.current)}`
      : `https://www.circulaw.nl/api/preview`;
  }
}

export const defaultDocumentNode = (S, { schemaType }) => {
  switch (schemaType) {
    case 'measure':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);

    case 'aboutPage':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
