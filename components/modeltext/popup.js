'use client';

import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  ModelTextComponents,
  reducedPortableTextComponents,
} from '@/lib/portable-text/pt-components';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { usePiwikPro } from '@piwikpro/next-piwik-pro';
import { PortableText } from '@portabletext/react';
import { IconCheck, IconCopy, IconX } from '@tabler/icons-react';

import ModelTextCard from './modeltext-card';

export default function PopUp({ pillars, modelTexts }) {
  const { CustomEvent } = usePiwikPro();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (name === 'pillar') {
        params.delete('modeltext');
      }
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const [selectedPillar, setSelectedPillar] = useState();
  const [filteredModelTexts, setFilteredModelTexts] = useState();
  const [selectedModelText, setSelectedModelText] = useState(null);
  const [showLinkCopied, setShowLinkCopied] = useState(false);
  // use effect to set the pillar and filer the modeltexts
  useEffect(() => {
    // initialise from search params
    let modelTextSlug = searchParams.get('modeltext');
    let pillar = searchParams.get('pillar');
    if (pillar && !modelTextSlug) {
      setSelectedModelText(null);
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
    } else if (!pillar && modelTextSlug) {
      setSelectedPillar(pillars[0].slug);
      const filtered = modelTexts.filter((t) => t.pillar === pillars[0].slug);
      setFilteredModelTexts(filtered);
      setIsOpen(true);
      setSelectedModelText(modelTexts.filter((t) => t.slug === modelTextSlug)[0]);
    } else if (pillar && modelTextSlug) {
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
      setIsOpen(true);
      setSelectedModelText(modelTexts.filter((t) => t.slug === modelTextSlug)[0]);
    } else if (!pillar) {
      setSelectedPillar(pillars[0].slug);
      const filtered = modelTexts.filter((t) => t.pillar === pillars[0].slug);
      setFilteredModelTexts(filtered);
      setIsOpen(false);
    }
  }, [searchParams, modelTexts, createQueryString, router, pathname, pillars]);

  let [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
    router.push(pathname + '?' + createQueryString('pillar', selectedModelText.pillar), {
      scroll: false,
    });
  }

  return (
    <>
      <div className='max-w-[1280px]'>
        <ul
          id='pillars'
          className='no-scrollbar mt-14 flex snap-x snap-mandatory justify-between gap-x-2.5 overflow-x-scroll text-nowrap rounded-cl bg-green-50 p-4 sm:flex-row'
        >
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => {
                  router.push(pathname + '?' + createQueryString('pillar', p.slug), {
                    scroll: false,
                  });
                }}
                className={`${
                  selectedPillar === p.slug
                    ? 'p-base-semibold border-b-2 border-b-green-500'
                    : 'p-base hover:text-green-300'
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
            <div key={p.slug}>
              {p.slug === selectedPillar && (
                <>
                  <h3 className='heading-xl-semibold mb-2 mt-8'>{p.title}</h3>
                  <p className='p-xs max-w-[700px]'>{p.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='min-h-screen'>
        <div className='gap relative mt-14 flex w-full flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-8'>
          {filteredModelTexts?.map((text, id) => (
            <Button
              className='w-[366px]'
              key={id}
              onClick={() => {
                router.push(pathname + '?' + createQueryString('modeltext', text.slug), {
                  scroll: false,
                });
              }}
            >
              <ModelTextCard text={text} />
            </Button>
          ))}
        </div>
      </div>
      {selectedModelText && (
        <Dialog
          open={isOpen}
          as='div'
          className='relative z-120 focus:outline-none'
          onClose={close}
        >
          <DialogBackdrop
            transition
            className='fixed inset-0 bg-cl-grey/75 transition duration-500 ease-out data-[closed]:opacity-0'
          />
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-0 sm:px-4 sm:py-10'>
              <DialogPanel
                transition
                className='no-scrollbar data-[closed]:transform-[scale(95%)] min-h-screen w-screen border bg-gray-100 px-4 py-6 duration-300 ease-out data-[closed]:opacity-0 sm:h-auto sm:max-h-[800px] sm:min-h-0 sm:max-w-3xl sm:overflow-scroll sm:rounded-cl sm:px-10'
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

                <div className='mb-10 flex w-full flex-col overflow-hidden rounded-cl border border-green-300'>
                  <div className='flex flex-row justify-between border-b border-green-300 bg-green-300 px-6 py-3'>
                    <div className='p-base-semibold text-cl-black'>Modeltekst omgevingsplan</div>
                    <div className='relative self-end'>
                      <button
                        id='copy_modeltext'
                        onClick={() => {
                          navigator.clipboard.writeText(selectedModelText.modelTextPT);
                          CustomEvent.trackEvent('modeltext', selectedModelText.title);
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
                      <div className='rounded-cl border border-gray-200 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
                        {selectedModelText.scale}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
                      <div className='rounded-cl border border-gray-200 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
                        {selectedModelText.impactLevel}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Type regel</div>
                      <div className='rounded-cl border border-gray-200 bg-white px-2 py-1 text-xs text-cl-dark-grey'>
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
