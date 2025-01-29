'use client';
import { Hits, Configure } from 'react-instantsearch';
import EUHit from './eu-law-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';

export default function EUSearch() {
  return (
    <>
      <Configure hitsPerPage={12} />
      <div className='global-margin flex min-h-[80vh] justify-center sm:w-full'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div>
            <div className='mt-6 sm:ml-12 sm:mt-10'>
              <CustomStats index='EU wetgeving' />
            </div>
            <Hits
              classNames={{
                root: 'border-none mt-4 sm:mt-10 ',
                list: 'sm:ml-10 flex flex-col',
                item: 'shadow-none px-0 pt-0 mb-10',
              }}
              hitComponent={EUHit}
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
