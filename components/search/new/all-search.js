'use client';
import { InstantSearch, Index, useHits, useInstantSearch } from 'react-instantsearch';
import { useState, Fragment, useEffect } from 'react';
import NewSearchBar from './new-search-bar';
import { TabGroup, TabPanels, TabPanel } from '@headlessui/react';
import AboutSearch from '../about-search';
import InstrumentSearch from '../instrument-search';
import EUSearch from '../eu-search';
import NewsSearch from '../news-search';
import algoliasearch from 'algoliasearch';

// TODO: local storage needs to be cleared when the person is entering search via the nav
// the search button needs to be removed when the user ins on the search page
// when the user changes tab from instrument to another one, the refinement list needs to be cleared completely and the ui state updated. 
// query is being refined on every keystroke so need to change this setting
// the no results fallback does not have the search term when there are 0 results. 
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

  const [selectedIndex, setSelectedIndex] = useState(0)

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
            <TabPanel className='global-margin flex flex-col items-center justify-start min-h-[80vh]'>
              <ScopedResults />
              <Index indexName='instruments'>
                <button
                  onClick={() => setSelectedIndex(1)}
                  className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
                >
                  Instruments <VirtualHits />
                </button>
              </Index>
              <Index indexName='euLaw'>
                <button
                  onClick={() => setSelectedIndex(2)}
                  className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
                >
                  EU wetgeving <VirtualHits />
                </button>
              </Index>
              <Index indexName='aboutPage'>
                <button
                  onClick={() => setSelectedIndex(3)}
                  className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
                >
                  Over CircuLaw <VirtualHits />
                </button>
              </Index>
              <Index indexName='newsItems'>
                <button
                  onClick={() => setSelectedIndex(4)}
                  className='hover:text-green-300 w-4/5 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
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
              <Index indexName='aboutPage'>
                <AboutSearch />
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

  return <div>{results.nbHits}</div>;
}

function ScopedResults(props) {
  const { scopedResults, uiState } = useInstantSearch(props);
  const instruments = scopedResults.filter((item) => item.indexId === 'instruments');
  const aboutPages = scopedResults.filter((item) => item.indexId === 'aboutPage');
  const euLaws = scopedResults.filter((item) => item.indexId === 'euLaw');
  const newsItems = scopedResults.filter((item) => item.indexId === 'newsItems');

  const numInstruments = instruments[0]?.results?.nbHits;
  const numAboutPages = aboutPages[0]?.results?.nbHits;
  const numEULaws = euLaws[0]?.results?.nbHits;
  const numNewsItems = newsItems[0]?.results?.nbHits;
  const totalHits = numInstruments + numAboutPages + numEULaws + numNewsItems;

  return (
    <div className='w-4/5 flex items-start mt-14 mb-10'>
      <div className='heading-2xl sm:heading-3xl'>
        {totalHits} resultaten voor:{' '}
        <span className='font-semibold'>&apos;{uiState['root'].query}&apos;</span>.
      </div>
    </div>
  );
}
