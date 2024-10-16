'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';

export default function AboutPageDropdown({ currentSlug, slugs }) {
  const remainingTitles = slugs?.filter((el) => el.slug !== currentSlug) ?? [];
  const currentPage = slugs?.filter((el) => el.slug === currentSlug) ?? [];
  const router = useRouter();

  return (
    <div className='pt-8 w-full'>
      <Disclosure>
        <>
          <DisclosureButton className='text-black bg-green-500 flex justify-between items-center border border-green-500 h-10 w-full group rounded-cl data-[open]:rounded-t-cl data-[open]:rounded-b-none'>
            <div className='h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate rounded-l-cl group-data-[open]:rounded-tl-cl group-data-[open]:rounded-bl-none'>
              <span className='inline text-left '>{currentPage[0]?.pageTitle}</span>
            </div>
            <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
              <ChevronDownIcon className='h-5 w-5 text-white z-10 group-data-[open]:rotate-180 transform' />
            </div>
          </DisclosureButton>
          <DisclosurePanel as='ul'>
            {remainingTitles?.map((remaining, id) => (
              <DisclosureButton
                key={id}
                className='bg-gray-100 w-full text-gray-800 border-b border-l border-r last:rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500'
                as='li'
                onClick={() => {
                  router.push(`/over/${encodeURIComponent(remaining?.slug)}`);
                }}
              >
                <div className=''>
                  <span className='block pl-3 truncate'>{remaining?.pageTitle}</span>
                </div>
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      </Disclosure>
    </div>
  );
}
