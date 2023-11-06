import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FAQPagePTComponents } from '../lib/portable-text/pt-components';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQPageComponent({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='global-margin pb-8 text-grey-800'>
      <div className='grid grid-cols-1 w-full justify-center '>
        <div className=''>
          <div className='breadcrumb pt-8 text-green-500 link-interaction'>
            <Link href='/'>Home &gt;</Link>
          </div>
          <div className='max-w-4xl mx-auto'>
            <h1 className='mobile sm:desktop lg:block sm:pt-10 py-6 sm:pb-10 text-grey-800'>
              {data?.pageTitle}
            </h1>
            <div>
              {data.FAQPageContent.map((item, i) => (
                <div key={i}>
                  {item?.sectionTitle && (
                    <div>
                      <h2 className='mobile sm:desktop text-green-500 pt-6 pb-10'>
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
                          className='width-1/3 mobile sm:desktop text-green-600 mr-4'
                        >
                          {item.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography as='div' className='w-5/6'>
                          <PortableText value={item.response} components={FAQPagePTComponents} />
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
