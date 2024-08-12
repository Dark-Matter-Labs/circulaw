'use client'
import Link from 'next/link';
import { SearchBox } from 'react-instantsearch';
import { XIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';

export default function SearchHeader({ index }) {
  const [placeholder, setPlaceholder] = useState('instruments');

  useEffect(() => {
    if (index === 'instruments') {
      setPlaceholder('Zoek naar instrumenten...');
    } else if (index === 'aboutPage') {
      setPlaceholder('Zoek naar over CircuLaw');
    } else if (index === 'euLaw') {
      setPlaceholder('Zoek naar EU wetgeving');
    } else {
      setPlaceholder('Zoek naar nieuws');
    }
  }, [index]);

  return (
    <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
      <div className='w-full'>
        <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
          <SearchBox
            searchAsYouType={false}
            placeholder={placeholder}
            classNames={{
              root: 'h-16 w-[600px] bg-green-600',
              form: 'bg-green-600 w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex',
              input:
                'w-[600px] h-[66px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold',
              submitIcon: 'visible',
            }}
            submitIconComponent={() => (
              <div
                type='submit'
                className='ml-2 border h-[42px] w-24 border-white p-2 absolute top-3 right-3 shadow-card p-base-semibold text-green-600 bg-white rounded-cl hover:bg-green-200 hover:border-green-200'
              >
                Zoeken
              </div>
            )}
            resetIconComponent={() => (
              <div
                type='reset'
                title='Clear the search query'
                className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-white/50 group'
              >
                <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
              </div>
            )}
          />
          <div className='mt-4'>
            <>
              <Link
                href='/zoeken/instrumenten'
                className={`${
                  index === 'instruments'
                    ? 'border-b-2 border-white'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-white p-2`}
              >
                Instrumenten
              </Link>
              <Link
                href='/zoeken/eu-wetgeving'
                className={`${
                  index === 'euLaw'
                    ? 'border-b-2 border-white box-content'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-white p-2`}
              >
                EU wetgeving
              </Link>
              <Link
                href='/zoeken/over-circulaw'
                className={`${
                  index === 'aboutPage'
                    ? 'border-b-2 border-white'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-white p-2`}
              >
                Over
              </Link>
              <Link
                href='/zoeken/nieuws'
                className={`${
                  index === 'news' ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                } p-xs-semibold text-white p-2`}
              >
                Nieuws
              </Link>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
