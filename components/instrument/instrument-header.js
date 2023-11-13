import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import SocialButtons from '../social-buttons';
import InstrumentMetaData from './instrument-metadata';
import Tag from '../tag';

export default function Instrumentheader({ data }) {
  const router = useRouter();

  return (
    <>
      {/* Not sticky */}
      <div className='sm:sticky -top-[294px] lgNav:-top-[277px] z-20 bg-gradient-to-b from-[#042D36] to-[#22532200] bg-green-500 pt-3'>
        <div className='h-auto sm:h-[360px] flex flex-col global-margin justify-between'>
          <div className='max-w-[800px] pt-6 pb-6 sm:pb-0 flex justify-between items-center'>
            <button
              type='button'
              onClick={() => router.back()}
              className='link-interaction-dark-bg'
            >
              <span className='breadcrumb text-grey-100 flex justify-center items-center underline hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white'>
                <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
              </span>{' '}
            </button>
            <div className='float-right'>
              <SocialButtons title={data?.measure?.titel} viewport='desktop' />
            </div>
          </div>
          <div className='mb-6 h-auto'>
            <div className='w-full flex'>
              <Link
                href={`/${data?.measure?.thema?.toLowerCase().replace(/ /g, '-')}`}
                className=''
              >
                <Tag classes='border border-grey-100 hover:border-green-200 active:border-green-400 text-grey-100 mr-2 hover:text-green-200 active:text-green-400 focus:text-green-100 focus:right-2 focus:ring-white'>
                  {data?.measure?.thema.replace('-', ' ')}
                </Tag>
              </Link>

              {data?.measure?.beleid === true && (
                <Tag classes='bg-green-300 text-green-800'>Beleid</Tag>
              )}
              {data?.measure?.inkoop === true && (
                <Tag classes='bg-green-300 text-green-800'>Inkoop</Tag>
              )}
              {data?.measure?.grondpositie === true && (
                <Tag classes='bg-green-300 text-green-800'>Grondpositie</Tag>
              )}
              {data?.measure?.subsidie === true && (
                <Tag classes='bg-green-300 text-green-800'>Subsidie</Tag>
              )}
              {data?.measure?.fiscaal === true && (
                <Tag classes='bg-green-300 text-green-800'>Fiscaal</Tag>
              )}
            </div>
            <div className='max-w-4xl flex justify-start overflow-hidden'>
              <h1 className='justify-self-start p-3xl-semibold sm:p-7xl-bold lg:block mt-1 text-grey-100 pb-1'>
                {data?.measure?.titel}
              </h1>
            </div>
          </div>
        </div>
        {/* Metadata */}
        <div className='bg-grey-100 w-screen flex justify-items-start sm:border-b sm:border-gray-300'>
          <div className='global-margin w-full'>
            <div className='grid grid-col-1 w-full max-w-4xl'>
              <InstrumentMetaData data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
