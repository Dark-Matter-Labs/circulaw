'use client';

import { Suspense, useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  ModelTextComponents,
  reducedPortableTextComponents,
} from '@/lib/portable-text/pt-components';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { PortableText } from '@portabletext/react';
import { IconCheck, IconCopy, IconX } from '@tabler/icons-react';

import ModelTextCard from './modeltext-card';

// useSearchParams makes everything up to the nearest Suspense boundary render
// only in the browser. Reading the URL in this empty child keeps that boundary
// small, so the pillars and model text cards are in the server HTML.
function SearchParamsSync({ onChange }) {
  const searchParams = useSearchParams();
  const pillar = searchParams.get('pillar');
  const modeltext = searchParams.get('modeltext');
  useEffect(() => {
    onChange({ pillar, modeltext });
  }, [pillar, modeltext, onChange]);
  return null;
}

export default function PopUp({ pillars, modelTexts }) {
  const router = useRouter();
  const pathname = usePathname();
  const [urlState, setUrlState] = useState({ pillar: null, modeltext: null });
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  const selectedPillar = urlState.pillar ?? pillars[0]?.slug;
  const selectedModelText = modelTexts.find((t) => t.slug === urlState.modeltext) ?? null;
  const isOpen = selectedModelText !== null;

  function navigate(params) {
    router.push(`${pathname}?${new URLSearchParams(params).toString()}`, { scroll: false });
  }

  function close() {
    navigate({ pillar: selectedModelText.pillar });
  }

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsSync onChange={setUrlState} />
      </Suspense>
      <div className='max-w-[1280px]'>
        <ul
          id='pillars'
          className='no-scrollbar mt-14 flex snap-x snap-mandatory justify-between gap-x-2.5 overflow-x-scroll text-nowrap rounded-cl bg-green-100 p-4 sm:flex-row'
        >
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => navigate({ pillar: p.slug })}
                className={`${
                  selectedPillar === p.slug
                    ? 'p-base-semibold border-b-2 border-b-green-500'
                    : 'p-base hover:text-green-400'
                } px-2 text-green-500`}
              >
                {p.title} {'('}
                {modelTexts.filter((text) => text.pillar === p.slug).length}
                {')'}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {pillars.map((p) => (
            <div key={p.slug} hidden={p.slug !== selectedPillar}>
              <h3 className='heading-xl-semibold mb-2 mt-8'>{p.title}</h3>
              <p className='p-xs max-w-[700px]'>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='min-h-screen'>
        {/* Every pillar's cards are rendered so crawlers see all model texts; only the selected pillar shows. */}
        {pillars.map((p) => (
          <div
            key={p.slug}
            hidden={p.slug !== selectedPillar}
            className='gap relative mt-14 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-8'
          >
            {modelTexts
              .filter((text) => text.pillar === p.slug)
              .map((text) => (
                <Button
                  className='w-[366px]'
                  key={text.slug}
                  onClick={() =>
                    navigate({
                      ...(urlState.pillar ? { pillar: urlState.pillar } : {}),
                      modeltext: text.slug,
                    })
                  }
                >
                  <ModelTextCard text={text} />
                </Button>
              ))}
          </div>
        ))}
      </div>
      {selectedModelText && (
        <Dialog
          open={isOpen}
          as='div'
          className='relative z-120 focus:outline-hidden'
          onClose={close}
        >
          <DialogBackdrop
            transition
            className='fixed inset-0 bg-cl-grey/75 transition duration-500 ease-out data-closed:opacity-0'
          />
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-0 sm:px-4 sm:py-10'>
              <DialogPanel
                transition
                className='no-scrollbar data-closed:transform-[scale(95%)] min-h-screen w-screen border bg-green-100 px-4 py-6 duration-300 ease-out data-closed:opacity-0 sm:h-auto sm:max-h-[800px] sm:min-h-0 sm:max-w-3xl sm:overflow-scroll sm:rounded-cl sm:px-10'
              >
                <div className='mb-4 flex w-full flex-row items-center justify-between'>
                  <div className='flex flex-row gap-x-2'>
                    <div className='p-2xs-semibold max-w-min text-nowrap rounded-cl border border-green-400 px-2 py-1 text-green-400 first-letter:uppercase'>
                      {selectedModelText.pillar}
                    </div>
                  </div>
                  <Button onClick={close}>
                    <IconX className='h-6 w-6 text-cl-black' />
                  </Button>
                </div>
                <DialogTitle as='h3' className='heading-2xl-semibold mb-8'>
                  {selectedModelText?.title}
                </DialogTitle>

                <div className='mb-10 flex w-full flex-col overflow-hidden rounded-cl border border-green-400'>
                  <div className='flex flex-row justify-between border-b border-green-400 bg-green-400 px-6 py-3'>
                    <div className='p-base-semibold text-cl-black'>Modeltekst omgevingsplan</div>
                    <div className='relative self-end'>
                      <button
                        id='copy_modeltext'
                        onClick={() => {
                          navigator.clipboard.writeText(selectedModelText.modelTextPT);
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
                        <IconCopy className='ml-2.5 h-5 w-5' />
                      </button>
                      {showLinkCopied && (
                        <p className='p-xs flex flex-row text-nowrap text-green-500'>
                          <IconCheck className='ml-2.5 h-5 w-5 text-cl-black' />
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='p-6'>
                    <PortableText
                      value={selectedModelText.modelText}
                      components={ModelTextComponents}
                    />
                  </div>
                </div>
                <div className='mb-2 flex flex-col pr-6'>
                  <h6 className='heading-xl-semibold'>Toelichting</h6>
                  <PortableText
                    value={selectedModelText.description}
                    components={reducedPortableTextComponents}
                  />
                </div>
                <div className='mb-6 pr-6'>
                  <p className='p-base'>
                    <span className='font-semibold'>Let op: </span>{' '}
                    <span className='italic'>
                      De planregels zijn &apos;modelteksten&apos;. Deze zijn door de juristen van
                      CircuLaw zelf opgesteld. Typ de modelteksten nooit zomaar klakkeloos over,
                      wees je altijd bewust van de context en samenhang met informatie en teksten
                      buiten de regels zelf.
                    </span>
                  </p>
                </div>
                {selectedModelText?.linkedInstruments && (
                  <div className='mb-10 flex flex-col'>
                    <h6 className='heading-xl-semibold mb-4'>Gelinkte instrumenten</h6>
                    <ul className='ml-2 list-inside list-disc'>
                      {selectedModelText?.linkedInstruments?.map((instrument) => (
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
                      <div className='rounded-cl border border-green-100 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
                        {selectedModelText.scale}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
                      <div className='rounded-cl border border-green-100 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
                        {selectedModelText.impactLevel}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Type regel</div>
                      <div className='rounded-cl border border-green-100 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
                        {selectedModelText.type}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
