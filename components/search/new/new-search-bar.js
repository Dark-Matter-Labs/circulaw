'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { IconX } from '@tabler/icons-react';

export default function NewSearchBar() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [inputValue, setInputValue] = useState(query);
  // to do make query update when search changes. use newQuery set up from algolia but without refining the search.
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState();

  const [placeholder, setPlaceholder] = useState('Circulaire wetgeving buiten de EU');

  useEffect(() => {
    if (pathname.includes('instrumenten')) {
      setSelectedTab('instrumenten');
      setPlaceholder('Zoek naar instrumenten...');
    } else if (pathname.includes('eu-wetgeving')) {
      setSelectedTab('eu-wetgeving');
      setPlaceholder('Zoek naar EU wetgeving');
    } else if (pathname.includes('over-circulaw')) {
      setSelectedTab('over-circulaw');
      setPlaceholder('Zoek naar over CircuLaw');
    } else if (pathname.includes('nieuws')) {
      setSelectedTab('nieuws');
      setPlaceholder('Zoek naar nieuws');
    } else {
      setSelectedTab('all');
      setPlaceholder('Circulaire wetgeving buiten de EU');
    }
  }, [pathname]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  function setNewQuery(newQuery) {
    setInputValue(newQuery);
  }

  function setQueryStringParameter(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState(
      {},
      '',
      decodeURIComponent(`${window.location.pathname}?${params}`),
    );
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
                  }}
                  onReset={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setQuery('');
                  }}
                >
                  <input
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
                      setNewQuery(event.currentTarget.value);
                    }}
                    autoFocus
                  />
                  <button
                    onClick={() => setQueryStringParameter('query', inputValue)}
                    type='submit'
                    className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl flex items-center justify-center hover:bg-green-200 hover:border-green-200'
                  >
                    Zoeken
                  </button>
                  <button
                    onClick={() => {
                      setQueryStringParameter('query', ''), setInputValue('');
                    }}
                    type='reset'
                    title='Clear the search query'
                    className={`${inputValue === '' ? 'hidden' : ''} ${
                      pathname === '/' ? 'hover:bg-white/50' : 'hover:bg-green-200'
                    } absolute top-3.5 right-28 rounded-full p-2  group`}
                  >
                    <IconX
                      className={`${pathname === '/' ? 'text-white' : 'text-green-600'} h-6 w-6`}
                    />
                  </button>
                </form>
              </div>
              <div className='mt-4 flex flex-row'>
                <>
                  <Link
                    href={`/search?${createQueryString('query', inputValue)}`}
                    className={`${
                      selectedTab === 'all'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Alle
                  </Link>
                  <Link
                    href={`/search/instrumenten?${createQueryString('query', inputValue)}`}
                    className={`${
                      selectedTab === 'instrumenten'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Instrumenten
                  </Link>
                  <Link
                    href={`/search/eu-wetgeving?${createQueryString('query', inputValue)}`}
                    className={`${
                      selectedTab === 'eu-wetgeving'
                        ? 'border-b-2 border-green-600 box-content'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    EU wetgeving
                  </Link>
                  <Link
                    href={`/search/over-circulaw?${createQueryString('query', inputValue)}`}
                    className={`${
                      selectedTab === 'over-circulaw'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Over CircuLaw
                  </Link>
                  <Link
                    href={`/search/nieuws?${createQueryString('query', inputValue)}`}
                    className={`${
                      selectedTab === 'nieuws'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Nieuws
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
