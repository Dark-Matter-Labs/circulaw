import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';

export default function AboutPageDropdown({currentSlug, slugs}) {

    const remainingTitles = slugs.filter(el => el.slug !== currentSlug) 
    const currentPage = slugs.filter(el => el.slug === currentSlug)
    return (
        <div className='pt-8 w-full'>
        <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className={`${open ? 'rounded-t-md' : 'rounded-md'} text-black bg-green-500 hover:text-green-500 flex justify-between items-center border border-green-500 h-10 w-full focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75`}>
            <div className={`${open ? 'rounded-tl-md' : 'rounded-l-md'} h-full bg-white w-11/12 flex items-center justify-start pl-6`}>
            <span className='inline w-11/12 text-left'>{currentPage[0].title}</span>
            </div>
            <div className='w-1/12 px-5 h-full pr-5 bg-green-500 grid items-center justify-center rounded-r-md border border-green-500'>
            <ChevronUpIcon
              className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-white z-10`}
            />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel>
                    <Disclosure.Button  as='a' href={`/about/${remainingTitles[0].slug}`}>
                    <div className='bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                    <span className='block pl-6'>{remainingTitles[0].title}</span>
                    </div>
                    </Disclosure.Button>
                    <Disclosure.Button  as='a' href={`/about/${remainingTitles[1].slug}`}>
                    <div className='bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500'>
                    <span className='block pl-6'>{remainingTitles[1].title}</span>
                    </div>
                    </Disclosure.Button>
                    
                    <Disclosure.Button  as='a' href={`/about/${remainingTitles[2].slug}`}>
                    <div className={`${remainingTitles[2] === remainingTitles[-1] ? '' : 'rounded-b-md'} bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}>
                    <span className='block pl-6'>{remainingTitles[2].title}</span>
                    </div>
                    </Disclosure.Button>
                    {remainingTitles[3] && 
                    <Disclosure.Button  as='a' href={`/about/${remainingTitles[3].slug}`}>
                    <div className={`${remainingTitles[3] === remainingTitles[-1] ? '' : 'rounded-b-md'} bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}>
                    <span className='block pl-6'>{remainingTitles[3].title}</span>
                    </div>
                    </Disclosure.Button>}
                    {remainingTitles[4] && 
                    <Disclosure.Button  as='a' href={`/about/${remainingTitles[4].slug}`}>
                    <div className={`${remainingTitles[4] === remainingTitles[-1] ? '' : 'rounded-b-md'} bg-white text-black-white-800 border-b border-l border-r border-green-500 h-10 flex items-center hover:text-green-500`}>
                    <span className='block pl-6'>{remainingTitles[4].title}</span>
                    </div>
                    </Disclosure.Button>}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
        </div>
    );
  }

