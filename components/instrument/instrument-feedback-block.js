import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';

import CustomButton from '../custom-button';

export default function InstrumentFeedbackBlock({ data }) {
  return (
    <Popover className='absolute inset-y-1/6 right-0 h-72 w-8 sm:h-96 sm:w-16'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? '-translate-x-52 sm:-translate-x-56' : ''
            } bg-green-500 rounded-l-clSm h-full w-full flex flex-col items-center justify-between text-grey-100`}
          >
            <ArrowLeftIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-4 w-4 sm:h-6 sm:w-6 text-grey-100 mt-3 sm:mt-10`}
            />
            <div className='[writing-mode:vertical-lr] rotate-180 pt-3 sm:pt-10 p-md sm:p-lg'>
              Help ons circulaw te verbeteren
            </div>
          </Popover.Button>
          <Popover.Panel className=''>
            <div className='w-52 h-72 sm:w-56 sm:h-96 bg-grey-200 -translate-y-72 sm:-translate-y-96 -translate-x-44 sm:-translate-x-40 flex flex-col items-center'>
              <div className='px-6 py-4 sm:px-8 sm:py-6'>
                <h4 className='mobile sm:desktop'>Deel met ons:</h4>
                <ul className='pb-2 sm:pb-10 sm:pt-4 list-disc p-sm sm:p-md'>
                  <li>voorbeelden uit jouw praktijk</li>
                  <li>je tips om toepassing makkelijker te maken</li>
                  <li>de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
                </ul>
              </div>
              <Link
                className=''
                href={{ pathname: '/feedback', query: { instrument: data?.measure?.titel } }}
              >
                <CustomButton color='greenBackground'>
                  <span className='p-sm font-bold sm:p-md'>Ik deel mijn kennis</span>
                </CustomButton>
              </Link>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
