import algoliasearch from 'algoliasearch';
import singletonRouter from 'next/router';

import {
  InstantSearch,
  Hits,
  SearchBox,
  InstantSearchSSRProvider,
  Configure,
  useInstantSearch,
} from 'react-instantsearch';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import Link from 'next/link';
import CustomStats from '../../components/search/stats';
import { XIcon } from '@heroicons/react/outline';
import AboutHit from './about-hit';
import Image from 'next/image';
import MobileHeaderSearch from './mobile-header';


const api_key = process.env.AGOLIA_ADMIN_KEY
const api_id = process.env.AGOLIA_APPLICATION_ID

const algoliaClient = algoliasearch(api_id, api_key);

export default function AboutSearch({ serverState, url }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={algoliaClient}
        indexName={'aboutPage'}
        routing={{
          router: createInstantSearchRouterNext({
            singletonRouter,
            serverUrl: url,
            routerOptions: {
              cleanUrlOnDispose: false,
              preserveSharedStateOnUnmount: true,
            },
          }),
        }}
        insights={true}
      >
        <Configure hitsPerPage={10} />
        <div className='bg-green-600 h-[260px] flex items-end justify-center w-full'>
          <div className='global-margin w-full flex items-center justify-center'>
            {/* DESKTOP */}
            <div className='hidden sm:flex flex-col items-center justify-center gap-y-6'>
              <div className='w-full'>
                <div className='w-full h-full flex flex-col items-center justify-end pb-10'>
                  <div className='mb-4'>
                    <div className='flex flex-row justify-center w-[600px] gap-x-1.5'>
                      <Link
                        href='/zoeken/instrumenten'
                        // onClick={() => setSearchIndex('instruments')}
                        className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]'
                      >
                        <div className='bg-black w-4 h-4 rounded-full flex items-center justify-center mr-4'>
                          <div className='bg-white h-3 w-3 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                          Instrumenten
                          <span className='p-xs'>Zoeken binnen &apos;instrumenten&apos;</span>
                        </div>
                      </Link>
                      <Link
                        href='/zoeken/over-circulaw'
                        className='flex-row px-5 py-1.5 w-full bg-white rounded-[8px] flex items-center justify-start p-base-semibold h-[72px]'
                      >
                        <div className='w-4 h-4 rounded-full flex items-center justify-center mr-4 bg-green-500'>
                          <div className='bg-green-500 border-white border-2 h-3 w-3 rounded-full'></div>
                        </div>
                        <div className='flex flex-col items-start justify-start'>
                          Over Circulaw
                          <span className='p-xs'>Zoeken binnen &apos;Over Circulaw&apos;</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <SearchBox
                    searchAsYouType={false}
                    placeholder='Zoek naar Over CircuLaw...'
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
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <MobileHeaderSearch index='aboutPage' />
          </div>
        </div>
        <div className='global-margin flex items-center justify-center mt-10'>
          <CustomStats />
        </div>
        <div className='global-margin flex'>
          <NoResultsBoundary fallback={<NoResults />}>
            <div className='mb-12'>
              <Hits
                classNames={{
                  root: 'border-none mt-10',
                  list: 'sm:ml-10',
                  item: 'px-0 pb-10 pt-0 relative',
                }}
                hitComponent={AboutHit}
              />
            </div>
          </NoResultsBoundary>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch();

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  return (
    <div className='h-96 w-full flex items-center justify-center my-10'>
      <Image src='/no-results.png' height={320} width={540} alt='no results for this search' />
    </div>
  );
}
