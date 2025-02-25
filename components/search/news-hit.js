import { Highlight } from 'react-instantsearch';

import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';
import { IconExternalLink } from '@tabler/icons-react';

import Tag from '../tag';

export default function NewsHit({ hit }) {
  const event = new Date(hit.newsDate);
  const day = {
    day: 'numeric',
  };
  const month = {
    month: 'long',
  };
  const year = {
    year: 'numeric',
  };

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  if (hit.newsOrAgenda === false) {
    return (
      <>
        {hit.slug ? (
          <Link href={`/nieuws/${hit.slug}`}>
            <div className='mb-10 flex flex-col sm:flex-row'>
              {hit.newsImage && (
                <div className='relative mb-6 mr-6 h-[130px] w-[150px] overflow-hidden rounded-cl sm:mb-0'>
                  <Image
                    className='w-full object-cover'
                    src={urlFor(hit.newsImage).auto('format').fit('max').url()}
                    alt='No alt-tag provided' // TODO: fix this
                    fill
                    sizes='
             (max-width: 768px) 95vw,
             (max-width: 1200px) 60vw,
             40vw'
                  />
                </div>
              )}
              {!hit.newsImage && hit.newsOrAgenda === false && (
                <div className='gradient-700 p-base-semibold mb-6 mr-6 flex h-[130px] w-[150px] items-center justify-center rounded-cl sm:mb-0'></div>
              )}
              <div className='flex flex-col'>
                <div className='mb-6 flex flex-row'>
                  <Tag classes='bg-cl-black text-white shrink mr-2'>{hit.category}</Tag>
                  {hit.newsDate && (
                    <Tag classes='bg-cl-black text-white shrink mr-2'>
                      {' '}
                      {event.toLocaleDateString('nl-NL', options)}
                    </Tag>
                  )}
                </div>
                <h2 className='heading-xl-semibold'>
                  <Highlight
                    attribute='title'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='p-xs line-clamp-2 max-w-[521px]'>
                  <Highlight
                    attribute='newsText'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </Link>
        ) : (
          <Link href={hit.linkUrl} target={hit.linkUrl.includes('circulaw.nl') ? '' : '_blank'}>
            <div className='mb-10 flex flex-col sm:flex-row'>
              {hit.newsImage && (
                <div className='relative mb-6 mr-6 h-[130px] w-[150px] overflow-hidden rounded-cl sm:mb-0'>
                  <Image
                    className='w-full object-cover'
                    src={urlFor(hit.newsImage).auto('format').fit('max').url()}
                    alt='No alt-tag provided' // TODO: fix this
                    fill
                    sizes='
             (max-width: 768px) 95vw,
             (max-width: 1200px) 60vw,
             40vw'
                  />
                </div>
              )}
              {!hit.newsImage && hit.newsOrAgenda === false && (
                <div className='gradient-700 p-base-semibold mb-6 mr-6 flex h-[130px] w-[150px] items-center justify-center rounded-cl sm:mb-0'></div>
              )}
              <div className='flex flex-col'>
                <div className='mb-6 flex flex-row'>
                  <Tag classes='bg-cl-black text-white shrink mr-2'>{hit.category}</Tag>
                  {hit.newsDate && (
                    <Tag classes='bg-cl-black text-white shrink mr-2'>
                      {' '}
                      {event.toLocaleDateString('nl-NL', options)}
                    </Tag>
                  )}
                  {!hit.linkUrl.includes('circulaw.nl') && (
                    <Tag classes='border border-green-300 text-green-300 shrink mr-2'>
                      <IconExternalLink className='h-4 w-4' />
                    </Tag>
                  )}
                </div>
                <h2 className='heading-xl-semibold'>
                  <Highlight
                    attribute='title'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </h2>
                <p className='p-xs line-clamp-2 max-w-[521px]'>
                  <Highlight
                    attribute='newsText'
                    hit={hit}
                    classNames={{
                      highlighted: 'text-green-300 bg-green-300/20',
                    }}
                  />
                </p>
              </div>
            </div>
          </Link>
        )}
      </>
    );
  } else {
    return (
      <Link href={hit?.link || ''} target='_blank' className='p-base text-cl-black'>
        <div className='mb-10 flex flex-col sm:flex-row'>
          <div className='gradient-700 mb-6 mr-6 flex h-[130px] w-[150px] flex-row items-center justify-center rounded-cl sm:mb-0'>
            <div className='heading-4xl-semibold mr-2 text-white'>
              {event.toLocaleDateString('nl-NL', day)}
            </div>
            <div>
              <div className='p-base-semibold text-white'>
                {event.toLocaleDateString('nl-NL', month)}
              </div>
              <div className='p-base-semibold text-white'>
                {event.toLocaleDateString('nl-NL', year)}
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='mb-6 flex flex-row'>
              <Tag classes='bg-cl-black text-white shrink mr-2'>agenda</Tag>
              {hit.link && (
                <Tag classes='border border-green-300 text-green-300 shrink mr-2'>
                  <IconExternalLink className='h-4 w-4' />
                </Tag>
              )}
            </div>
            <h2 className='heading-xl-semibold'>
              <Highlight
                attribute='title'
                hit={hit}
                classNames={{
                  highlighted: 'text-green-300 bg-green-300/20',
                }}
              />
            </h2>
            Lees meer
          </div>
        </div>
      </Link>
    );
  }
}
