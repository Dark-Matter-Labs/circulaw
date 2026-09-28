import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/headers';
import ModelTextBody from '@/components/modeltext/model-text-body';
import ModelTextStructuredData from '@/components/structured-data/model-text';
import { MODEL_TEXT_PAGE_QUERY, MODEL_TEXT_PATHS_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';
import { modelTextPath } from '@/lib/site-paths';
import { toMetaDescription } from '@/lib/text';
import { IconArrowLeft } from '@tabler/icons-react';

const fetchModelText = (slug) =>
  sanityFetch({
    query: MODEL_TEXT_PAGE_QUERY,
    qParams: { slug },
    tags: ['modelText', 'pillar', 'instrument'],
  });

export async function generateMetadata(props, parent) {
  const { productChain, slug } = await props.params;
  if (productChain !== 'bouw') return {};
  const modelText = await fetchModelText(slug);
  if (!modelText) return {};

  const previousImages = (await parent).openGraph?.images || [];
  const title = `${modelText.title} - Modeltekst omgevingsplan - CircuLaw`;
  const description =
    toMetaDescription(modelText.descriptionPT) || toMetaDescription(modelText.modelTextPT);
  return {
    title,
    description,
    alternates: { canonical: modelTextPath(modelText.slug) },
    openGraph: { images: previousImages, title, description, type: 'website' },
  };
}

export async function generateStaticParams() {
  const slugs = await sanityFetch({ query: MODEL_TEXT_PATHS_QUERY, tags: ['modelText'] });
  return slugs.map((slug) => ({ productChain: 'bouw', slug }));
}

// Model texts published after the last deploy are rendered on first request.
export const dynamicParams = true;

export default async function ModelTextPage(props) {
  const { productChain, slug } = await props.params;
  if (productChain !== 'bouw') notFound();
  const modelText = await fetchModelText(slug);
  if (!modelText) notFound();

  const overviewHref = modelText.pillar
    ? `/bouw/planregels/modelteksten?pillar=${modelText.pillar}`
    : '/bouw/planregels/modelteksten';

  return (
    <>
      <ModelTextStructuredData modelText={modelText} />
      <Header title={modelText.title} bgColor='bg-green-500' imageURL='/big-decoration.png' />
      <div className='global-margin my-10 sm:my-16'>
        <div className='flex max-w-3xl flex-col'>
          <Link
            href={overviewHref}
            className='hover:link-interaction p-base-semibold group mb-8 flex items-center text-green-500 underline'
          >
            <div className='mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-green-500 bg-transparent text-green-500 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-500 focus:bg-green-200 focus:ring-2 focus:ring-white focus:outline-hidden active:bg-green-400'>
              <IconArrowLeft className='inline-block h-6 w-6' aria-hidden='true' />
            </div>
            <span>
              Alle modelteksten{modelText.pillarTitle ? `: ${modelText.pillarTitle}` : ''}
            </span>
          </Link>
          {modelText.pillarTitle && (
            <div className='p-2xs-semibold rounded-cl mb-6 max-w-min border border-green-400 px-2 py-1 text-nowrap text-green-400'>
              {modelText.pillarTitle}
            </div>
          )}
          <ModelTextBody modelText={modelText} />
        </div>
      </div>
    </>
  );
}
