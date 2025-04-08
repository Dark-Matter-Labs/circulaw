'use client';

import { useEffect, useRef, useState } from 'react';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';

import Header from '../headers';
import InstrumentFeedbackBlock from './instrument-feedback-block';
import MobileFeedback from './instrument-feedback-block-mobile';
import InstrumentMetaData from './instrument-metadata';
import InstrumentTable from './instrument-table';

export default function Instrument({ data }) {
  const [scrollEffect, setScrollEffect] = useState(false);
  const [hidden, setHidden] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const changeEffect = () => {
      if (
        window.scrollY >= ref?.current?.clientHeight * 0.1 &&
        window.scrollY <= ref?.current?.clientHeight * 0.5
      ) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }

      if (window.scrollY >= ref?.current?.clientHeight * 0.55) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    window.addEventListener('scroll', changeEffect);
  }, []);
  return (
    <div ref={ref} className='relative bg-green-100'>
      <Header
        title={data.titel}
        bgColor='bg-green-500'
        pageType='instrument'
        data={data}
        imageURL='/big-decoration.png'
      />
      {/* Metadata */}
      <div className='top-[70px] z-20 flex w-full justify-items-start bg-green-100 sm:sticky sm:border-b sm:border-cl-grey lgNav:top-[98px]'>
        <div className='global-margin w-full'>
          <div className='grid-col-1 grid w-full max-w-4xl'>
            <InstrumentMetaData data={data} />
          </div>
        </div>
      </div>
      <div className='relative z-0 bg-green-100'>
        <InstrumentFeedbackBlock data={data} />
        <div className='global-margin z-0 sm:mt-4'>
          {/* Subtitle */}
          <div className='grid grid-cols-1'>
            {data?.subtitel && (
              <div className='max-w-[760px]'>
                <h2 className='heading-xl sm:mt-2 lg:block'> {data?.subtitel}</h2>
              </div>
            )}
          </div>
          {/* Content */}
          <div className='grid grid-cols-1'>
            <div className='max-w-[760px] pb-20'>
              <div className=''>
                <PortableText value={data?.content} components={portableTextComponents} />
              </div>
              <div>
                {/*  
                {data.modelTexts.length > 0 && (
                  <>
                    <h2 className='mt-10 mb-2 heading-xl-semibold sm:heading-3xl-semibold'>
                      Planregels
                    </h2>
                    <p className='mb-6'>
                      Zorg voor borging van dit instrument door opnemen van onderstaande teksten in
                      je omgevingsplan.
                    </p>
                    {data.modelTexts.map((text, id) => (
                      <>
                        <Disclosure as='div' key={id} className='my-6'>
                          <DisclosureButton className='group rounded-cl data-[open]:rounded-b-none text-cl-black bg-green-100 flex justify-between items-center w-full px-6 sm:px-10 py-6'>
                            <div className='flex flex-col text-left'>
                              <div className='rounded-cl max-w-min text-nowrap border border-green-400 text-green-400 px-2 py-1 p-2xs-semibold first-letter:uppercase mb-4'>
                                {text.pillar}
                              </div>
                              <h5 className='heading-2xl-semibold'>{text.title}</h5>
                            </div>
                            <IconChevronDown className='h-6 w-6 text-cl-black group-data-[open]:rotate-180 place-self-start' />
                          </DisclosureButton>
                          <DisclosurePanel className='rounded-b-cl bg-green-100 w-full py-6 px-4 sm:px-10'>
                            <div className='w-full border border-green-400 flex flex-col rounded-cl mb-10 overflow-hidden'>
                              <div className='flex flex-row justify-between bg-green-400 border-b border-green-400 py-3 px-6'>
                                <div className='p-base-semibold text-cl-black'>
                                  Modeltekst omgevingsplan
                                </div>
                                <div className='self-end relative'>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(text.modelTextPT);
                                      setShowLinkCopied(true);
                                      setTimeout(() => {
                                        setShowLinkCopied(false);
                                      }, 1800);
                                    }}
                                    className={`${
                                      showLinkCopied ? 'hidden' : 'block'
                                    } p-xs-semibold flex flex-row`}
                                  >
                                    Kopieer
                                    <IconCopy className='w-5 h-5 ml-2.5' />
                                  </button>
                                  {showLinkCopied && (
                                    <p className='p-xs text-green-500 text-nowrap flex flex-row'>
                                      <IconCheck className='w-5 h-5 text-cl-black ml-2.5' />
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className='p-6'>
                                <PortableText
                                  value={text.modelText}
                                  components={ModelTextComponents}
                                />
                              </div>
                            </div>
                            <div className='flex flex-col mb-2 pr-6'>
                              <h6 className='heading-xl-semibold'>Toelichting</h6>
                              <PortableText
                                value={text.description}
                                components={reducedPortableTextComponents}
                              />
                            </div>
                            <div className='pr-6 mb-6'>
                              <p className='p-base'>
                                <span className='font-semibold'>Let op: </span>{' '}
                                <span className='italic'>
                                  De planregels zijn &apos;modelteksten&apos;. Deze zijn door de
                                  juristen van CircuLaw zelf opgesteld. Typ de modelteksten nooit
                                  zomaar klakkeloos over, wees je altijd bewust van de context en
                                  samenhang met informatie en teksten buiten de regels zelf.
                                </span>
                              </p>
                            </div>
                            {text?.linkedInstruments && (
                              <div className='flex flex-col mb-10'>
                                <h6 className='heading-xl-semibold mb-4'>Gelinkte instrumenten</h6>
                                <ul className='list-disc list-inside ml-2'>
                                  {text?.linkedInstruments?.map((instrument) => (
                                    <li className='p-base underline' key={instrument.slug}>
                                      <Link
                                        className='link-interaction text-green-500'
                                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug}`}
                                      >
                                        {instrument.titel}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className='flex flex-row justify-between'>
                              <div className='flex flex-wrap sm:flex-row gap-4'>
                                <div className='flex flex-col'>
                                  <div className='p-xs-semibold mb-2'>Schaalniveau</div>
                                  <div className='text-xs text-cl-dark-grey bg-white border border-green-100 rounded-cl px-2 py-1'>
                                    {text.scale}
                                  </div>
                                </div>
                                <div className='flex flex-col'>
                                  <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
                                  <div className='text-xs text-cl-dark-grey bg-white border border-green-100 rounded-cl px-2 py-1'>
                                    {text.impactLevel}
                                  </div>
                                </div>
                                <div className='flex flex-col'>
                                  <div className='p-xs-semibold mb-2'>Type regel</div>
                                  <div className='text-xs text-cl-dark-grey bg-white border border-green-100 rounded-cl px-2 py-1'>
                                    {text.type}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Link
                              href={`/bouw/planregels/modelteksten?pillar=${text.pillar}`}
                              className='mt-8 underline p-base-semibold flex items-center justify-start text-green-500'
                            >
                              Overzicht alle modelteksten{' '}
                              <IconArrowRight className='inline-block ml-0.5' />
                            </Link>
                          </DisclosurePanel>
                        </Disclosure>
                      </>
                    ))}
                  </>
                )}
                */}
              </div>
              <InstrumentTable data={data} />
            </div>
          </div>
          <div
            className={`${
              scrollEffect
                ? 'translate-y-0 transition-all duration-300 ease-in'
                : 'translate-y-14 transition-all duration-300 ease-out'
            } ${hidden ? 'hidden' : 'block'} sticky bottom-0 flex w-full justify-center`}
          >
            <MobileFeedback data={data} scrollEffect={scrollEffect} />
          </div>
        </div>
      </div>
    </div>
  );
}
