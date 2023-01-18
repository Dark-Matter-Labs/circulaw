import { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import createPersistedState from 'use-persisted-state';
import { SearchIcon, XIcon, AdjustmentsIcon } from '@heroicons/react/outline';
import {
  overheidslaag,
  rechtsgebied,
  subrechtsgebied,
  juridischeHaalbaarheid,
  juridischInvloed,
  extraContent,
  rLadder,
} from '../../dataFilter';

import SearchFilter from '/components/search-filter';
import PolicyList from '/components/policy-list';
import Fuse from 'fuse.js';
import useSWR from 'swr';
import client from '../../lib/sanity';
import { groq } from 'next-sanity';
import { toPlainText } from '@portabletext/react';

// creating objects for persisting values
const useSelectedState = createPersistedState('selected');

export default function MeasuresLayout(props) {
  // need to add error check ? or replace the fetcher function in utils/filter funcition
  const { data } = useSWR(groq`*[_type == "measure"]| order(lower(titel) asc)`, (query) => client.fetch(query));

  // creating references to access child component functions
  const wettelijkFilterRef = useRef();
  const rechtsgebiedFilterRef = useRef();
  const subrechtsgebiedFilterRef = useRef();
  const rLadderFilterRef = useRef();
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

  const [numberOfPubliek, setNumberOfPubliek] = useState(0);
  const [numberOfPrivaat, setNumberOfPrivaat] = useState(0);
  const [numberOfFiscaal, setNumberOfFiscaal] = useState(0);

  const [numberOfR1, setNumberOfR1] = useState(0);
  const [numberOfR2, setNumberOfR2] = useState(0);
  const [numberOfR3, setNumberOfR3] = useState(0);
  const [numberOfR4, setNumberOfR4] = useState(0);
  const [numberOfR5, setNumberOfR5] = useState(0);
  const [numberOfR6, setNumberOfR6] = useState(0);

  const [numberOfJHLow, setNumberOfJ1] = useState(0);
  const [numberOfJHMedium, setNumberOfJ2] = useState(0);
  const [numberOfJHHigh, setNumberOfJ3] = useState(0);

  const [numberOfJILow, setNumberOfJILow] = useState(0);
  const [numberOfJIMedium, setNumberOfJIMedium] = useState(0);
  const [numberOfJIHigh, setNumberOfJIHigh] = useState(0);

  const [numberOfErp, setNumberOfErp] = useState(0);
  const [numberOfOmg, setNumberOfOmg] = useState(0);
  const [numberOfAan, setNumberOfAan] = useState(0);
  const [numberOfCont, setNumberOfCont] = useState(0);
  const [numberOfGron, setNumberOfGron] = useState(0);
  const [numberOfCultuur, setNumberOfCultuur] = useState(0);
  const [numberOfStaas, setNumberOfStaas] = useState(0);
  const [numberOfMilie, setNumberOfMilie] = useState(0);

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
    rechtsgebiedFilterRef.current.reset();
    subrechtsgebiedFilterRef.current.reset();
    rLadderFilterRef.current.reset();
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

      let numR1 = 0;
      let numR2 = 0;
      let numR3 = 0;
      let numR4 = 0;
      let numR5 = 0;
      let numR6 = 0;

      let numLeidraad = 0;
      let numVoorbeeld = 0;

      let numJHLow = 0;
      let numJHMedium = 0;
      let numJHHigh = 0;

      let numJILow = 0;
      let numJIMedium = 0;
      let numJIHigh = 0;

      let numPubliek = 0;
      let numPrivaat = 0;
      let numFiscaal = 0;

      let numErp = 0;
      let numOmg = 0;
      let numAan = 0;
      let numCont = 0;
      let numGron = 0;
      let numCultuur = 0;
      let numStaas = 0;
      let numMilie = 0;

      // FILTER LOGIC FOR MULTICHOICE ATTRIBUTES
      if (selected.extraContent.length > 0) {
        if (selected.extraContent.includes('Leidraad')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.extraContent.includes('Leidraad');
          });
        }
        if (selected.extraContent.includes('Voorbeeld')) {
          filteredLaws = filteredLaws.filter((element) => {
            return element.extraContent.includes('Voorbeeld');
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

        if (measure.rechtsgebied === 'Publiekrecht') {
          numPubliek += 1;
        } else if (measure.rechtsgebied === 'Privaatrecht') {
          numPrivaat += 1;
        } else if (measure.rechtsgebied === 'Fiscaal recht') {
          numFiscaal += 1;
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
        } else if (measure.subrechtsgebied === 'Cultuur recht') {
          numCultuur += 1;
        } else if (measure.subrechtsgebied === 'Staats-en bestuursrecht') {
          numStaas += 1;
        } else if (measure.subrechtsgebied === 'Milieurecht') {
          numMilie += 1;
        }

        if (measure.rLadder.includes('R1')) {
          numR1 += 1;
        }
        if (measure.rLadder.includes('R2')) {
          numR2 += 1;
        }
        if (measure.rLadder.includes('R3')) {
          numR3 += 1;
        }
        if (measure.rLadder.includes('R4')) {
          numR4 += 1;
        }
        if (measure.rLadder.includes('R5')) {
          numR5 += 1;
        }
        if (measure.rLadder.includes('R6')) {
          numR6 += 1;
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

      setNumberOfPubliek(numPubliek);
      setNumberOfPrivaat(numPrivaat);
      setNumberOfFiscaal(numFiscaal);

      setNumberOfR1(numR1);
      setNumberOfR2(numR2);
      setNumberOfR3(numR3);
      setNumberOfR4(numR4);
      setNumberOfR5(numR5);
      setNumberOfR6(numR6);

      setNumberOfJ1(numJHLow);
      setNumberOfJ2(numJHMedium);
      setNumberOfJ3(numJHHigh);

      setNumberOfJILow(numJILow);
      setNumberOfJIMedium(numJIMedium);
      setNumberOfJIHigh(numJIHigh);

      setNumberOfErp(numErp);
      setNumberOfOmg(numOmg);
      setNumberOfAan(numAan);
      setNumberOfCont(numCont);
      setNumberOfGron(numGron);
      setNumberOfCultuur(numCultuur);
      setNumberOfStaas(numStaas);
      setNumberOfMilie(numMilie);
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

    if (selected.rLadder.length !== 0 && typeof rLadderFilterRef.current !== 'undefined') {
      rLadderFilterRef.current.set(selected.rLadder);
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
                    <span className='font-manrope font-bold text-lg'>Filters</span>
                  </div>
                  <div className='flex-1 h-0 overflow-y-auto'>
                    <div className='p-8 '>
                      <SearchFilter
                        ref={extraContentFilterRef}
                        title='Extra Content'
                        list={extraContent}
                        filterNumbers={[numberOfLeidraad, numberOfVoorbeeld]}
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
                        ref={rechtsgebiedFilterRef}
                        title='Rechtsgebied'
                        list={rechtsgebied}
                        filterNumbers={[numberOfPubliek, numberOfPrivaat, numberOfFiscaal]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'rechtsgebied')
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
                          numberOfCultuur,
                          numberOfStaas,
                          numberOfMilie,
                        ]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'subrechtsgebied')
                        }
                      />
                      <SearchFilter
                        ref={rLadderFilterRef}
                        title='R - ladder'
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
                        ref={juridischeHaalbaarheidFilterRef}
                        title='Juridische Haalbaarheid'
                        list={juridischeHaalbaarheid}
                        filterNumbers={[numberOfJHLow, numberOfJHMedium, numberOfJHHigh]}
                        handleFilters={(checkboxState) =>
                          handleFilters(checkboxState, 'juridischeHaalbaarheid')
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
          <Link href='/'>Home</Link>
          <span className=''> → </span>
          <Link href={`/${props.thema.toLowerCase().replace(/ /g, '-')}`} passHref>
            <span className='inline-block lowercase first-letter:uppercase'>
              {props.thema.replace('-', ' ')}
            </span>
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
            <Image src={props.icon} alt={`${props.thema} 'icon'`} />
          </div>
          <div>
            {props.thema === 'circulaire-windturbines' ? (
              <h2 className='max-w-0 leading-6 pb-1 pl-1 mobile sm:main lowercase first-letter:uppercase'>
                Circulaire windturbines stimuleren
              </h2>
            ) : (
              <h2 className='max-w-0 leading-6 pb-1 pl-1 mobile sm:main lowercase first-letter:uppercase'>
                {props.thema} stimuleren
              </h2>
            )}
          </div>
        </div>
        <div className='col-span-2'>
          <div className='pt-5'>
            <div>
              <span className='font-manrope font-semibold text-base'>{props.searchTitle}</span>
            </div>

            {/* AUTOCOMPLETE */}
            <div className='sm:w-9/12 my-5 focus-within:ring-2 focus-within:border-0 focus-within:ring-green-600 border outline-none rounded-lg'>
              <Combobox value={firstLaw} onChange={setFirstLaw}>
                <div className='flex items-center px-3'>
                  <SearchIcon className='h-5 w-5 text-gray-500 inline-block' />
                  <Combobox.Input
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoComplete={'off'}
                    className='w-full py-2 px-3 outline-none border-0 rounded-lg focus:ring-0 font-openSans placeholder:text-black-white-600 placeholder:italic'
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
                        {/* need to redo style here */}
                        {({ active }) => (
                          <li
                            className={`${
                              selectedResults?.slice(0, 10).slice(-1)[0].titel === law.titel &&
                              active === true
                                ? 'rounded-b-lg'
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
            {/* clear search and clear filters have the same effect. Should there maybe be a Reset? which resets all search parameters. Clear search button removed for now*/}

            {numberOfLaws === 0 && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>0</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.thema}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}
            {numberOfLaws > 1 && numberOfLaws < props.totalNumberOfLaws && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.thema}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}

            {searchValue !== '' && numberOfLaws === 1 && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.thema}</b>{' '}
                  voor <b>{searchValue}</b>
                </span>
              </div>
            )}

            {numberOfLaws === props.totalNumberOfLaws && (
              <div>
                <span className='font-manrope text-lg sm:text-xl'>
                  <b>{numberOfLaws}</b> resultaten in{' '}
                  <b className='inline-block lowercase first-letter:uppercase'>{props.thema}</b>{' '}
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
            className='px-4 inline-flex border-2 p-2 w-full border-black-white-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
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
            ref={extraContentFilterRef}
            title='Extra Content'
            list={extraContent}
            filterNumbers={[numberOfLeidraad, numberOfVoorbeeld]}
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
            ref={rechtsgebiedFilterRef}
            title='Rechtsgebied'
            list={rechtsgebied}
            filterNumbers={[numberOfPubliek, numberOfPrivaat, numberOfFiscaal]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'rechtsgebied')}
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
              numberOfCultuur,
              numberOfStaas,
              numberOfMilie,
            ]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'subrechtsgebied')}
          />

          <SearchFilter
            ref={rLadderFilterRef}
            title='R - ladder'
            list={rLadder}
            filterNumbers={[numberOfR1, numberOfR2, numberOfR3, numberOfR4, numberOfR5, numberOfR6]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'rLadder')}
          />

          <SearchFilter
            ref={juridischeHaalbaarheidFilterRef}
            title='Juridische Haalbaarheid'
            list={juridischeHaalbaarheid}
            filterNumbers={[numberOfJHLow, numberOfJHMedium, numberOfJHHigh]}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'juridischeHaalbaarheid')
            }
          />
          <SearchFilter
            ref={juridischInvloedFilterRef}
            title='Invloed'
            list={juridischInvloed}
            filterNumbers={[numberOfJILow, numberOfJIMedium, numberOfJIHigh]}
            handleFilters={(checkboxState) => handleFilters(checkboxState, 'juridischInvloed')}
          />
        </div>
        <div className='mt-10 col-span-3 '>
          {data && (
            <div>
              <PolicyList data={laws} casus={props.thema} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
