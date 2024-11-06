import Link from 'next/link';
import { SearchBox } from 'react-instantsearch';
import { IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function MobileHeaderSearch({ index }) {
  const [placeholder, setPlaceholder] = useState('Zoek naar instrumenten...');

  useEffect(() => {
    if (index === 'instruments') {
      setPlaceholder('Zoek in instrumenten...');
    } else if (index === 'aboutPage') {
      setPlaceholder('Zoek in "Over CircuLaw"...');
    } else if (index === 'euLaw') {
      setPlaceholder('Zoek in EU wetgeving...');
    } else {
      setPlaceholder('Zoek in Nieuws...');
    }
  }, [index]);

  return (
    <div className='flex sm:hidden w-full max-w-sm flex-col items-center justify-center'>
      <div className='w-full h-full flex flex-col items-center justify-end pb-6'>
        <SearchBox
          searchAsYouType={false}
          placeholder={placeholder}
          classNames={{
            root: 'h-16 max-w-sm w-full bg-green-50',
            form: 'bg-green-50 max-w-sm w-full h-[60px] rounded-cl flex-row items-center justify-between relative flex shadow-card',
            input:
              'max-w-sm w-full h-[60px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-10 rounded-cl border-none bg-white-600 caret-green-600 p-base text-green-600 focus:ring-1 focus:ring-green-600 placeholder:text-green-600 placeholder:p-base-semibold',
            submitIcon: 'visible',
          }}
          submitIconComponent={() => (
            <div
              type='submit'
              className='flex items-center ml-2 border h-[40px] w-22 border-white p-2 absolute top-2.5 right-2.5 shadow-card p-base-semibold text-green-600 bg-white rounded-cl'
            >
              Zoeken
            </div>
          )}
          resetIconComponent={() => (
            <div
              type='reset'
              title='Clear the search query'
              className='absolute top-3 right-24 rounded-full p-2 hover:bg-green-200 group'
            >
              <IconX className='h-6 w-6 text-green-600 group-hover:text-green-900' />
            </div>
          )}
        />
      </div>
      <div className='mb-10'>
        <>
          <Link
            href='/zoeken/instrumenten'
            className={`${
              index === 'instruments'
                ? 'border-b-2 border-green-600'
                : 'border-b-2 border-transparent'
            } p-xs-semibold text-green-600 p-2`}
          >
            Instrumenten
          </Link>
          <Link
            href='/zoeken/eu-wetgeving'
            className={`${
              index === 'euLaw'
                ? 'border-b-2 border-green-600 box-content'
                : 'border-b-2 border-transparent'
            } p-xs-semibold text-green-600 p-2`}
          >
            EU wetgeving
          </Link>
          <Link
            href='/zoeken/over-circulaw'
            className={`${
              index === 'aboutPage'
                ? 'border-b-2 border-green-600'
                : 'border-b-2 border-transparent'
            } p-xs-semibold text-green-600 p-2`}
          >
            Over
          </Link>
          <Link
            href='/zoeken/nieuws'
            className={`${
              index === 'news' ? 'border-b-2 border-green-600' : 'border-b-2 border-transparent'
            } p-xs-semibold text-green-600 p-2`}
          >
            Nieuws
          </Link>
        </>
      </div>
    </div>
  );
}
