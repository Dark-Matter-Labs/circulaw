import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

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
    closeSerchMenu()
    localStorage.setItem('selectedIndex', searchIndex)
  }

  useEffect(() => {
    if (searchIndex === 'instruments') {
      setSearchUrl(`/search?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'euLaw') {
      setSearchUrl(`/search?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'aboutPage') {
      setSearchUrl(`/search?root${createQueryString('[query]', searchQuery)}`);
    } else if (searchIndex === 'newsItems') {
      setSearchUrl(`/search?root${createQueryString('[query]', searchQuery)}`);
    } else {
      setSearchUrl(`/search?root${createQueryString('[query]', searchQuery)}`);
    }
  }, [searchIndex, createQueryString, searchQuery]);

  return (
    <button type='submit'>
      <Link
        ref={linkRef}
        href={searchUrl}
        onClick={() => handleSubmit()}
        className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl flex items-center justify-center hover:bg-green-200 hover:border-green-200'
      >
        Zoeken
      </Link>
    </button>
  );
}
