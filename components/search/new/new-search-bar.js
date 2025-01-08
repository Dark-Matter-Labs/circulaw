'use client';
import { useState, useEffect, useRef } from 'react';
import { IconX } from '@tabler/icons-react';
import { useSearchBox, useInstantSearch } from 'react-instantsearch';
import { Tab, TabList } from '@headlessui/react';

export default function NewSearchBar(props) {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch(props);
  // const { canRefine } = useClearRefinements(props);

  // console.log(canRefine)
  const isSearchStalled = status === 'stalled';

  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState('Zoek naar content binnen Circulaw...');
  useEffect(() => {
    if (props.selectedIndex === 1) {
      setPlaceholder('Zoek naar instrumenten...');
    } else if (props.selectedIndex === 2) {
      setPlaceholder('Zoek naar EU wetgeving');
    } else if (props.selectedIndex === 3) {
      setPlaceholder('Zoek naar over CircuLaw');
    } else if (props.selectedIndex === 4) {
      setPlaceholder('Zoek naar nieuws');
    } else if (props.selectedIndex === 0) {
      setPlaceholder('Zoek naar content binnen Circulaw...');
    }
  }, [props.selectedIndex]);

  // need to only refie on button click
  useEffect(() => {
    // Trigger refine with the current inputValue whenever selectedIndex changes
    refine(inputValue);
  }, [props.selectedIndex, inputValue, refine]);

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <div className='bg-green-50 h-[260px] flex items-end justify-center sm:max-w-none w-full'>
      <div className='global-margin w-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-y-6'>
          <div className='w-full'>
            <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
              <div className='w-full max-w-sm sm:max-w-[600px]'>
                <form
                  className='max-w-sm sm:max-w-[600px] sm:w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex'
                  action=''
                  role='search'
                  noValidate
                  onSubmit={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setQuery(inputValue);
                    if (inputRef.current) {
                      inputRef.current.blur();
                    }
                  }}
                  onReset={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                    setQuery('');
                  }}
                >
                  <input
                    ref={inputRef}
                    className='bg-white placeholder:text-green-600 caret-green-600 focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] text-green-600 shadow-card focus:ring-green-600 w-full sm:w-[600px] h-[66px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none p-base focus:ring-1 sm:placeholder:p-base-semibold placeholder:p-2xs'
                    autoComplete='off'
                    autoCorrect='off'
                    autoCapitalize='off'
                    placeholder={placeholder}
                    spellCheck={false}
                    maxLength={512}
                    type='text'
                    value={inputValue}
                    onChange={(event) => {
                      setInputValue(event.currentTarget.value);
                    }}
                    autoFocus
                  />
                  <button
                    type='submit'
                    className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl flex items-center justify-center hover:bg-green-200 hover:border-green-200'
                  >
                    Zoeken
                  </button>
                  <button
                    type='reset'
                    title='Clear the search query'
                    className={`${
                      inputValue === '' || isSearchStalled ? 'hidden' : ''
                    } absolute top-3.5 right-28 rounded-full p-2 group hover:bg-green-200`}
                  >
                    <IconX className='h-6 w-6 text-green-600' />
                  </button>
                </form>
              </div>
              <TabList className='mt-4 max-w-sm flex flex-row overflow-x-scroll snap-x snap-mandatory no-scrollbar'>
                <Tab
                  onClick={() => props.setTabFunction(0)}
                  className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2 text-nowrap'
                >
                  Alle
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(1)}
                  className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2 text-nowrap'
                >
                  Instrumenten
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(2)}
                  className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2 text-nowrap'
                >
                  EU wetgeving
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(3)}
                  className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2 text-nowrap'
                >
                  Over CircuLaw
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(4)}
                  className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2 text-nowrap'
                >
                  Nieuws
                </Tab>
              </TabList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
