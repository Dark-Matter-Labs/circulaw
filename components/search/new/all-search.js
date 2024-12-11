'use client';
import { InstantSearch, Index, useHits, useSearchBox, useInstantSearch } from 'react-instantsearch';
import algoliasearch from 'algoliasearch';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

export default function AllSearch() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  return (
    <div>
      <InstantSearch indexName='instruments' searchClient={algoliaClient}>
        <VirtualSearchBox query={query} />
        <div className='global-margin flex flex-col items-center justify-start min-h-[80vh]'>
          <ScopedResults query={query} />

          <Index indexName='instruments'>
            <Link
              href={`/search/instrumenten?${createQueryString('query', query)}`}
              className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
            >
              Instruments <VirtualHits />
            </Link>
          </Index>
          <Index indexName='euLaw'>
            <Link
              href={`/search/eu-wetgeving?${createQueryString('query', query)}`}
              className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
            >
              EU wetgeving <VirtualHits />
            </Link>
          </Index>
          <Index indexName='aboutPage'>
            <Link
              href={`/search/over-circulaw?${createQueryString('query', query)}`}
              className='hover:text-green-300 w-4/5 border-b border-green-600 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
            >
              Over CircuLaw <VirtualHits />
            </Link>
          </Index>
          <Index indexName='newsItems'>
            <Link
              href={`/search/nieuws?${createQueryString('query', query)}`}
              className='hover:text-green-300 w-4/5 heading-3xl-semibold text-green-600 flex flex-row justify-between items-center py-10'
            >
              Nieuws <VirtualHits />
            </Link>
          </Index>
        </div>
      </InstantSearch>
    </div>
  );
}

function VirtualSearchBox(props) {
  const { refine } = useSearchBox(props);
  useEffect(() => {
    refine(props.query);
  }, [props.query, refine]);
  return null;
}

function VirtualHits(props) {
  const { results } = useHits(props);

  return <div>{results.nbHits}</div>;
}

function ScopedResults(props) {
  const { scopedResults } = useInstantSearch(props);

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
        <span className='font-semibold'>&apos;{props.query}&apos;</span>.
      </div>
    </div>
  );
}
