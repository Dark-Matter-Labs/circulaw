'use client';
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';


export default function FAQPageComponent({ data }) {
  return (
    <div className='global-margin pb-8 text-gray-800'>
      <div className='grid grid-cols-1 w-full justify-center '>
        <div className=''>
          <div className='bg-gray-100 pl-2 pr-3 py-1.5 rounded-clSm p-2xs-bold pt-8 text-green-600 link-interaction'>
            <Link href='/' className='link-interaction'>
              Home<span className='ml-2'>{'>'}</span>
            </Link>
          </div>

        
          <div className='max-w-4xl mx-auto'>
          <h1 className='heading-2xl-semibold sm:heading-5xl-semibold lg:block sm:pt-10 py-6 sm:pb-10 text-gray-800'>
              {data?.pageTitle}
            </h1>
          <Accordion.Root
            className="flex flex-col gap-y-5"
            type="single"
            defaultValue="item-1"
            collapsible
	>
    {data.FAQPageContent.map((item, i) => (
          <Accordion.Item key={i} className='border-t border-green-600 pb-12 pt-4' value={`item-${i + 1}`}>
            <Accordion.Trigger className='heading-xl-semibold sm:heading-3xl-semibold text-green-600 mr-4 flex justify-between w-full group'><span className='text-left'>{item.question}</span> <IconChevronDown className='h-8 w-8 group-data-[state=open]:rotate-180 transition-transform duration-300 ease-in-out' /></Accordion.Trigger>
            <Accordion.Content className='AccordionContent overflow-hidden'>
            <PortableText value={item.response} components={portableTextComponents} />
            </Accordion.Content>
                </Accordion.Item>))}
              </Accordion.Root> 
          </div>
        </div>
      </div>
    </div>
  );
}




{/**
  
  
            <div>
              {data.FAQPageContent.map((item, i) => (
                <div key={i}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='heading-xl-semibold sm:heading-3xl-semibold text-green-500 pt-6 pb-10'>
                        {' '}
                        {item?.sectionTitle}
                      </h2>
                    </div>
                  )}
                  {item?.question && (
                    <Accordion.Root type='single' defaultValue='item-1' collapsible className=''>
                      <Accordion.Item className='text-left' value={`item-${i + 1}`}>
                        <AccordionTrigger className='heading-xl-semibold sm:heading-3xl-semibold text-green-600 mr-4'>
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <PortableText value={item.response} components={portableTextComponents} />
                        </AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>
                  )}
                </div>
              ))}
            </div>
  
  */}