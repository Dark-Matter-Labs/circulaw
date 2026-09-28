// The single definition of the four tabs of an EU law page. The overview lives
// at the law's own URL; each sub-tab has its own route so its content can be
// crawled and indexed. A sub-tab's content is the `field` of the Sanity
// document of `type`: titled sections when `sections`, Portable Text otherwise.
// next.config.js repeats the sub-tab slugs in a redirect (a test keeps it in step).
import { euLawPath, euLawTabPath } from './site-paths.js';

export const EU_LAW_TABS = [
  { slug: 'overzicht', label: 'Overzicht' },
  {
    slug: 'verplichtingen-voor-europese-lidstaten',
    label: 'Verplichtingen voor Europese lidstaten',
    heading: 'Verplichting voor Europese lidstaten',
    type: 'euEuropeTab',
    field: 'europeContent',
    sections: true,
  },
  {
    slug: 'relevantie-voor-regionale-en-lokale-overheden',
    label: 'Relevantie voor regionale en lokale overheden',
    heading: 'Relevantie voor regionale en lokale overheden',
    type: 'euLocalTab',
    field: 'localContent',
    sections: true,
  },
  {
    slug: 'relevantie-voor-de-circulaire-economie',
    label: 'Relevantie voor de circulaire economie',
    heading: 'Relevantie voor de circulaire economie',
    type: 'euCircularEconomyTab',
    field: 'ceContent',
    sections: false,
  },
];

export const EU_LAW_SUBTABS = EU_LAW_TABS.slice(1);

export function euLawTabHref(lawSlug, tabSlug) {
  return tabSlug === 'overzicht' ? euLawPath(lawSlug) : euLawTabPath(lawSlug, tabSlug);
}

export function findEuLawSubtab(tabSlug) {
  return EU_LAW_SUBTABS.find((tab) => tab.slug === tabSlug);
}

export function subtabSlugForType(type) {
  return EU_LAW_SUBTABS.find((tab) => tab.type === type)?.slug;
}
