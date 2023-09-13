import { useRouter } from 'next/router';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';

// import MeasureOverview from '../components/measure-overview';
import MeasureTable from '../components/measure-table';
import SocialButtons from '../components/social-buttons';
import { instrumentPTComponents } from '../lib/portable-text/pt-components';
import InstrumentMetaData from './instrument-metadata';
import CustomButton from './custom-button';

// import FeedbackBlock from './feedback-block';

export default function Instrument({ data }) {
  const title = data.measure.titel;
  const router = useRouter();
  return (
    <div className='bg-black-white-100 relative'>
      {/* can move this into a component also */}
      <Popover className='fixed inset-y-1/3 right-0 z-10 h-96 w-16 hidden md:block'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? '-translate-x-56' : ''
              } bg-green-500 rounded-l-clSm h-full w-full flex-col items-center justify-between text-black-white-100`}
            >
              <ArrowLeftIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-6 w-6 text-black-white-100 mt-10`}
              />
              <div className='[writing-mode:vertical-lr] rotate-180 flex items-center justify-between pt-10 p-lg'>
                Help ons circulaw te verbeteren
              </div>
            </Popover.Button>
            <Popover.Panel className=''>
              <div className='w-56 h-96 bg-black-white-250 -translate-y-96 -translate-x-40 flex flex-col items-center'>
                <div className='px-8 py-6'>
                  <h4 className='desktop'>Deel met ons:</h4>
                  <ul className='pb-10 list-disc	'>
                    <li>voorbeelden uit jouw praktijk</li>
                    <li>je tips om toepassing makkelijker te maken</li>
                    <li>
                      de ervaring van jou of andere organisaties met een soortgelijk instrument
                    </li>
                  </ul>
                </div>
                <Link className='' href={{ pathname: '/feedback', query: { instrument: title } }}>
                  <CustomButton color='greenBackground'>Ik deel mijn kennis </CustomButton>
                </Link>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className='global-margin sm:pt-10 '>
        <div className='grid grid-cols-1 content-center mb-8'>
          <div className='sm:col-span-12 row-span-1 h-12 mt-4 w-11/12 max-w-[854px] justify-self-center'>
            {/* BREADCRUMB */}
            <button type='button' onClick={() => router.back()}>
              <span className='breadcrumb text-green-600 flex justify-center items-center underline'>
                <ArrowLeftIcon className='inline-block h-4 w-4 pr-1' aria-hidden='true' /> Terug
              </span>{' '}
              {/* should all breadcrumbs be green this is black in figma */}
            </button>
            <div className='hidden sm:block float-right'>
              <SocialButtons title={data?.measure?.titel} viewport='desktop' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1'>
          <div className='w-11/12 max-w-[760px] justify-self-center flex items-center'>
           
           
            {/* NOT GOOD TO HAVE H4 BEFORE H1 ??? */}
            <h4 className='uppercase mobile sm:desktop text-green-500'>
              {data.measure.thema.replace('-', ' ')}
            </h4>


            {/* this will need to be added once samenhang structure is confirmed */}
            {/*
            <div className='ml-4 py-0.5 px-2 rounded-[5px] text-black-white-200 bg-black-white-600'>
              verkoop
            </div> */}
          </div>

          <div className='w-11/12 max-w-[760px] justify-self-center '>
            <h1 className='lg:block sm:pt-4 pb-6 sm:pb-10 mobile sm:desktop'>
              {data?.measure?.titel}
            </h1>
          </div>
        </div>

        {/* Metadata */}
        <InstrumentMetaData data={data} />
        {/* Subtitle */}
        <div className='grid grid-cols-1'>
          {data?.measure?.subtitel && (
            <div className='w-11/12 justify-self-center max-w-[760px]'>
              <h2 className='lg:block p-lg sm:p-xl mb-4'> {data?.measure?.subtitel}</h2>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='grid grid-cols-1'>
          <div className='pb-20 w-11/12 justify-self-center max-w-[760px]'>
            <div className=''>
              <PortableText value={data?.measure?.content} components={instrumentPTComponents} />
            </div>
            <MeasureTable data={data} />
          </div>
        </div>
        <div className='block sm:hidden pb-10'>
          <SocialButtons title={data?.measure?.titel} viewport='mobile' />
        </div>
      </div>
    </div>
  );
}
