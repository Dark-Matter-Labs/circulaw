// The four tabs of an EU law page. The overview lives at the law's own URL;
// each sub-tab has its own route so its content can be crawled and indexed.
export const EU_LAW_TABS = [
  { slug: 'overzicht', label: 'Overzicht' },
  {
    slug: 'verplichtingen-voor-europese-lidstaten',
    label: 'Verplichtingen voor Europese lidstaten',
    heading: 'Verplichting voor Europese lidstaten',
    type: 'euEuropeTab',
    field: 'europeContent',
  },
  {
    slug: 'relevantie-voor-regionale-en-lokale-overheden',
    label: 'Relevantie voor regionale en lokale overheden',
    heading: 'Relevantie voor regionale en lokale overheden',
    type: 'euLocalTab',
    field: 'localContent',
  },
  {
    slug: 'relevantie-voor-de-circulaire-economie',
    label: 'Relevantie voor de circulaire economie',
    heading: 'Relevantie voor de circulaire economie',
    type: 'euCircularEconomyTab',
    field: 'ceContent',
  },
];

export const EU_LAW_SUBTABS = EU_LAW_TABS.slice(1);

export function euLawTabHref(lawSlug, tabSlug) {
  const base = `/eu-wetgeving/${lawSlug}`;
  return tabSlug === 'overzicht' ? base : `${base}/${tabSlug}`;
}

export function findEuLawSubtab(tabSlug) {
  return EU_LAW_SUBTABS.find((tab) => tab.slug === tabSlug);
}
