import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Hits, InstantSearch, SearchBox, Configure, RefinementList } from 'react-instantsearch';

import { Hit } from '@/components/search/hit';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

export const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName='instruments' className=''>
        <div className='flex flex-col'>
        <div className='flex flex-col'>
        <h3 className='mb-2'>Categorie</h3>
        <RefinementList attribute="categorie" className='mb-12'/>
        </div>
        <div className='flex flex-col'>
        <h3 className='mb-2'>Categorie</h3>
        <RefinementList attribute="thema" className='mb-12'/>
        </div>
        </div>
        <Configure hitsPerPage={5} />
        <div className='ais-InstantSearch'>
      
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </>
  );
};
