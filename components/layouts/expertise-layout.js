import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';

import OverviewPageHeader from '../overview-page-header';
import DisplayInstruments from '../expertise-page/display-instruments';
import ExpertisePageInstrument from '../expertise-page/expertise-page-instrument';
import TabButton from '../expertise-page/tab-button';
import { Disclosure } from '@headlessui/react';

export default function ExpertiseLayout({ expertiseData, ...props }) {
  const [beleid, setBeleid] = useState([]);
  const [inkoop, setInkoop] = useState([]);
  const [grondpositie, setGrondpositie] = useState([]);
  const [subsidie, setSubsidie] = useState([]);
  const [fiscaal, setFiscaal] = useState([]);
  const [selected, setSelected] = useState('beleid');
  const [local, setLocal] = useState({ value: 'alle' });
  const [numBeleid, setNumBeleid] = useState();
  const [numInkoop, setNumInkoop] = useState();
  const [numGronposirie, setNumGronposirie] = useState();

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
  const numGronposirieNotBouw = grondpositie.length

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
    if (selected === 'beleid') {
      setInkoop(expertiseData?.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'inkoop') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'grondpositie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'subsidie') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (selected === 'fiscaal') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    }

    // BELEID
    if (local?.value === 'alle' && selected === 'beleid') {
      setBeleid(expertiseData.filter((instrument) => instrument.beleid === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'beleid') {
      setBeleid(
        expertiseData.filter(
          (instrument) =>
            instrument.beleid === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // INKOOP
    if (local?.value === 'alle' && selected === 'inkoop') {
      setInkoop(expertiseData.filter((instrument) => instrument.inkoop === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'inkoop') {
      setInkoop(
        expertiseData.filter(
          (instrument) =>
            instrument.inkoop === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // GRONDPOSITIE
    if (local?.value === 'alle' && selected === 'grondpositie') {
      setGrondpositie(expertiseData.filter((instrument) => instrument.grondpositie === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'grondpositie') {
      setGrondpositie(
        expertiseData.filter(
          (instrument) =>
            instrument.grondpositie === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // SUBSIDIE
    if (local?.value === 'alle' && selected === 'subsidie') {
      setSubsidie(expertiseData.filter((instrument) => instrument.subsidie === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'subsidie') {
      setSubsidie(
        expertiseData.filter(
          (instrument) =>
            instrument.subsidie === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }

    // FISCAL
    if (local?.value === 'alle' && selected === 'fiscaal') {
      setFiscaal(expertiseData.filter((instrument) => instrument.fiscaal === true));
    } else if (local?.value === 'Gemeentelijk' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Gemeentelijk'),
        ),
      );
    } else if (local?.value === 'Provinciaal' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Provinciaal'),
        ),
      );
    } else if (local?.value === 'Nationaal' && selected === 'fiscaal') {
      setFiscaal(
        expertiseData.filter(
          (instrument) =>
            instrument.fiscaal === true && instrument.overheidslaag.includes('Nationaal'),
        ),
      );
    }
  }, [local.value, selected, expertiseData]);

  // change filters
  function handleRadioButton(value) {
    setLocal({
      value: value,
    });
  }

  return (
    <>
      <div className='sm:bg-gradient-to-t sm:from-[#F8FAF8] sm:to-[#F8FAF8]'>
        <div className='-mt-10'>
        <div className='h-[310px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
          <OverviewPageHeader props={props} page='samenhang' />
          <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 sm:justify-items-end mb-10 sm:mb-0'>
            <div className='col-span-2'>
              <p className=' p-lg text-grey-800 pb-6'>{props.p1}</p>
            </div>
          </div>
          </div>
          {/* DESKTOP */}
          <div className='max-w-[880px] hidden sm:block pb-10 global-margin 2xl:ml-60'>
            <div className='flex flex-row gap-x-3 justify-start h-12 sm:h-[52px] -mt-12 sm:-mt-[52px] z-5 '>
              <TabButton
                selected={selected}
                onClick={() => {
                  setSelected('beleid');
                  handleRadioButton('alle');
                }}
                numInstrument={numBeleid}
                numInstruments2={numBeleidNotBouw}
                transitionAgenda={props.transitionAgenda}
                name='beleid'
              />
              <TabButton
                selected={selected}
                onClick={() => {
                  setSelected('inkoop');
                  handleRadioButton('alle');
                }}
                numInstrument={numInkoop}
                transitionAgenda={props.transitionAgenda}
                name='inkoop'
              />
              {props.thema !== 'circulaire-matrasketen' && 
              <TabButton
                selected={selected}
                onClick={() => {
                  setSelected('grondpositie');
                  handleRadioButton('alle');
                }}
                numInstrument={numGronposirie}
                numInstruments2={numGronposirieNotBouw}
                transitionAgenda={props.transitionAgenda}
                name='grondpositie'
              />}
              <TabButton
                selected={selected}
                onClick={() => {
                  setSelected('subsidie');
                  handleRadioButton('alle');
                }}
                numInstrument={subsidie.length}
                transitionAgenda={props.transitionAgenda}
                name='subsidie'
              />
              <TabButton
                selected={selected}
                onClick={() => {
                  setSelected('fiscaal');
                  handleRadioButton('alle');
                }}
                numInstrument={fiscaal.length}
                transitionAgenda={props.transitionAgenda}
                name='fiscaal'
              />
            </div>
            <div className='bg-white'>
              <div className='py-6 ml-3'>
                {selected === 'beleid' && (
                  <p className='p-base'>
                    BELEID Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                    bezit.
                  </p>
                )}
                {selected === 'inkoop' && (
                  <p className='p-base'>
                    INKOOP Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                    bezit.
                  </p>
                )}
                {selected === 'grondpositie' && (
                  <p className='p-base'>
                    GRONDPOSITIE Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen
                    grond bezit.
                  </p>
                )}
                {selected === 'subsidie' && (
                  <p className='p-base'>
                    SUBSIDIE Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                    bezit.
                  </p>
                )}
                {selected === 'fiscaal' && (
                  <p className='p-base'>
                    FISCAL Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                    bezit.
                  </p>
                )}
              </div>
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
                      checked={local?.value === 'alle'}
                      onChange={() => handleRadioButton('alle')}
                      className='mr-2 text-black border-black border-2 h-4 w-4 focus:ring-black focus:ring-2 cursor-pointer bg-none'
                    />
                    <label className='p-2xs-semibold'>Alle</label>
                  </div>
                  <div className='mr-4 w-[115px]'>
                    <input
                      type='radio'
                      name='filter'
                      value='Gemeentelijk'
                      checked={local?.value === 'Gemeentelijk'}
                      onChange={() => handleRadioButton('Gemeentelijk')}
                      className='mr-2 text-green-200 border-black border-2 h-4 w-4 focus:ring-green-200 focus:ring-2 cursor-pointer bg-none'
                    />
                    <label className='p-2xs-semibold'>Gemeentelijk</label>
                  </div>
                  <div className='mr-4 w-[100px]'>
                    <input
                      type='radio'
                      name='filter'
                      value='Provinciaal'
                      checked={local?.value === 'Provinciaal'}
                      onChange={() => handleRadioButton('Provinciaal')}
                      className='mr-2 text-green-400 border-black border-2 h-4 w-4 focus:ring-green-400 focus:ring-2 cursor-pointer bg-none'
                    />
                    <label className='p-2xs-semibold'>Provinciaal</label>
                  </div>
                 
                  
                  <div className='w-[90px]'>
                    <input
                      type='radio'
                      name='filter'
                      value='Nationaal'
                      checked={local?.value === 'Nationaal'}
                      onChange={() => handleRadioButton('Nationaal')}
                      className='mr-2 text-green-600 border-black border-2 h-4 w-4 focus:ring-green-600 focus:ring-2 cursor-pointer bg-none'
                    />
                    <label className='p-2xs-semibold'>Nationaal</label>
                  </div>
                </div>
              </div>
              {/* DISPLAY INSTRUMENTS DESKTOP */}
              <div className='flex flex-col'>
                <ul>
                {selected === 'beleid' && props.transitionAgenda === 'bouw' && (
                  <DisplayInstruments category={beleid} categoryName='beleid' />
                )}
                </ul>
                <ul>
                  {selected === 'beleid' &&
                    props.transitionAgenda !== 'bouw' &&
                    beleid.map((instrument) => (
                      <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                    ))}
                </ul>
                <ul>
                {selected === 'inkoop' && (
                  <DisplayInstruments category={inkoop} categoryName='inkoop' />
                )}</ul>
                <ul>
                {selected == 'grondpositie' && props.transitionAgenda === 'bouw' && (
                  <DisplayInstruments category={grondpositie} categoryName='grondpositie' />
                )}
                </ul>
                <ul>
                  {selected === 'grondpositie' &&
                    props.transitionAgenda !== 'bouw' &&
                    grondpositie.map((instrument) => (
                      <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                    ))}
                </ul>
                <ul className=''>
                  {selected === 'subsidie' &&
                    subsidie.map((instrument) => (
                      <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                    ))}
                </ul>
                <ul>
                  {selected === 'fiscaal' &&
                    fiscaal.map((instrument) => (
                      <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                    ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className='sm:hidden'>
            <div className='-mt-12 flex overflow-x-scroll snap-x snap-mandatory no-scrollbar sm:hidden'>
              <div className='flex gap-x-2 h-12'>
                <TabButton
                  selected={selected}
                  onClick={() => {
                    setSelected('beleid');
                    handleRadioButton('alle');
                  }}
                  numInstrument={numBeleid}
                  numInstruments2={numBeleidNotBouw}
                  transitionAgenda={props.transitionAgenda}
                  name='beleid'
                />
                <TabButton
                  selected={selected}
                  onClick={() => {
                    setSelected('inkoop');
                    handleRadioButton('alle');
                  }}
                  numInstrument={numInkoop}
                  transitionAgenda={props.transitionAgenda}
                  name='inkoop'
                />
                {props.thema !== 'circulaire-matrasketen' && 
                <TabButton
                  selected={selected}
                  onClick={() => {
                    setSelected('grondpositie');
                    handleRadioButton('alle');
                  }}
                  numInstrument={numGronposirie}
                  numInstruments2={numGronposirieNotBouw}
                  transitionAgenda={props.transitionAgenda}
                  name='grondpositie'
                />}
                <TabButton
                  selected={selected}
                  onClick={() => {
                    setSelected('subsidie');
                    handleRadioButton('alle');
                  }}
                  numInstrument={subsidie.length}
                  transitionAgenda={props.transitionAgenda}
                  name='subsidie'
                />
                <TabButton
                  selected={selected}
                  onClick={() => {
                    setSelected('fiscaal');
                    handleRadioButton('alle');
                  }}
                  numInstrument={fiscaal.length}
                  transitionAgenda={props.transitionAgenda}
                  name='fiscaal'
                />
              </div>
            </div>
            <div className='mt-5 mb-4 global-margin'>
              {selected === 'beleid' && (
                <p className='p-base'>
                  BELEID Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                  bezit.
                </p>
              )}
              {selected === 'inkoop' && (
                <p className='p-base'>
                  INKOOP Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                  bezit.
                </p>
              )}
              {selected === 'grondpositie' && (
                <p className='p-base'>
                  GRONDPOSITIE Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen
                  grond bezit.
                </p>
              )}
              {selected === 'subsidie' && (
                <p className='p-base'>
                  SUBSIDIE Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                  bezit.
                </p>
              )}
              {selected === 'fiscaal' && (
                <p className='p-base'>
                  FISCAL Pas deze Instrumenten toe, ook wanneer de organisatie geen eigen grond
                  bezit.
                </p>
              )}
            </div>
            <div className='pb-4'>
              <div className='mx-4'>
                <p className='p-base'>Toon overheidslaag:</p>
                <div className='w-full min-w-[260px] pt-3'>
                  {local.value === 'alle' && 
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            open ? 'rounded-t-cl' : 'rounded-cl'
                          } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                        >
                          <div
                            className={`${
                              open ? 'rounded-tl-cl' : 'rounded-l-cl'
                            } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                          >
                            <span className='inline text-left p-base-bold text-green-500'>Alle</span>
                          </div>
                          <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                            <ChevronUpIcon
                              className={`${
                                open ? '' : 'rotate-180 transform'
                              } h-5 w-5 text-white z-10`}
                            />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Nationaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Nationaal</span>
                              
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Provinciaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Provinciaal</span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Gemeentelijk')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                            </div>
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>}
                  {local.value === 'Nationaal' && 
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            open ? 'rounded-t-cl' : 'rounded-cl'
                          } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                        >
                          <div
                            className={`${
                              open ? 'rounded-tl-cl' : 'rounded-l-cl'
                            } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                          >
                            <span className='inline text-left p-base-bold text-green-500'>Nationaal</span>
                          </div>
                          <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                            <ChevronUpIcon
                              className={`${
                                open ? '' : 'rotate-180 transform'
                              } h-5 w-5 text-white z-10`}
                            />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('alle')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Alle</span>
                              
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Provinciaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Provinciaal</span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Gemeentelijk')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                            </div>
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>}
                  {local.value === 'Provinciaal' && 
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            open ? 'rounded-t-cl' : 'rounded-cl'
                          } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                        >
                          <div
                            className={`${
                              open ? 'rounded-tl-cl' : 'rounded-l-cl'
                            } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                          >
                            <span className='inline text-left p-base-bold text-green-500'>Provinciaal</span>
                          </div>
                          <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                            <ChevronUpIcon
                              className={`${
                                open ? '' : 'rotate-180 transform'
                              } h-5 w-5 text-white z-10`}
                            />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('alle')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Alle</span>
                              
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Nationaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Nationaal</span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Gemeentelijk')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Gemeentelijk</span>
                            </div>
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>}
                  {local.value === 'Gemeentelijk' && 
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`${
                            open ? 'rounded-t-cl' : 'rounded-cl'
                          } text-black bg-green-600 hover:text-green-600 flex justify-between items-center border border-green-600 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-600 focus-visible:ring-opacity-75`}
                        >
                          <div
                            className={`${
                              open ? 'rounded-tl-cl' : 'rounded-l-cl'
                            } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                          >
                            <span className='inline text-left p-base-bold text-green-500'>Gemeentelijk</span>
                          </div>
                          <div className='w-1/12 px-5 h-full pr-5 bg-green-600 grid items-center justify-center rounded-r-cl border border-green-600'>
                            <ChevronUpIcon
                              className={`${
                                open ? '' : 'rotate-180 transform'
                              } h-5 w-5 text-white z-10`}
                            />
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('alle')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Alle</span>
                              
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Nationaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Nationaal</span>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Button as='div' onClick={() => handleRadioButton('Provinciaal')}>
                            <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-600 h-10 flex items-center hover:text-green-600'>
                              <span className='block pl-3 truncate p-base'>Provinciaal</span>
                            </div>
                          </Disclosure.Button>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>}
                </div>
              </div>
            </div>

            {/* DISPLAY INSTRUMENTS MOBILE */}
            <div className='flex flex-col'>
              <ul>
              {selected === 'beleid' && props.transitionAgenda === 'bouw' && (
                <DisplayInstruments category={beleid} categoryName='beleid' />
              )}
              </ul>
              <ul>
                {selected === 'beleid' &&
                  props.transitionAgenda !== 'bouw' &&
                  beleid.map((instrument) => (
                    <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                  ))}
              </ul>
              <ul>
              {selected === 'inkoop' && (
                <DisplayInstruments category={inkoop} categoryName='inkoop' />
              )}
              </ul>
              <ul>
              {selected == 'grondpositie' && props.transitionAgenda === 'bouw' && (
                <DisplayInstruments category={grondpositie} categoryName='grondpositie' />
              )}
              </ul>
              <ul>
              {selected === 'grondpositie' && props.transitionAgenda !== 'bouw' && (
                grondpositie.map((instrument) => (
                  <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                ))
              )}
              </ul>
              <ul className=''>
                {selected === 'subsidie' &&
                  subsidie.map((instrument) => (
                    <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                  ))}
              </ul>
              <ul>
                {selected === 'fiscaal' &&
                  fiscaal.map((instrument) => (
                    <ExpertisePageInstrument key={instrument.titel} instrument={instrument} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
