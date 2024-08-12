'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure } from 'react-instantsearch';
import CustomStats from '../../components/search/stats';
import AboutHit from './about-hit';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import MobileHeaderSearch from './mobile-header';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import SearchHeader from './search-header';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

export default function AboutSearch() {
  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={'aboutPage'}
      routing={{
        router: {
          cleanUrlOnDispose: false,
        },
      }}
      insights={true}
    >
      <Configure hitsPerPage={10} />
      <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          {/* DESKTOP */}
          <SearchHeader index='aboutPage'/>

          {/* MOBILE */}
          <MobileHeaderSearch index='aboutPage' />
        </div>
      </div>

      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='mb-12'>
            <div className='mt-10 sm:ml-10'>
              <CustomStats />
            </div>

            <Hits
              classNames={{
                root: 'border-none mt-10',
                list: 'sm:ml-10',
                item: 'px-0 pb-10 pt-0 relative',
              }}
              hitComponent={AboutHit}
            />
          </div>
        </NoResultsBoundary>
      </div>
    </InstantSearchNext>
  );
}
