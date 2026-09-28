'use client';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import { IconChevronDown } from '@tabler/icons-react';

import Header from './headers';

// Native <details> keeps every answer in the server HTML, so search engines and
// AI crawlers can read all of them. The shared name makes it an exclusive
// accordion: opening one question closes the other.
export default function FAQPageComponent({ data }) {
  return (
    <>
      <Header title={data?.pageTitle} bgColor='bg-green-500' imageURL='/big-decoration.png' />
      <div className='global-margin py-8'>
        <div className='grid w-full grid-cols-1 justify-start'>
          <div className='max-w-4xl sm:px-16'>
            <div className='flex flex-col gap-y-5'>
              {data?.FAQPageContent?.map((item, i) => (
                <details
                  key={i}
                  name='faq'
                  open={i === 0}
                  className='group border-t border-green-500 pt-4 pb-12'
                >
                  <summary className='heading-xl-semibold sm:heading-3xl-semibold mr-4 flex w-full cursor-pointer list-none justify-between text-green-500 [&::-webkit-details-marker]:hidden'>
                    <span className='text-left'>{item.question}</span>{' '}
                    <IconChevronDown className='h-8! w-8! shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180' />
                  </summary>
                  <div className='FaqAnswer overflow-hidden'>
                    <PortableText value={item.response} components={portableTextComponents} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
