import { PortableText } from 'next-sanity';

import TitleDecorator from '@/components/title-decorator';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

import { aboutPageReducedPortableTextComponents } from '../../../lib/portable-text/pt-components';

export default function AccordionDropdown({ data }) {
  console.log('AccordionDropdown data:', data);
  if (data.design === 'default') {
    return (
      <div className='mb-[60px] sm:mb-[120px]'>
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton
                className={`group flex w-full items-center justify-between border-black py-4 pr-2 text-gray-800 sm:py-10 sm:pr-6 ${
                  open
                    ? 'border-b-none border-t-2' // Top border only when open
                    : 'border-y-2' // Full border when closed
                }`}
              >
                <h4 className='heading-2xl-semibold sm:heading-4xl-semibold text-left'>
                  {data.title}
                </h4>
                <IconChevronDown
                  className={`size-8 text-black transition-transform ${
                    open ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className='border-b-2 border-black py-4 sm:py-10'>
                <div className='grid w-full grid-cols-1 justify-between gap-6 gap-x-6 sm:grid-cols-2 sm:gap-10'>
                  {data.content.map((item, index) => (
                    <div key={index} className='max-w-[500px]'>
                      <div className='mb-2'>
                        <h3 className='heading-2xl-semibold sm:heading-3xl-semibold text-black'>
                          {item?.title}
                        </h3>
                        <TitleDecorator width='w-1/4' colour='bg-black' />
                      </div>
                      <div>
                        <PortableText
                          value={item?.content}
                          components={aboutPageReducedPortableTextComponents}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    );
  }
  if (data.design === 'orange') {
    return (
      <div className='mb-[60px] sm:mb-[120px]'>
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton
                className={`group flex w-full items-center justify-between rounded-cl bg-orange-300 px-4 py-4 text-orange-100 sm:px-6 sm:py-10 ${open ? 'rounded-b-none' : ''}`}
              >
                <h4 className='heading-2xl-semibold sm:heading-4xl-semibold text-left'>
                  {data.title}
                </h4>
                <IconChevronDown
                  className={`size-8 text-orange-100 transition-transform ${
                    open ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className='rounded-b-cl bg-orange-100 px-6 py-10 sm:p-[60px]'>
                <div className='grid w-full grid-cols-1 justify-between gap-6 sm:grid-cols-2 sm:gap-10'>
                  {data.content.map((item, index) => (
                    <div key={index} className='max-w-[500px]'>
                      <div className='mb-2'>
                        <h3 className='heading-2xl-semibold sm:heading-3xl-semibold text-black'>
                          {item?.title}
                        </h3>
                        <TitleDecorator width='w-1/4' colour='bg-black' />
                      </div>
                      <div>
                        <PortableText
                          value={item?.content}
                          components={aboutPageReducedPortableTextComponents}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    );
  }
}
