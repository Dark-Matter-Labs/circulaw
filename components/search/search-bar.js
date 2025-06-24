'use client';

import { useEffect, useRef, useState } from 'react';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';

import { Tab, TabList } from '@headlessui/react';
import { IconSearch, IconX } from '@tabler/icons-react';

export default function NewSearchBar(props) {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch(props);

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
      setPlaceholder('Zoek naar nieuws');
    } else if (props.selectedIndex === 0) {
      setPlaceholder('Zoek naar content binnen Circulaw...');
    }
  }, [props.selectedIndex]);

  useEffect(() => {
    // Trigger refine with the current inputValue whenever selectedIndex changes
    refine(inputValue);
  }, [props.selectedIndex, refine]); // eslint-disable-line

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <div className='global-margin mt-20 rounded-cl bg-green-500'>
      <div className='relative h-full w-full object-cover px-2 py-10 sm:px-16'>
        <div className='my-5 flex h-full flex-col items-center justify-center gap-y-6'>
          <div className='w-full'>
            <div className='flex h-full w-full flex-col items-center justify-end'>
              <div className='w-full max-w-sm sm:max-w-[600px]'>
                <form
                  className='relative flex h-[66px] max-w-sm flex-row items-center justify-between rounded-cl sm:w-[600px] sm:max-w-[600px]'
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
                    className='p-base sm:placeholder:p-base-semibold placeholder:p-2xs h-[66px] w-full rounded-cl border-none bg-green-100/50 bg-left bg-no-repeat pl-12 text-white caret-white shadow-card [background-position-x:10px] placeholder:text-white focus:bg-[url("/search-icon.png")] focus:bg-[length:24px_24px] focus:ring-1 focus:ring-white sm:w-[600px]'
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
                    className='p-base-semibold absolute right-3 top-3 ml-2 flex h-[42px] items-center justify-center rounded-cl border border-white bg-white p-2 text-green-500 shadow-card hover:border-green-300 hover:bg-green-300 sm:w-24'
                  >
                    <span className='hidden sm:inline'>Zoeken</span>
                    <span>
                      <IconSearch className='h-6 w-6 text-green-500 sm:h-4 sm:w-4' />
                    </span>
                  </button>
                  <button
                    type='reset'
                    title='Clear the search query'
                    className={`${
                      inputValue === '' || isSearchStalled ? 'hidden' : ''
                    } group absolute right-16 top-3.5 rounded-full p-2 hover:bg-green-300 sm:right-28`}
                  >
                    <IconX className='h-6 w-6 text-white' />
                  </button>
                </form>
              </div>
              <TabList className='no-scrollbar mt-4 flex max-w-xs snap-x snap-mandatory flex-row overflow-x-scroll sm:max-w-none'>
                <Tab
                  onClick={() => props.setTabFunction(0)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-white data-[selected]:border-b-2 data-[selected]:border-white'
                >
                  Alle
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(1)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-white data-[selected]:border-b-2 data-[selected]:border-white'
                >
                  Instrumenten
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(2)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-white data-[selected]:border-b-2 data-[selected]:border-white'
                >
                  EU wetgeving
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(3)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-white data-[selected]:border-b-2 data-[selected]:border-white'
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
