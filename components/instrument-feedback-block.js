import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { Popover } from '@headlessui/react';

import CustomButton from './custom-button';

export default function InstrumentFeedbackBlock({ data }) {
  return (
    <Popover className='fixed inset-y-1/3 right-0 z-10 h-96 w-16 hidden sm:block'>
    {({ open }) => (
      <>
        <Popover.Button
          className={`${
            open ? '-translate-x-56' : ''
          } bg-green-500 rounded-l-clSm h-full w-full flex flex-col items-center justify-between text-grey-100`}
        >
          <ArrowLeftIcon
            className={`${
              open ? 'rotate-180 transform' : ''
            } h-6 w-6 text-grey-100 mt-10`}
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
  );
}
