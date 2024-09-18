'use client';
import { ArrowRightIcon, XIcon } from '@heroicons/react/outline';
import { IconCopy } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

export default function Pillars({ pillars, modelTexts }) {
    // url params for pillar and selected modeltext perhaps ?

  const [selectedPillar, setSelectedPillar] = useState('Energie');
  const [filteredModelTexts, setFilteredModelTexts] = useState();
  const [selectedModelText, setSelectedModelText] = useState(null);

  useEffect(() => {
    const filtered = modelTexts.filter((t) => t.pillar === selectedPillar);
    setFilteredModelTexts(filtered);
  }, [modelTexts, selectedPillar]);

  

  return (
    <>
      <div>
        <ul id='pillars' className='bg-green-50 rounded-cl flex flex-row p-4 mt-14 gap-x-2.5 justify-between'>
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => setSelectedPillar(p.title)}
                className={`${
                  selectedPillar === p.title ? 'p-base-semibold underline' : 'p-base'
                } text-green-600 p-2`}
              >
                {p.title} {'('}
                {modelTexts.filter((text) => text.pillar === p.title).length}
                {')'}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {pillars.map((p) => (
            <>
              {p.title === selectedPillar && (
                <>
                  <h3 className='heading-xl-semibold mt-8 mb-2'>{p.title}</h3>
                  <p className='p-xs max-w-[700px]'>{p.description}</p>
                </>
              )}
            </>
          ))}
        </div>
      </div>

      <div
        className={`${
          selectedModelText !== null ? 'grid-cols-1' : 'grid-cols-3'
        } grid gap-14 mt-14 relative`}
      >
        {filteredModelTexts?.map((text, id) => (
          <ScrollLink
            smooth={true}
            key={id}
            className='max-w-[340px] rounded-cl bg-green-50 shadow-card p-6 flex flex-col justify-between group'
            onClick={() => setSelectedModelText(text)}
            to='pillars'
          >
            {console.log(text)}
            <div className='p-2xs px-2 py-1 border border-green-800 w-min rounded-cl mb-6'>
              Omgevingsplan
            </div>
            <h4 className='heading-2xl-semibold mb-8 text-start'>{text.title}</h4>
            <h5 className='heading-xl-semibold'>Toelichting:</h5>
            <p className='line-clamp-3 mb-8 text-start'>{text.descriptionPT}</p>
            <div className='p-base-semibold flex flex-row items-center justify-start group-hover:text-green-300 link-interaction'>
              Modeltekst bekijken <ArrowRightIcon className='h-5 w-5 ml-2' />
            </div>
          </ScrollLink>
        ))}
        {selectedModelText && (
          <div className='absolute top-0 left-[400px] rounded-cl bg-gray-100 w-[635px] py-6 px-10'>
            <div className='flex flex-row w-full justify-between items-center'>
              <h4 className='heading-2xl-semibold mb-2.5'>{selectedModelText.title}</h4>
              <button onClick={() => setSelectedModelText(null)}>
                <XIcon className='h-6 w-6 text-green-800' />
              </button>
            </div>

            <h5 className='heading-xl-semibold mb-10'>Modeltekst omgevingsplan</h5>
            <div className='w-full border border-green-800 flex flex-col p-6 rounded-cl mb-10'>
              <button className='p-xs-semibold self-end flex flex-row text-gray-600 mb-8'>
                Kopieer tekst <IconCopy className='w-6 h-6 text-green-800 ml-2.5' />
              </button>
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
        )}
      </div>
    </>
  );
}
