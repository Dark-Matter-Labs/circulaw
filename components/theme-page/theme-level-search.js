'use client';
import algoliasearch from 'algoliasearch';
import { Hits, RefinementList, SearchBox, Configure } from 'react-instantsearch';
import { InstrumentHit } from '@/components/search/instrument-hit';
import CustomStats from '../search/stats';
import Pagination from '@/components/search/pagination';
import CustomClearRefinements from '@/components/search/clear-refinements';
import { IconX } from '@tabler/icons-react';
import Modal from '../modal/modal';
import ModalContent from '../modal/modal-content';
import InstrumentTooltipButton from '../modal/modal-buttons/instrument-tooltip-button';

import NoResults from '../search/no-results';
import NoResultsBoundary from '../search/no-results-boundary';
import OverviewPageHeader from './overview-page-header';

import { InstantSearchNext } from 'react-instantsearch-nextjs';
import TooltipJuridischeHoudbaarheidContent from '../instrument/tooltip-juridische-houdbaarheid-content';
import FilterModalButton from '../modal/modal-buttons/filter-button';
import TooltipJuridischeInvloedContent from '../instrument/tooltip-juridische-invloed-content';
import RladderTooltipContent from '../instrument/tooltip-r-ladder-content';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const algoliaClient = algoliasearch(api_id, api_key);

export default function ThemeLevelSearch(props) {
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
      routing
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      insights={true}
    >
      <Configure hitsPerPage={10} filters={`thema:${props?.thema}`} />
      <div className=' bg-green-600 h-[300px] sm:h-[360px]  flex items-end justify-center w-full mt-3'>
        <OverviewPageHeader
          thema={props?.thema}
          productChain={props.productChain}
          page='list'
          title={props.title}
        />
      </div>
      <div className='flex items-center justify-center mt-4'>
        <div className='mt-10 mb-10 hidden sm:flex items-center justify-start'>
          <SearchBox
            searchAsYouType={false}
            placeholder={props.searchTitle + '...'}
            classNames={{
              root: 'h-16 w-[600px] bg-white',
              form: 'bg-white shadow-card w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex',
              input:
                'w-[600px] h-[66px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-green-600 p-base text-green-600 focus:ring-1 focus:ring-white placeholder:text-green-600 placeholder:p-base-semibold',
              submitIcon: 'visible',
            }}
            submitIconComponent={() => (
              <div
                type='submit'
                className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl hover:bg-green-200 hover:border-green-200'
              >
                Zoeken
              </div>
            )}
            resetIconComponent={() => (
              <div
                type='reset'
                title='Clear the search query'
                className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-green-300/50 group'
              >
                <IconX className='h-6 w-6 text-green-600 group-hover:text-green-900' />
              </div>
            )}
          />
        </div>
      </div>
      <div className='flex sm:hidden items-center justify-center mt-4'>
        <SearchBox
          searchAsYouType={false}
          placeholder={props.searchTitle + '...'}
          classNames={{
            root: 'h-16 max-w-sm w-full bg-white',
            form: 'bg-white shadow-card max-w-sm w-full h-[60px] rounded-cl flex-row items-center justify-between relative flex',
            input:
              'max-w-sm w-full h-[60px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-10 rounded-cl border-none bg-white/50 caret-green-600 p-base text-green-600 focus:ring-1 focus:ring-white placeholder:text-green-600 placeholder:p-base-semibold',
            submitIcon: 'visible',
          }}
          submitIconComponent={() => (
            <div
              type='submit'
              className='flex items-center ml-2 border h-[40px] w-22 border-white p-2 absolute top-2.5 right-2.5 shadow-card p-base-semibold text-green-600 bg-white rounded-cl'
            >
              Zoeken
            </div>
          )}
          resetIconComponent={() => (
            <div
              type='reset'
              title='Clear the search query'
              className='absolute top-3 right-24 rounded-full p-2 hover:bg-green-300/50 group'
            >
              <IconX className='h-6 w-6 text-green-600 group-hover:text-green-900' />
            </div>
          )}
        />
      </div>
      {/* MOBILE FILTERS */}
      <div className='global-margin flex justify-center'>
        <Modal Button={<FilterModalButton />}>
          <ModalContent title=''>
            <div className='flex justify-between'>
              <div className='flex flex-col items-center justify-center mt-6 min-w-[270px] '>
                <div className='flex flex-col mr-4'>
                  <CustomClearRefinements />
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
                <div className='flex flex-col mr-4'>
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
                  <div className='flex flex-row w-full justify-between items-center'>
                    <h4 className='heading-xl-semibold mb-1'>Invloed</h4>
                    <Modal Button={<InstrumentTooltipButton />}>
                      <ModalContent title='Juridische invloed'>
                        <TooltipJuridischeInvloedContent />
                      </ModalContent>
                    </Modal>
                  </div>
                  <RefinementList
                    attribute='juridischInvloed'
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
                  />
                </div>

                <div className='flex flex-col mr-4'>
                  <div className='flex flex-row w-full justify-between items-center'>
                    <h4 className='heading-xl-semibold mb-1'>Juridische houdbaarheid</h4>
                    <Modal Button={<InstrumentTooltipButton />}>
                      <ModalContent title='Geschatte juridische houdbaarheid'>
                        <TooltipJuridischeHoudbaarheidContent />
                      </ModalContent>
                    </Modal>
                  </div>
                  <RefinementList
                    attribute='juridischeHaalbaarheid'
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
                <div className='flex flex-col mr-6'>
                  <RefinementList
                    attribute='extraContent'
                    title='Inclusief'
                    classNames={{
                      root: 'mb-12 min-w-[270px]',
                      item: 'pt-2',
                      list: 'empty:hidden before:content-["Inclusief"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
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
            </div>
          </ModalContent>
        </Modal>
      </div>

      <div className='global-margin flex'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='hidden sm:flex flex-col min-w-[270px]'>
            <div className='flex flex-col mr-12 mt-10'>
              <CustomClearRefinements />
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
              <div className='flex flex-row w-full justify-between items-center mr-12'>
                <h4 className='heading-xl-semibold mb-1'>Invloed</h4>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Juridische invloed'>
                    <TooltipJuridischeInvloedContent />
                  </ModalContent>
                </Modal>
              </div>
              <RefinementList
                attribute='juridischInvloed'
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
              />
            </div>
            <div className='flex flex-col mr-12'>
              <div className='flex flex-row w-full justify-between items-center mr-12'>
                <h4 className='heading-xl-semibold mb-1'>Juridische houdbaarheid</h4>
                <Modal Button={<InstrumentTooltipButton />}>
                  <ModalContent title='Geschatte juridische houdbaarheid'>
                    <TooltipJuridischeHoudbaarheidContent />
                  </ModalContent>
                </Modal>
              </div>
              <RefinementList
                attribute='juridischeHaalbaarheid'
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
            <div className='flex flex-col mr-12'>
              <RefinementList
                attribute='extraContent'
                title='Inclusief'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden before:content-["Inclusief"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
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
            <div className='sm:mt-10 sm:ml-14'>
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
