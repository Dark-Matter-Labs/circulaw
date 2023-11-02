import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import SocialButtons from '../social-buttons';
import InstrumentMetaData from './instrument-metadata';

export default function Instrumentheader({ data }) {
  const router = useRouter();

  return (
    <>
      {/* Not sticky */}
      <div className='sm:sticky -top-[277px] z-20 bg-gradient-to-b from-[#042D36] to-[#22532200] bg-green-500 pt-3'>
        <div className='h-auto sm:h-[360px] flex flex-col global-margin justify-between'>
          <div className='max-w-[800px] sm:pl-8 pt-6 pb-6 sm:pb-0 flex justify-between items-center'>
          <button type='button' onClick={() => router.back()}>
            <span className='breadcrumb text-grey-100 flex justify-center items-center underline'>
              <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
            </span>{' '}
          </button>
          <div className='float-right'>
            <SocialButtons title={data?.measure?.titel} viewport='desktop' />
          </div>
          </div>
          <div className='sm:mb-12 mb-8 sm:pl-8 h-auto'>
            <div className='w-full flex'>
              <Link href={`/${data?.measure?.thema.toLowerCase().replace(/ /g, '-')}`}>
                <h5 className='mobile sm:desktop first-letter:uppercase border rounded-[5px] py-0.5 px-2 border-grey-100 text-grey-100 mr-2 hover:text-green-300 hover:border-green-300'>
                  {data?.measure?.thema.replace('-', ' ')}
                </h5>
              </Link>
              {data?.measure?.beleid === true && (
                <h5 className='mobile sm:desktop  px-2  rounded-[5px] flex items-center mr-2 bg-green-300 border border-green-300 text-grey-100'>
                  Beleid
                </h5>
              )}
              {data?.measure?.inkoop === true && (
                <h5 className='mobile sm:desktop bg-green-300 border border-green-300 text-grey-100 px-2 py-0.5 rounded-[5px] flex items-center mr-2'>
                  Inkoop
                </h5>
              )}
              {data?.measure?.grondpositie === true && (
                <h5 className='mobile sm:desktop bg-green-300 border border-green-300 text-grey-100 px-2 py-0.5 rounded-[5px] p-xsm flex items-center mr-2'>
                  Grondpositie
                </h5>
              )}
              {data?.measure?.subsidie === true && (
                <h5 className='mobile sm:desktop bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center mr-2'>
                  Subsidie
                </h5>
              )}
              {data?.measure?.fiscaal === true && (
                <h5 className='mobile sm:desktop bg-green-300 border border-green-300 text-grey-100 px-2 h-6 rounded-[5px] p-xsm flex items-center'>
                  Fiscaal
                </h5>
              )}
            </div>
            <div className='max-w-4xl flex justify-start overflow-hidden'>
              <h1 className='justify-self-start mobile sm:desktop lg:block mt-2 text-grey-100 pb-1'>
                {data?.measure?.titel}
              </h1>
            </div>
          </div>
        </div>
        {/* Metadata */}
        <div className='bg-grey-100 w-screen flex justify-items-start sm:border-b-2 sm:border-gray-300'>
          <div className='global-margin w-full'>
            <div className='grid grid-col-1 sm:pl-8 w-full max-w-4xl'>
              <InstrumentMetaData data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
