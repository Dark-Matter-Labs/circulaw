'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';

export default function NewSearchBar() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [inputValue, setInputValue] = useState(query)
  // to do make query update when search changes. use newQuery set up from algolia but without refining the search.
  const router = useRouter();
  const pathname = usePathname()    
  const [selectedTab, setSelectedTab] = useState()

const tab = ''
  useEffect(() => {
    if (pathname.includes('instruments')) {
        setSelectedTab('instruments')
    } else if (pathname.includes('eu-')) {
        setSelectedTab('eu')
    }
  })

  console.log(router, selectedTab)

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  function setNewQuery(newQuery) {
    setInputValue(newQuery)
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
                    autoComplete='off'
                    autoCorrect='off'
                    autoCapitalize='off'
                    placeholder='Search for products'
                    spellCheck={false}
                    maxLength={512}
                    type='search'
                    value={inputValue}
                    onChange={(event) => {
                      setNewQuery(event.currentTarget.value);
                    }}
                    autoFocus
                  />
                  <button onClick={() => setQueryStringParameter('query', inputValue)} type='submit'>Submit</button>
                  <button
                    onClick={() => setQueryStringParameter('query', '')}
                    type='reset'
                  >
                    Reset
                  </button>
                </form>
              </div>
              <div className='mt-4 flex flex-row'>
                <>
                  <Link
                    href={`/search?${createQueryString('query', inputValue)}`}
                    className={`${
                      tab === 'all'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    All
                  </Link>
                  <Link
                    href={`/search/instrumenten?${createQueryString('query', inputValue)}`}
                    className={`${
                      tab === 'instruments'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Instrumenten
                  </Link>
                  <Link
                    href={`/search/eu-wetgeving?${createQueryString('query', inputValue)}`}
                    className={`${
                      tab === 'euLaw'
                        ? 'border-b-2 border-green-600 box-content'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    EU wetgeving
                  </Link>
                  <Link
                    href={`/search/over-circulaw?${createQueryString('query', inputValue)}`}
                    className={`${
                      tab === 'aboutPage'
                        ? 'border-b-2 border-green-600'
                        : 'border-b-2 border-transparent'
                    } p-xs-semibold text-green-600 p-2`}
                  >
                    Over CircuLaw
                  </Link>
                  <Link
                    href={`/search/nieuws?${createQueryString('query', inputValue)}`}
                    className={`${
                      tab === 'news'
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
