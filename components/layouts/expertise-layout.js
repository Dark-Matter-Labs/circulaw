'use client';
import ExplinationText from '../expertise-page/explination-text';
import TabButton from '../expertise-page/tab-button';
import TabLayout from '../expertise-page/tab-layout';
import OverviewPageHeader from '../theme-page/overview-page-header';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronUp } from '@tabler/icons-react';
import { useEffect, useState, useTransition } from 'react';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import { usePathname } from 'next/navigation';

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
          <div className='h-[310px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
            <OverviewPageHeader
              thema={props.thema}
              productChain={props.transitionAgenda}
              title={props.title}
              page='samenhang'
            />
          </div>
          {/* DESKTOP */}
          <div className='hidden sm:flex max-w-[1280px]  pb-10 global-margin'>
            <div className='max-w-[880px] lg:min-w-[880px] flex-col justify-start'>
              <div className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5 '>
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

              <div className='flex flex-ro items-center h-11'>
                <div className='basis-1/2 ml-3 flex justify-end pr-3'>
                  <div className='p-2xs-bold'>Toon:</div>
                </div>
                <div className='basis-1/2 mr-3 flex flex-row items-center justify-between p-xs font-medium max-w-[413px]'>
                  <div className='mr-4 w-[60px]'>
                    <input
                      type='radio'
                      name='filter'
                      value='alle'
                      id='alle'
                      checked={local?.value === 'alle'}
                      onChange={() => handleRadioButton('alle')}
                      className='mr-2 text-black border-black border-2 h-4 w-4 focus:ring-black focus:ring-2 cursor-pointer bg-none'
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
                      className='mr-2 text-green-200 border-black border-2 h-4 w-4 focus:ring-green-200 focus:ring-2 cursor-pointer bg-none'
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
                      className='mr-2 text-green-400 border-black border-2 h-4 w-4 focus:ring-green-400 focus:ring-2 cursor-pointer bg-none'
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
                      className='mr-2 text-green-600 border-black border-2 h-4 w-4 focus:ring-green-600 focus:ring-2 cursor-pointer bg-none'
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
            <div className='-mt-12 flex overflow-x-scroll snap-x snap-mandatory no-scrollbar sm:hidden'>
              <div className='flex gap-x-2 h-12'>
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
                            } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate`}
                            >
                              <span className='inline text-left p-base-bold text-green-500'>
                                Alle
                              </span>
                            </div>
                            <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } h-5 w-5 text-white z-10`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Provinciaal</span>
                              </div>
                            </DisclosureButton>

                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Nationaal</span>
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
                            } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate`}
                            >
                              <span className='inline text-left p-base-bold text-green-500'>
                                Nationaal
                              </span>
                            </div>
                            <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } h-5 w-5 text-white z-10`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Provinciaal</span>
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
                            } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate`}
                            >
                              <span className='inline text-left p-base-bold text-green-500'>
                                Provinciaal
                              </span>
                            </div>
                            <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } h-5 w-5 text-white z-10`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Gemeentelijk')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Nationaal</span>
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
                            } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                          >
                            <div
                              className={`${
                                open ? 'rounded-tl-cl' : 'rounded-l-cl'
                              } h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate`}
                            >
                              <span className='inline text-left p-base-bold text-green-500'>
                                Gemeentelijk
                              </span>
                            </div>
                            <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                              <IconChevronUp
                                className={`${
                                  open ? '' : 'rotate-180 transform'
                                } h-5 w-5 text-white z-10`}
                              />
                            </div>
                          </DisclosureButton>
                          <DisclosurePanel>
                            <DisclosureButton as='div' onClick={() => handleRadioButton('alle')}>
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Alle</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Provinciaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Provinciaal</span>
                              </div>
                            </DisclosureButton>
                            <DisclosureButton
                              as='div'
                              onClick={() => handleRadioButton('Nationaal')}
                            >
                              <div className='bg-gray-100 w-full text-gray-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                                <span className='block pl-3 truncate p-base'>Nationaal</span>
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
