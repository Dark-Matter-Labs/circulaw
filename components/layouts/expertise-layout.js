'use client';

import { useEffect, useState, useTransition } from 'react';

import { usePathname } from 'next/navigation';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import { IconChevronUp } from '@tabler/icons-react';

import ExplinationText from '../expertise-page/explination-text';
import TabButton from '../expertise-page/tab-button';
import TabLayout from '../expertise-page/tab-layout';
import OverviewPageHeader from '../theme-page/overview-page-header';

export default function ExpertiseLayout({ expertiseData, ...props }) {
  const [beleid, setBeleid] = useState([]);
  const [inkoop, setInkoop] = useState([]);
  const [grondpositie, setGrondpositie] = useState([]);
  const [subsidie, setSubsidie] = useState([]);
  const [fiscaal, setFiscaal] = useState([]);

  const [numBeleid, setNumBeleid] = useState();
  const [numInkoop, setNumInkoop] = useState();
  const [numGronposirie, setNumGronposirie] = useState();
  const [isPending, startTransition] = useTransition();

  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    if (expertiseData.filter((i) => i.beleid === true).length > 0 && selectedTab === undefined) {
      setSelectedTab('beleid');
    } else if (
      expertiseData.filter((i) => i.beleid === true).length === 0 &&
      selectedTab === undefined
    )
      setSelectedTab('inkoop');
  }, [expertiseData, selectedTab]);

  const [local, setLocal] = useState({ value: 'alle' });
  const pathname = usePathname();
  const { CustomEvent } = usePiwikPro();

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      (Object.values(window.localStorage).includes('beleid') ||
        Object.values(window.localStorage).includes('inkoop') ||
        Object.values(window.localStorage).includes('grondpositie') ||
        Object.values(window.localStorage).includes('subsidie') ||
        Object.values(window.localStorage).includes('fiscaal'))
    ) {
      let selectedTab = localStorage.getItem('selectedTab');
      let keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
      }
      setSelectedTab(selectedTab);
    }
  }, []);

  const numGrondpositieStrategie = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('strategie'),
  ).length;
  const numGrondpositieSelectiecriteria = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('selectiecriteria'),
  ).length;
  const numGrondpositieGunningscriteria = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('gunningscriteria'),
  ).length;
  const numGrondpositieContracteisen = grondpositie.filter((instrument) =>
    instrument?.grondpositieSubCategory?.includes('contracteisen'),
  ).length;

  const numBeleidStrategie = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('strategie'),
  ).length;
  const numBeleidBeleidsdoorwerking = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('beleidsdoorwerking'),
  ).length;
  const numBeleidBeleidsuitvoering = beleid.filter((instrument) =>
    instrument?.beleidSubCategory?.includes('beleidsuitvoering'),
  ).length;

  const numBeleidNotBouw = beleid.length;
  const numGronposirieNotBouw = grondpositie.length;

  const numInkoopBeleid = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('beleid'),
  ).length;
  const numInkoopStrategy = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('strategie'),
  ).length;
  const numInkoopBijzondereProcedures = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('bijzondere-procedures'),
  ).length;
  const numInkoopselectiecriteria = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('selectiecriteria'),
  ).length;
  const numInkoopGunningscriteria = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('gunningscriteria'),
  ).length;
  const numInkoopContracteisen = inkoop.filter((instrument) =>
    instrument?.inkoopSubCategory?.includes('contracteisen'),
  ).length;

  useEffect(() => {
    setNumBeleid(numBeleidStrategie + numBeleidBeleidsdoorwerking + numBeleidBeleidsuitvoering);
    setNumInkoop(
      numInkoopBeleid +
        numInkoopStrategy +
        numInkoopBijzondereProcedures +
        numInkoopselectiecriteria +
        numInkoopGunningscriteria +
        numInkoopContracteisen,
    );
    setNumGronposirie(
      numGrondpositieStrategie +
        numGrondpositieSelectiecriteria +
        numGrondpositieGunningscriteria +
        numGrondpositieContracteisen,
    );
  }, [
    numBeleidStrategie,
    numBeleidBeleidsdoorwerking,
    numBeleidBeleidsuitvoering,
    numInkoopBeleid,
    numInkoopStrategy,
    numInkoopBijzondereProcedures,
    numInkoopselectiecriteria,
    numInkoopGunningscriteria,
    numInkoopContracteisen,
    numGrondpositieStrategie,
    numGrondpositieSelectiecriteria,
    numGrondpositieGunningscriteria,
    numGrondpositieContracteisen,
  ]);

  useEffect(() => {
    // SET INITIAL VALUES
    if (selectedTab === 'beleid') {
      setInkoop(expertiseData?.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selectedTab === 'inkoop') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selectedTab === 'grondpositie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selectedTab === 'subsidie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selectedTab === 'fiscaal') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    }

    if (selectedTab === 'beleid') {
      if (local?.value === 'alle') {
        setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      } else if (local?.value === 'Gemeentelijk') {
        setBeleid(
          expertiseData.filter(
            (instrument) =>
              instrument.beleid === true && instrument.overheidslaag.includes('Gemeentelijk'),
          ),
        );
      } else if (local?.value === 'Provinciaal') {
        setBeleid(
          expertiseData.filter(
            (instrument) =>
              instrument.beleid === true && instrument.overheidslaag.includes('Provinciaal'),
          ),
        );
      } else if (local?.value === 'Nationaal') {
        setBeleid(
          expertiseData.filter(
            (instrument) =>
              instrument.beleid === true && instrument.overheidslaag.includes('Nationaal'),
          ),
        );
      }
    } else if (selectedTab === 'inkoop') {
      if (local?.value === 'alle') {
        setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      } else if (local?.value === 'Gemeentelijk') {
        setInkoop(
          expertiseData.filter(
            (instrument) =>
              instrument.inkoop === true && instrument.overheidslaag.includes('Gemeentelijk'),
          ),
        );
      } else if (local?.value === 'Provinciaal') {
        setInkoop(
          expertiseData.filter(
            (instrument) =>
              instrument.inkoop === true && instrument.overheidslaag.includes('Provinciaal'),
          ),
        );
      } else if (local?.value === 'Nationaal') {
        setInkoop(
          expertiseData.filter(
            (instrument) =>
              instrument.inkoop === true && instrument.overheidslaag.includes('Nationaal'),
          ),
        );
      }
    } else if (selectedTab === 'grondpositie') {
      if (local?.value === 'alle') {
        setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      } else if (local?.value === 'Gemeentelijk') {
        setGrondpositie(
          expertiseData.filter(
            (instrument) =>
              instrument.grondpositie === true && instrument.overheidslaag.includes('Gemeentelijk'),
          ),
        );
      } else if (local?.value === 'Provinciaal') {
        setGrondpositie(
          expertiseData.filter(
            (instrument) =>
              instrument.grondpositie === true && instrument.overheidslaag.includes('Provinciaal'),
          ),
        );
      } else if (local?.value === 'Nationaal') {
        setGrondpositie(
          expertiseData.filter(
            (instrument) =>
              instrument.grondpositie === true && instrument.overheidslaag.includes('Nationaal'),
          ),
        );
      }
    } else if (selectedTab === 'subsidie') {
      if (local?.value === 'alle') {
        setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      } else if (local?.value === 'Gemeentelijk') {
        setSubsidie(
          expertiseData.filter(
            (instrument) =>
              instrument.subsidie === true && instrument.overheidslaag.includes('Gemeentelijk'),
          ),
        );
      } else if (local?.value === 'Provinciaal') {
        setSubsidie(
          expertiseData.filter(
            (instrument) =>
              instrument.subsidie === true && instrument.overheidslaag.includes('Provinciaal'),
          ),
        );
      } else if (local?.value === 'Nationaal') {
        setSubsidie(
          expertiseData.filter(
            (instrument) =>
              instrument.subsidie === true && instrument.overheidslaag.includes('Nationaal'),
          ),
        );
      }
    } else if (selectedTab === 'fiscaal') {
      if (local?.value === 'alle') {
        setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
      } else if (local?.value === 'Gemeentelijk') {
        setFiscaal(
          expertiseData.filter(
            (instrument) =>
              instrument.fiscaal === true && instrument.overheidslaag.includes('Gemeentelijk'),
          ),
        );
      } else if (local?.value === 'Provinciaal') {
        setFiscaal(
          expertiseData.filter(
            (instrument) =>
              instrument.fiscaal === true && instrument.overheidslaag.includes('Provinciaal'),
          ),
        );
      } else if (local?.value === 'Nationaal') {
        setFiscaal(
          expertiseData.filter(
            (instrument) =>
              instrument.fiscaal === true && instrument.overheidslaag.includes('Nationaal'),
          ),
        );
      }
    }
  }, [local?.value, selectedTab, expertiseData]);

  // change filters
  function handleRadioButton(value) {
    startTransition(() => {
      setLocal({
        value: value,
      });
    });
  }

  function handleTabButton(value) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedTab', value);
      startTransition(() => {
        setSelectedTab(value);
      });
      CustomEvent.trackEvent('Categorie Tab Change', pathname, value);
    }
  }
  return (
    <>
      <div className='sm:bg-gradient-to-t sm:from-[#F8FAF8] sm:to-[#F8FAF8]'>
        <div className='-mt-10'>
          <div className='h-[310px] bg-green-500 bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 sm:mx-0 sm:h-[360px]'>
            <OverviewPageHeader
              thema={props.thema}
              productChain={props.transitionAgenda}
              title={props.title}
              page='samenhang'
            />
          </div>
          {/* DESKTOP */}
          <div className='global-margin hidden max-w-[1280px] pb-10 sm:flex'>
            <div className='max-w-[880px] flex-col justify-start lg:min-w-[880px]'>
              <div className='z-5 -mt-12 flex h-12 flex-row justify-start gap-x-3 sm:-mt-[52px] sm:h-[52px]'>
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

              <ExplinationText selected={selectedTab} />

              <div className='flex-ro flex h-11 items-center'>
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
              {selectedTab === 'beleid' && (
                <TabLayout
                  category={beleid}
                  selected={selectedTab}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              )}
              {selectedTab === 'inkoop' && (
                <TabLayout
                  category={inkoop}
                  selected={selectedTab}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              )}
              {selectedTab === 'grondpositie' && (
                <TabLayout
                  category={grondpositie}
                  selected={selectedTab}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              )}
              {selectedTab === 'subsidie' && (
                <TabLayout
                  category={subsidie}
                  selected={selectedTab}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              )}
              {selectedTab === 'fiscaal' && (
                <TabLayout
                  category={fiscaal}
                  selected={selectedTab}
                  transitionAgenda={props.transitionAgenda}
                  isPending={isPending}
                />
              )}
            </div>
          </div>

          {/* MOBILE */}
          <div className='sm:hidden'>
            <div className='no-scrollbar -mt-12 flex snap-x snap-mandatory overflow-x-scroll sm:hidden'>
              <div className='flex h-12 gap-x-2'>
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

            <ExplinationText selected={selectedTab} />

            <div className='pb-4'>
              <div className='mx-4'>
                <p className='p-base'>Toon overheidslaag:</p>
                <div className='w-full min-w-[260px] pt-3'>
                  {local?.value === 'alle' && (
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
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
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
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
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
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
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className={`${
                              open ? 'rounded-t-cl' : 'rounded-cl'
                            } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
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

            {/* DISPLAY INSTRUMENTS MOBILE */}
            {selectedTab === 'beleid' && (
              <TabLayout
                category={beleid}
                selected={selectedTab}
                transitionAgenda={props.transitionAgenda}
                isPending={isPending}
              />
            )}
            {selectedTab === 'inkoop' && (
              <TabLayout
                category={inkoop}
                selected={selectedTab}
                transitionAgenda={props.transitionAgenda}
                isPending={isPending}
              />
            )}
            {selectedTab === 'grondpositie' && (
              <TabLayout
                category={grondpositie}
                selected={selectedTab}
                transitionAgenda={props.transitionAgenda}
                isPending={isPending}
              />
            )}
            {selectedTab === 'subsidie' && (
              <TabLayout
                category={subsidie}
                selected={selectedTab}
                transitionAgenda={props.transitionAgenda}
                isPending={isPending}
              />
            )}
            {selectedTab === 'fiscaal' && (
              <TabLayout
                category={fiscaal}
                selected={selectedTab}
                transitionAgenda={props.transitionAgenda}
                isPending={isPending}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
