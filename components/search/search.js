import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import {
  Hits,
  InstantSearch,
  SearchBox,
  Configure,
  RefinementList,
  useInstantSearch,
} from 'react-instantsearch';
import Pagination from './pagination';
import CustomClearRefinements from './clear-filters';
import CustomStats from './stats';
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
          <Configure hitsPerPage={10} />
          <div className='bg-green-600 h-[360px] flex items-end justify-center w-full'>
            <div className='global-margin w-full flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-y-6'>
                <h1 className='text-green-50 heading-2xl-semibold sm:heading-5xl-semibold'>
                  Zoek binnen de website
                </h1>
                <div className='w-full flex flex-row justify-center'>
                  <button
                    onClick={() => setIndex('instruments')}
                    className={`${
                      index === 'instruments' ? 'opacity-100' : 'opacity-50'
                    } px-5 py-1.5 bg-white rounded-[8px] flex items-center justify-center mr-1 p-base-semibold`}
                  >
                    Instrumenten
                  </button>
                  <button
                    onClick={() => setIndex('aboutPage')}
                    className={`${
                      index === 'aboutPage' ? 'opacity-100' : 'opacity-50'
                    } px-5 py-1.5 bg-white rounded-[8px] flex items-center justify-center p-base-semibold`}
                  >
                    Over CircuLaw
                  </button>
                </div>
                <div className='w-full'>
                  <SearchBox
                    placeholder={
                      index === 'instruments'
                        ? 'Zoek naar instrumenten...'
                        : 'Zoek naar Over CircuLaw...'
                    }
                    classNames={{
                      root: 'mb-10 h-14',
                      form: 'bg-green-600 flex',
                      input:
                        'h-14 rounded-full max-w-none focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] caret-white block pl-12 pr-3 py-2 border border-green-600 bg-white bg-opacity-50 placeholder-green-50 text-green-50 text-[18px] font-semibold focus:outline-none focus:border-green-50 focus:ring-green-50 focus:ring-1',
                      resetIcon: 'fill-green-900',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='global-margin flex items-center justify-center mt-10'>
            <CustomStats />
          </div>
          <div className='global-margin flex'>
            {index === 'instruments' && (
              <div className='flex flex-col mt-10 min-w-[260px]'>
                <div className='flex flex-col'>
                  <CustomClearRefinements />
                  {/* 
                  <ClearRefinements
                    classNames={{
                      root: 'mb-6 p-base',
                      button:
                        'p-base border-2 border-green-600 bg-none hover:bg-green-200 text-green-600 active:bg-green-300 focus:outline-none focus:bg-green-100 focus:ring-2 focus:ring-white rounded-full',
                    }}
                  />
                   */}
                  
                  <RefinementList
                    attribute='categorie'
                    title='Categorie'
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
                    root: 'border-none mt-10',
                    list: 'ml-10',
                    item: 'shadow-none px-0 pb-4 pt-0',
                  }}
                  hitComponent={index === 'instruments' ? Hit : NewsHit}
                />
                <div className='w-full flex items-center justify-center mb-12 mt-6'>
                  {/*  
              <Pagination 
                  // onClick={() => {scrollTo(0,0)}}
                  classNames={{
                    root: 'shadow-none',
                    list: 'shador-none border-none ',
                    item: '',
                    firstPageItem: 'bg-none hover:bg-red-300 rounded-cl group',
                    link: 'border-none shadow-none group-hover:bg-red-300 rounded-full bg-none p-2 mx-1 ',
                    selectedItem: 'bg-green-200 !font-italic focus:text-green-500'
                  }}
                />*/}
                <Pagination />
          </div>
              </NoResultsBoundary>
            </div>
          </div>

          {/* make this w full */}
        </InstantSearch>
      </div>
    </>
  );
};

// move these into components and export them.

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
