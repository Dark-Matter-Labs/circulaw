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
            <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop text-black-white-800'>
              {data?.pageTitle}
            </h1>

            <div className=''>
              {data.FAQPageContent.map((item) => (
                <div key={item._key}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='mobile sm:desktop text-green-600 pt-6 pb-20'>
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
                            <Disclosure.Button className='w-full border-t border-green-600'>
                              <h3 className='mobile sm:desktop text-green-600 flex justify-between pt-4 pb-12  text-left w-full break-words'>{item?.question}  
                              {open === true && 
                              <span className='h-6 w-6 text-green-600 inline-block relative shrink-0	'>
                              <MinusIcon
           
                              /> </span> }
                              {open === false && 
                              <span className='h-6 w-6 text-green-600 inline-block relative shrink-0	'>
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

           <h1 className='mobile sm:desktop text-red-500 py-40'>Option 2</h1> 

            <div className=''>
              {data.FAQPageContent.map((item) => (
                <div key={item._key}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='mobile sm:desktop text-green-600 pt-6 pb-10'>
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
                            <Disclosure.Button className='w-full border-t border-green-600'>
                              <h3 className='mobile sm:desktop text-green-600 flex justify-between pt-4 pb-12 text-left w-full break-words'>{item?.question}  
                              {open === true && 
                              <span className='h-6 w-6 text-green-600 inline-block relative shrink-0	'>
                              <MinusIcon
           
                              /> </span> }
                              {open === false && 
                              <span className='h-6 w-6 text-green-600 inline-block relative shrink-0	'>
                              <PlusIcon
                     
                            /> </span>
                              }

                              </h3>

                              
                              {open === false && 
                              <div className='truncate h-8 first-line:text-black-white-400 -mt-12 mb-12 text-left'>
                              <PortableText
                                value={item.response}
                                components={FAQPagePTComponents}
                              />
                              </div>}


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
