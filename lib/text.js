// Search engines show roughly the first 155-160 characters of a description.
export function toMetaDescription(text, maxLength = 160) {
  const clean = (text ?? '').replace(/\s+/g, ' ').trim();
  if (!clean) return undefined;
  if (clean.length <= maxLength) return clean;
  const cut = clean.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[\s,.;:·-]+$/, '')}…`;
}
