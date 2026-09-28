'use client';

// TODO: Need to fix mobile design of tab layout and everything.
import { useState, useSyncExternalStore, useTransition } from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronUp } from '@tabler/icons-react';

import {
  CATEGORIES,
  countInSubcategories,
  defaultCategory,
  filterInstruments,
  isCategory,
} from '@/lib/categorie';
import TabButton from '../expertise-page/tab-button';
import TabLayout from '../expertise-page/tab-layout';
import Header from '../headers';
import Pagination from '../shared/pagination';

const subscribeToNothing = () => () => {};

function readStoredTab() {
  try {
    const storedTab = window.localStorage.getItem('selectedTab');
    return isCategory(storedTab) ? storedTab : null;
  } catch {
    // Storage can be blocked; fall back to the default tab.
    return null;
  }
}

export default function ExpertiseLayout({ expertiseData, ...props }) {
  const [isPending, startTransition] = useTransition();
  const [chosenTab, setChosenTab] = useState(null);
  const [local, setLocal] = useState({ value: 'alle' });
  // The server has no localStorage, so it renders the default tab; the tab a
  // visitor picked on an earlier visit takes over after hydration.
  const storedTab = useSyncExternalStore(subscribeToNothing, readStoredTab, () => null);

  // matrasketen has no grondpositie tab.
  const visibleCategories = CATEGORIES.filter(
    (category) => category !== 'grondpositie' || props.thema !== 'matrasketen',
  );
  // A tab remembered from another theme may not exist on this one.
  const selectedTab =
    [chosenTab, storedTab].find((tab) => visibleCategories.includes(tab)) ??
    defaultCategory(expertiseData);

  // Only the open tab is narrowed by the government-level filter.
  const instrumentsByCategory = Object.fromEntries(
    CATEGORIES.map((category) => [
      category,
      filterInstruments(expertiseData, category, category === selectedTab ? local.value : 'alle'),
    ]),
  );
  const { beleid, inkoop, grondpositie, subsidie, fiscaal } = instrumentsByCategory;

  const numBeleid = countInSubcategories(beleid, 'beleid');
  const numInkoop = countInSubcategories(inkoop, 'inkoop');
  const numGronposirie = countInSubcategories(grondpositie, 'grondpositie');
  const numBeleidNotBouw = beleid.length;
  const numGronposirieNotBouw = grondpositie.length;

  // change filters
  function handleRadioButton(value) {
    startTransition(() => {
      setLocal({
        value: value,
      });
    });
  }

  function handleTabButton(value) {
    try {
      window.localStorage.setItem('selectedTab', value);
    } catch {
      // Storage can be blocked; the tab still switches for this visit.
    }
    startTransition(() => {
      setChosenTab(value);
    });
  }
  return (
    <>
      <div className=''>
        <Header
          title={props.title}
          bgColor='bg-green-500'
          imageURL='/big-decoration.png'
          pageType='categorie'
          page='categorie'
          thema={props.thema}
          productChain={props.transitionAgenda}
        />
        {/* DESKTOP */}
        <div className='global-margin'>
          <div className='flex w-full flex-col justify-start'>
            <div className='z-5 relative'>
              <div className='no-scrollbar z-50 mt-[-76px] flex h-[76px] flex-row justify-start gap-x-3 overflow-x-scroll rounded-b-cl px-6 sm:px-16'>
                <TabButton
                  selected={selectedTab}
                  onClick={() => {
                    handleTabButton('beleid');
                    handleRadioButton('alle');
                  }}
                  numInstrument={numBeleid}
                  numInstruments2={numBeleidNotBouw}
                  transitionAgenda={props.transitionAgenda}
                  name='beleid'
                />
                <TabButton
                  selected={selectedTab}
                  onClick={() => {
                    handleTabButton('inkoop');
                    handleRadioButton('alle');
                  }}
                  numInstrument={numInkoop}
                  transitionAgenda={props.transitionAgenda}
                  name='inkoop'
                />
                {props.thema !== 'matrasketen' && (
                  <TabButton
                    selected={selectedTab}
                    onClick={() => {
                      handleTabButton('grondpositie');
                      handleRadioButton('alle');
                    }}
                    numInstrument={numGronposirie}
                    numInstruments2={numGronposirieNotBouw}
                    transitionAgenda={props.transitionAgenda}
                    name='grondpositie'
                  />
                )}
                <TabButton
                  selected={selectedTab}
                  onClick={() => {
                    handleTabButton('subsidie');
                    handleRadioButton('alle');
                  }}
                  numInstrument={subsidie.length}
                  transitionAgenda={props.transitionAgenda}
                  name='subsidie'
                />
                <TabButton
                  selected={selectedTab}
                  onClick={() => {
                    handleTabButton('fiscaal');
                    handleRadioButton('alle');
                  }}
                  numInstrument={fiscaal.length}
                  transitionAgenda={props.transitionAgenda}
                  name='fiscaal'
                />
              </div>
            </div>
            <Pagination pages={props.pages} position='top' />

            {/* desktop filters */}
            <div className='hidden h-11 max-w-[880px] flex-row items-center sm:flex'>
              <div className='ml-3 flex basis-1/2 justify-end pr-3'>
                <div className='p-2xs-bold'>Toon:</div>
              </div>
              <div className='p-xs mr-3 flex max-w-[413px] basis-1/2 flex-row items-center justify-between font-medium'>
                <div className='mr-4 w-[60px]'>
                  <input
                    type='radio'
                    name='filter'
                    value='alle'
                    id='alle'
                    checked={local?.value === 'alle'}
                    onChange={() => handleRadioButton('alle')}
                    className='mr-2 h-4 w-4 cursor-pointer border-2 border-black bg-none text-black focus:ring-2 focus:ring-black'
                  />
                  <label htmlFor='alle' className='p-2xs-semibold hover:cursor-pointer'>
                    Alle
                  </label>
                </div>
                <div className='mr-4 w-[115px]'>
                  <input
                    type='radio'
                    name='filter'
                    value='Gemeentelijk'
                    id='gemeentelijk'
                    checked={local?.value === 'Gemeentelijk'}
                    onChange={() => handleRadioButton('Gemeentelijk')}
                    className='mr-2 h-4 w-4 cursor-pointer border-2 border-black bg-none text-green-300 focus:ring-2 focus:ring-green-300'
                  />
                  <label htmlFor='gemeentelijk' className='p-2xs-semibold hover:cursor-pointer'>
                    Gemeentelijk
                  </label>
                </div>
                <div className='mr-4 w-[100px]'>
                  <input
                    type='radio'
                    name='filter'
                    value='Provinciaal'
                    id='provinciaal'
                    checked={local?.value === 'Provinciaal'}
                    onChange={() => handleRadioButton('Provinciaal')}
                    className='mr-2 h-4 w-4 cursor-pointer border-2 border-black bg-none text-green-400 focus:ring-2 focus:ring-green-400'
                  />
                  <label htmlFor='provinciaal' className='p-2xs-semibold hover:cursor-pointer'>
                    Provinciaal
                  </label>
                </div>

                <div className='w-[90px]'>
                  <input
                    type='radio'
                    name='filter'
                    value='Nationaal'
                    id='nationaal'
                    checked={local?.value === 'Nationaal'}
                    onChange={() => handleRadioButton('Nationaal')}
                    className='mr-2 h-4 w-4 cursor-pointer border-2 border-black bg-none text-green-500 focus:ring-2 focus:ring-green-500'
                  />
                  <label htmlFor='nationaal' className='p-2xs-semibold hover:cursor-pointer'>
                    Nationaal
                  </label>
                </div>
              </div>
            </div>

            {/* Mobile filter */}
            <div className='py-4 sm:hidden'>
              <div>
                <p className='p-base'>Toon overheidslaag:</p>
                <div className='w-full min-w-[260px] pt-3'>
                  {local?.value === 'alle' && (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                            >
                              <span className='p-base-bold inline text-left text-green-500'>
                                Alle
                              </span>
                            </div>
                            <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } z-10 h-5 w-5 text-white`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Provinciaal</span>
                              </div>
                            </DisclosureButton>

                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Nationaal</span>
                              </div>
                            </DisclosureButton>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {local?.value === 'Nationaal' && (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                            >
                              <span className='p-base-bold inline text-left text-green-500'>
                                Nationaal
                              </span>
                            </div>
                            <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } z-10 h-5 w-5 text-white`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Provinciaal</span>
                              </div>
                            </DisclosureButton>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {local?.value === 'Provinciaal' && (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                            >
                              <span className='p-base-bold inline text-left text-green-500'>
                                Provinciaal
                              </span>
                            </div>
                            <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } z-10 h-5 w-5 text-white`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Nationaal</span>
                              </div>
                            </DisclosureButton>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                  {local?.value === 'Gemeentelijk' && (
                    <Disclosure as='div'>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
                            >
                              <span className='p-base-bold inline text-left text-green-500'>
                                Gemeentelijk
                              </span>
                            </div>
                            <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } z-10 h-5 w-5 text-white`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Provinciaal</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                                <span className='p-base block truncate pl-3'>Nationaal</span>
                              </div>
                            </DisclosureButton>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </div>
              </div>
            </div>

            {/* Every category is rendered so crawlers see all instruments; only the open one shows. */}
            {visibleCategories.map((category) => (
              <div key={category} hidden={category !== selectedTab}>
                <TabLayout
                  category={instrumentsByCategory[category]}
                  selected={category}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
