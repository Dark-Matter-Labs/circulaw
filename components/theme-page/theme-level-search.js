'use client';

import { Configure, Hits, RefinementList, SearchBox } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

import CustomClearRefinements from '@/components/search/clear-refinements';
import { InstrumentHit } from '@/components/search/instrument-hit';
import Pagination from '@/components/search/pagination';
import { IconX } from '@tabler/icons-react';
import algoliasearch from 'algoliasearch';

import Header from '../headers';
import TooltipJuridischeHoudbaarheidContent from '../instrument/tooltip-juridische-houdbaarheid-content';
import TooltipJuridischeInvloedContent from '../instrument/tooltip-juridische-invloed-content';
import RladderTooltipContent from '../instrument/tooltip-r-ladder-content';
import Modal from '../modal/modal';
import FilterModalButton from '../modal/modal-buttons/filter-button';
import InstrumentTooltipButton from '../modal/modal-buttons/instrument-tooltip-button';
import ModalContent from '../modal/modal-content';
import NoResultsBoundary from '../search/no-results-boundary';
import NoResultsInstruments from '../search/no-results-instrument';
import CustomStats from '../search/stats';
import PagePagination from '../shared/pagination';

const api_key = process.env.NEXT_PUBLIC_AGOLIA_SEARCH_KEY;
const api_id = process.env.NEXT_PUBLIC_AGOLIA_APPLICATION_ID;

const searchClient = algoliasearch(api_id, api_key);

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
      searchClient={searchClient}
      indexName={'instruments'}
      routing={false}
      insights={false}
    >
      <Configure hitsPerPage={10} filters={`thema:${props?.thema}`} />

      <Header
        thema={props?.thema}
        productChain={props.productChain}
        page='list'
        title={props.title}
        pageType='instrumentOverview'
        bgColor='bg-green-500'
        imageURL='/big-decoration.png'
      />
      <div className='global-margin'>
        <PagePagination pages={props.pages} position='top' />
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <div className='mb-10 mt-10 hidden items-center justify-start sm:flex'>
          <SearchBox
            searchAsYouType={false}
            placeholder={props.searchTitle + '...'}
            classNames={{
              root: 'h-16 w-[600px] bg-white',
              form: 'bg-white shadow-card w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex',
              input:
                'w-[600px] h-[66px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-green-500 p-base text-green-500 focus:ring-1 focus:ring-white placeholder:text-green-500 placeholder:p-base-semibold',
              submitIcon: 'visible',
            }}
            submitIconComponent={() => (
              <div className='p-base-semibold absolute right-3 top-3 ml-2 h-[42px] w-24 rounded-cl border border-white bg-white p-2 text-green-500 shadow-card hover:border-green-300 hover:bg-green-300 cursor-pointer'>
                Zoeken
              </div>
            )}
            resetIconComponent={() => (
              <div
                title='Clear the search query'
                className='group absolute right-28 top-3.5 rounded-full p-2 hover:bg-green-400/50 cursor-pointer'
              >
                <IconX className='h-6 w-6 text-green-500 group-hover:text-green-900' />
              </div>
            )}
          />
        </div>
      </div>
      <div className='mt-4 flex items-center justify-center sm:hidden'>
        <SearchBox
          searchAsYouType={false}
          placeholder={props.searchTitle + '...'}
          classNames={{
            root: 'h-16 max-w-sm w-full bg-white',
            form: 'bg-white shadow-card max-w-sm w-full h-[60px] rounded-cl flex-row items-center justify-between relative flex',
            input:
              'max-w-sm w-full h-[60px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-10 rounded-cl border-none bg-white/50 caret-green-500 p-base text-green-500 focus:ring-1 focus:ring-white placeholder:text-green-500 placeholder:p-base-semibold',
            submitIcon: 'visible',
          }}
          submitIconComponent={() => (
            <div className='w-22 p-base-semibold absolute right-2.5 top-2.5 ml-2 flex h-[40px] items-center rounded-cl border border-white bg-white p-2 text-green-500 shadow-card cursor-pointer'>
              Zoeken
            </div>
          )}
          resetIconComponent={() => (
            <div
              title='Clear the search query'
              className='group absolute right-24 top-3 rounded-full p-2 hover:bg-green-400/50 cursor-pointer'
            >
              <IconX className='h-6 w-6 text-green-500 group-hover:text-green-900' />
            </div>
          )}
        />
      </div>
      {/* MOBILE FILTERS */}
      <div className='global-margin flex justify-center'>
        <Modal Button={<FilterModalButton />}>
          <ModalContent title=''>
            <div className='flex justify-between'>
              <div className='mt-6 flex min-w-[270px] flex-col items-center justify-center'>
                <div className='mr-4 flex flex-col'>
                  <CustomClearRefinements />
                  <h4 className='heading-xl-semibold mb-1'>Overheidslaag</h4>
                  <RefinementList
                    attribute='overheidslaag'
                    classNames={{
                      root: 'mb-12 min-w-[270px]',
                      item: 'pt-2',
                      list: 'empty:hidden',
                      checkbox:
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                      label: 'flex justify-between items-center',
                      labelText: 'p-base flex-grow capitalize ml-2',
                      count:
                        'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                    }}
                    sortBy={['label:asc']}
                  />
                </div>
                <div className='mr-4 flex flex-col'>
                  <h4 className='heading-xl-semibold mb-1'>Categorie</h4>
                  <RefinementList
                    attribute='categorie'
                    title='Categorie'
                    classNames={{
                      root: 'mb-8 min-w-[270px]',
                      item: 'pt-2',
                      list: 'empty:hidden',
                      checkbox:
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                      label: 'flex justify-between items-center',
                      labelText: 'p-base flex-grow capitalize ml-2',
                      count:
                        'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                    }}
                    sortBy={['label:asc']}
                  />
                </div>

                <div className='mr-4 flex flex-col'>
                  <div className='flex w-full flex-row items-center justify-between'>
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
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                      label: 'flex justify-between items-center',
                      labelText: 'p-base flex-grow capitalize ml-2',
                      count:
                        'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                    }}
                    sortBy={['name:asc']}
                  />
                </div>

                <div className='mr-4 flex flex-col'>
                  <div className='flex w-full flex-row items-center justify-between'>
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
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                      label: 'flex justify-between items-center',
                      labelText: 'p-base flex-grow capitalize ml-2',
                      count:
                        'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                    }}
                    sortBy={['name:asc']}
                  />
                </div>
                <div className='mr-4 flex flex-col'>
                  <div className='flex w-full flex-row items-center justify-between'>
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
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                      label: 'flex justify-between items-center',
                      labelText: 'p-base flex-grow capitalize ml-2',
                      count:
                        'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                    }}
                    sortBy={['name:asc']}
                    transformItems={transformItems}
                  />
                </div>
                <div className='mr-6 flex flex-col'>
                  <RefinementList
                    attribute='extraContent'
                    title='Inclusief'
                    classNames={{
                      root: 'mb-12 min-w-[270px]',
                      item: 'pt-2',
                      list: 'empty:hidden before:content-["Inclusief"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
                      checkbox:
                        'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
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
        <NoResultsBoundary fallback={<NoResultsInstruments />}>
          <div className='hidden min-w-[270px] flex-col sm:flex'>
            <div className='mr-12 mt-10 flex flex-col'>
              <CustomClearRefinements />
              <h4 className='heading-xl-semibold mb-1'>Overheidslaag</h4>
              <RefinementList
                attribute='overheidslaag'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden',
                  checkbox:
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['label:asc']}
              />
            </div>
            <div className='mr-12 flex flex-col'>
              <h4 className='heading-xl-semibold mb-1'>Categorie</h4>
              <RefinementList
                attribute='categorie'
                title='Categorie'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden',
                  checkbox:
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['label:asc']}
              />
            </div>

            <div className='mr-12 flex flex-col'>
              <div className='mr-12 flex w-full flex-row items-center justify-between'>
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
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['name:asc']}
              />
            </div>
            <div className='mr-12 flex flex-col'>
              <div className='mr-12 flex w-full flex-row items-center justify-between'>
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
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['name:asc']}
              />
            </div>
            <div className='mr-12 flex flex-col'>
              <div className='mr-12 flex w-full flex-row items-center justify-between'>
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
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
                  label: 'flex justify-between items-center',
                  labelText: 'p-base flex-grow capitalize ml-2',
                  count:
                    'border-none bg-white text-[16px] p-base font-semibold before:content-["("] after:content-[")"]',
                }}
                sortBy={['name:asc']}
                transformItems={transformItems}
              />
            </div>
            <div className='mr-12 flex flex-col'>
              <RefinementList
                attribute='extraContent'
                title='Inclusief'
                classNames={{
                  root: 'mb-12 min-w-[270px]',
                  item: 'pt-2',
                  list: 'empty:hidden before:content-["Inclusief"] before:h-24 before:text-[18px] before:font-semibold before:font-jakarta',
                  checkbox:
                    'rounded-[3px] h-5 w-5 shadow-none border-2 border-grey-500 focus:ring-green-500',
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
            <div className='sm:ml-14 sm:mt-10'>
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
            <div className='mb-12 mt-6 flex w-full items-center justify-center'>
              <Pagination />
            </div>
          </div>
        </NoResultsBoundary>
      </div>
    </InstantSearchNext>
  );
}
