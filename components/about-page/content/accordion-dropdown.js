import { PortableText } from 'next-sanity';

import TitleDecorator from '@/components/title-decorator';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';

import { aboutPageReducedPortableTextComponents } from '../../../lib/portable-text/pt-components';

export default function AccordionDropdown({ data }) {
  return (
    <div className='my-32'>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton
              className={`group flex w-full items-center justify-between border-black py-10 pr-6 text-gray-800 ${
                open
                  ? 'border-b-none border-t-2' // Top border only when open
                  : 'border-y-2' // Full border when closed
              }`}
            >
              <h4 className='heading-3xl-semibold text-left'>{data.title}</h4>
              <IconChevronDown
                className={`h-6 w-6 text-black transition-transform ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </DisclosureButton>
            <DisclosurePanel className='border-b-2 border-black py-10'>
              <div className='grid w-full grid-cols-2 justify-between gap-y-10'>
                {data.content.map((item, index) => (
                  <div key={index} className='mb-4 max-w-[500px]'>
                    <div className='mb-2'>
                      <h3 className='heading-3xl-semibold text-black'>{item?.title}</h3>
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
