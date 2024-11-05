'use client';
import algoliasearch from 'algoliasearch';
import { Hits, RefinementList, Configure } from 'react-instantsearch';
import { InstrumentHit } from '@/components/search/instrument-hit';
import CustomStats from './stats';
import Pagination from '@/components/search/pagination';
import CustomClearRefinements from '@/components/search/clear-refinements';
import MobileHeaderSearch from './mobile-header';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import SearchHeader from './search-header';
import Modal from '../modal/modal';
import ModalContent from '../modal/modal-content';
import RladderTooltipContent from '../instrument/tooltip-r-ladder-content';
import FilterModalButton from '../modal/modal-buttons/filter-button';
import InstrumentTooltipButton from '../modal/modal-buttons/instrument-tooltip-button';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export const dynamic = 'force-dynamic';

export default function InstrumentSearch() {
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
      {/* MOBILE FILTERS */}
      <div className='global-margin flex justify-center'>
        <Modal Button={<FilterModalButton />}>
          <ModalContent title=''>
            <div className=' p-4 flex justify-between'>
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
                    <Modal Button={<InstrumentTooltipButton />}>
                      <ModalContent title='R-ladder: strategieën van circulariteit'>
                        <RladderTooltipContent />
                      </ModalContent>
                    </Modal>
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
          </ModalContent>
        </Modal>
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
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='R-ladder: strategieën van circulariteit'>
                    <RladderTooltipContent />
                  </ModalContent>
                </Modal>
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
