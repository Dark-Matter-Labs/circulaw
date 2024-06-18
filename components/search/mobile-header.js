import Link from 'next/link';
import { SearchBox } from 'react-instantsearch';
import { XIcon } from '@heroicons/react/outline';

export default function MobileHeaderSearch({ index }) {
  return (
    <div className='flex sm:hidden w-full max-w-sm flex-col items-center justify-center gap-y-6'>
      <div className='w-full h-full flex flex-col items-center justify-end pb-6'>
        <div className='flex flex-col justify-center w-full gap-y-1.5 mb-4'>
          <Link
            href='/zoeken/instrumenten'
            className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[60px]'
          >
            {index === 'instruments' && (
              <div className='bg-green-500 w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
              </div>
            )}
            {index === 'aboutPage' && (
              <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                <div className='bg-white h-3 w-3 rounded-full'></div>
              </div>
            )}
            <div className='flex flex-col items-start justify-start'>
              Instrumenten
              <span className='p-xs'>Zoeken binnen &apos;instrumenten&apos;</span>
            </div>
          </Link>
          <Link
            href='/zoeken/over-circulaw'
            // onClick={() => setSearchIndex('aboutPage')}
            className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[60px]'
          >
            {index === 'instruments' && (
              <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                <div className='bg-white h-3 w-3 rounded-full'></div>
              </div>
            )}
            {index === 'aboutPage' && (
              <div className='bg-green-500 w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
              </div>
            )}
            <div className='flex flex-col items-start justify-start'>
              Over Circulaw
              <span className='p-xs'>Zoeken binnen &apos;Over Circulaw&apos;</span>
            </div>
          </Link>
        </div>
        <SearchBox
          searchAsYouType={false}
          placeholder={
            index === 'instruments' ? 'Zoek naar instrumenten...' : 'Zoek naar Over CircuLaw...'
          }
          classNames={{
            root: 'h-16 max-w-sm w-full bg-green-600',
            form: 'bg-green-600 max-w-sm w-full h-[60px] rounded-cl flex-row items-center justify-between relative flex',
            input:
              'max-w-sm w-full h-[60px] focus:bg-[url("/search-icon.png")] bg-no-repeat bg-left [background-position-x:10px] pl-10 rounded-cl border-none bg-white/50 caret-white p-base text-white focus:ring-1 focus:ring-white placeholder:text-white placeholder:p-base-semibold',
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
              className='absolute top-3 right-24 rounded-full p-2 hover:bg-white/50 group'
            >
              <XIcon className='h-6 w-6 text-white group-hover:text-green-900' />
            </div>
          )}
        />
      </div>
    </div>
  );
}
