import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

export default function MobileDisclosure({ navData, closeMenu }) {
  return (
    <li className='p-base-semibold text-green-800 border-b last:border-b-0 py-6'>
      <Disclosure>
        <>
          <DisclosureButton className='flex flex-row items-center group data-[open]:text-green-500'>
            {navData?.title}
            <IconChevronDown className='h-5 w-5 mt-1 ml-2 group-data-[open]:rotate-180' />
          </DisclosureButton>
          <DisclosurePanel className='p-base text-green-600'>
            <ul>
              {navData.title === 'Bouw' && (
                <li className='pt-4 w-full flex items-center ml-4 font-semibold border-b-2 border-green-600 pb-2 mb-1 '>
                  Instrumenten
                </li>
              )}
              <Link href={`/${navData?.slug}`} onClick={() => closeMenu(false)}>
                <li className='pt-4 w-full flex items-center ml-4'>{navData?.title} - overzicht</li>
              </Link>
              {navData?.themas?.map((thema, id) => (
                <li key={id} className='pt-4 w-full flex items-center ml-4'>
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
                <>
                  <li className='pt-4 w-full flex items-center ml-4 font-semibold border-b-2 border-green-600 pb-2 mb-1'>
                    Toepassing
                  </li>
                  <li className='pt-2 mt-4 ml-4'>
                    <Link href='/bouw/planregels' onClick={() => closeMenu(false)} className=''>
                      <span className='w-full flex items-center'>
                        Modelteksten voor het omgevingsplan
                      </span>
                    </Link>
                  </li>
                  <li className='pt-2 mt-4 ml-4'>
                    <Link href='/training' onClick={() => closeMenu(false)} className=''>
                      <span className='w-full flex items-center'>
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
