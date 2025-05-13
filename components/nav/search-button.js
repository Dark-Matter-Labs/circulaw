import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SearchButton({ linkRef, searchIndex, searchQuery, closeSerchMenu }) {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const [searchUrl, setSearchUrl] = useState('');

  function handleSubmit() {
    closeSerchMenu();
    localStorage.setItem('selectedIndex', searchIndex);
  }

  useEffect(() => {
    if (searchIndex === 'instruments') {
      setSearchUrl(`/zoeken?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'euLaw') {
      setSearchUrl(`/zoeken?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'aboutPage') {
      setSearchUrl(`/zoeken?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'newsItems') {
      setSearchUrl(`/zoeken?root${createQueryString('[query]', searchQuery)}`);
    } else {
      setSearchUrl(`/zoeken?root${createQueryString('[query]', searchQuery)}`);
    }
  }, [searchIndex, createQueryString, searchQuery]);

  return (
    <button type='submit'>
      <Link
        ref={linkRef}
        href={searchUrl}
        onClick={() => handleSubmit()}
        className='p-base-semibold absolute right-3 top-3 ml-2 flex h-[42px] w-24 items-center justify-center rounded-cl border border-white bg-white p-2 text-green-500 shadow-card hover:border-green-300 hover:bg-green-300'
      >
        Zoeken
      </Link>
    </button>
  );
}
