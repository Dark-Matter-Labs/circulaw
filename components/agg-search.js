'use client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import algoliasearch from 'algoliasearch/lite';
import SearchHeader from './search/search-header';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const searchClient = algoliasearch(api_id, api_key);

export default function AggSearch() {
  return (
    <InstantSearchNext searchClient={searchClient} index='aboutPage'>
      <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          <SearchHeader />
        </div>
      </div>
    </InstantSearchNext>
  );
}
