'use client'
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';

export default function AboutPageDropdown({ currentSlug, slugs }) {

  const remainingTitles = slugs?.filter((el) => el.slug !== currentSlug) ?? [];
  const currentPage = slugs?.filter((el) => el.slug === currentSlug) ?? [];
  const router = useRouter();

  return (
    <div className='pt-8 w-full'>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } text-black bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } h-full bg-gray-100 w-11/12 flex items-center justify-start pl-3 truncate`}
              >
                <span className='inline text-left '>{currentPage[0]?.pageTitle}</span>
              </div>
              <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel as='ul'>
              {remainingTitles?.map((remaining, id) => (
                <Disclosure.Button
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
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
