'use client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import algoliasearch from 'algoliasearch/lite';
import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import NoResultsBoundary from '../no-results-boundary';
import NoResults from '../no-results';
import CustomStats from '../stats';
import { Hits, Index, useInstantSearch, useSearchBox } from 'react-instantsearch';
import AboutHit from '../about-hit';
import { InstrumentHit } from '../instrument-hit';
import EUHit from '../eu-law-hit';
import NewsHit from '../news-hit';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const searchClient = algoliasearch(api_id, api_key);

const indices = [
  { name: 'instruments', id: 0 },
  { name: 'euLaw', id: 1 },
  { name: 'aboutPage', id: 2 },
  { name: 'newsItems', id: 3 },
];

export default function AggSearch() {
  const searchParams = useSearchParams();

  const [tab, setTab] = useState(searchParams.get('tab'));
  const [query, setQuery] = useState(searchParams.get('query'));
  const router = useRouter();

  useEffect(() => {
    setTab(searchParams.get('tab'));
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <InstantSearchNext
      searchClient={searchClient}
      index='instruments'
      routing={{
        router: {
          cleanUrlOnDispose: true,
          // this takes in the url parameters and reformates them to a url that will work with algolia.
          createURL({ qsModule, location, routeState }) {
            console.log(routeState, '2 - receive routeState and use it to create url');
            const indexState = routeState[tab] || {};
            // console.log(indexState, '3 - get the state for the index')
            const { origin, pathname, search } = location;

            // grab current query string and convert to object
            const queryParameters = qsModule.parse(search.slice(1)) || {};
            // console.log(queryParameters, '4 - extract the query params from the url')

            if (Object.keys(indexState).length) {
              // console.log('5 - check that q params are being assigned to route state')
              // merge the search params with the current query params
              Object.assign(queryParameters, routeState);
            } else {
              // remove the search params
              delete queryParameters[tab];
            }
            // console.log(routeState, '6 - check route state is still correct')
            let queryString = qsModule.stringify(queryParameters);

            if (queryString.length) {
              queryString = `?${queryString}`;
            }
            return `${origin}${pathname}${queryString}`;
          },
          // this is working and structureing the data as it should be... not sure where it is retruning it to though
          parseURL({ location, qsModule }) {
            const { tab = '', query = '' } = qsModule.parse(location.search.slice(1));
            const routeState = {
              [tab]: {
                query: query,
              },
            };
            console.log(routeState, '1 - parse routeState from url');
            return routeState;
          },
          push(url) {
            // console.log(url, '7 - push a new url when there are query params')
            if (url.split('?')[1]) {
              router.push(url);
            }
          },
          stateMapping: {
            stateToRoute(uiState) {
              const indexUiState = uiState[tab] || {};

              // console.log(uiState, '8')
              return {
                query: indexUiState.query,
              };
            },
            routeToState(routeState) {
              return {
                [tab]: {
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
          <SearchBar tab={tab} query={query} />
        </div>
      </div>
      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='mb-12'>
            <div className='mt-10 sm:ml-10'>
              <CustomStats index={tab} />
            </div>
            {/* adding this here adds each index name to the route start object */}
            {indices.map((index, id) => (
              <>
                {index.name === tab && (
                  <Index key={id} indexName={index.name}>
                    {tab === 'aboutPage' && (
                      <Hits
                        classNames={{
                          root: 'border-none mt-10',
                          list: 'sm:ml-10',
                          item: 'px-0 pb-10 pt-0 relative',
                        }}
                        hitComponent={AboutHit}
                      />
                    )}
                    {tab === 'instruments' && (
                      <Hits
                        classNames={{
                          root: 'border-none mt-4 sm:mt-10',
                          list: 'sm:ml-10',
                          item: 'shadow-none px-0 pb-4 pt-0',
                        }}
                        hitComponent={InstrumentHit}
                      />
                    )}
                    {tab === 'news' && (
                      <Hits
                        classNames={{
                          root: 'border-none mt-4 sm:mt-10 ',
                          list: 'sm:ml-10 flex flex-col mb-10',
                          item: 'shadow-none px-0 pt-0',
                        }}
                        hitComponent={NewsHit}
                      />
                    )}
                    {tab === 'euLaw' && (
                      <Hits
                        classNames={{
                          root: 'border-none mt-4 sm:mt-10 ',
                          list: 'sm:ml-10 flex flex-col',
                          item: 'shadow-none px-0 pt-0 mb-10',
                        }}
                        hitComponent={EUHit}
                      />
                    )}
                  </Index>
                )}
              </>
            ))}
          </div>
        </NoResultsBoundary>
      </div>
    </InstantSearchNext>
  );
}

function SearchBar() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const query = searchParams.get('query');
  const { refine } = useSearchBox();
  const inputRef = useRef();
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const isSearchStalled = status === 'stalled';

  function setQueryStringParameter(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState(
      {},
      '',
      decodeURIComponent(`${window.location.pathname}?${params}`),
    );
  }

  function setQuery(newQuery) {
    setInputValue(newQuery);

    refine(newQuery);
  }

  return (
    <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
      <div className='w-full'>
        <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
          <div>
            <form
              action=''
              role='search'
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();

                if (inputRef.current) {
                  inputRef.current.blur();
                }
              }}
              onReset={(event) => {
                event.preventDefault();
                event.stopPropagation();

                setQuery('');

                if (inputRef.current) {
                  inputRef.current.focus();
                }
              }}
            >
              <input
                ref={inputRef}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                placeholder='Search for products'
                spellCheck={false}
                maxLength={512}
                type='search'
                value={inputValue}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                autoFocus
              />
              <button onClick={() => setQueryStringParameter('query', inputValue)} type='submit'>
                Submit
              </button>
              <button
                onClick={() => setQueryStringParameter('query', '')}
                type='reset'
                hidden={inputValue.length === 0 || isSearchStalled}
              >
                Reset
              </button>
              <span hidden={!isSearchStalled}>Searching…</span>
            </form>
          </div>

          <div className='mt-4 flex flex-row'>
            <>
              <button
                onClick={() => setQueryStringParameter('tab', 'all')}
                className={`${
                  tab === 'all' ? 'border-b-2 border-green-600' : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                All
              </button>
              <button
                onClick={() => setQueryStringParameter('tab', 'instruments')}
                className={`${
                  tab === 'instruments'
                    ? 'border-b-2 border-green-600'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Instrumenten
              </button>
              <button
                onClick={() => setQueryStringParameter('tab', 'euLaw')}
                className={`${
                  tab === 'euLaw'
                    ? 'border-b-2 border-green-600 box-content'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                EU wetgeving
              </button>
              <button
                onClick={() => setQueryStringParameter('tab', 'aboutPage')}
                className={`${
                  tab === 'aboutPage'
                    ? 'border-b-2 border-green-600'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Over CircuLaw
              </button>
              <button
                onClick={() => setQueryStringParameter('tab', 'news')}
                className={`${
                  tab === 'news' ? 'border-b-2 border-green-600' : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Nieuws
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
