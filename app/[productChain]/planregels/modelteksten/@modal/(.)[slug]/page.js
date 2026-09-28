import { notFound } from 'next/navigation';

import ModelTextModal from '@/components/modeltext/model-text-modal';
import { MODEL_TEXT_PAGE_QUERY, MODEL_TEXT_PATHS_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export async function generateStaticParams() {
  const slugs = await sanityFetch({ query: MODEL_TEXT_PATHS_QUERY, tags: ['modelText'] });
  return slugs.map((slug) => ({ productChain: 'bouw', slug }));
}

// Soft navigation from the overview to a model text lands here instead of on
// ../[slug]/page.js: the overview stays and the model text opens as a popup.
export default async function ModelTextModalPage(props) {
  const { slug } = await props.params;
  const modelText = await sanityFetch({
    query: MODEL_TEXT_PAGE_QUERY,
    qParams: { slug },
    tags: ['modelText', 'pillar', 'instrument'],
  });
  // A card whose model text was unpublished since the overview was cached.
  if (!modelText) notFound();
  return <ModelTextModal modelText={modelText} />;
}
