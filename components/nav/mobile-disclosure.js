import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function MobileDisclosure({ navData, closeMenu }) {
  return (
    <li className='p-base-semibold text-green-800 border-b py-6'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${open ? '' : ''} flex flex-row items-center `}>
              {navData?.title}
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
                  <Link href={`/${navData?.slug}`} onClick={() => closeMenu(false)}>
                    <li className='pt-4 w-full flex items-center ml-4'>
                      {navData?.title} - overzicht
                    </li>
                  </Link>
                  {navData?.themas?.map((thema, id) => (
                    <li key={id} className=' pt-4 w-full flex items-center ml-4'>
                      <Link
                        href={`/${navData?.slug}/${thema?.slug}`}
                        className='h-10 flex items-center'
                        onClick={() => closeMenu(false)}
                      >
                        {thema?.themaName}
                        {thema.new && (
                          <span className='font-jakarta text-[8px] font-bold ml-1.5 mb-2 mt-[2px] hover:no-underline uppercase inline-block'>
                            Nieuw
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                  {navData.title === 'Bouw' && (
                    <li className='p-base h-auto mt-4 pt-4 text-green-400 cursor-pointer items-center flex border-t border-green-600'>
                      <Link
                        href='/bouw/planregels'
                        onClick={() => closeMenu(false)}
                        className='flex flex-row items-center justify-center ml-4'
                      >
                        <span className='hover:underline max-w-xs'>
                          Planregels: modelteksten voor het omgevingsplan
                        </span>
                      </Link>
                    </li>
                  )}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </li>
  );
}
