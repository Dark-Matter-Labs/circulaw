'use client';
import algoliasearch from 'algoliasearch';
import { Hits, RefinementList, Configure } from 'react-instantsearch';
import { InstrumentHit } from '@/components/search/instrument-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import CustomClearRefinements from '@/components/search/clear-refinements';
import { XIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import MobileHeaderSearch from './mobile-header';
import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import RLadderTooltip from '../tooltips/r-ladder-tooltip';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import SearchHeader from './search-header';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

export default function InstrumentSearch() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transformItems = (items) => {
    const rLadderLabes = {
      R1: 'R1: Refuse/rethink',
      R2: 'R2: Reduce',
      R3: 'R3: Re-use',
      R4: 'R4: Repair/remanufacture',
      R5: 'R5: Recycling',
      R6: 'R6: Recover',
    };
    return items.map((item) => ({
      ...item,
      label: rLadderLabes[item.label],
    }));
  };

  return (
    <InstantSearchNext
      searchClient={algoliaClient}
      indexName={'instruments'}
      routing={{
        router: {
          cleanUrlOnDispose: false,
        },
      }}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      insights={true}
    >
      {/* MOBILE FILTERS */}
      <div className='min-h-full  z-50'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as='div' className='relative z-40 lg:hidden' onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 flex z-40 '>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex-1 flex flex-col max-w-xs w-full mt-[70px] bg-gray-100'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 pt-2 pr-2'>
                      <button
                        type='button'
                        className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className=' p-4 flex justify-between overflow-scroll'>
                    <div className='flex flex-col mt-4 min-w-[270px] '>
                      <div className='flex flex-col mr-12'>
                        <CustomClearRefinements />
                        <h4 className='heading-xl-semibold mb-1'>Categorie</h4>
                        <RefinementList
                          attribute='categorie'
                          title='Categorie'
                          classNames={{
                            root: 'mb-8 min-w-[270px]',
                            item: 'pt-2',
                            list: 'empty:hidden',
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
                      <div className='flex flex-col mr-4'>
                        <h4 className='heading-xl-semibold mb-1'>Thema</h4>
                        <RefinementList
                          attribute='thema'
                          classNames={{
                            root: 'mb-8 min-w-[270px]',
                            item: 'pt-2',
                            list: 'empty:hidden',
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
                      <div className='flex flex-col mr-4'>
                        <h4 className='heading-xl-semibold mb-1'>Overheidslaag</h4>
                        <RefinementList
                          attribute='overheidslaag'
                          classNames={{
                            root: 'mb-8 min-w-[270px] ',
                            item: 'pt-2',
                            list: 'empty:hidden',
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
                      <div className='flex flex-col mr-4'>
                        <div className='flex flex-row w-full justify-between items-center'>
                          <h4 className='heading-xl-semibold mb-1'>R-Ladder</h4>
                          <RLadderTooltip>
                            <svg
                              className='w-6 h-6 fill-current text-gray-20 mb-2'
                              viewBox='0 0 26 26'
                            >
                              <circle cx='12' cy='15' r='10' fill='#676868' />
                              <path
                                d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                                fill='#F8FBF8'
                              />
                            </svg>
                          </RLadderTooltip>
                        </div>
                        <RefinementList
                          attribute='rLadder'
                          classNames={{
                            root: 'mb-8 min-w-[270px] ',
                            list: 'empty:hidden',
                            item: 'pt-2',
                            checkbox:
                              'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                            label: 'flex justify-between items-center',
                            labelText: 'p-base flex-grow capitalize ml-2',
                            count:
                              'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                          }}
                          sortBy={['name:asc']}
                          transformItems={transformItems}
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='flex-shrink-0 w-14' aria-hidden='true'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      <Configure hitsPerPage={10} />
      <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
        <div className='global-margin w-full flex items-center justify-center'>
          {/* Desktop */}
          <SearchHeader index='instruments' />
          {/* Mobile */}
          <MobileHeaderSearch index='instruments' />

          {/* end mobile */}
        </div>
      </div>

      <div className='lg:hidden py-5 global-margin'>
        <button
          type='button'
          className='px-4 max-w-sm inline-flex items-center justify-center bg-green-50 h-[60px] p-2 w-full border-gray-800 rounded-cl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <span className='p-base-bold mr-3'>Filter</span>
          <AdjustmentsIcon className='h-8 w-8 -rotate-90' aria-hidden='true' />
        </button>
      </div>

      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='hidden sm:flex flex-col mt-32 min-w-[270px]'>
            <div className='flex flex-col mr-12'>
              <CustomClearRefinements />
              <h4 className='heading-xl-semibold mb-1'>Categorie</h4>
              <RefinementList
                attribute='categorie'
                title='Categorie'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden',
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
            <div className='flex flex-col mr-12'>
              <h4 className='heading-xl-semibold mb-1'>Thema</h4>
              <RefinementList
                attribute='thema'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden',
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
            <div className='flex flex-col mr-12'>
              <h4 className='heading-xl-semibold mb-1'>Overheidslaag</h4>
              <RefinementList
                attribute='overheidslaag'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden',
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
            <div className='flex flex-col mr-12'>
              <div className='flex flex-row w-full justify-between items-center mr-12'>
                <h4 className='heading-xl-semibold mb-1'>R-Ladder</h4>
                <RLadderTooltip>
                  <svg className='w-6 h-6 fill-current text-gray-20 mb-2' viewBox='0 0 26 26'>
                    <circle cx='12' cy='15' r='10' fill='#676868' />
                    <path
                      d='M10.7031 10.0078C10.7031 9.23177 11.1354 8.84375 12 8.84375C12.8646 8.84375 13.2969 9.23177 13.2969 10.0078C13.2969 10.3776 13.1875 10.6667 12.9688 10.875C12.7552 11.0781 12.4323 11.1797 12 11.1797C11.1354 11.1797 10.7031 10.7891 10.7031 10.0078ZM13.1875 21H10.8047V12.2656H13.1875V21Z'
                      fill='#F8FBF8'
                    />
                  </svg>
                </RLadderTooltip>
              </div>
              <RefinementList
                attribute='rLadder'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  list: 'empty:hidden',
                  item: 'pt-2',
                  checkbox:
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-600',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['name:asc']}
                transformItems={transformItems}
              />
            </div>
          </div>
          <div>
            <div className='sm:ml-12 sm:mt-10'>
              <CustomStats index='Instrumenten' />
            </div>
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
    </InstantSearchNext>
  );
}
