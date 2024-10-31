import CustomButton from '../custom-button';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

// TODO: Combine the mobile and desktop components into one
export default function InstrumentFeedbackBlock({ data }) {
  return (
    <Popover className='absolute inset-y-1/6 right-0 h-72 w-8 sm:h-96 sm:w-16 hidden sm:block'>
      {({ open }) => (
        <>
          <PopoverButton
            className={`${
              open ? '-translate-x-52 sm:-translate-x-60' : ''
            } bg-green-500 rounded-l-clSm h-full w-full flex flex-col items-center justify-between text-gray-100`}
          >
            <IconArrowLeft
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-6 sm:w-6 text-gray-100 mt-3 sm:mt-10`}
            />
            <div className='[writing-mode:vertical-lr] rotate-180 pt-3 sm:pt-10 p-base sm:heading-xl'>
              Help ons circulaw te verbeteren
            </div>
          </PopoverButton>
          <PopoverPanel className=''>
            <div className='w-52 h-72 sm:w-60 sm:h-96 bg-gray-200 -translate-y-72 sm:-translate-y-96 -translate-x-44 sm:-translate-x-44 flex flex-col items-center'>
              <div className='px-6 py-4 sm:px-8 sm:py-6'>
                <h4 className='p-base-semibold sm:headling-xl-semibold'>Deel met ons:</h4>
                <ul className='pb-2 sm:pb-4 sm:pt-4 list-disc p-xs sm:p-base text-balance'>
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
