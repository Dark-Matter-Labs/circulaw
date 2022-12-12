import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import createPersistedState from 'use-persisted-state';
import { SearchIcon, XIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import {
  wettelijk_bevoegdheidsniveau,
  rechtsgebied,
  subrechtsgebied,
  juridische_houdbaarheid,
  r_ladder,
} from '../../dataFilter';

import SearchFilter from '/components/search-filter';
import PolicyList from '/components/policy-list';
import { get_fetcher } from '../../utils/filter-functions';
import Fuse from 'fuse.js';

const fetcher = get_fetcher();

// creating objects for persisting values
const useSelectedState = createPersistedState('selected');

export default function MeasuresLayout(props) {
  const { data } = useSWR(() => '/api/laws/', fetcher);
  // creating references to access child component functions
  const wettelijkFilterRef = useRef();
  const rechtsgebiedFilterRef = useRef();
  const subrechtsgebiedFilterRef = useRef();
  const rLadderFilterRef = useRef();
  const juridischeFilterRef = useRef();

  const [laws, setLaws] = useState(data);
  const [selected, setSelected] = useSelectedState({
    wettelijk_bevoegdheidsniveau: [],
    rechtsgebied: [],
    subrechtsgebied: [],
    r_ladder: [],
    juridische_houdbaarheid: [],
  });

  const dummyArray = [];
  const allSelectedValues = dummyArray.concat(
    selected.wettelijk_bevoegdheidsniveau,
    selected.rechtsgebied,
    selected.subrechtsgebied,
    selected.r_ladder,
    selected.juridische_houdbaarheid,
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
  const [numberOfEuropees, setNumberOfEuropee] = useState(0);
  const [numberOfNationaal, setNumberOfNationaal] = useState(0);
  const [numberOfProvinciaal, setNumberOfProvinciaal] = useState(0);
  const [numberOfGemeentelijk, setNumberOfGemeentelijk] = useState(0);

  const [numberOfPubliek, setNumberOfPubliek] = useState(0);
  const [numberOfPrivaat, setNumberOfPrivaat] = useState(0);
  const [numberOfFiscaal, setNumberOfFiscaal] = useState(0);

  const [numberOfR1, setNumberOfR1] = useState(0);
  const [numberOfR2, setNumberOfR2] = useState(0);
  const [numberOfR3, setNumberOfR3] = useState(0);
  const [numberOfR4, setNumberOfR4] = useState(0);
  const [numberOfR5, setNumberOfR5] = useState(0);
  const [numberOfR6, setNumberOfR6] = useState(0);

  const [numberOfJ1, setNumberOfJ1] = useState(0);
  const [numberOfJ2, setNumberOfJ2] = useState(0);
  const [numberOfJ3, setNumberOfJ3] = useState(0);
  const [numberOfJ4, setNumberOfJ4] = useState(0);
  const [numberOfJ5, setNumberOfJ5] = useState(0);

  const [numberOfErp, setNumberOfErp] = useState(0);
  const [numberOfOmg, setNumberOfOmg] = useState(0);
  const [numberOfAan, setNumberOfAan] = useState(0);
  const [numberOfCont, setNumberOfCont] = useState(0);
  const [numberOfGron, setNumberOfGron] = useState(0);

  const [searchValue, setSearchValue] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFilters = (checkboxState, key) => {
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;
    setSelected(newFilters);
  };

  const reset = () => {
    setSelected({
      wettelijk_bevoegdheidsniveau: [],
      rechtsgebied: [],
      subrechtsgebied: [],
      r_ladder: [],
      juridische_houdbaarheid: [],
    });

    wettelijkFilterRef.current.reset();
    rechtsgebiedFilterRef.current.reset();
    subrechtsgebiedFilterRef.current.reset();
    rLadderFilterRef.current.reset();
    juridischeFilterRef.current.reset();

    setFirstLaw(null);
    setSearchValue('');
  };

  // effect to check for filtering and update data
  useEffect(() => {
    // added check for data to have been retrieved here
    if (data) {
      let filteredLaws = data;

      let numEuropee = 0;
      let numNationaal = 0;
      let numProvinciaal = 0;
      let numGemeentelijk = 0;

      let numPubliek = 0;
      let numPrivaat = 0;
      let numFiscaal = 0;

      let numR1 = 0;
      let numR2 = 0;
      let numR3 = 0;
      let numR4 = 0;
      let numR5 = 0;
      let numR6 = 0;

      let numJ1 = 0;
      let numJ2 = 0;
      let numJ3 = 0;
      let numJ4 = 0;
      let numJ5 = 0;

      let numErp = 0;
      let numOmg = 0;
      let numAan = 0;
      let numCont = 0;
      let numGron = 0;

      filteredLaws = filteredLaws.filter((element) => {
        return element.casus === props.casus;
      });

      if (selected.wettelijk_bevoegdheidsniveau.length > 0) {
        if (selected.wettelijk_bevoegdheidsniveau.includes('Europees')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.europees;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes('Nationaal')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.nationaal;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes('Provinciaal')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.provinciaal;
          });
        }
        if (selected.wettelijk_bevoegdheidsniveau.includes('Gemeentelijk')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.gemeentelijk;
          });
        }
      }

      if (selected.r_ladder.length > 0) {
        if (selected.r_ladder.includes('R1')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R1;
          });
        }
        if (selected.r_ladder.includes('R2')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R2;
          });
        }
        if (selected.r_ladder.includes('R3')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R3;
          });
        }
        if (selected.r_ladder.includes('R4')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R4;
          });
        }
        if (selected.r_ladder.includes('R5')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R5;
          });
        }
        if (selected.r_ladder.includes('R6')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.R6;
          });
        }
      }

      if (selected.rechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.rechtsgebied.includes(element.rechtsgebied);
        });
      }

      if (selected.juridische_houdbaarheid.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.juridische_houdbaarheid.includes(element.juridische_houdbaarheid);
        });
      }

      if (selected.subrechtsgebied.length > 0) {
        filteredLaws = filteredLaws.filter((element) => {
          return selected.subrechtsgebied.includes(element.subrechtsgebied);
        });
      }

      const fuse = new Fuse(filteredLaws, {
        threshold: 0.4,
        keys: [
          'titel',
          'introductie_juridische_maatregel',
          'eisen_en_beperkingen',
          'kop_1_samenvatting_juridische_maatregel',
          'kop_2_toepassing_juridische_maatregel',
          'toepassing_juridische_maatregel',
          'kop_3_uit_de_praktijk',
          'uit_de_praktijk',
          'subrechtsgebied',
          'artikel',
          'citeertitel',
        ],
        includeScore: true,
      });

      const results = fuse.search(searchValue);
      const lawResults = searchValue ? results.map((result) => result.item) : filteredLaws;
      filteredLaws = lawResults;

      // setting values for autocomplete
      setSelectedResults(filteredLaws);
      firstLawFunction();

      // dynamically calculate filter numbers
      filteredLaws.map((measure) => {
        if (measure.europees) {
          numEuropee += 1;
        }
        if (measure.nationaal) {
          numNationaal += 1;
        }
        if (measure.provinciaal) {
          numProvinciaal += 1;
        }
        if (measure.gemeentelijk) {
          numGemeentelijk += 1;
        }

        if (measure.rechtsgebied === 'Publiekrecht') {
          numPubliek += 1;
        } else if (measure.rechtsgebied === 'Privaatrecht') {
          numPrivaat += 1;
        } else if (measure.rechtsgebied === 'Fiscaalrecht') {
          numFiscaal += 1;
        }

        if (measure.R1) {
          numR1 += 1;
        }
        if (measure.R2) {
          numR2 += 1;
        }
        if (measure.R3) {
          numR3 += 1;
        }
        if (measure.R4) {
          numR4 += 1;
        }
        if (measure.R5) {
          numR5 += 1;
        }
        if (measure.R6) {
          numR6 += 1;
        }

        if (measure.juridische_houdbaarheid === 1) {
          numJ1 += 1;
        } else if (measure.juridische_houdbaarheid === 2) {
          numJ2 += 1;
        } else if (measure.juridische_houdbaarheid === 3) {
          numJ3 += 1;
        } else if (measure.juridische_houdbaarheid === 4) {
          numJ4 += 1;
        } else if (measure.juridische_houdbaarheid === 5) {
          numJ5 += 1;
        }

        if (measure.subrechtsgebied === 'Erfpacht') {
          numErp += 1;
        } else if (measure.subrechtsgebied === 'Omgevingsrecht') {
          numOmg += 1;
        } else if (measure.subrechtsgebied === 'Aanbesteding') {
          numAan += 1;
        } else if (measure.subrechtsgebied === 'Contracten') {
          numCont += 1;
        } else if (measure.subrechtsgebied === 'Gronduitgifte') {
          numGron += 1;
        }
      });

      setLaws(filteredLaws);
      setNumberOfLaws(filteredLaws.length);

      setNumberOfEuropee(numEuropee);
      setNumberOfNationaal(numNationaal);
      setNumberOfProvinciaal(numProvinciaal);
      setNumberOfGemeentelijk(numGemeentelijk);

      setNumberOfPubliek(numPubliek);
      setNumberOfPrivaat(numPrivaat);
      setNumberOfFiscaal(numFiscaal);

      setNumberOfR1(numR1);
      setNumberOfR2(numR2);
      setNumberOfR3(numR3);
      setNumberOfR4(numR4);
      setNumberOfR5(numR5);
      setNumberOfR6(numR6);

      setNumberOfJ1(numJ1);
      setNumberOfJ2(numJ2);
      setNumberOfJ3(numJ3);
      setNumberOfJ4(numJ4);
      setNumberOfJ5(numJ5);

      setNumberOfErp(numErp);
      setNumberOfOmg(numOmg);
      setNumberOfAan(numAan);
      setNumberOfCont(numCont);
      setNumberOfGron(numGron);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selected, searchValue, props.casus]);

  // effect to check for data from persisted state from localStorage and update values when needed
  useEffect(() => {
    if (
      selected.wettelijk_bevoegdheidsniveau.length !== 0 &&
      typeof wettelijkFilterRef.current !== 'undefined'
    ) {
      wettelijkFilterRef.current.set(selected.wettelijk_bevoegdheidsniveau);
    }

    if (
      selected.rechtsgebied.length !== 0 &&
      typeof rechtsgebiedFilterRef.current !== 'undefined'
    ) {
      rechtsgebiedFilterRef.current.set(selected.rechtsgebied);
    }

    if (
      selected.subrechtsgebied.length !== 0 &&
      typeof subrechtsgebiedFilterRef.current !== 'undefined'
    ) {
      subrechtsgebiedFilterRef.current.set(selected.subrechtsgebied);
    }

    if (selected.r_ladder.length !== 0 && typeof rLadderFilterRef.current !== 'undefined') {
      rLadderFilterRef.current.set(selected.r_ladder);
    }

    if (
      selected.juridische_houdbaarheid.length !== 0 &&
      typeof juridischeFilterRef.current !== 'undefined'
    ) {
      juridischeFilterRef.current.set(selected.juridische_houdbaarheid);
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
                        <XIcon className='h-6 w-6 text-green1' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex-shrink-0 flex items-center px-4'>
                    <span className='font-manrope font-bold text-lg'>Filters</span>
                  </div>
                  <div className='flex-1 h-0 overflow-y-auto'>
                    <div className='p-8 '>
                      <SearchFilter
                        ref={wettelijkFilterRef}
                        title='Bevoegdheidsniveau'
                        list={wettelijk_bevoegdheidsniveau}
                        filterNumbers={[
                          numberOfEuropees,
                          numberOfNationaal,
                          numberOfProvinciaal,
                          numberOfGemeentelijk,
                        ]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'wettelijk_bevoegdheidsniveau')
                        }
                      />
                      <SearchFilter
                        ref={rechtsgebiedFilterRef}
                        title='Rechtsgebied'
                        list={rechtsgebied}
                        filterNumbers={[numberOfPubliek, numberOfPrivaat, numberOfFiscaal]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'rechtsgebied')
                        }
                      />
                      <SearchFilter
                        ref={rLadderFilterRef}
                        title='R - ladder'
                        list={r_ladder}
                        filterNumbers={[
                          numberOfR1,
                          numberOfR2,
                          numberOfR3,
                          numberOfR4,
                          numberOfR5,
                          numberOfR6,
                        ]}
                        handleFilters={(checkboxState) => handleFilters(checkboxState, 'r_ladder')}
                      />
                      <SearchFilter
                        ref={juridischeFilterRef}
                        title='Juridische houdbaarheid'
                        list={juridische_houdbaarheid}
                        filterNumbers={[numberOfJ1, numberOfJ2, numberOfJ3, numberOfJ4, numberOfJ5]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'juridische_houdbaarheid')
                        }
                      />
                      <SearchFilter
                        ref={subrechtsgebiedFilterRef}
                        title='Subrechtsgebied'
                        list={subrechtsgebied}
                        filterNumbers={[
                          numberOfErp,
                          numberOfOmg,
                          numberOfAan,
                          numberOfCont,
                          numberOfGron,
                        ]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'subrechtsgebied')
                        }
                      />
                    </div>

                    <span onClick={reset} className='link-mobile text-greenLink p-8'>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
        <div className='hidden sm:block breadcrumb pt-8 text-greenLink'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <span className=''> → </span>
          <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
            <a className='inline-block lowercase first-letter:uppercase'>{props.casus}</a>
          </Link>
        </div>
        <div className='hidden sm:block col-span-2 bg-green3 bg-opacity font-manrope p-5 mt-2 mb-10 max-w-3xl'>
          {props.heading && <h3>{props.heading}</h3>}
          <p>
            {props.introPara}
            <br />
          </p>
        </div>

        <div className='container mb-2 sm:mb-20 mt-10'>
          <div className='container-image'>
            <Image src={props.icon} alt={`${props.casus} 'icon'`} />
          </div>
          <div>
            <h2 className='max-w-0 leading-6 pb-1 pl-1 mobile sm:main lowercase first-letter:uppercase'>
              {props.casus} stimuleren
            </h2>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='pt-5'>
            <div>
              <span className='font-manrope font-semibold text-base'>{props.searchTitle}</span>
            </div>

            {/* AUTOCOMPLETE */}
            <div className='sm:w-9/12 my-5 focus-within:ring-2 focus-within:border-0 focus-within:ring-green1 border outline-none rounded-lg'>
              <Combobox value={firstLaw} onChange={setFirstLaw}>
                <div className='flex items-center px-3'>
                  <SearchIcon className='h-5 w-5 text-gray-500 inline-block' />
                  <Combobox.Input
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoComplete={'off'}
                    className='w-full py-2 px-3 outline-none border-0 rounded-lg focus:ring-0 font-openSans text-grey1 italic'
                    displayValue={(firstLaw) => firstLaw?.titel}
                    placeholder='Zoek op trefwoord'
                  />
                </div>
                {/* display suggestions */}
                {searchValue !== '' && (
                  <Combobox.Options>
                    {selectedResults?.slice(0, 5).map((law) => (
                      <Combobox.Option
                        key={law.id}
                        value={law}
                        onClick={() => setSearchValue(law.titel)}
                        as={Fragment}
                      >
                        {/* need to redo style here */}
                        {({ active }) => (
                          <li
                            className={`${
                              selectedResults?.slice(0, 5).slice(-1)[0].id === law.id &&
                              active === true
                                ? 'rounded-b-lg'
                                : ''
                            } ${
                              active
                                ? 'bg-green1 text-white border-0'
                                : 'bg-transparent text-green1 border-0'
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
            {/* clear search and clear filters have the same effect. Should there maybe be a Reset? which resets all search parameters. Clear search button removed for now*/}

            {numberOfLaws === 0 && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>0</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.casus}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}
            {numberOfLaws > 1 && numberOfLaws < props.totalNumberOfLaws && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.casus}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}

            {searchValue !== '' && numberOfLaws === 1 && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.casus}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}

            {numberOfLaws === props.totalNumberOfLaws && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.casus}</b>{' '}
                  <b>{searchValue}</b>
                </span>
              </div>
            )}

            {/* display selected values */}
            <div className=''>
              <div>
                {allSelectedValues != 0 && (
                  <div className='flex flex-wrap grid-rows-2 sm:grid-rows-1'>
                    {allSelectedValues.map((value, index) => (
                      <div key={index} className='inline'>
                        <span className='font-manrope text-lg sm:text-xl font-bold'>
                          {value}
                          {value !== allSelectedValues.slice(-1)[0] && <span>,</span>}&nbsp;
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='lg:hidden py-5 w-28'>
          <button
            type='button'
            className='px-4 inline-flex border-2 p-2 w-full border-black1 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <span className='font-openSans text-black text-base font-semibold'>Filter</span>
            <AdjustmentsIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:block mb-3'>
          <span className='text-xl font-manrope font-semibold pr-8'>Filter op:</span>{' '}
          <span
            onClick={reset}
            className='underline text-greenLink text-lg link-hover font-manrope font-extrabold'
          >
            Wis filters
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4'>
        <div className='hidden lg:block p-3 my-4'>
          <SearchFilter
            ref={wettelijkFilterRef}
            title='Bevoegdheidsniveau'
            list={wettelijk_bevoegdheidsniveau}
            filterNumbers={[
              numberOfEuropees,
              numberOfNationaal,
              numberOfProvinciaal,
              numberOfGemeentelijk,
            ]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'wettelijk_bevoegdheidsniveau')
            }
          />
          <SearchFilter
            ref={rechtsgebiedFilterRef}
            title='Rechtsgebied'
            list={rechtsgebied}
            filterNumbers={[numberOfPubliek, numberOfPrivaat, numberOfFiscaal]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'rechtsgebied')}
          />
          <SearchFilter
            ref={rLadderFilterRef}
            title='R - ladder'
            list={r_ladder}
            filterNumbers={[numberOfR1, numberOfR2, numberOfR3, numberOfR4, numberOfR5, numberOfR6]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'r_ladder')}
            r_ladderStyleProp='r_ladderCSSClasses'
          />
          <SearchFilter
            ref={juridischeFilterRef}
            title='Juridische houdbaarheid'
            list={juridische_houdbaarheid}
            filterNumbers={[numberOfJ1, numberOfJ2, numberOfJ3, numberOfJ4, numberOfJ5]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'juridische_houdbaarheid')
            }
            juridischeHoudbaarheidStyleProp='juridischeHoudbaarheidCSSClasses'
          />
          <SearchFilter
            ref={subrechtsgebiedFilterRef}
            title='Subrechtsgebied'
            list={subrechtsgebied}
            filterNumbers={[numberOfErp, numberOfOmg, numberOfAan, numberOfCont, numberOfGron]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'subrechtsgebied')}
          />
        </div>

        <div className='mt-10 col-span-3 '>
          {data && (
            <div>
              <PolicyList data={laws} casus={props.casus} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
