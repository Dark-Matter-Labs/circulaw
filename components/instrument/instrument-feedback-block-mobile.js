import Link from 'next/link';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconArrowUp } from '@tabler/icons-react';

import CustomButton from '../custom-button';

// TODO: Combine the mobile and desktop components into one
export default function MobileFeedback({ data }) {
  return (
    <Popover className='sticky bottom-0 z-20 h-14 w-full max-w-sm sm:hidden'>
      {({ open }) => (
        <>
          <PopoverButton
            className={`${
              open ? '-translate-y-64' : ''
            } flex h-full w-full flex-row items-center justify-between rounded-t-clSm bg-green-500 px-8 text-gray-100`}
          >
            <div className='p-base'>Help ons circulaw te verbeteren</div>
            <IconArrowUp className={`${open ? 'rotate-180' : ''} h-5 w-5 text-gray-100`} />
          </PopoverButton>
          <PopoverPanel className={`${open ? '-translate-y-64' : ''} h-64 w-full`}>
            <div className='flex h-full flex-col items-center justify-between bg-gray-200 px-8 py-4'>
              <div className=''>
                <h4 className='heading-xl-semibold'>Deel met ons:</h4>
                <ul className='p-base list-disc'>
                  <li>voorbeelden uit jouw praktijk</li>
                  <li>je tips om toepassing makkelijker te maken</li>
                  <li>de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
                </ul>
              </div>
              <Link
                className=''
                href={{ pathname: '/feedback', query: { instrument: data?.titel } }}
              >
                <CustomButton color='greenBackground'>
                  <span className=''>Ik deel mijn kennis</span>
                </CustomButton>
              </Link>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
