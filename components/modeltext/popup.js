'use client';
import { useState, useEffect, useCallback } from 'react';
import { IconX, IconCopy } from '@tabler/icons-react';
import ModelTextCard from './modeltext-card';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import Link from 'next/link';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Button } from '@headlessui/react';
import Tag from '../tag';

export default function PopUp({ pillars, modelTexts }) {
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
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
    } else if (pillar && modelTextSlug) {
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
      setIsOpen(true);
      setSelectedModelText(modelTexts.filter((t) => t.slug === modelTextSlug)[0]);
    } else if (!pillar) {
      setSelectedPillar('materialenkringloop');
      router.push(pathname + '?' + createQueryString('pillar', 'materialenkringloop'), {
        scroll: false,
      });
      const filtered = modelTexts.filter((t) => t.pillar === 'materialenkringloop');
      setFilteredModelTexts(filtered);
    }
  }, [searchParams, modelTexts, createQueryString, router, pathname]);

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
          className='bg-green-50 rounded-cl flex overflow-x-scroll snap-x snap-mandatory no-scrollbar text-nowrap sm:flex-row p-4 mt-14 gap-x-2.5 justify-between'
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
                    ? 'p-base-semibold border-b-2 border-b-green-600'
                    : 'p-base'
                } text-green-600 px-2`}
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
            <>
              {p.slug === selectedPillar && (
                <>
                  <h3 className='heading-xl-semibold mt-8 mb-2'>{p.title}</h3>
                  <p className='p-xs max-w-[700px]'>{p.description}</p>
                </>
              )}
            </>
          ))}
        </div>
      </div>

      <div className='min-h-screen scroll-m-[80px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-6 sm:gap-y-8 justify-evenly mt-14 relative w-full'>
          {filteredModelTexts?.map((text, id) => (
            <Button
              key={id}
              onClick={() => {
                // setIsOpen(true);
                // setSelectedModelText(text);
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
            className='fixed inset-0 bg-gray-500/75 transition duration-500 ease-out data-[closed]:opacity-0'
          />
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-0 sm:px-4 sm:py-10'>
              <DialogPanel
                transition
                className='sm:rounded-cl bg-gray-100 border w-screen sm:w-[635px] min-h-screen sm:min-h-0 sm:h-auto py-6 px-10 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
              >
                <div className='flex flex-row w-full justify-between items-center'>
                  <Tag classes='bg-green-400 max-w-min text-green-50 mb-2 text-nowrap'>
                    {selectedModelText.pillar}
                  </Tag>
                  <Button onClick={close}>
                    <IconX className='h-6 w-6 text-green-800' />
                  </Button>
                </div>
                <DialogTitle as='h3' className='heading-2xl-semibold mb-2.5'>
                  {selectedModelText?.title}
                </DialogTitle>
                <h5 className='heading-xl-semibold mb-10'>Modeltekst omgevingsplan</h5>
                <div className='w-full border border-green-800 flex flex-col p-6 rounded-cl mb-10'>
                  <div className='self-end relative'>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedModelText.modelTextPT);
                        setShowLinkCopied(true);
                        setTimeout(() => {
                          setShowLinkCopied(false);
                        }, 1800);
                      }}
                      className={`${
                        showLinkCopied ? 'hidden' : 'block'
                      } p-xs-semibold flex flex-row text-gray-600 mb-8`}
                    >
                      Kopieer tekst <IconCopy className='w-6 h-6 text-green-800 ml-2.5' />
                    </button>
                    {showLinkCopied && (
                      <p className='p-xs-semibold text-green-500 text-nowrap flex flex-row mb-8'>
                        Tekst gekopieerd!
                        <IconCopy className='w-6 h-6 text-green-500 ml-2.5' />
                      </p>
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
                  <div className='flex flex-wrap sm:flex-row gap-4'>
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
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
