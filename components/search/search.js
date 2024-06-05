import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Hits, InstantSearch, SearchBox, Configure, RefinementList, Stats, useInstantSearch } from 'react-instantsearch';

import { Hit } from '@/components/search/hit';
import NewsHit from './about-hit';
import { useState } from 'react';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

// create condition here to change indexName
export const Search = () => {
  const [index, setIndex] = useState('instruments');

  return (
    <>
      <div className='w-full flex flex-col items center justify-center'>
        <InstantSearch searchClient={searchClient} indexName={index} className='' routing={true}>
          <Configure hitsPerPage={5} />
          <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
            <div className='global-margin w-full flex items-center justify-center'>
              <div className='w-3/5 flex flex-col'>
                <SearchBox
                  placeholder='Zoek naar instrumeten'
                  classNames={{
                    root: '',
                    form: 'relative h-14 rounded-cl bg-green-600',
                    input:
                      'block w-full pl-16 pr-3 py-2 h-14 border border-green-600 bg-white bg-opacity-50 placeholder-green-50 text-green-50 text-[18px] font-semibold focus:outline-none focus:border-green-300 focus:ring-green-300 rounded-cl focus:ring-1 fill-red-400',
                    resetIcon: 'fill-green-900',
                  }}
                />
                <div className='w-full flex flex-row mb-12'>
                  <button
                    onClick={() => setIndex('instruments')}
                    className={`${
                      index === 'instruments' ? 'opacity-100' : 'opacity-50'
                    } h-12 w-32 bg-white  rounded-cl flex items-center justify-center mr-4`}
                  >
                    Instrumenten
                  </button>
                  <button
                    onClick={() => setIndex('aboutPage')}
                    className={`${
                      index === 'aboutPage' ? 'opacity-100' : 'opacity-50'
                    } h-12 w-32 bg-white rounded-cl flex items-center justify-center`}
                  >
                    Over CircuLaw
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='global-margin'>
            <Stats />

          </div>
          <div className='global-margin flex'>
            {index === 'instruments' && (
              <div className='flex flex-col mt-12'>
                <div className='flex flex-col'>
                  <RefinementList
                    attribute='categorie'
                    title="Categorie"
                    classNames={{
                      root: 'mb-12 min-w-[260px] mr-12',
                      item: 'pt-2',
                      list: 'empty:hidden before:content-["Categorie"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
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
                  <RefinementList
                    attribute='thema'
                    classNames={{
                      root: 'mb-12 min-w-[260px] mr-12',
                      item: 'pt-2',
                      list: 'empty:hidden before:content-["Thema"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
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
                  <RefinementList
                    attribute='overheidslaag'
                    classNames={{
                      root: 'mb-12 min-w-[260px] mr-12',
                      item: 'pt-2',
                      list: 'empty:hidden before:content-["Overheidslaag"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
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
                  <RefinementList
                    attribute='rLadder'
                    classNames={{
                      root: 'mb-12 min-w-[260px] mr-12 ',
                      list: 'empty:hidden before:content-["R_Ladder"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
                      item: 'pt-2',
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
            )}
            <div>
            <NoResultsBoundary fallback={<NoResults />}>
              <Hits
                classNames={{
                  root: 'border-none mt-12',
                  list: 'ml-10',
                  item: 'shadow-none px-0 pb-8 pt-0',
                }}
                hitComponent={index === 'instruments' ? Hit : NewsHit}
              /></NoResultsBoundary>
            </div>
          </div>

          {/* make this w full */}
        </InstantSearch>
      </div>
    </>
  );
};


function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div>
      <p>
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  );
}