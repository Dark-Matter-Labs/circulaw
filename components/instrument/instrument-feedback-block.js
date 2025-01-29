import CustomButton from '../custom-button';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

// TODO: Combine the mobile and desktop components into one
export default function InstrumentFeedbackBlock({ data }) {
  return (
    <Popover className='inset-y-1/6 absolute right-0 hidden h-72 w-8 sm:block sm:h-96 sm:w-16'>
      {({ open }) => (
        <>
          <PopoverButton
            className={`${
              open ? '-translate-x-52 sm:-translate-x-60' : ''
            } flex h-full w-full flex-col items-center justify-between rounded-l-clSm bg-green-500 text-gray-100`}
          >
            <IconArrowLeft
              className={`${
                open ? 'rotate-180 transform' : ''
              } mt-3 h-6 text-gray-100 sm:mt-10 sm:w-6`}
            />
            <div className='p-base sm:heading-xl rotate-180 pt-3 [writing-mode:vertical-lr] sm:pt-10'>
              Help ons circulaw te verbeteren
            </div>
          </PopoverButton>
          <PopoverPanel className=''>
            <div className='flex h-72 w-52 -translate-x-44 -translate-y-72 flex-col items-center bg-gray-200 sm:h-96 sm:w-60 sm:-translate-x-44 sm:-translate-y-96'>
              <div className='px-6 py-4 sm:px-8 sm:py-6'>
                <h4 className='p-base-semibold sm:headling-xl-semibold'>Deel met ons:</h4>
                <ul className='p-xs sm:p-base list-disc text-balance pb-2 sm:pb-4 sm:pt-4'>
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
                  <span className='p-xs-bold sm:p-base-bold'>Ik deel mijn kennis</span>
                </CustomButton>
              </Link>
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}
