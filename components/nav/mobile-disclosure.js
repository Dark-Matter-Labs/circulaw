import Link from 'next/link';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

export default function MobileDisclosure({ navData, closeMenu }) {
  return (
    <li className='p-base-semibold border-b py-6 text-cl-black last:border-b-0'>
      <Disclosure>
        <>
          <DisclosureButton className='group flex flex-row items-center data-[open]:text-green-500'>
            {navData?.title}
            <IconChevronDown className='ml-2 mt-1 h-5 w-5 group-data-[open]:rotate-180' />
          </DisclosureButton>
          <DisclosurePanel className='p-base text-green-500'>
            <ul>
              {navData.title === 'Bouw' && (
                <li className='mb-1 ml-4 flex w-full items-center border-b-2 border-green-500 pb-2 pt-4 font-semibold'>
                  Instrumenten
                </li>
              )}
              <Link href={`/${navData?.slug}`} onClick={() => closeMenu(false)}>
                <li className='ml-4 flex w-full items-center pt-4'>{navData?.title} - overzicht</li>
              </Link>
              {navData?.themas?.map((thema, id) => (
                <li key={id} className='ml-4 flex w-full items-center pt-4'>
                  <Link
                    href={`/${navData?.slug}/${thema?.slug}`}
                    className='flex h-10 items-center'
                    onClick={() => closeMenu(false)}
                  >
                    {thema?.themaName}
                    {thema.new && (
                      <span className='mb-2 ml-1.5 mt-[2px] inline-block font-jakarta text-[8px] font-bold uppercase hover:no-underline'>
                        Nieuw
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              {navData.title === 'Bouw' && (
                <>
                  <li className='mb-1 ml-4 flex w-full items-center border-b-2 border-green-500 pb-2 pt-4 font-semibold'>
                    Toepassing
                  </li>
                  <li className='ml-4 mt-4 pt-2'>
                    <Link href='/bouw/planregels' onClick={() => closeMenu(false)} className=''>
                      <span className='flex w-full items-center'>
                        Modelteksten voor het omgevingsplan
                      </span>
                    </Link>
                  </li>
                  <li className='ml-4 mt-4 pt-2'>
                    <Link href='/training' onClick={() => closeMenu(false)} className=''>
                      <span className='flex w-full items-center'>
                        E-learning &apos;Circulaire houtbouw&apos;
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </DisclosurePanel>
        </>
      </Disclosure>
    </li>
  );
}
