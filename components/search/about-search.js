'use client';
import { Hits, Configure } from 'react-instantsearch';
import CustomStats from '../../components/search/stats';
import AboutHit from './about-hit';
import NoResults from './no-results';
import NoResultsBoundary from './no-results-boundary';

export default function AboutSearch() {
  return (
    <>
      <Configure hitsPerPage={10} />

      <div className='global-margin flex min-h-[80vh] justify-center sm:w-full'>
        <NoResultsBoundary fallback={<NoResults />}>
          <div className='mb-12'>
            <div className='mt-10 sm:ml-10'>
              <CustomStats index='Over CircuLaw' />
            </div>

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
    </>
  );
}
