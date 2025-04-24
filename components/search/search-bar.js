'use client';

import { useEffect, useRef, useState } from 'react';
import { useInstantSearch, useSearchBox } from 'react-instantsearch';

import { Tab, TabList } from '@headlessui/react';
import { IconX } from '@tabler/icons-react';

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
      setPlaceholder('Zoek naar over CircuLaw');
    } else if (props.selectedIndex === 4) {
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
      <div className='relative h-full w-full object-cover px-16 py-10'>
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
                    className='p-base sm:placeholder:p-base-semibold placeholder:p-2xs h-[66px] w-full rounded-cl border-none bg-white bg-left bg-no-repeat pl-12 text-cl-black caret-cl-black shadow-card [background-position-x:10px] placeholder:text-cl-black focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] focus:ring-1 focus:ring-cl-black sm:w-[600px]'
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
                    className='p-base-semibold absolute right-3 top-3 ml-2 flex h-[42px] w-24 items-center justify-center rounded-cl border border-white bg-white p-2 text-cl-black shadow-card hover:border-green-300 hover:bg-green-300'
                  >
                    Zoeken
                  </button>
                  <button
                    type='reset'
                    title='Clear the search query'
                    className={`${
                      inputValue === '' || isSearchStalled ? 'hidden' : ''
                    } group absolute right-28 top-3.5 rounded-full p-2 hover:bg-green-300`}
                  >
                    <IconX className='h-6 w-6 text-cl-black' />
                  </button>
                </form>
              </div>
              <TabList className='no-scrollbar mt-4 flex max-w-sm snap-x snap-mandatory flex-row overflow-x-scroll sm:max-w-none'>
                <Tab
                  onClick={() => props.setTabFunction(0)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-cl-black data-[selected]:border-b-2 data-[selected]:border-cl-black'
                >
                  Alle
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(1)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-cl-black data-[selected]:border-b-2 data-[selected]:border-cl-black'
                >
                  Instrumenten
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(2)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-cl-black data-[selected]:border-b-2 data-[selected]:border-cl-black'
                >
                  EU wetgeving
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(3)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-cl-black data-[selected]:border-b-2 data-[selected]:border-cl-black'
                >
                  Over CircuLaw
                </Tab>
                <Tab
                  onClick={() => props.setTabFunction(4)}
                  className='p-xs-semibold text-nowrap border-b-2 border-transparent p-2 text-cl-black data-[selected]:border-b-2 data-[selected]:border-cl-black'
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
