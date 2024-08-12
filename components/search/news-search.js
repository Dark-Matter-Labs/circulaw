'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure } from 'react-instantsearch';
import NewsHit from './news-hit';
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

export default function NewsSearch() {
  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={'newsItems'}
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
      <Configure hitsPerPage={10} />
      <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          {/* Desktop */}
          <SearchHeader index='news' />
          {/* Mobile */}
          <MobileHeaderSearch index='news' />
        </div>
      </div>

      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div>
            <div className='sm:ml-12 sm:mt-10'>
              <CustomStats />
            </div>
            <Hits
              classNames={{
                root: 'border-none mt-4 sm:mt-10 ',
                list: 'sm:ml-10 grid grid-cols-3 gap-3',
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
    </InstantSearchNext>
  );
}
