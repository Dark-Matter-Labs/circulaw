'use client'
import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { useState } from 'react';

// TODO: we are using materlia ui here but only for this page. 
// perhaps a re-design with a different functinality so we can remove MUI
// the hidden content is also not good for SEO

export default function FAQPageComponent({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
                    <Accordion
                      expanded={expanded === `panel_${i}`}
                      onChange={handleChange(`panel_${i}`)}
                      className='border-t pb-12 pt-4 border-green-600 border-0 rounded-0 shadow-none my-0'
                      disableGutters={true}
                      square={true}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded === `panel_${i}` ? (
                            <MinusIcon className='h-5 w-6 text-green-600' />
                          ) : (
                            <PlusIcon className='h-6 w-6 text-green-600' />
                          )
                        }
                        aria-controls={`panel_${i}_bh-content`}
                        id={`panel_${i}_bh-header`}
                      >
                        <Typography
                          as='h3'
                          className='width-1/3 heading-xl-semibold sm:heading-2xl-semibold text-green-600 mr-4'
                        >
                          {item.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography as='div' className='w-5/6'>
                          <PortableText value={item.response} components={portableTextComponents} />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
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
