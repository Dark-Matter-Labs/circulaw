'use client';

import { Fragment, useEffect, useState } from 'react';
import { Index, InstantSearch, useHits, useInstantSearch } from 'react-instantsearch';

import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import algoliasearch from 'algoliasearch';

import EUSearch from './eu-search';
import InstrumentSearch from './instrument-search';
import NewsSearch from './news-search';
import NewSearchBar from './search-bar';

// TODO:
// the virtual scoped results needs a condition when there is no search term.

const indexName = 'root';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

const searchClient = {
  ...algoliaClient,
  search(requests) {
    const filtered = requests.filter((request) => request.indexName !== 'root');
    const query = algoliaClient.search(filtered);
    return query.then((response) => {
      response.results = requests.map((request) =>
        request.indexName === 'root'
          ? {
              index: 'root',
              hits: [],
              nbHits: 0,
              nbPages: 0,
              page: 0,
              processingTimeMS: 0,
            }
          : response.results.shift(),
      );
      return response;
    });
  },
};

export default function AllSearch() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage.length > 0) {
      let selected = localStorage.getItem('selectedIndex');
      let keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      setSelectedIndex(selected);
    }
  }, []);

  function setTabFunction(value) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedIndex', value);
      setSelectedIndex(value);
    }
  }

  return (
    <div>
      <InstantSearch
        indexName={indexName}
        searchClient={searchClient}
        routing
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <TabGroup as={Fragment} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <NewSearchBar selectedIndex={selectedIndex} setTabFunction={setTabFunction} />
          <TabPanels>
            <TabPanel className='global-margin flex min-h-[80vh] flex-col items-center justify-start'>
              <ScopedResults />
              <Index indexName='instruments'>
                <button
                  onClick={() => setSelectedIndex(1)}
                  className='heading-2xl-semibold sm:heading-3xl-semibold flex w-full flex-row items-center justify-between border-b border-green-500 py-10 text-green-500 hover:text-green-400 sm:w-4/5'
                >
                  Instrumenten <VirtualHits />
                </button>
              </Index>
              <Index indexName='euLaw'>
                <button
                  onClick={() => setSelectedIndex(2)}
                  className='heading-2xl-semibold sm:heading-3xl-semibold flex w-full flex-row items-center justify-between border-b border-green-500 py-10 text-green-500 hover:text-green-400 sm:w-4/5'
                >
                  EU wetgeving <VirtualHits />
                </button>
              </Index>
              <Index indexName='newsItems'>
                <button
                  onClick={() => setSelectedIndex(3)}
                  className='heading-2xl-semibold sm:heading-3xl-semibold flex w-full flex-row items-center justify-between py-10 text-green-500 hover:text-green-400 sm:w-4/5'
                >
                  Nieuws <VirtualHits />
                </button>
              </Index>
            </TabPanel>
            <TabPanel>
              <Index indexName='instruments'>
                <InstrumentSearch />
              </Index>
            </TabPanel>
            <TabPanel>
              <Index indexName='euLaw'>
                <EUSearch />
              </Index>
            </TabPanel>
            <TabPanel>
              <Index indexName='newsItems'>
                <NewsSearch />
              </Index>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </InstantSearch>
    </div>
  );
}

function VirtualHits(props) {
  const { results } = useHits(props);
  console.log(results);
  return <div>{results.nbHits}</div>;
}

function ScopedResults(props) {
  const { scopedResults, uiState } = useInstantSearch(props);
  const instruments = scopedResults.filter((item) => item.indexId === 'instruments');
  const euLaws = scopedResults.filter((item) => item.indexId === 'euLaw');
  const newsItems = scopedResults.filter((item) => item.indexId === 'newsItems');

  const numInstruments = instruments[0]?.results?.nbHits;
  const numEULaws = euLaws[0]?.results?.nbHits;
  const numNewsItems = newsItems[0]?.results?.nbHits;
  const totalHits = numInstruments + numEULaws + numNewsItems;
  return (
    <div className='mb-10 mt-14 flex w-full items-start sm:w-4/5'>
      <div className='heading-2xl sm:heading-3xl'>
        {totalHits} resultaten{' '}
        {uiState['root'].query && (
          <>
            <span>voor: </span>

            <span className='font-semibold'>&apos;{uiState['root'].query}&apos;</span>
          </>
        )}
        .
      </div>
    </div>
  );
}
