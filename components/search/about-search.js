'use client';
import algoliasearch from 'algoliasearch';
import { Hits, Configure, useSearchBox } from 'react-instantsearch';
import CustomStats from '../../components/search/stats';
import AboutHit from './about-hit';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

const indexName = 'aboutPage';

export default function AboutSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={indexName}
      insights={true}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      routing={{
        router: {
          cleanUrlOnDispose: true,
          createURL({ qsModule, location, routeState }) {
            const { origin, pathname, search } = location;
            const queryParameters = qsModule.parse(search.slice(1)) || {};
            if (routeState.query) {
              queryParameters.query = routeState.query;
            }

            let queryString = qsModule.stringify(queryParameters);

            if (queryString.length) {
              queryString = `?${queryString}`;
            }
            return `${origin}${pathname}${queryString}`;
          },
          parseURL({ location, qsModule }) {
            const { query = '' } = qsModule.parse(location.search.slice(1));
            return {
              query: decodeURIComponent(query),
            };
          },
          push(url) {
            if (url.split('?')[1]) {
              router.push(url);
            }
          },
          stateMapping: {
            stateToRoute(uiState) {
              const indexUiState = uiState[indexName] || {};
              return {
                query: indexUiState.query,
              };
            },
            routeToState(routeState) {
              return {
                indexName: {
                  query: routeState.query,
                },
              };
            },
          },
        },
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
    </InstantSearchNext>
  );
}

function VirtualSearchBox(props) {
  const { refine } = useSearchBox(props);
  useEffect(() => {
    refine(props.query);
  }, [props.query]);
  return null;
}
