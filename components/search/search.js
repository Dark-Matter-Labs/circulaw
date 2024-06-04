import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Hits, InstantSearch, SearchBox, Configure, RefinementList } from 'react-instantsearch';

import { Hit } from '@/components/search/hit';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

// create condition here to change indexName
export const Search = () => {
  return (
    <>
      <div className='w-full flex flex-col items center justify-center'>
        <InstantSearch
          searchClient={searchClient}
          indexName='instruments'
          className=''
          routing={true}
        >
          <Configure hitsPerPage={5} />
          <div className='bg-green-800 h-[260px] flex items-end justify-center w-full'>
            <div className='global-margin w-full flex items-center justify-center'>
              <div className='w-3/5'>
                <SearchBox
                  placeholder='Zoek naar instrumeten'
                  classNames={{
                    root: 'mb-12',
                    form: 'relative h-14 rounded-cl bg-green-800',
                    input:
                      'block w-full pl-16 pr-3 py-2 h-14 border border-green-800 bg-white bg-opacity-50 placeholder-green-50 text-green-50 text-[18px] font-semibold focus:outline-none focus:border-green-300 focus:ring-green-300 rounded-cl focus:ring-1 fill-red-400',
                    resetIcon: 'fill-green-900',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='global-margin flex'>
            <div className='flex flex-col mt-12'>
              <div className='flex flex-col'>
                <h4 className='mb-2 heading-xl-semibold'>Categorie</h4>
                <RefinementList
                  attribute='categorie'
                  classNames={{
                    root: 'mb-12 min-w-[260px] mr-12',
                    item: 'mb-2',
                    checkbox:
                      'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                    label: 'flex justify-between',
                    labelText: 'p-base flex-grow capitalize',
                    count:
                      'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                  }}
                  sortBy={['label:asc']}
                />
              </div>
              <div className='flex flex-col'>
                <h4 className='mb-2 heading-xl-semibold'>Thema</h4>
                <RefinementList
                  attribute='thema'
                  classNames={{
                    root: 'mb-12 min-w-[260px] mr-12',
                    item: 'mb-2',
                    checkbox:
                      'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                    label: 'flex justify-between',
                    labelText: 'p-base flex-grow capitalize',
                    count:
                      'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                  }}
                  sortBy={['label:asc']}
                />
              </div>
              <div className='flex flex-col'>
                <h4 className='mb-2 heading-xl-semibold'>Overheidslaag</h4>
                <RefinementList
                  attribute='overheidslaag'
                  classNames={{
                    root: 'mb-12 min-w-[260px] mr-12',
                    item: 'mb-2',
                    checkbox:
                      'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                    label: 'flex justify-between',
                    labelText: 'p-base flex-grow capitalize',
                    count:
                      'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                  }}
                  sortBy={['label:asc']}
                />
              </div>
              <div className='flex flex-col'>
                <h4 className='mb-2 heading-xl-semibold'>R Ladder</h4>
                <RefinementList
                  attribute='rLadder'
                  classNames={{
                    root: 'mb-12 min-w-[260px] mr-12',
                    item: 'mb-2',
                    checkbox:
                      'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                    label: 'flex justify-between',
                    labelText: 'p-base flex-grow capitalize',
                    count:
                      'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                  }}
                  sortBy={['label:asc']}
                />
              </div>
            </div>
            <div>
              <Hits
                classNames={{
                  root: 'border-none mt-12',
                  list: 'ml-10',
                  item: 'shadow-none px-0 pb-8 pt-0',
                }}
                hitComponent={Hit}
              />
            </div>
          </div>

          {/* make this w full */}
        </InstantSearch>
      </div>
    </>
  );
};
