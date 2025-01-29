'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function AboutPageDropdown({ currentSlug, slugs }) {
  const remainingTitles = slugs?.filter((el) => el.slug !== currentSlug) ?? [];
  const currentPage = slugs?.filter((el) => el.slug === currentSlug) ?? [];
  const router = useRouter();

  return (
    <div className='w-full pt-8'>
      <Disclosure>
        <>
          <DisclosureButton className='group flex h-10 w-full items-center justify-between rounded-cl border border-green-500 bg-green-500 text-black data-[open]:rounded-b-none data-[open]:rounded-t-cl'>
            <div className='flex h-full w-11/12 items-center justify-start truncate rounded-l-cl bg-gray-100 pl-3 group-data-[open]:rounded-bl-none group-data-[open]:rounded-tl-cl'>
              <span className='inline text-left'>{currentPage[0]?.pageTitle}</span>
            </div>
            <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
              <IconChevronDown className='z-10 h-6 w-6 transform text-white group-data-[open]:rotate-180' />
            </div>
          </DisclosureButton>
          <DisclosurePanel as='ul'>
            {remainingTitles?.map((remaining, id) => (
              <DisclosureButton
                key={id}
                className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-gray-100 text-gray-800 last:rounded-b-cl hover:text-green-500'
                as='li'
                onClick={() => {
                  router.push(`/over/${encodeURIComponent(remaining?.slug)}`);
                }}
              >
                <div className=''>
                  <span className='block truncate pl-3'>{remaining?.pageTitle}</span>
                </div>
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      </Disclosure>
    </div>
  );
}
