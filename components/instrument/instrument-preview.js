import { useRouter } from 'next/router';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';
import { usePreview } from '../../lib/sanity.preview';

import InstrumentTable from './instrument-table';
import SocialButtons from '../../components/social-buttons';
import { instrumentPTComponents } from '../../lib/portable-text/pt-components';
import InstrumentMetaData from './instrument-metadata';
import CustomButton from './../custom-button';

export default function InstrumentPreview({ query, queryParams }) {
  const data = { measure: usePreview(null, query, queryParams) };
  const router = useRouter();
  return (
    <div className='bg-grey-100 relative'>
      {/* can move this into a component */}
      <Popover className='fixed inset-y-1/3 right-0 z-10 h-96 w-16 hidden sm:block'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? '-translate-x-56' : ''
              } bg-green-500 rounded-l-clSm h-full w-full flex flex-col items-center justify-between text-grey-100`}
            >
              <ArrowLeftIcon
                className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-grey-100 mt-10`}
              />
              <div className='[writing-mode:vertical-lr] rotate-180 p-lg pt-10'>
                Help ons circulaw te verbeteren
              </div>
            </Popover.Button>
            <Popover.Panel className=''>
              <div className='w-56 h-96 bg-grey-200 -translate-y-96 -translate-x-40 flex flex-col items-center'>
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
                <Link
                  className=''
                  href={{ pathname: '/feedback', query: { instrument: data?.measure?.titel } }}
                >
                  <CustomButton color='greenBackground'>Ik deel mijn kennis </CustomButton>
                </Link>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className='global-margin sm:pt-10 '>
        <div className='grid grid-cols-1 sm:content-center mb-4'>
          <div className='row-span-1 h-12 mt-4 sm:w-11/12 max-w-[854px] sm:justify-self-center'>
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
          <div className='sm:w-11/12 max-w-[760px] sm:justify-self-center flex items-center'>
            {/* NOT GOOD TO HAVE H4 BEFORE H1 ??? */}
            <h4 className='uppercase mobile sm:desktop text-green-500'>
              {data?.measure?.thema.replace('-', ' ')}
            </h4>

            {/* this will need to be added once samenhang structure is confirmed */}
            {/*
            <div className='ml-4 py-0.5 px-2 rounded-[5px] text-grey-100 bg-grey-600'>
              verkoop
            </div> */}
          </div>

          <div className='sm:w-11/12 max-w-[760px] sm:justify-self-center '>
            <h1 className='mobile sm:desktop lg:block pb-4 pt-6'>{data?.measure?.titel}</h1>
          </div>
        </div>

        {/* Metadata */}
        <InstrumentMetaData data={data} />
        {/* Subtitle */}
        <div className='grid grid-cols-1'>
          {data?.measure?.subtitel && (
            <div className='sm:w-11/12 sm:justify-self-center max-w-[760px]'>
              <h2 className='lg:block p-lg sm:p-xl'> {data?.measure?.subtitel}</h2>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='grid grid-cols-1'>
          <div className='pb-20 sm:w-11/12 sm:justify-self-center max-w-[760px]'>
            <div className=''>
              <PortableText value={data?.measure?.content} components={instrumentPTComponents} />
            </div>
            <InstrumentTable data={data} />
          </div>
        </div>
        <div className='block sm:hidden pb-10'>
          <SocialButtons title={data?.measure?.titel} viewport='mobile' />
        </div>
      </div>
    </div>
  );
}
