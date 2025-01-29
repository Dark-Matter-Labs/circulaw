'use client';

import { Configure, Hits } from 'react-instantsearch';

import Pagination from '@/components/search/pagination';

import NewsHit from './news-hit';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import CustomStats from './stats';

export default function NewsSearch() {
  return (
    <>
      <Configure hitsPerPage={10} />
      <div className='global-margin flex min-h-[80vh] justify-center sm:w-full'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div>
            <div className='mt-6 sm:ml-12 sm:mt-10'>
              <CustomStats index='Nieuws' />
            </div>
            <Hits
              classNames={{
                root: 'border-none mt-4 sm:mt-10 ',
                list: 'sm:ml-10 flex flex-col mb-10',
                item: 'shadow-none px-0 pt-0',
              }}
              hitComponent={NewsHit}
            />
            <div className='mb-12 mt-6 flex w-full items-center justify-center'>
              <Pagination />
            </div>
          </div>
        </NoResultsBoundary>
      </div>
    </>
  );
}
