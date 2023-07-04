import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FAQPagePTComponents } from '../lib/portable-text/pt-components';
import { Disclosure } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

export default function FAQPageComponent({ data }) {
  return (
    <div className='global-margin pb-8 text-black-white-800'>
      <div className='grid grid-cols-1 w-full justify-center '>
        <div className=''>
          <div className='breadcrumb pt-8 text-green-500 link-interaction'>
            <Link href='/'>Home &gt;</Link>
          </div>
          <div className='max-w-4xl mx-auto'>
            <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop text-green-500'>
              {data?.pageTitle}
            </h1>

            <div className=''>
              {data.FAQPageContent.map((item) => (
                <div key={item._key}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='mobile sm:desktop text-green-500 pt-6 pb-10'>
                        {' '}
                        {item?.sectionTitle}
                      </h2>
                    </div>
                  )}

                  {item?.question && (
                    <div>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className='w-full border-t border-green-500'>
                              <h3 className='mobile sm:desktop text-green-500 flex justify-between py-4 text-left w-full break-words'>{item?.question}  
                              {open === true && 
                              <span className='h-6 w-6 text-green-500 inline-block relative shrink-0	'>
                              <MinusIcon
           
                              /> </span> }
                              {open === false && 
                              <span className='h-6 w-6 text-green-500 inline-block relative shrink-0	'>
                              <PlusIcon
                     
                            /> </span>
                              }
                              </h3>
                            </Disclosure.Button>
                            <Disclosure.Panel className='mb-4 -mt-2'>
                              <PortableText
                                value={item.response}
                                components={FAQPagePTComponents}
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  )}
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
