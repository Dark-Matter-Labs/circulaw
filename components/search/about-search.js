'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure, useSearchBox, InstantSearch } from 'react-instantsearch';
import CustomStats from '../../components/search/stats';
import AboutHit from './about-hit';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

const indexName = 'aboutPage';

export default function AboutSearch() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <InstantSearch
      searchClient={algoliaClient}
      indexName={indexName}
      insights={true}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Configure hitsPerPage={10} />
      <VirtualSearchBox query={query} />
      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='mb-12'>
            <div className='mt-10 sm:ml-10'>
              <CustomStats index='Over CircuLaw' />
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
    </InstantSearch>
  );
}

function VirtualSearchBox(props) {
  const { refine } = useSearchBox(props);
  useEffect(() => {
    refine(props.query);
  }, [props.query, refine]);
  return null;
}
