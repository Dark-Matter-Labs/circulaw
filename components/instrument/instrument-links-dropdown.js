import { Popover } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const links = {
  'houtbouw': [
    '/bouw/houtbouw/categorie',
    '/bouw/houtbouw/instrumenten',
    '/bouw/houtbouw/overheidbevoegdheid',
  ],
  'windturbines': [
    '/maakindustrie/windturbines/categorie',
    '/maakindustrie/windturbines/instrumenten',
    '/maakindustrie/windturbines/overheidbevoegdheid',
  ],
  'matrasketen': [
    '/consumenten-goederen/matrasketen/categorie',
    '/consumenten-goederen/matrasketen/instrumenten',
    '/consumenten-goederen/matrasketen/overheidbevoegdheid',
  ],
};

export default function InstrumentLinksDropdown({ page, type }) {
  const router = useRouter();
  // add on click close to close the disclosure.
  if (page === 'list') {
    return (
      <Popover className='inline-block relative w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
              >
                <span className='inline text-left p-base-bold text-green-500'>
                  In lijst met filters
                </span>
              </div>
              <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                />
              </div>
            </Popover.Button>
            <Popover.Panel className='absolute z-40 min-w-[260px] w-full'>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][0]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                  <span className='block pl-3 truncate p-base'>Per categorie</span>
                </div>
              </Popover.Button>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][2]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500'>
                  <span className='block pl-3 truncate p-base'>Per overheidsbevoegdheid</span>
                </div>
              </Popover.Button>
            </Popover.Panel>
          </>
        )}
      </Popover>
    );
  } else if (page === 'samenhang') {
    return (
      <Popover className='inline-block relative w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } text-black bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
              >
                <span className='inline text-left p-base-bold text-green-500'>Per categorie</span>
              </div>
              <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                />
              </div>
            </Popover.Button>
            <Popover.Panel className='absolute z-40 min-w-[260px] w-full'>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][1]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                  <span className='block pl-3 truncate p-base'>In lijst met filters</span>
                </div>
              </Popover.Button>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][2]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                  <span className='block pl-3 truncate p-base'>Per overheidsbevoegdheid</span>
                </div>
              </Popover.Button>
            </Popover.Panel>
          </>
        )}
      </Popover>
    );
  } else {
    return (
      <Popover className='inline-block relative w-full min-w-[260px] pt-4 sm:pt-0'>
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? 'rounded-t-cl' : 'rounded-cl'
              } text-black bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <div
                className={`${
                  open ? 'rounded-tl-cl' : 'rounded-l-cl'
                } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
              >
                <span className='inline text-left p-base-bold text-green-500'>
                  Per overheidsbevoegdheid
                </span>
              </div>
              <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500 cursor-pointer'>
                <ChevronUpIcon
                  className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                />
              </div>
            </Popover.Button>
            <Popover.Panel className='absolute z-40 min-w-[260px] w-full'>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][0]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                  <span className='block pl-3 truncate p-base'>Per categorie</span>
                </div>
              </Popover.Button>
              <Popover.Button
                as='div'
                onClick={() => {
                  router.push(`${links[type][1]}`);
                }}
              >
                <div className='bg-white w-full text-grey-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                  <span className='block pl-3 truncate p-base'>In lijst met filters</span>
                </div>
              </Popover.Button>
            </Popover.Panel>
          </>
        )}
      </Popover>
    );
  }
}
