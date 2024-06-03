import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import {
  Hits,
  InstantSearch,
  SearchBox,
  Configure,
  RefinementList,
  Pagination,
} from 'react-instantsearch';

import { Hit } from '@/components/search/hit';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

// create condition here to change indexName
export const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName='instruments' className='' routing={true}>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <h3 className='mb-2'>Categorie</h3>
            <RefinementList attribute='categorie' className='mb-12' sortBy={['label:asc']}/>
          </div>
          <div className='flex flex-col'>
            <h3 className='mb-2'>Thema</h3>
            <RefinementList attribute='thema' className='mb-12' sortBy={['label:asc']}/>
          </div>
        </div>
        <Configure hitsPerPage={5} />
        <div className='ais-InstantSearch'>
          <SearchBox 
          classNames={{
            root: 'p-3 shadow-none',
            form: 'relative',
            input: 'block w-full pl-9 pr-3 py-2 bg-white border border-green-300 placeholder-green-400 focus:outline-none focus:border-green-500 focus:ring-green-500 rounded-cl focus:ring-1',
            submitIcon: 'absolute top-0 left-0 bottom-0 w-6',
          }}/>
          <Hits hitComponent={Hit} />
          <Pagination
          // Optional props
          />
        </div>
      </InstantSearch>
    </>
  );
};
