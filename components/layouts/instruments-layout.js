import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import createPersistedState from 'use-persisted-state';
import { SearchIcon, XIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import Fuse from 'fuse.js';

import {
  overheidslaag,
  juridischeHaalbaarheid,
  juridischInvloed,
  extraContent,
  expertise,
  rLadder,
} from '@/utils/data-filter';
import SearchFilter from '/components/search-filter';
import PolicyList from '/components/policy-list';
import OverviewPageHeader from '../overview-page-header';
// creating objects for persisting values
const useSelectedState = createPersistedState('selected');

export default function InstrumentsLayout({ ...props }) {
  const data = props.instruments;

  // creating references to access child component functions
  const expertiseFilterRef = useRef();
  const wettelijkFilterRef = useRef();
  const juridischeHaalbaarheidFilterRef = useRef();
  const juridischInvloedFilterRef = useRef();
  const rLadderFilterRef = useRef();
  const extraContentFilterRef = useRef();

  const [laws, setLaws] = useState(data);

  const [selected, setSelected] = useSelectedState({
    expertise: [],
    overheidslaag: [],
    juridischeHaalbaarheid: [],
    juridischInvloed: [],
    rLadder: [],
    extraContent: [],
  });

  const dummyArray = [];
  const allSelectedValues = dummyArray.concat(
    selected.expertise,
    selected.overheidslaag,
    selected.juridischeHaalbaarheid,
    selected.juridischInvloed,
    selected.rLadder,
    selected.extraContent,
  );

  // autocomplete variables and funciton
  const [selectedResults, setSelectedResults] = useState(null);
  const [firstLaw, setFirstLaw] = useState(null);

  const firstLawFunction = useCallback(() => {
    const firstLaw = selectedResults?.[0];
    return firstLaw;
  }, [selectedResults]);

  const [numberOfLaws, setNumberOfLaws] = useState(props.totalNumberOfLaws);

  // dynamic filter numbers

  // const [numberOfEuropees, setNumberOfEuropee] = useState(0);
  const [numberOfNationaal, setNumberOfNationaal] = useState(0);
  const [numberOfProvinciaal, setNumberOfProvinciaal] = useState(0);
  const [numberOfGemeentelijk, setNumberOfGemeentelijk] = useState(0);

  const [numBeleid, setNumBeleid] = useState();
  const [numInkoop, setNumInkoop] = useState();
  const [numGrondpositie, setNumGrondpositie] = useState();
  const [numSubsidie, setNumSubsidie] = useState();
  const [numFiscaal, setNumFiscaal] = useState();

  const [numberOfJHLow, setNumberOfJ1] = useState(0);
  const [numberOfJHMedium, setNumberOfJ2] = useState(0);
  const [numberOfJHHigh, setNumberOfJ3] = useState(0);

  const [numberOfJILow, setNumberOfJILow] = useState(0);
  const [numberOfJIMedium, setNumberOfJIMedium] = useState(0);
  const [numberOfJIHigh, setNumberOfJIHigh] = useState(0);

  const [numberOfR1, setNumberOfR1] = useState(0);
  const [numberOfR2, setNumberOfR2] = useState(0);
  const [numberOfR3, setNumberOfR3] = useState(0);
  const [numberOfR4, setNumberOfR4] = useState(0);
  const [numberOfR5, setNumberOfR5] = useState(0);
  const [numberOfR6, setNumberOfR6] = useState(0);

  const [numberOfLeidraad, setNumberOfLeidraad] = useState(0);
  const [numberOfVoorbeeld, setNumberOfVoorbeeld] = useState(0);

  const [searchValue, setSearchValue] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFilters = (checkboxState, key) => {
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;
    setSelected(newFilters);
  };

  const reset = () => {
    setSelected({
      expertise: [],
      overheidslaag: [],
      juridischeHaalbaarheid: [],
      juridischInvloed: [],
      rLadder: [],
      extraContent: [],
    });

    expertiseFilterRef.current.reset();
    wettelijkFilterRef.current.reset();
    juridischeHaalbaarheidFilterRef.current.reset();
    juridischInvloedFilterRef.current.reset();
    rLadderFilterRef.current.reset();
    extraContentFilterRef.current.reset();

    setFirstLaw(null);
    setSearchValue('');
  };

  // effect to check for filtering and update data
  useEffect(() => {
    // added check for data to have been retrieved here
    if (data) {
      let filteredLaws = data;

      filteredLaws?.map((law) => {
        if (law.expertise[0] === true) {
          law.expertise[0] = 'Beleid';
        }
        if (law.expertise[1] === true) {
          law.expertise[1] = 'Inkoop';
        }
        if (law.expertise[2] === true) {
          law.expertise[2] = 'Grondpositie';
        }
        if (law.expertise[3] === true) {
          law.expertise[3] = 'Subsidie';
        }
        if (law.expertise[4] === true) {
          law.expertise[4] = 'Fiscaal';
        }
      });

      let numBeleid = 0;
      let numInkoop = 0;
      let numGrondpositie = 0;
      let numSubsidie = 0;
      let numFiscaal = 0;

      // let numEuropee = 0;
      let numNationaal = 0;
      let numProvinciaal = 0;
      let numGemeentelijk = 0;

      let numLeidraad = 0;
      let numVoorbeeld = 0;

      let numJHLow = 0;
      let numJHMedium = 0;
      let numJHHigh = 0;

      let numR1 = 0;
      let numR2 = 0;
      let numR3 = 0;
      let numR4 = 0;
      let numR5 = 0;
      let numR6 = 0;

      let numJILow = 0;
      let numJIMedium = 0;
      let numJIHigh = 0;

      // FILTER LOGIC FOR MULTICHOICE ATTRIBUTES
      if (selected.expertise.length > 0) {
        if (selected.expertise?.includes('Beleid')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.expertise?.includes('Beleid');
          });
        }
        if (selected.expertise?.includes('Inkoop')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.expertise?.includes('Inkoop');
          });
        }
        if (selected.expertise?.includes('Grondpositie')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.expertise?.includes('Grondpositie');
          });
        }
        if (selected.expertise?.includes('Subsidie')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.expertise?.includes('Subsidie');
          });
        }
        if (selected.expertise?.includes('Fiscaal')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.expertise?.includes('Fiscaal');
          });
        }
      }

      if (selected.rLadder.length > 0) {
        if (selected.rLadder.includes('R1')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R1');
          });
        }
        if (selected.rLadder.includes('R2')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R2');
          });
        }
        if (selected.rLadder.includes('R3')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R3');
          });
        }
        if (selected.rLadder.includes('R4')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R4');
          });
        }
        if (selected.rLadder.includes('R5')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R5');
          });
        }
        if (selected.rLadder.includes('R6')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.rLadder.includes('R6');
          });
        }
      }

      if (selected.extraContent.length > 0) {
        if (selected.extraContent?.includes('Leidraad')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.extraContent?.includes('Leidraad');
          });
        }
        if (selected.extraContent?.includes('Voorbeeld')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.extraContent?.includes('Voorbeeld');
          });
        }
      }

      if (selected.overheidslaag.length > 0) {
        if (selected.overheidslaag.includes('Europees')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.overheidslaag.includes('Europees');
          });
        }
        if (selected.overheidslaag.includes('Nationaal')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.overheidslaag.includes('Nationaal');
          });
        }
        if (selected.overheidslaag.includes('Provinciaal')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.overheidslaag.includes('Provinciaal');
          });
        }
        if (selected.overheidslaag.includes('Gemeentelijk')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.overheidslaag.includes('Gemeentelijk');
          });
        }
      }

      // potential new filter logic but need to make dynamic counting work
      {
        /*
      if (selected.rLadder.length > 0) {
            let temparr = [];
            for (let i = 0; i < filteredLaws.length; i++) {
              if (filteredLaws[i].rLadder.some((rValue) => selected.rLadder.includes(rValue)) === true)
                temparr.push(filteredLaws[i]);
            }
            filteredLaws = temparr;
          }
        
    */
      }

      // FILTER LOGIC FOR SINGLE CHOICE ATTRIBUTES
      if (selected.juridischeHaalbaarheid?.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridischeHaalbaarheid.includes(element.juridischeHaalbaarheid);
        });
      }

      if (selected.juridischInvloed.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridischInvloed.includes(element.juridischInvloed);
        });
      }

      const fuse = new Fuse(filteredLaws, {
        keys: [
          { name: 'titel', weight: 1 },
          { name: 'subtitel', weight: 0.7 },
          // getFN gets all text in portable text as plaintext - this means that we search all text in the instrument
          { name: 'content', weight: 0.5 },
          { name: 'subrechtsgebied', weight: 0.5 },
          { name: 'artikel', weight: 0.5 },
          { name: 'citeertitel', weight: 0.5 },
        ],
        includeScore: true,
        threshold: 0.2,
        ignoreLocation: true,
        // shouldSort: true,
        // sortFn:(a,b) => a.score < b.score
      });

      const results = fuse.search(searchValue);
      const lawResults = searchValue ? results.map((result) => result.item) : filteredLaws;
      filteredLaws = lawResults;

      // const scores = results.map((result) => result.score);

      // setting values for autocomplete
      setSelectedResults(filteredLaws);
      firstLawFunction();

      // dynamically calculate filter numbers
      // NEED TO ADD CONDITION BASED ON THE FIRST VALUE SELECTED.
      // UPDATE FILTER NUMBERS ONLY FOR ATTRIBUTES THAT ARE NOT THE FIRST SELECTED ATTRUBUTE
      filteredLaws?.map((instrument) => {
        // add extra content
        if (instrument?.expertise?.includes('Beleid')) {
          numBeleid += 1;
        }
        if (instrument?.expertise?.includes('Inkoop')) {
          numInkoop += 1;
        }
        if (instrument?.expertise?.includes('Grondpositie')) {
          numGrondpositie += 1;
        }
        if (instrument?.expertise?.includes('Subsidie')) {
          numSubsidie += 1;
        }
        if (instrument?.expertise?.includes('Fiscaal')) {
          numFiscaal += 1;
        }

        if (instrument?.extraContent?.includes('Leidraad')) {
          numLeidraad += 1;
        }
        if (instrument?.extraContent?.includes('Voorbeeld')) {
          numVoorbeeld += 1;
        }

        //  if (instrument.overheidslaag.includes('Europees')) {
        //   numEuropee += 1;
        // }
        if (instrument.overheidslaag.includes('Nationaal')) {
          numNationaal += 1;
        }
        if (instrument.overheidslaag.includes('Provinciaal')) {
          numProvinciaal += 1;
        }
        if (instrument.overheidslaag.includes('Gemeentelijk')) {
          numGemeentelijk += 1;
        }

        if (instrument.juridischeHaalbaarheid === 'Beperkt') {
          numJHLow += 1;
        } else if (instrument.juridischeHaalbaarheid === 'Gemiddeld') {
          numJHMedium += 1;
        } else if (instrument.juridischeHaalbaarheid === 'Hoog') {
          numJHHigh += 1;
        }

        if (instrument.rLadder.includes('R1')) {
          numR1 += 1;
        }
        if (instrument.rLadder.includes('R2')) {
          numR2 += 1;
        }
        if (instrument.rLadder.includes('R3')) {
          numR3 += 1;
        }
        if (instrument.rLadder.includes('R4')) {
          numR4 += 1;
        }
        if (instrument.rLadder.includes('R5')) {
          numR5 += 1;
        }
        if (instrument.rLadder.includes('R6')) {
          numR6 += 1;
        }

        if (instrument.juridischInvloed === 'Beperkt') {
          numJILow += 1;
        } else if (instrument.juridischInvloed === 'Gemiddeld') {
          numJIMedium += 1;
        } else if (instrument.juridischInvloed === 'Hoog') {
          numJIHigh += 1;
        }
      });

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws?.length);

      setNumBeleid(numBeleid);
      setNumInkoop(numInkoop);
      setNumGrondpositie(numGrondpositie);
      setNumSubsidie(numSubsidie);
      setNumFiscaal(numFiscaal);

      setNumberOfLeidraad(numLeidraad);
      setNumberOfVoorbeeld(numVoorbeeld);
      // setNumberOfEuropee(numEuropee);
      setNumberOfNationaal(numNationaal);
      setNumberOfProvinciaal(numProvinciaal);
      setNumberOfGemeentelijk(numGemeentelijk);

      setNumberOfJ1(numJHLow);
      setNumberOfJ2(numJHMedium);
      setNumberOfJ3(numJHHigh);

      setNumberOfR1(numR1);
      setNumberOfR2(numR2);
      setNumberOfR3(numR3);
      setNumberOfR4(numR4);
      setNumberOfR5(numR5);
      setNumberOfR6(numR6);

      setNumberOfJILow(numJILow);
      setNumberOfJIMedium(numJIMedium);
      setNumberOfJIHigh(numJIHigh);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selected, searchValue, props.thema]);

  // effect to check for data from persisted state from localStorage and update values when needed
  useEffect(() => {
    if (selected.expertise.length !== 0 && typeof expertiseFilterRef.current !== 'undefined') {
      expertiseFilterRef.current.set(selected.expertise);
    }

    if (
      selected.extraContent.length !== 0 &&
      typeof extraContentFilterRef.current !== 'undefined'
    ) {
      extraContentFilterRef.current.set(selected.extraContent);
    }

    if (selected.overheidslaag.length !== 0 && typeof wettelijkFilterRef.current !== 'undefined') {
      wettelijkFilterRef.current.set(selected.overheidslaag);
    }

    if (
      selected.juridischeHaalbaarheid?.length !== 0 &&
      typeof juridischeHaalbaarheidFilterRef.current !== 'undefined'
    ) {
      juridischeHaalbaarheidFilterRef.current.set(selected.juridischeHaalbaarheid);
    }

    if (selected.rLadder.length !== 0 && typeof rLadderFilterRef.current !== 'undefined') {
      rLadderFilterRef.current.set(selected.rLadder);
    }

    if (
      selected.juridischInvloed.length !== 0 &&
      typeof juridischInvloedFilterRef.current !== 'undefined'
    ) {
      juridischInvloedFilterRef.current.set(selected.juridischInvloed);
    }
  });

  return (
    <div className=''>
      <div className='min-h-full z-50'>
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

            <div className='fixed inset-0 flex z-40'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-100'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 pt-2'>
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
                  <div className='flex-shrink-0 flex items-center px-4'>
                    <span className=''>Filters</span>
                  </div>
                  <div className='flex-1 h-0 overflow-y-auto'>
                    <div className='p-8 '>
                      <SearchFilter
                        ref={wettelijkFilterRef}
                        title='Bevoegdheidsniveau'
                        list={overheidslaag}
                        filterNumbers={[
                          numberOfNationaal,
                          numberOfProvinciaal,
                          numberOfGemeentelijk,
                        ]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'overheidslaag')
                        }
                      />
                      <SearchFilter
                        ref={expertiseFilterRef}
                        title='Categorie'
                        list={expertise}
                        filterNumbers={[
                          numBeleid,
                          numInkoop,
                          numGrondpositie,
                          numSubsidie,
                          numFiscaal,
                        ]}
                        handleFilters={(checkboxState) => handleFilters(checkboxState, 'expertise')}
                      />

                      <SearchFilter
                        ref={juridischInvloedFilterRef}
                        title='Invloed'
                        list={juridischInvloed}
                        filterNumbers={[numberOfJILow, numberOfJIMedium, numberOfJIHigh]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'juridischInvloed')
                        }
                      />
                      <SearchFilter
                        ref={juridischeHaalbaarheidFilterRef}
                        title='Juridische haalbaarheid'
                        list={juridischeHaalbaarheid}
                        filterNumbers={[numberOfJHLow, numberOfJHMedium, numberOfJHHigh]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'juridischeHaalbaarheid')
                        }
                      />
                      <SearchFilter
                        ref={rLadderFilterRef}
                        title='Circulaire strategie (R-ladder)'
                        list={rLadder}
                        filterNumbers={[
                          numberOfR1,
                          numberOfR2,
                          numberOfR3,
                          numberOfR4,
                          numberOfR5,
                          numberOfR6,
                        ]}
                        handleFilters={(checkboxState) => handleFilters(checkboxState, 'rLadder')}
                      />
                      <SearchFilter
                        ref={extraContentFilterRef}
                        title='Inclusief'
                        list={extraContent}
                        filterNumbers={[numberOfVoorbeeld, numberOfLeidraad]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'extraContent')
                        }
                      />
                    </div>

                    <span onClick={reset} className=' text-green-500 p-8'>
                      Wis filters
                    </span>
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

      <div className='h-[300px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600 sm:mx-0'>
        <OverviewPageHeader props={props} page='list' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-20 lg:border-b lg:border-gray-500 global-margin mt-4'>
        <div className='hidden lg:block mb-6 self-end'>
          <h3 className='mobile sm:desktop inline text-gray-800'>Filter op:</h3>{' '}
          <span
            onClick={reset}
            className='underline text-green-500 hover:cursor-pointer link-lg float-right mr-8 link-interaction'
          >
            Wis filters
          </span>
        </div>
        <div className='col-span-3 flex-wrap'>
          <div className=''>
            <div>
              <h4 className='mobile sm:desktop'>{props.searchTitle}</h4>
            </div>

            {/* AUTOCOMPLETE */}
            <div className='max-w-3xl my-5 focus-within:ring-2 focus-within:border-0 focus-within:ring-green-600 border outline-none rounded-cl'>
              <Combobox value={firstLaw} onChange={setFirstLaw}>
                <div className='flex items-center px-3'>
                  <SearchIcon className='h-5 w-5 text-gray-500 inline-block' />
                  <Combobox.Input
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoComplete={'off'}
                    className='w-full py-2 px-3 outline-none border-0 rounded-cl focus:ring-0 placeholder:text-gray-600 placeholder:italic'
                    displayValue={() => searchValue}
                    placeholder='Zoek op trefwoord'
                  />
                </div>
                {/* display suggestions */}
                {searchValue !== '' && (
                  <Combobox.Options>
                    {selectedResults?.slice(0, 10).map((law) => (
                      <Combobox.Option
                        key={law.id}
                        value={law}
                        onClick={() => setSearchValue(law.titel)}
                        as={Fragment}
                      >
                        {({ active }) => (
                          <li
                            className={`${
                              selectedResults?.slice(0, 10).slice(-1)[0].titel === law.titel &&
                              active === true
                                ? 'rounded-b-cl'
                                : ''
                            } ${
                              active
                                ? 'bg-green-400 text-white border-0 py-0.5 pl-0.5'
                                : 'bg-transparent text-green-600 border-0 py-0.5 pl-0.5'
                            } `}
                          >
                            {law.titel}
                          </li>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </Combobox>
            </div>

            <div className='flex w-full items-center justify-start max-w-3xl'>
              {/* no laws */}
              {numberOfLaws === 0 && (
                <div className='inline'>
                  <div className='inline'>
                    <span className='p-base-semibold inline'>0 &nbsp;</span>
                    <span className='p-base'>resultaten in </span>
                    <span className='p-base-semibold capitalize inline-block'>
                      {props.thema.replace('-', ' ')}
                      &nbsp;
                    </span>
                    {searchValue != '' && <span className='p-base'>voor&nbsp;</span>}
                    <span className='p-base-semibold inline'>
                      {searchValue}&nbsp;
                      {allSelectedValues.length != 0 && <span className='p-base'>en</span>}&nbsp;
                    </span>
                  </div>

                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <span className='p-base-semibold inline'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {/* number of laws = total number of laws */}
              {numberOfLaws === props.totalNumberOfLaws && (
                <div className='inline'>
                  <span className='inline'>
                    <span className='p-base-semibold inline'>{numberOfLaws}</span>{' '}
                    <span className=' p-base'>resultaten in </span>
                    <span className='p-base-semibold capitalize inline'>
                      {props.thema.replace('-', ' ')}
                    </span>{' '}
                    {searchValue != '' && <span className='p-base'>voor&nbsp;</span>}
                    <span className='p-base-semibold inline'>
                      {searchValue} {allSelectedValues.length != 0 && <span>,</span>} &nbsp;
                    </span>
                  </span>
                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <span className='inline p-base-semibold'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* one or more law */}
              {numberOfLaws > 0 && numberOfLaws != props.totalNumberOfLaws && (
                <div className='inline'>
                  <div className='inline'>
                    <span className='p-base-semibold inline'>{numberOfLaws}</span>{' '}
                    <span className='p-base'>resultaten in </span>
                    <span className='p-base-semibold inline capitalize'>
                      {props.thema.replace('-', ' ')}
                    </span>
                    {searchValue != '' && <span className=' p-base'>&nbsp;voor&nbsp;</span>}
                    <span className='p-base-semibold inline'>
                      {searchValue}
                      {searchValue != '' && <span>&nbsp;</span>}
                      {allSelectedValues.length != 0 && searchValue != '' && (
                        <span className='p-base'>en</span>
                      )}
                      &nbsp;
                    </span>
                  </div>

                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues > 0 ||
                        (searchValue == '' && <span className='p-base'>voor&nbsp;</span>)}
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <span className='p-base-semibold inline'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden py-5 border-b border-gray-500 global-margin'>
        <button
          type='button'
          className='px-4 max-w-sm inline-flex items-center justify-center border-2 p-2 w-full border-gray-800 rounded-cl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <span className='text-black'>Filter</span>
          <AdjustmentsIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-4 md:gap-x-20 global-margin'>
        <div className='hidden lg:block pr-3 py-3 my-4'>
          <SearchFilter
            ref={wettelijkFilterRef}
            title='Bevoegdheidsniveau'
            list={overheidslaag}
            filterNumbers={[numberOfNationaal, numberOfProvinciaal, numberOfGemeentelijk]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'overheidslaag')}
          />
          <SearchFilter
            ref={expertiseFilterRef}
            title='Categorie'
            list={expertise}
            filterNumbers={[numBeleid, numInkoop, numGrondpositie, numSubsidie, numFiscaal]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'expertise')}
          />
          <SearchFilter
            ref={juridischInvloedFilterRef}
            title='Invloed'
            list={juridischInvloed}
            filterNumbers={[numberOfJILow, numberOfJIMedium, numberOfJIHigh]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'juridischInvloed')}
          />
          <SearchFilter
            ref={juridischeHaalbaarheidFilterRef}
            title='Juridische haalbaarheid'
            list={juridischeHaalbaarheid}
            filterNumbers={[numberOfJHLow, numberOfJHMedium, numberOfJHHigh]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'juridischeHaalbaarheid')
            }
          />
          <SearchFilter
            ref={rLadderFilterRef}
            title='Circulaire strategie (R-ladder)'
            list={rLadder}
            filterNumbers={[numberOfR1, numberOfR2, numberOfR3, numberOfR4, numberOfR5, numberOfR6]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'rLadder')}
          />
          <SearchFilter
            ref={extraContentFilterRef}
            title='Inclusief'
            list={extraContent}
            filterNumbers={[numberOfVoorbeeld, numberOfLeidraad]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'extraContent')}
          />
        </div>
        <div className='mt-10 col-span-3'>
          {data && (
            <div>
              <PolicyList data={laws} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
