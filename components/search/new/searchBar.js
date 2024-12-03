'use client';
import { SearchBox } from 'react-instantsearch';
import { IconX } from '@tabler/icons-react';

export default function SearchBar({ algoliaIndex }) {

    function setQueryStringParameter(name, value) {
        const params = new URLSearchParams(window.location.search);
        params.set(name, value);
        window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${params}`));
    }
    
  return (
    <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
      <div className='w-full'>
        <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
          <SearchBox
            searchAsYouType={false}
            placeholder={'placeholder'}
            classNames={{
              root: 'h-16 w-[600px] bg-white rounded-cl',
              form: 'bg-white w-[600px] h-[66px] rounded-cl flex-row items-center justify-between relative flex shadow-card',
              input:
                'w-[600px] h-[66px] focus:bg-[url("/search-icon-dark-hq.png")] focus:bg-[length:24px_24px] bg-no-repeat bg-left [background-position-x:10px] pl-12 rounded-cl border-none bg-white/50 caret-green-600 p-base text-green-600 focus:ring-1 focus:ring-green-600 placeholder:text-green-600 placeholder:p-base-semibold',
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
                className='absolute top-3.5 right-28 rounded-full p-2 hover:bg-green-200 group'
              >
                <IconX className='h-6 w-6 text-green-600 group-hover:text-green-900' />
              </div>
            )}
          />
          <div className='mt-4 flex flex-row'>
            <>
              <button
                onClick={() => setQueryStringParameter('tab', 'all')}
                className={`${
                    algoliaIndex === 'all' ? 'border-b-2 border-green-600' : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                All
              </button>
              <button
                onClick={() => setQueryStringParameter('tab', 'instruments')}

                className={`${
                    algoliaIndex === 'instruments'
                    ? 'border-b-2 border-green-600'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Instrumenten
              </button>
              <button
              onClick={() => setQueryStringParameter('tab', 'euLaw')}
                className={`${
                    algoliaIndex === 'euLaw'
                    ? 'border-b-2 border-green-600 box-content'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                EU wetgeving
              </button>
              <button
              onClick={() => setQueryStringParameter('tab', 'aboutPage')}
                className={`${
                    algoliaIndex === 'aboutPage'
                    ? 'border-b-2 border-green-600'
                    : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Over CircuLaw
              </button>
              <button
              onClick={() => setQueryStringParameter('tab', 'news')}

                className={`${
                    algoliaIndex === 'news' ? 'border-b-2 border-green-600' : 'border-b-2 border-transparent'
                } p-xs-semibold text-green-600 p-2`}
              >
                Nieuws
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
