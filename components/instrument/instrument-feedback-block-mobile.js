import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/outline';
import CustomButton from '../custom-button';

export default function MobileFeedback({ data }) {
  return (
    <Popover className='bottom-0 max-w-sm h-14 z-20 sticky sm:hidden w-full'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? '-translate-y-64' : ''
            } bg-green-500 px-8 rounded-t-clSm h-full w-full flex flex-row items-center justify-between text-gray-100`}
          >
            <div className='p-base'>Help ons circulaw te verbeteren</div>
            <ArrowUpIcon className={`${open ? 'rotate-180' : ''} h-4 w-4 text-gray-100`} />
          </Popover.Button>
          <Popover.Panel className={`${open ? '-translate-y-64' : ''} w-full h-64`}>
            <div className=' bg-gray-200 flex flex-col items-center h-full justify-between py-4 px-8'>
              <div className=''>
                <h4 className='p-lg-bold'>Deel met ons:</h4>
                <ul className='list-disc p-base'>
                  <li>voorbeelden uit jouw praktijk</li>
                  <li>je tips om toepassing makkelijker te maken</li>
                  <li>de ervaring van jou of andere organisaties met een soortgelijk instrument</li>
                </ul>
              </div>
              <Link
                className=''
                href={{ pathname: '/feedback', query: { instrument: data?.instrument?.titel } }}
              >
                <CustomButton color='greenBackground'>
                  <span className=''>Ik deel mijn kennis</span>
                </CustomButton>
              </Link>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
