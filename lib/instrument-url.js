// Page URL for an instrument search hit (Algolia record).
//
// Records written before productChainSlug existed store the product chain as
// its display name ("Biomassa en voedsel") and, when they came from the
// publish webhook, the theme as its display name too. Lower-casing those gave
// URLs like /biomassa en voedsel/... that 404. Prefer the indexed slugs and
// derive one from the name only for records that predate them.
function toSlug(value) {
  return typeof value === 'string' && value.trim()
    ? value.trim().toLowerCase().replace(/\s+/g, '-')
    : null;
}

export function instrumentUrlFor(hit) {
  const productChain = hit?.productChainSlug || toSlug(hit?.transitionAgenda);
  const thema = toSlug(hit?.thema);
  if (!productChain || !thema || !hit?.slug) return null;
  return `/${productChain}/${thema}/instrumenten/${hit.slug}`;
}
