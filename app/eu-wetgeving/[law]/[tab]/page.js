import { notFound } from 'next/navigation';

import EULawHeader from '@/components/eu-law/eu-law-header';
import TabContent from '@/components/eu-law/tab-content';
import { EU_LAW_SUBTABS, euLawTabHref, findEuLawSubtab } from '@/lib/eu-law-tabs';
import {
  EU_LAW_METADATA_QUERY,
  EU_LAW_PATHS_QUERY,
  EU_LAW_SUBTAB_QUERY,
  LAW_SUMMARY_QUERY,
} from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import { toMetaDescription } from '@/lib/text';

async function fetchSubtab(law, tab) {
  return sanityFetch({
    query: EU_LAW_SUBTAB_QUERY,
    qParams: { law, type: tab.type },
    tags: [tab.type],
  });
}

// The circular economy text opens with the tab's own heading; skip it.
function tabExcerpt(tabDoc, tab) {
  const excerpt = tabDoc?.excerpt?.trim() ?? '';
  return excerpt.startsWith(tab.heading) ? excerpt.slice(tab.heading.length) : excerpt;
}

export async function generateMetadata(props, parent) {
  const { law, tab: tabSlug } = await props.params;
  const tab = findEuLawSubtab(tabSlug);
  if (!tab) return {};

  const [euLawMetaData, tabDoc] = await Promise.all([
    sanityFetch({ query: EU_LAW_METADATA_QUERY, qParams: { law }, tags: ['euLaw'] }),
    fetchSubtab(law, tab),
  ]);
  if (!euLawMetaData) return {};

  const previousImages = (await parent).openGraph?.images || [];
  const title = `${tab.label} - ${euLawMetaData.title} - CircuLaw`;
  const description =
    toMetaDescription(tabExcerpt(tabDoc, tab)) ||
    euLawMetaData.metaDescribe ||
    euLawMetaData.introText ||
    (await parent).openGraph?.description;

  return {
    title,
    description,
    alternates: { canonical: euLawTabHref(euLawMetaData.slug, tab.slug) },
    openGraph: { images: previousImages, title, description, type: 'website' },
  };
}

export async function generateStaticParams() {
  const laws = await sanityFetch({ query: EU_LAW_PATHS_QUERY, tags: ['euLaw'] });
  return laws.flatMap((law) => EU_LAW_SUBTABS.map((tab) => ({ law, tab: tab.slug })));
}

// Laws published after the last deploy are rendered on first request (and then
// cached) instead of 404ing until the next build; unknown slugs still notFound().
export const dynamicParams = true;

export default async function EULawTabPage(props) {
  const { law, tab: tabSlug } = await props.params;
  const tab = findEuLawSubtab(tabSlug);
  if (!tab) notFound();

  const [summaryData, tabDoc] = await Promise.all([
    sanityFetch({ query: LAW_SUMMARY_QUERY, qParams: { law }, tags: ['euLaw'] }),
    fetchSubtab(law, tab),
  ]);
  if (!summaryData) notFound();

  return (
    <>
      <EULawHeader summaryData={summaryData} activeTab={tab.slug} />
      <TabContent tab={tab} content={tabDoc?.[tab.field] ?? []} />
    </>
  );
}
