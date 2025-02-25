'use client';

import React from 'react';

import Link from 'next/link';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import * as Accordion from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';

export default function FAQPageComponent({ data }) {
  return (
    <div className='global-margin pb-8 text-cl-black'>
      <div className='grid w-full grid-cols-1 justify-center'>
        <div className=''>
          <div className='p-2xs-bold link-interaction rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 pt-8 text-green-500'>
            <Link href='/' className='link-interaction'>
              Home<span className='ml-2'>{'>'}</span>
            </Link>
          </div>

          <div className='mx-auto max-w-4xl'>
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold py-6 text-cl-black sm:pb-10 sm:pt-10 lg:block'>
              {data?.pageTitle}
            </h1>
            <Accordion.Root
              className='flex flex-col gap-y-5'
              type='single'
              defaultValue='item-1'
              collapsible
            >
              {data.FAQPageContent.map((item, i) => (
                <Accordion.Item
                  key={i}
                  className='border-t border-green-500 pb-12 pt-4'
                  value={`item-${i + 1}`}
                >
                  <Accordion.Trigger className='heading-xl-semibold sm:heading-3xl-semibold group mr-4 flex w-full justify-between text-green-500'>
                    <span className='text-left'>{item.question}</span>{' '}
                    <IconChevronDown className='h-8 w-8 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180' />
                  </Accordion.Trigger>
                  <Accordion.Content className='AccordionContent overflow-hidden'>
                    <PortableText value={item.response} components={portableTextComponents} />
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
