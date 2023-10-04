import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import createPersistedState from 'use-persisted-state';
import { SearchIcon, XIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import { groq } from 'next-sanity';
import { toPlainText } from '@portabletext/react';
import Fuse from 'fuse.js';
import useSWR from 'swr';

import {
  overheidslaag,
  juridischeHaalbaarheid,
  juridischInvloed,
  extraContent,
} from '../../utils/data-filter';
import SearchFilter from '/components/search-filter';
import PolicyList from '/components/policy-list';
import { fetcher } from '../../utils/swr-fetcher';
import { measureLayoutQuery } from '../../lib/queries';
import OverviewPageHeader from '../overview-page-header';
// creating objects for persisting values
const useSelectedState = createPersistedState('selected');

export default function MeasuresLayout({ ...props }) {
  // TODO: import the data staticly with getStaticProps when we implement link structure changes
  const { data } = useSWR(groq`${measureLayoutQuery}`, fetcher);
  // creating references to access child component functions
  const wettelijkFilterRef = useRef();
  const juridischeHaalbaarheidFilterRef = useRef();
  const juridischInvloedFilterRef = useRef();
  const extraContentFilterRef = useRef();

  const [laws, setLaws] = useState(data);

  const [selected, setSelected] = useSelectedState({
    overheidslaag: [],
    rechtsgebied: [],
    subrechtsgebied: [],
    rLadder: [],
    juridischeHaalbaarheid: [],
    juridischInvloed: [],
    extraContent: [],
  });

  const dummyArray = [];
  const allSelectedValues = dummyArray.concat(
    selected.overheidslaag,
    selected.rechtsgebied,
    selected.subrechtsgebied,
    selected.rLadder,
    selected.juridischeHaalbaarheid,
    selected.juridischInvloed,
    selected.extraContent,
  );

  // autocomplete variables and funciton
  const [selectedResults, setSelectedResults] = useState(null);
  const [firstLaw, setFirstLaw] = useState(null);

  {
    /* MAY NEED TO REDO SEARCH TO NOT HAVE setState inside useEffect */
  }
  const firstLawFunction = useCallback(() => {
    const firstLaw = selectedResults?.[0];
    return firstLaw;
  }, [selectedResults]);

  const [numberOfLaws, setNumberOfLaws] = useState(props.totalNumberOfLaws);

  // dynamic filter numbers
  const [numberOfEuropees, setNumberOfEuropee] = useState(0);
  const [numberOfNationaal, setNumberOfNationaal] = useState(0);
  const [numberOfProvinciaal, setNumberOfProvinciaal] = useState(0);
  const [numberOfGemeentelijk, setNumberOfGemeentelijk] = useState(0);

  const [numberOfJHLow, setNumberOfJ1] = useState(0);
  const [numberOfJHMedium, setNumberOfJ2] = useState(0);
  const [numberOfJHHigh, setNumberOfJ3] = useState(0);

  const [numberOfJILow, setNumberOfJILow] = useState(0);
  const [numberOfJIMedium, setNumberOfJIMedium] = useState(0);
  const [numberOfJIHigh, setNumberOfJIHigh] = useState(0);

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
      overheidslaag: [],
      rechtsgebied: [],
      subrechtsgebied: [],
      rLadder: [],
      juridischeHaalbaarheid: [],
      juridischInvloed: [],
      extraContent: [],
    });

    wettelijkFilterRef.current.reset();
    juridischeHaalbaarheidFilterRef.current.reset();
    juridischInvloedFilterRef.current.reset();
    extraContentFilterRef.current.reset();

    setFirstLaw(null);
    setSearchValue('');
  };

  // effect to check for filtering and update data
  useEffect(() => {
    // added check for data to have been retrieved here
    if (data) {
      let filteredLaws = data;
      // filter for thema
      filteredLaws = filteredLaws?.filter((element) => {
        return element.thema === props.thema;
      });

      let numEuropee = 0;
      let numNationaal = 0;
      let numProvinciaal = 0;
      let numGemeentelijk = 0;

      let numLeidraad = 0;
      let numVoorbeeld = 0;

      let numJHLow = 0;
      let numJHMedium = 0;
      let numJHHigh = 0;

      let numJILow = 0;
      let numJIMedium = 0;
      let numJIHigh = 0;

      // FILTER LOGIC FOR MULTICHOICE ATTRIBUTES
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

      // old filter logic
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
      if (selected.rechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.rechtsgebied.includes(element.rechtsgebied);
        });
      }

      if (selected.subrechtsgebied.length > 0) {
        filteredLaws = filteredLaws?.filter((element) => {
          return selected.subrechtsgebied.includes(element.subrechtsgebied);
        });
      }

      if (selected.juridischeHaalbaarheid?.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridischeHaalbaarheid.includes(element.juridischeHaalbaarheid);
        });
      }

      // new for JI
      if (selected.juridischInvloed.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridischInvloed.includes(element.juridischInvloed);
        });
      }

      const fuse = new Fuse(filteredLaws, {
        keys: [
          { name: 'titel', weight: 1 },
          { name: 'subtitel', weight: 0.7 },
          // getFN gets all text in portable text as plaintext - this means that we search all text in the measure
          { name: 'content', getFn: (law) => toPlainText(law.content), weight: 0.5 },
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

      // display scores in consol for testing
      // const scores = results.map((result) => result.score);

      // setting values for autocomplete
      setSelectedResults(filteredLaws);
      firstLawFunction();

      // dynamically calculate filter numbers
      // NEED TO ADD CONDITION BASED ON THE FIRST VALUE SELECTED.
      // UPDATE FILTER NUMBERS ONLY FOR ATTRIBUTES THAT ARE NOT THE FIRST SELECTED ATTRUBUTE
      filteredLaws?.map((measure) => {
        // add extra content

        if (measure?.extraContent?.includes('Leidraad')) {
          numLeidraad += 1;
        }
        if (measure?.extraContent?.includes('Voorbeeld')) {
          numVoorbeeld += 1;
        }

        if (measure.overheidslaag.includes('Europees')) {
          numEuropee += 1;
        }
        if (measure.overheidslaag.includes('Nationaal')) {
          numNationaal += 1;
        }
        if (measure.overheidslaag.includes('Provinciaal')) {
          numProvinciaal += 1;
        }
        if (measure.overheidslaag.includes('Gemeentelijk')) {
          numGemeentelijk += 1;
        }

        if (measure.juridischeHaalbaarheid === 'Beperkt') {
          numJHLow += 1;
        } else if (measure.juridischeHaalbaarheid === 'Gemiddeld') {
          numJHMedium += 1;
        } else if (measure.juridischeHaalbaarheid === 'Hoog') {
          numJHHigh += 1;
        }

        if (measure.juridischInvloed === 'Beperkt') {
          numJILow += 1;
        } else if (measure.juridischInvloed === 'Gemiddeld') {
          numJIMedium += 1;
        } else if (measure.juridischInvloed === 'Hoog') {
          numJIHigh += 1;
        }
      });

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws?.length);

      setNumberOfLeidraad(numLeidraad);
      setNumberOfVoorbeeld(numVoorbeeld);
      setNumberOfEuropee(numEuropee);
      setNumberOfNationaal(numNationaal);
      setNumberOfProvinciaal(numProvinciaal);
      setNumberOfGemeentelijk(numGemeentelijk);

      setNumberOfJ1(numJHLow);
      setNumberOfJ2(numJHMedium);
      setNumberOfJ3(numJHHigh);

      setNumberOfJILow(numJILow);
      setNumberOfJIMedium(numJIMedium);
      setNumberOfJIHigh(numJIHigh);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selected, searchValue, props.thema]);

  // effect to check for data from persisted state from localStorage and update values when needed
  useEffect(() => {
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

    if (
      selected.juridischInvloed.length !== 0 &&
      typeof juridischInvloedFilterRef.current !== 'undefined'
    ) {
      juridischInvloedFilterRef.current.set(selected.juridischInvloed);
    }
  });
  return (
    <div className='global-margin'>
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
                <Dialog.Panel className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
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
                        ref={extraContentFilterRef}
                        title='Inclusief'
                        list={extraContent}
                        filterNumbers={[numberOfVoorbeeld, numberOfLeidraad]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'extraContent')
                        }
                      />
                      <SearchFilter
                        ref={wettelijkFilterRef}
                        title='Bevoegdheidsniveau'
                        list={overheidslaag}
                        filterNumbers={[
                          numberOfEuropees,
                          numberOfNationaal,
                          numberOfProvinciaal,
                          numberOfGemeentelijk,
                        ]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'overheidslaag')
                        }
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

      <div>
        <OverviewPageHeader props={props} page='list' />
        <div className='hidden sm:block max-w-3xl pt-2 mb-2 sm:mb-20'>
          <p className='p-lg'>
            {props.introPara}
            <br />
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-20 lg:border-b lg:border-grey-500'>
        <div className='hidden lg:block mb-6 self-end'>
          <h3 className='mobile sm:desktop inline text-grey-800'>Filter op:</h3>{' '}
          <span
            onClick={reset}
            className='underline text-green-500 link-hover link-lg float-right mr-8 link-interaction'
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
                    className='w-full py-2 px-3 outline-none border-0 rounded-cl focus:ring-0 placeholder:text-grey-600 placeholder:italic'
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
                    <h3 className='mobile sm:desktop inline'>0 &nbsp;</h3>
                    <span className=' p-lg'>resultaten in </span>
                    <h3 className='inline-block lowercase mobile sm:desktop'>
                      {props.thema.replace('-', ' ')}
                      &nbsp;
                    </h3>
                    {searchValue != '' && <span className='p-lg'>voor&nbsp;</span>}
                    <h3 className='mobile sm:desktop inline'>
                      {searchValue}&nbsp;
                      {allSelectedValues.length != 0 && <span className='p-lg'>en</span>}&nbsp;
                    </h3>
                  </div>

                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <h3 className='inline mobile sm:desktop'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </h3>
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
                    <h3 className='mobile sm:desktop inline'>{numberOfLaws}</h3>{' '}
                    <span className=' p-lg'>resultaten in </span>
                    <h3 className='lowercase first-letter:uppercase mobile sm:desktop inline'>
                      {props.thema.replace('-', ' ')}
                    </h3>{' '}
                    {searchValue != '' && <span className='p-lg'>voor&nbsp;</span>}
                    <h3 className='lowercase first-letter:uppercase mobile sm:desktop inline'>
                      {searchValue} {allSelectedValues.length != 0 && <span>,</span>} &nbsp;
                    </h3>
                  </span>
                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <h3 className='inline mobile sm:desktop'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </h3>
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
                    <h3 className='mobile sm:desktop inline'>{numberOfLaws}</h3>{' '}
                    <span className=' p-lg'>resultaten in </span>
                    <h3 className='inline lowercase first-letter:uppercase mobile sm:desktop'>
                      {props.thema.replace('-', ' ')}
                    </h3>
                    {searchValue != '' && <span className=' p-lg'>&nbsp;voor&nbsp;</span>}
                    <h3 className='mobile sm:desktop inline'>
                      {searchValue}
                      {searchValue != '' && <span>&nbsp;</span>}
                      {allSelectedValues.length != 0 && searchValue != '' && (
                        <span className='p-lg'>en</span>
                      )}
                      &nbsp;
                    </h3>
                  </div>

                  {allSelectedValues != 0 && (
                    <div className='sm:inline-block flex flex-wrap items-center'>
                      {allSelectedValues > 0 ||
                        (searchValue == '' && <span className='p-lg'>voor&nbsp;</span>)}
                      {allSelectedValues.map((value, index) => (
                        <div key={index} className='inline'>
                          <h3 className='inline mobile sm:desktop'>
                            {value}
                            {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                          </h3>
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
      <div className='lg:hidden py-5 border-b border-grey-500'>
        <button
          type='button'
          className='px-4 max-w-sm inline-flex items-center justify-center border-2 p-2 w-full border-grey-800 rounded-cl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 lg:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <span className='text-black'>Filter</span>
          <AdjustmentsIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-4 md:gap-x-20'>
        <div className='hidden lg:block p-3 my-4'>
          <SearchFilter
            ref={extraContentFilterRef}
            title='Inclusief'
            list={extraContent}
            filterNumbers={[numberOfVoorbeeld, numberOfLeidraad]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'extraContent')}
          />
          <SearchFilter
            ref={wettelijkFilterRef}
            title='Bevoegdheidsniveau'
            list={overheidslaag}
            filterNumbers={[
              numberOfEuropees,
              numberOfNationaal,
              numberOfProvinciaal,
              numberOfGemeentelijk,
            ]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'overheidslaag')}
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
