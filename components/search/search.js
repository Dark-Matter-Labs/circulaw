import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Hits, InstantSearch, SearchBox, Configure } from 'react-instantsearch';

import { Hit } from '@/components/search/hit';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='agolia-test'>
      <Configure hitsPerPage={5} />
      <div className='ais-InstantSearch'>
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};
