'use client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import algoliasearch from 'algoliasearch/lite';
import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { useSearchParams } from 'next/navigation';
import NoResultsBoundary from '../no-results-boundary';
import NoResults from '../no-results';
import CustomStats from '../stats';
import { Hits } from 'react-instantsearch';
import AboutHit from '../about-hit';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const searchClient = algoliasearch(api_id, api_key);

export default function AggSearch() {
  const searchParams = useSearchParams();

  const [indexName, setIndexName] = useState(searchParams.get('indexName'));
  const [query, setQuery] = useState(searchParams.get('query'));

 

  useEffect(() => {
    setIndexName(searchParams.get('indexName'));
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <InstantSearchNext
      searchClient={searchClient}
      index={indexName}
      routing={{
        router: {
          cleanUrlOnDispose: true,
          createURL({ qsModule, location, routeState }) {
            const { origin, pathname, hash, search } = location;
            // grab current query string and convert to object
            const queryParameters = qsModule.parse(search.slice(1)) || {};

            const indexState = {}

            indexState[queryParameters.indexName] = {query: queryParameters.query}
            

            console.log(routeState)

            let queryString = qsModule.stringify(indexState);
            if (queryString.length) {
              queryString = `?${queryString}`;
            }
            console.log(`${origin}${pathname}${queryString}${hash}`)
            return `${origin}${pathname}${queryString}${hash}`;
          },
          // this is working and structureing the data as it should be... not sure where it is retruning it to though
          parseURL({ location, qsModule }) {
            const { indexName = '', query = '' } = qsModule.parse(location.search.slice(1));
            const data = {
              [indexName]: {
                query: query,
              },
            };

            return data;
          },
          stateMapping: {
            stateToRoute(uiState) {
              const indexUiState = uiState[indexName];
              console.log(uiState, 'state to route');
              return {
                q: indexUiState.query,
                categories: indexUiState.menu?.categories,
                brand: indexUiState.refinementList?.brand,
                page: indexUiState.page,
              };
            },
            routeToState(routeState) {
              console.log(routeState, 'route to state');
              return {
                [indexName]: {
                  query: routeState.query,
                },
              };
            },
          },
        },
      }}
    >
      <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          <SearchBar query={query} indexName={indexName} />
        </div>
      </div>
      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='mb-12'>
            <div className='mt-10 sm:ml-10'>
              <CustomStats index='Over CircuLaw' />
            </div>
            {indexName === 'aboutPage' && (
              <Hits
                classNames={{
                  root: 'border-none mt-10',
                  list: 'sm:ml-10',
                  item: 'px-0 pb-10 pt-0 relative',
                }}
                hitComponent={AboutHit}
              />
            )}
          </div>
        </NoResultsBoundary>
      </div>
    </InstantSearchNext>
  );
}
