import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function MobileDisclosure({ transitionAgenda, themas }) {
  return (
    <li className='p-base-semibold text-green-800 border-b py-6'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? '' : ''} flex flex-row items-center `}>
              {transitionAgenda}
              <ChevronDownIcon className={`${open ? 'rotate-180' : ''} h-4 w-4 mt-1 ml-2`} />
            </Disclosure.Button>
            <Transition
              show={open}
              enter='transition duration-300 ease-out'
              enterFrom='transform opacity-0'
              enterTo='transform opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform opacity-300'
              leaveTo='transform opacity-0'
              className='w-full'
            >
              <Disclosure.Panel className='p-base text-green-600'>
                <ul>
                  {themas.map((thema) => (
                    <li key={thema.name} className=' pt-4 w-full flex items-center ml-4'>
                      <Link href={thema.url} className='w-full h-full flex items-center'>
                        {thema.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
}
