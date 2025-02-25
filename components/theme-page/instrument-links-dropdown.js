import { useRouter } from 'next/navigation';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { IconChevronUp } from '@tabler/icons-react';

// TODO: Replace Popover with headless UI Listbox
export default function InstrumentLinksDropdown({ page, productChain, thema }) {
  const router = useRouter();
  if (page === 'list') {
    return (
      <Popover className='relative inline-block w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <PopoverButton
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
              >
                <span className='p-base-bold inline text-left text-green-500'>
                  In lijst met filters
                </span>
              </div>
              <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                <IconChevronUp
                  className={`${open ? '' : 'rotate-180 transform'} z-10 h-6 w-6 text-white`}
                />
              </div>
            </PopoverButton>
            <PopoverPanel className='absolute z-40 w-full min-w-[260px]'>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/categorie`);
                }}
              >
                <div className='flex h-10 w-full items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>Per categorie</span>
                </div>
              </PopoverButton>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/overheidsbevoegdheid`);
                }}
              >
                <div className='flex h-10 w-full items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>Per overheidsbevoegdheid</span>
                </div>
              </PopoverButton>
            </PopoverPanel>
          </>
        )}
      </Popover>
    );
  } else if (page === 'samenhang') {
    return (
      <Popover className='relative inline-block w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <PopoverButton
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
              >
                <span className='p-base-bold inline text-left text-green-500'>Per categorie</span>
              </div>
              <div className='grid h-full w-1/12 items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                <IconChevronUp
                  className={`${open ? '' : 'rotate-180 transform'} z-10 h-6 w-6 text-white`}
                />
              </div>
            </PopoverButton>
            <PopoverPanel className='absolute z-40 w-full min-w-[260px]'>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/instrumenten`);
                }}
              >
                <div className='flex h-10 w-full cursor-pointer items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>In lijst met filters</span>
                </div>
              </PopoverButton>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/overheidsbevoegdheid`);
                }}
              >
                <div className='flex h-10 w-full cursor-pointer items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>Per overheidsbevoegdheid</span>
                </div>
              </PopoverButton>
            </PopoverPanel>
          </>
        )}
      </Popover>
    );
  } else {
    return (
      <Popover className='relative inline-block w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <PopoverButton
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } flex h-10 w-full items-center justify-between border border-green-500 bg-green-500 text-black hover:text-green-500 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } flex h-full w-11/12 items-center justify-start truncate bg-green-100 pl-3`}
              >
                <span className='p-base-bold inline text-left text-green-500'>
                  Per overheidsbevoegdheid
                </span>
              </div>
              <div className='grid h-full w-1/12 cursor-pointer items-center justify-center rounded-r-cl border border-green-500 bg-green-500 px-5 pr-5'>
                <IconChevronUp
                  className={`${open ? '' : 'rotate-180 transform'} z-10 h-6 w-6 text-white`}
                />
              </div>
            </PopoverButton>
            <PopoverPanel className='absolute z-40 w-full min-w-[260px]'>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/categorie`);
                }}
              >
                <div className='flex h-10 w-full cursor-pointer items-center border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>Per categorie</span>
                </div>
              </PopoverButton>
              <PopoverButton
                as='div'
                onClick={() => {
                  router.push(`/${productChain}/${thema}/instrumenten`);
                }}
              >
                <div className='flex h-10 w-full cursor-pointer items-center rounded-b-cl border-b border-l border-r border-green-500 bg-green-100 text-cl-black hover:text-green-500'>
                  <span className='p-base block truncate pl-3'>In lijst met filters</span>
                </div>
              </PopoverButton>
            </PopoverPanel>
          </>
        )}
      </Popover>
    );
  }
}
