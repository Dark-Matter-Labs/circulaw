import CustomButton from '../custom-button';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconArrowUp } from '@tabler/icons-react';
import Link from 'next/link';

// TODO: Combine the mobile and desktop components into one
export default function MobileFeedback({ data }) {
  return (
    <Popover className='bottom-0 max-w-sm h-14 z-20 sticky sm:hidden w-full'>
      {({ open }) => (
        <>
          <PopoverButton
            className={`${
              open ? '-translate-y-64' : ''
            } bg-green-500 px-8 rounded-t-clSm h-full w-full flex flex-row items-center justify-between text-gray-100`}
          >
            <div className='p-base'>Help ons circulaw te verbeteren</div>
            <IconArrowUp className={`${open ? 'rotate-180' : ''} h-5 w-5 text-gray-100`} />
          </PopoverButton>
          <PopoverPanel className={`${open ? '-translate-y-64' : ''} w-full h-64`}>
            <div className=' bg-gray-200 flex flex-col items-center h-full justify-between py-4 px-8'>
              <div className=''>
                <h4 className='heading-xl-semibold'>Deel met ons:</h4>
                <ul className='list-disc p-base'>
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
