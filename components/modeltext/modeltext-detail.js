import { IconX, IconCopy } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';

export default function ModelTextDetail({ selectedModelText }) {
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  return (
    <div className='rounded-cl bg-gray-200 border w-[635px] py-6 px-10'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h4 className='heading-2xl-semibold mb-2.5'>{selectedModelText.title}</h4>
        <button>
          <IconX className='h-6 w-6 text-green-800' />
        </button>
      </div>

      <h5 className='heading-xl-semibold mb-10'>Modeltekst omgevingsplan</h5>
      <div className='w-full border border-green-800 flex flex-col p-6 rounded-cl mb-10'>
        <div className='self-end relative'>
          <button
            onClick={() => {
              navigator.clipboard.writeText(selectedModelText.modelTextPT);
              setShowLinkCopied(true);
              setTimeout(() => {
                setShowLinkCopied(false);
              }, 2000);
            }}
            className='p-xs-semibold  flex flex-row text-gray-600 mb-8'
          >
            Kopieer tekst <IconCopy className='w-6 h-6 text-green-800 ml-2.5' />
          </button>
          {showLinkCopied && (
            <p className='absolute top-6 p-lg-regular text-black text-nowrap'>MODELTEXT copied!</p>
          )}
        </div>

        <PortableText
          value={selectedModelText.modelText}
          components={reducedPortableTextComponents}
        />
      </div>
      <div className='flex flex-col max-w-[425px] mb-6'>
        <h6 className='heading-xl-semibold'>Toelichting</h6>
        <PortableText
          value={selectedModelText.description}
          components={reducedPortableTextComponents}
        />
      </div>
      <div className='flex flex-col mb-10 max-w-[425px]'>
        <h6 className='heading-xl-semibold mb-6'>Gelinkte instrumenten</h6>
        <ul className='list-disc list-inside ml-2'>
          {selectedModelText?.linkedInstruments?.map((instrument) => (
            <li className='p-base underline' key={instrument.slug}>
              <Link
                className='link-interaction text-green-600'
                href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug}`}
              >
                {instrument.titel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row justify-between '>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Schaalniveau</div>
            <div className='text-xs text-gray-600 bg-white border border-gray-200 rounded-cl px-2 py-1'>
              {selectedModelText.scale}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
            <div className='text-xs text-gray-600 bg-white border border-gray-200 rounded-cl px-2 py-1'>
              {selectedModelText.impactLevel}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='p-xs-semibold mb-2'>Type regel</div>
            <div className='text-xs text-gray-600 bg-white border border-gray-200 rounded-cl px-2 py-1'>
              {selectedModelText.type}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
