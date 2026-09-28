// The law article an instrument relies on, from the free-text citeertitel and
// artikel fields ("Omgevingswet" + "5.21", or "Artikel 6:217", or "nvt").

const clean = (value) => (typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '');

const isUsable = (value) =>
  value !== '' && !/^n\.?v\.?t\.?$/i.test(value) && !/^https?:/i.test(value);

export function lawArticleName({ citeertitel, artikel }) {
  const law = clean(citeertitel);
  if (!isUsable(law)) return null;
  const article = clean(artikel);
  if (!isUsable(article)) return law;
  return `${law}, ${/^\d/.test(article) ? `artikel ${article}` : article}`;
}
