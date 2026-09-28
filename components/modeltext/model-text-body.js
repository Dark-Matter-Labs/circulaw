'use client';

import { useState } from 'react';

import Link from 'next/link';

import {
  ModelTextComponents,
  reducedPortableTextComponents,
} from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';
import { IconCheck, IconCopy } from '@tabler/icons-react';

// Everything below the title of a model text: the copyable text, the
// explanation, linked instruments and attributes. Shared by the popup on the
// overview and the model text's own page.
export default function ModelTextBody({ modelText }) {
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  return (
    <>
      <div className='rounded-cl mb-10 flex w-full flex-col overflow-hidden border border-green-400'>
        <div className='flex flex-row justify-between border-b border-green-400 bg-green-400 px-6 py-3'>
          <div className='p-base-semibold text-cl-black'>Modeltekst omgevingsplan</div>
          <div className='relative self-end'>
            <button
              id='copy_modeltext'
              onClick={() => {
                navigator.clipboard.writeText(modelText.modelTextPT);
                setShowLinkCopied(true);
                setTimeout(() => {
                  setShowLinkCopied(false);
                }, 1800);
              }}
              className={`${showLinkCopied ? 'hidden' : 'block'} p-xs-semibold flex flex-row`}
            >
              Kopieer
              <IconCopy className='ml-2.5 h-5 w-5' />
            </button>
            {showLinkCopied && (
              <p className='p-xs flex flex-row text-nowrap text-green-500'>
                <IconCheck className='text-cl-black ml-2.5 h-5 w-5' />
              </p>
            )}
          </div>
        </div>
        <div className='p-6'>
          <PortableText value={modelText.modelText} components={ModelTextComponents} />
        </div>
      </div>
      <div className='mb-2 flex flex-col pr-6'>
        <h6 className='heading-xl-semibold'>Toelichting</h6>
        <PortableText value={modelText.description} components={reducedPortableTextComponents} />
      </div>
      <div className='mb-6 pr-6'>
        <p className='p-base'>
          <span className='font-semibold'>Let op: </span>{' '}
          <span className='italic'>
            De planregels zijn &apos;modelteksten&apos;. Deze zijn door de juristen van CircuLaw
            zelf opgesteld. Typ de modelteksten nooit zomaar klakkeloos over, wees je altijd bewust
            van de context en samenhang met informatie en teksten buiten de regels zelf.
          </span>
        </p>
      </div>
      {modelText?.linkedInstruments && (
        <div className='mb-10 flex flex-col'>
          <h6 className='heading-xl-semibold mb-4'>Gelinkte instrumenten</h6>
          <ul className='ml-2 list-inside list-disc'>
            {modelText?.linkedInstruments?.map((instrument) => (
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
        <div className='flex flex-wrap gap-4 sm:flex-row'>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Schaalniveau</div>
            <div className='rounded-cl text-cl-dark-grey border border-green-100 bg-white px-2 py-1 text-xs'>
              {modelText.scale}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
            <div className='rounded-cl text-cl-dark-grey border border-green-100 bg-white px-2 py-1 text-xs'>
              {modelText.impactLevel}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Type regel</div>
            <div className='rounded-cl text-cl-dark-grey border border-green-100 bg-white px-2 py-1 text-xs'>
              {modelText.type}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
