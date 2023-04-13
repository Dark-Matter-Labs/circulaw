import { useRouter } from 'next/router';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import MeasureOverview from '../components/measure-overview';
import MeasureTable from '../components/measure-table';
import { instrumentPTComponents } from '../lib/portable-text/pt-components';

import { usePreview } from '../lib/sanity.preview';

export default function InstrumentPreview({ query, queryParams }) {
  const data = { measure: usePreview(null, query, queryParams) };
  const router = useRouter();
  return (
    <div className='measure-bg'>
      <div className='global-margin sm:pt-10 '>
        <div className='grid grid-cols-1 sm:grid-cols-12 content-center'>
          <div className='sm:col-span-12 row-span-1 h-12 mt-4'>
            {/* BREADCRUMB */}
            <button type='button' onClick={() => router.back()}>
              <span className='breadcrumb flex justify-center items-center underline'>
                <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
              </span>{' '}
            </button>
          </div>
          <div className='sm:col-span-12 row-span-1'>
            <h1 className='lg:block sm:pt-4 pb-6 sm:pb-10 mobile sm:desktop'>
              {data?.measure?.titel}
            </h1>
          </div>
          {data?.measure?.subtitel && (
            <div className='sm:col-span-7 row-span-1'>
              <h2 className='lg:block p-lg sm:p-xl pb-10'> {data?.measure?.subtitel}</h2>
            </div>
          )}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 '>
          <MeasureOverview data={data} viewport='mobile' />
          <div className='sm:max-w-3xl pb-20 col-span-2 '>
            <div className='py-4'>
              <PortableText value={data?.measure.content} components={instrumentPTComponents} />
            </div>
            <MeasureTable data={data} />
          </div>
          <MeasureOverview data={data} viewport='desktop' />
        </div>
        <Link
          className='bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0'
          href='/api/exit-preview'
        >
          Exit Preview
        </Link>
      </div>
    </div>
  );
}
