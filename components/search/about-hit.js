import Link from 'next/link';
import { Highlight } from 'react-instantsearch';

export default function AboutHit({ hit }) {
  return (
    <>
      <Link href={`/over/${hit.slug}`} onClick={() => sessionStorage.clear()} className='group'>
        <article className='flex flex-col h-full bg-gray-100 rounded-cl'>
          <div className='shadow-card rounded-cl h-full p-4'>
            <div className='max-w-[690px]'>
              <h2 className='heading-2xl-semibold mb-4 group-hover:text-green-300 transition-all duration-300'>
                <Highlight
                  attribute='pageTitle'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-300 bg-green-300/20',
                  }}
                />
              </h2>
              <p className='line-clamp-5 p-base'>
                <Highlight
                  attribute='content'
                  hit={hit}
                  classNames={{
                    highlighted: 'text-green-300 bg-green-300/20',
                  }}
                />
              </p>
            </div>
          </div>
        </article>
        <div className='hidden sm:block absolute -z-10  gradient-600 h-[20px] -translate-y-[20px] group-hover:-translate-y-[10px] w-full rounded-b-cl transition-all duration-300'></div>
      </Link>
    </>
  );
}
