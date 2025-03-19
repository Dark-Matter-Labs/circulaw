'use client';

import React from 'react';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import * as Accordion from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';

import Header from './headers';

export default function FAQPageComponent({ data }) {
  return (
    <>
      <Header title={data?.pageTitle} bgColor='bg-green-500' />
      <div className='global-margin py-8'>
        <div className='grid w-full grid-cols-1 justify-start'>
          <div className='max-w-4xl px-16'>
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
    </>
  );
}
