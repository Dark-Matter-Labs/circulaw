// Maps a Sanity document to the page that shows it, for the Studio's Preview
// tab. Returns null when the document can't be shown yet (no slug, or a
// missing theme / product chain), so the preview can say what to fill in.
const segment = (value) => encodeURIComponent(value);

export function previewPathFor(doc) {
  if (!doc?.slug) return null;
  const slug = segment(doc.slug);

  switch (doc._type) {
    case 'instrument':
      if (!doc.productChain || !doc.thema) return null;
      return `/${segment(doc.productChain)}/${segment(doc.thema)}/instrumenten/${slug}`;
    case 'thema':
    case 'simpleThema':
      if (!doc.productChain) return null;
      return `/${segment(doc.productChain)}/${slug}`;
    case 'transitionAgenda':
      return `/${slug}`;
    case 'aboutPage':
      return `/over/${slug}`;
    case 'newsItem':
      // Items without their own page only appear as a card on the overview.
      return doc.hasPage ? `/nieuws/${slug}` : '/nieuws';
    case 'euLaw':
      return `/eu-wetgeving/${slug}`;
    default:
      return null;
  }
}

// Studio passes a draft or release id; the drafts perspective looks
// documents up by their published id.
export function publishedId(id) {
  return id.replace(/^drafts\./, '').replace(/^versions\.[^.]+\./, '');
}
