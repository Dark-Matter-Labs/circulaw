import { Highlight } from 'react-instantsearch';

import Link from 'next/link';

export default function AboutHit({ hit }) {
  return (
    <>
      <Link href={`/over/${hit.slug}`} onClick={() => sessionStorage.clear()} className='group'>
        <article className='flex h-full flex-col rounded-cl bg-gray-100'>
          <div className='h-full rounded-cl p-4 shadow-card'>
            <div className='max-w-[690px]'>
              <h2 className='heading-2xl-semibold mb-4 transition-all duration-300 group-hover:text-green-400'>
                <Highlight
                  attribute='pageTitle'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-400 bg-green-400/20',
                  }}
                />
              </h2>
              <p className='p-base line-clamp-5'>
                <Highlight
                  attribute='content'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-400 bg-green-400/20',
                  }}
                />
              </p>
            </div>
          </div>
        </article>
        <div className='gradient-600 absolute -z-10 hidden h-[20px] w-full -translate-y-[20px] rounded-b-cl transition-all duration-300 group-hover:-translate-y-[10px] sm:block'></div>
      </Link>
    </>
  );
}
