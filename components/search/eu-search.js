'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure } from 'react-instantsearch';
import EUHit from './eu-law-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import SearchHeader from './search-header';
import MobileHeaderSearch from './mobile-header';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

export default function EUSearch() {
  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={'euLaw'}
      routing={{
        router: {
          cleanUrlOnDispose: false,
        },
      }}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      insights={true}
    >
      <Configure hitsPerPage={12} />
      <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          {/* Desktop */}
          <SearchHeader index='euLaw' />
          {/* Mobile */}
          <MobileHeaderSearch index='euLaw' />
        </div>
      </div>

      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div>
            <div className='sm:ml-12 sm:mt-10 mt-6'>
              <CustomStats />
            </div>
            <Hits
              classNames={{
                root: 'border-none mt-4 sm:mt-10 ',
                list: 'sm:ml-10 flex flex-col',
                item: 'shadow-none px-0 pt-0 mb-10',
              }}
              hitComponent={EUHit}
            />
            <div className='w-full flex items-center justify-center mb-12 mt-6'>
              <Pagination />
            </div>
          </div>
        </NoResultsBoundary>
      </div>
    </InstantSearchNext>
  );
}
