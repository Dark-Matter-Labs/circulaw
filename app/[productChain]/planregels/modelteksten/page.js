import Link from 'next/link';
import { notFound } from 'next/navigation';

import Header from '@/components/headers';
import LinkIcon from '@/components/link-icon';
import PopUp from '@/components/modeltext/popup';
import { sanityFetch } from '@/lib/sanity';
import { IconArrowLeft } from '@tabler/icons-react';

const PILLARS_QUERY = `
 *[_type == 'pillar'] | order(orderRank) {
  ...,
  'slug':slug.current,
 }
`;

const MODELTEXT_QUERY = `
  *[_type == 'modelText'] {
  ...,
  'slug': slug.current,
  'pillar': pillar->slug.current,
  'modelTextPT': pt::text(modelText),
  'descriptionPT': pt::text(description),
  'linkedInstruments': linkedInstruments[]->
    {titel, 'slug': slug.current, 'transitionAgenda':transitionAgenda->slug.current, 'thema': thema->slug.current , }
  } 
`;

export default async function ModelTextPage({ params }) {
  const pillars = await sanityFetch({ query: PILLARS_QUERY, tags: ['pillar'] });
  const modelTexts = await sanityFetch({ query: MODELTEXT_QUERY, tags: ['modelText'] });
  if (params.productChain === 'bouw') {
    return (
      <>
        <Header title='Aan de slag met het omgevingsplan' imageURL='/modeltext-header.png' />
        <div className='global-margin my-10 flex h-max flex-col bg-white sm:my-16'>
          <div className='flex max-w-[760px] flex-col'>
            <p className='p-base pb-6'>
              We hebben de planregels voor het omgevingsplan ingedeeld op basis van 6 pijlers. Deze
              pijlers sluiten aan bij het{' '}
              <Link
                href='https://toekomstbestendigbouwen.nl/'
                className='link-interaction'
                target='_blank'
              >
                Convenant Toekomstig Bestendig Bouwen
                <LinkIcon />
              </Link>
              . En beslaan meer thema&apos;s dan alleen circulaire.
            </p>
            <Link
              href='/bouw/planregels'
              className='hover:link-interaction p-base-semibold group mb-6 flex items-center text-green-500 underline'
            >
              <div className='mr-2 flex h-12 w-12 items-center justify-center self-end rounded-full border-2 border-green-500 bg-transparent text-green-500 focus:bg-green-200 focus:outline-none focus:ring-2 focus:ring-white active:bg-green-400 group-hover:border-green-300 group-hover:bg-green-300 group-hover:text-green-500'>
                <IconArrowLeft className='inline-block h-6 w-6' aria-hidden='true' />
              </div>
              <span className='max-w-xs'>
                Borgen circulair bouwen in omgevingsvisie, - programma, en - plan
              </span>
            </Link>
          </div>
          <PopUp modelTexts={modelTexts} pillars={pillars} />
        </div>
      </>
    );
  } else return notFound();
}
