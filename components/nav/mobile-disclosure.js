import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function MobileDisclosure({ navData, closeMenu }) {
  return (
    <li className='p-base-semibold text-green-800 border-b last:border-b-0 py-6'>
      <Disclosure>
        <>
          <DisclosureButton className='flex flex-row items-center group data-[open]:text-green-500'>
            {navData?.title}
            <ChevronDownIcon className='h-4 w-4 mt-1 ml-2 group-data-[open]:rotate-180' />
          </DisclosureButton>
          <DisclosurePanel className='p-base text-green-600'>
            <ul>
              <Link href={`/${navData?.slug}`} onClick={() => closeMenu(false)}>
                <li className='pt-4 w-full flex items-center ml-4'>{navData?.title} - overzicht</li>
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
            </ul>
          </DisclosurePanel>
        </>
      </Disclosure>
    </li>
  );
}
