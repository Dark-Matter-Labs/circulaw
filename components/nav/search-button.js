import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

export default function SearchButton({ linkRef, searchIndex, searchQuery }) {
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

  useEffect(() => {
    setSearchUrl(
      `/search?${createQueryString('query', searchQuery)}&${createQueryString('tab', searchIndex)}`,
    );
  }, [searchIndex, createQueryString, searchQuery]);

  return (
    <button type='submit'>
      <Link
        ref={linkRef}
        href={searchUrl}
        className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl flex items-center justify-center hover:bg-green-200 hover:border-green-200'
      >
        Zoeken
      </Link>
    </button>
  );
}
