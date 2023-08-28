import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const links = {
  'houtbouw-stimuleren': [
    '/bouw/houtbouw-stimuleren/samenhang-aantal-houtbouwmaatregelen',
    '/measures/houtbouw',
    '/houtbouw-stimuleren/welke-overheid',
  ],
  'circulaire-windturbines': [
    '/circulaire-windturbines/samenhang-maatregelen',
    '/measures/windturbines',
    '/circulaire-windturbines/welke-overheid-heeft',
  ],
  'circulaire-matrasketen': [
    '/circulaire-matrasketen/samenhang-matrassen',
    '/measures/matrassen',
    '/circulaire-matrasketen/welke-overheid-heeft',
  ],
};

export default function MeasureLinksDropdown({ page, type, transitionAgenda }) {
  console.log(transitionAgenda);
  const router = useRouter();
  // add on click close to close the disclosure.
  if (page === 'list') {
    return (
      <div className='pt-8 w-full min-w-[260px]'>
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
                  } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                >
                  <span className='inline text-left '>In lijst met filters</span>
                </div>
                <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                  <ChevronUpIcon
                    className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][0]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                    <span className='block pl-3 truncate'>In samenhang</span>
                  </div>
                </Disclosure.Button>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][2]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500'>
                    <span className='block pl-3 truncate'>Per overheidsbevoegdheid</span>
                  </div>
                </Disclosure.Button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  } else if (page === 'samenhang') {
    return (
      <div className='pt-8 w-full min-w-[260px]'>
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
                  } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                >
                  <span className='inline text-left '>In samenhang</span>
                </div>
                <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500'>
                  <ChevronUpIcon
                    className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][1]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                    <span className='block pl-3 truncate'>In lijst met filters</span>
                  </div>
                </Disclosure.Button>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][2]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                    <span className='block pl-3 truncate'>Per overheidsbevoegdheid</span>
                  </div>
                </Disclosure.Button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  } else {
    return (
      <div className='pt-8 w-full min-w-[260px]'>
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
                  } h-full bg-white w-11/12 flex items-center justify-start pl-3 truncate`}
                >
                  <span className='inline text-left '>Per overheidsbevoegdheid</span>
                </div>
                <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-cl border border-green-500 cursor-pointer'>
                  <ChevronUpIcon
                    className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][0]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                    <span className='block pl-3 truncate'>In samenhang</span>
                  </div>
                </Disclosure.Button>
                <Disclosure.Button
                  as='div'
                  onClick={() => {
                    router.push(`${links[type][1]}`);
                  }}
                >
                  <div className='bg-white w-full text-black-white-800 border-b border-l border-r rounded-b-cl border-green-500 h-10 flex items-center hover:text-green-500 cursor-pointer'>
                    <span className='block pl-3 truncate'>In lijst met filters</span>
                  </div>
                </Disclosure.Button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  }
}
