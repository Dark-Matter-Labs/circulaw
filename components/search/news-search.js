'use client';
import { Hits, Configure } from 'react-instantsearch';
import NewsHit from './news-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';

export default function NewsSearch() {
  return (
    <>
      <Configure hitsPerPage={10} />
      <div className='global-margin flex min-h-[80vh]'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div>
            <div className='sm:ml-12 sm:mt-10 mt-6'>
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
            <div className='w-full flex items-center justify-center mb-12 mt-6'>
              <Pagination />
            </div>
          </div>
        </NoResultsBoundary>
      </div>
    </>
  );
}
