'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure, useSearchBox, InstantSearch } from 'react-instantsearch';
import NewsHit from './news-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';
const indexName = 'newsItems';

export default function NewsSearch() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);
  return (
    <InstantSearch
      searchClient={algoliaClient}
      indexName={indexName}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      insights={true}
    >
      <VirtualSearchBox query={query} />
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
    </InstantSearch>
  );
}

// move this to a component
function VirtualSearchBox(props) {
  const { refine } = useSearchBox(props);
  useEffect(() => {
    refine(props.query);
  }, [props.query, refine]);
  return null;
}
