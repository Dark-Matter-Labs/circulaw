import algoliasearch from 'algoliasearch';
import singletonRouter from 'next/router';

import {
  InstantSearch,
  Hits,
  RefinementList,
  SearchBox,
  InstantSearchSSRProvider,
  Configure,
  useInstantSearch,
} from 'react-instantsearch';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import { InstrumentHit } from '@/components/search/instrument-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
// import AboutHit from '@/components/search/about-hit';
import CustomClearRefinements from '@/components/search/clear-refinements';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import MobileHeaderSearch from './mobile-header';

const algoliaClient = algoliasearch('0L6RUN37T0', '5287d2668bdeebcbff12a4a06353266a');

export default function InstrumentSearch({ serverState, url }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={algoliaClient}
        indexName={'instruments'}
        routing={{
          router: createInstantSearchRouterNext({
            singletonRouter,
            serverUrl: url,
            routerOptions: {
              cleanUrlOnDispose: false,
              preserveSharedStateOnUnmount: true,
            },
          }),
        }}
        insights={true}
      >
        <Configure hitsPerPage={10} />
        <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
          <div className='global-margin w-full flex items-center justify-center'>
            {/* Desktop */}
            <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
              <div className='w-full'>
                <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
                  <div className='mb-4'>
                    <div className='flex flex-row justify-center w-[600px] gap-x-1.5'>
                      <Link
                        href='/zoeken/instrumenten'
                        className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]'
                      >
                        <div className='bg-green-500 w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                          <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                          Instrumenten
                          <span className='p-xs'>Zoeken binnen &apos;instrumenten&apos;</span>
                        </div>
                      </Link>
                      <Link
                        href='/zoeken/over-circulaw'
                        // onClick={() => setSearchIndex('aboutPage')}
                        className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]'
                      >
                        <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                          <div className='bg-white h-3 w-3 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                          Over Circulaw
                          <span className='p-xs'>Zoeken binnen &apos;Over Circulaw&apos;</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <SearchBox
                    searchAsYouType={false}
                    placeholder='Zoek naar instrumenten...'
                    classNames={{
                      root: 'h-16 w-[600px] bg-green-600',
                      form: 'bg-green-600 w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex',
                      input:
                        'w-[600px] h-[66px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold',
                      submitIcon: 'visible',
                    }}
                    submitIconComponent={() => (
                      <div
                        type='submit'
                        className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl'
                      >
                        Zoeken
                      </div>
                    )}
                    resetIconComponent={() => (
                      <div
                        type='reset'
                        title='Clear the search query'
                        className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group'
                      >
                        <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Mobile */}
            <MobileHeaderSearch index='instruments' />
            {/* end mobile */}
          </div>
        </div>

        <div className='global-margin flex items-center justify-center mt-6 sm:mt-10'>
          <CustomStats />
        </div>
        <div className='global-margin flex'>
          <NoResultsBoundary fallback={<NoResults />}>
            <div className='hidden sm:flex flex-col mt-10 min-w-[260px]'>
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
                    label: 'flex justify-between items-center',
                    labelText: 'p-base flex-grow capitalize ml-2',
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
                    label: 'flex justify-between items-center',
                    labelText: 'p-base flex-grow capitalize ml-2',
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
                    label: 'flex justify-between items-center',
                    labelText: 'p-base flex-grow capitalize ml-2',
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
                    label: 'flex justify-between items-center',
                    labelText: 'p-base flex-grow capitalize ml-2',
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
                  root: 'border-none mt-4 sm:mt-10',
                  list: 'sm:ml-10',
                  item: 'shadow-none px-0 pb-4 pt-0',
                }}
                hitComponent={InstrumentHit}
              />
              <div className='w-full flex items-center justify-center mb-12 mt-6'>
                <Pagination />
              </div>
            </div>
          </NoResultsBoundary>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

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
  return (
    <div className='h-96 w-full flex items-center justify-center my-10'>
      <Image src='/no-results.png' height={320} width={540} alt='no results for this search' />
    </div>
  );
}
