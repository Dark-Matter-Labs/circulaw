'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { IconX } from '@tabler/icons-react';
import { useSearchBox, useInstantSearch } from 'react-instantsearch';
import { Tab, TabList } from '@headlessui/react';

export default function NewSearchBar(props) {
  const { query, refine } = useSearchBox(props);
  const { status, uiState } = useInstantSearch(props);
  const isSearchStalled = status === 'stalled';
  console.log(uiState)
  // const [query, setQuery] = useState(searchParams.get('query'));
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);
  // to do make query update when search changes. use newQuery set up from algolia but without refining the search.
  const pathname = usePathname();
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


  function setQuery(newQuery) {
    console.log(newQuery, 'in set q 1')
    setInputValue(newQuery);
    console.log(newQuery, 'in set q 2')
    refine(newQuery);
  }

  return (
    <div className='bg-green-50 h-[260px] flex items-end justify-center w-full'>
      <div className='global-margin w-full flex items-center justify-center'>
        <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
          <div className='w-full'>
            <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
              <div>
                <form
                  className='w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex'
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
                    className='bg-white placeholder:text-green-600 caret-green-600 focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] text-green-600 shadow-card focus:ring-green-600 w-[600px] h-[66px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none p-base focus:ring-1 placeholder:p-base-semibold'
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
                    className={`${inputValue === '' || isSearchStalled ? 'hidden' : ''} ${
                      pathname === '/' ? 'hover:bg-white/50' : 'hover:bg-green-200'
                    } absolute top-3.5 right-28 rounded-full p-2  group`}
                  >
                    <IconX
                      className={`${pathname === '/' ? 'text-white' : 'text-green-600'} h-6 w-6`}
                    />
                  </button>
                </form>
              </div>
              <TabList className='mt-4 flex flex-row'>
                <>
                  <Tab
                    onClick={() => props.setTabFunction(0)}
                    className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2'
                  >
                    Alle
                  </Tab>
                  <Tab
                    onClick={() => props.setTabFunction(1)}
                    className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2'
                  >
                    Instrumenten
                  </Tab>
                  <Tab
                    onClick={() => props.setTabFunction(2)}
                    className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2'
                  >
                    EU wetgeving
                  </Tab>
                  <Tab
                    onClick={() => props.setTabFunction(3)}
                    className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2'
                  >
                    Over CircuLaw
                  </Tab>
                  <Tab
                    onClick={() => props.setTabFunction(4)}
                    className='data-[selected]:border-b-2 data-[selected]:border-green-600 border-b-2 border-transparent p-xs-semibold text-green-600 p-2'
                  >
                    Nieuws
                  </Tab>
                </>
              </TabList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
