'use client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import algoliasearch from 'algoliasearch/lite';
import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { useSearchParams } from 'next/navigation';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const searchClient = algoliasearch(api_id, api_key);

export default function AggSearch() {
  const searchParams = useSearchParams()

  const [algoliaIndex, setAlgoliaIndex] = useState(searchParams.get('tab'))
  const [query, setQuery] = useState(searchParams.get('query'))
  console.log(algoliaIndex)
  useEffect(() => {
    setAlgoliaIndex(searchParams.get('tab'))
    setQuery(searchParams.get('query'))
  }, [searchParams])


  return (
    <InstantSearchNext
      searchClient={searchClient}
      index={algoliaIndex}
      routing={{
        router: {
          cleanUrlOnDispose: true,
          createURL({ qsModule, location, routeState }) {
            console.log(location)
            // current search params 
            const indexState = routeState[algoliaIndex] || {};
            const { origin, pathname, hash, search } = location;
            // grab current query string and convert to object
            const queryParameters = qsModule.parse(search.slice(1)) || {};
            
            // if there is an active search
            if (Object.keys(indexState).length ){
              // merge the search params with the current query params
              Object.assign(queryParameters, routeState);
            } else{
              // remove the search params
              delete queryParameters[algoliaIndex];
            }
    
            let queryString = qsModule.stringify(queryParameters);
            console.log(queryString, 'query strong')
            if(queryString.length){
              queryString = `?${queryString}`;
            }
            return `${origin}${pathname}${queryString}${hash}`;
          },
        },
      }}
    >
      <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          <SearchBar query={query} algoliaIndex={algoliaIndex} />
        </div>
      </div>
    </InstantSearchNext>
  );
}
