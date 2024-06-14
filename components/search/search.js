import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import {
  Hits,
  InstantSearch,
  Configure,
  RefinementList,
  useInstantSearch,
  SearchBox,
} from 'react-instantsearch';
import Pagination from './pagination';
import CustomClearRefinements from './clear-filters';
import CustomStats from './stats';
import { Hit } from '@/components/search/hit';
import NewsHit from './about-hit';
import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
import singletonRouter from 'next/router';
import { XIcon } from '@heroicons/react/outline';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';

const searchClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

export const Search = () => {
  const [searchIndex, setSearchIndex] = useState();
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.length > 0) {
      setSearchIndex(sessionStorage.getItem('searchIndex'));
      setSearchQuery(sessionStorage.getItem('searchQuery'));
    } else setSearchIndex('instruments');
  }, []);

  return (
    <>
      <div className='w-full flex flex-col items center justify-center'>
        <InstantSearch
          initialUiState={{
            [searchIndex]: {
              query: searchQuery,
            },
          }}
          searchClient={searchClient}
          indexName={searchIndex}
          className=''
          insights={true}
          routing={{
            router: createInstantSearchRouterNext({
              singletonRouter,
            }),
          }}
        >
          <Configure hitsPerPage={10} query={searchQuery} />
          <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
            <div className='global-margin w-full flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-y-6'>
                <div className='w-full'>
                  <div className='w-full h-full global-margin flex flex-col items-center justify-end pb-10'>
                    <div className='mb-4'>
                      <div className='flex flex-row justify-center w-[600px] gap-x-1.5'>
                        <button
                          onClick={() => setSearchIndex('instruments')}
                          className={`${
                            searchIndex === 'instruments' ? '' : ''
                          } flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]`}
                        >
                          <div
                            className={`${
                              searchIndex === 'instruments' ? 'bg-green-500' : 'bg-black'
                            } w-4 h-4 rounded-full flex items-center justify-center mr-4`}
                          >
                            <div
                              className={`${
                                searchIndex === 'instruments'
                                  ? 'bg-green-500 border-white border-2'
                                  : 'bg-white'
                              } h-3 w-3 rounded-full `}
                            ></div>
                          </div>
                          <div className='flex flex-col items-start justify-start'>
                            Instrumenten
                            <span className='p-xs'>Zoeken binnen &apos;instrumenten&apos;</span>
                          </div>
                        </button>
                        <button
                          onClick={() => setSearchIndex('aboutPage')}
                          className={`${
                            searchIndex === 'aboutPage' ? '' : ''
                          } flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]`}
                        >
                          <div
                            className={`${
                              searchIndex === 'aboutPage' ? 'bg-green-500' : 'bg-black'
                            } w-4 h-4 rounded-full flex items-center justify-center mr-4`}
                          >
                            <div
                              className={`${
                                searchIndex === 'aboutPage'
                                  ? 'bg-green-500 border-white border-2'
                                  : 'bg-white'
                              } h-3 w-3 rounded-full `}
                            ></div>
                          </div>
                          <div className='flex flex-col items-start justify-start'>
                            Over Circulaw
                            <span className='p-xs'>Zoeken binnen &apos;Over Circulaw&apos;</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/*  
                              <div className='h-16 w-[600px] bg-green-600'>
                                <form
                                  className='bg-green-600 w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex'
                                  onSubmit={onSubmit()}
                                >
                                  <input
                                    className='w-[600px] h-[66px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold'
                                    placeholder={
                                      searchIndex === 'instruments'
                                        ? 'Zoek naar instrumenten...'
                                        : 'Zoek naar over CircuLaw...'
                                    }
                                    onChange={onChange()}
                                  />
                                  <button
                                    type='reset'
                                    title='Clear the search query'
                                    className={`${
                                      searchQuery === '' ? 'hidden' : ''
                                    } absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group`}
                                    onClick={() => setSearchQuery('')}
                                  >
                                    <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
                                  </button>
                                  <button
                                    type='submit'
                                    className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl'
                                  >
                                    Zoeken
                                  </button>
                                </form>
                              </div>

*/}

                    <SearchBox
                      searchAsYouType={false}
                      placeholder={
                        searchIndex === 'instruments'
                          ? 'Zoek naar instrumenten...'
                          : 'Zoek naar Over CircuLaw...'
                      }
                      classNames={{
                        root: 'h-16 w-[600px] bg-green-600',
                        form: 'bg-green-600 w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex',
                        input:
                          'w-[600px] h-[66px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold',
                        resetIcon: 'fill-green-900',
                        submitIcon: 'visible',
                      }}
                      submitIconComponent={() => (
                        <div
                          className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group'
                          type='reset'
                        >
                          <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='global-margin flex items-center justify-center mt-10'>
            <CustomStats />
          </div>
          <div className='global-margin flex'>
            {searchIndex === 'instruments' && (
              <div className='flex flex-col mt-10 min-w-[260px]'>
                <div className='flex flex-col'>
                  <CustomClearRefinements />

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
                  hitComponent={searchIndex === 'instruments' ? Hit : NewsHit}
                />
                <div className='w-full flex items-center justify-center mb-12 mt-6'>
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
