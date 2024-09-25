'use client';
import { useState, useEffect, useRef, useCallback, useTransition } from 'react';
import { IconX, IconCopy } from '@tabler/icons-react';
import ModelTextCard from './modeltext-card';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';
import Link from 'next/link';

export default function Pillars({ pillars, modelTexts }) {
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
  const [modelTextSlug, setModelTextSlug] = useState();
  const [filteredWithSelected, setFilteredWithSelected] = useState();
  const [selectedModelText, setSelectedModelText] = useState(null);
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  const [isPending, startTransition] = useTransition();
  const handelModeltextChanges = (modelTextSlug, pillar) => {
    startTransition(() => {
      if (modelTextSlug !== '') {
        setModelTextSlug(modelTextSlug);
      } else if (modelTextSlug === '') {
        setModelTextSlug(undefined);
      }

      if (pillar && !modelTextSlug) {
        setSelectedPillar(pillar);
        const filtered = modelTexts.filter((t) => t.pillar === pillar);
        setFilteredModelTexts(filtered);
        setSelectedModelText(undefined);
        setFilteredWithSelected(undefined);
        setModelTextSlug(undefined);
      } else if (!pillar && !modelTextSlug) {
        setSelectedPillar('materialenkringloop');
        const filtered = modelTexts.filter((t) => t.pillar === 'materialenkringloop');
        setFilteredModelTexts(filtered);
      } else if (pillar && modelTextSlug) {
        setSelectedPillar(pillar);
        let filered = modelTexts.filter((t) => t.pillar === pillar);
        let refiltered = filered.filter((t) => t.slug !== modelTextSlug);
        setSelectedModelText(modelTexts.filter((t) => t.slug === modelTextSlug)[0]);
        setFilteredWithSelected(refiltered);
      }
    });
  };

  // use effect to set the pillar and filer the modeltexts
  useEffect(() => {
    // initialise from search params
    let modelTextSlug = searchParams.get('modeltext');
    let pillar = searchParams.get('pillar');

    handelModeltextChanges(modelTextSlug, pillar);
  }, [searchParams, modelTexts, modelTextSlug]);

  const modelTextRef = useRef();
  useEffect(() => {
    if (modelTextRef.current) {
      modelTextRef.current.scrollTop = 0;
    }
  });

  return (
    <>
      <div className='max-w-[1280px]'>
        <ul
          ref={modelTextRef}
          id='pillars'
          className='bg-green-50 rounded-cl flex flex-row p-4 mt-14 gap-x-2.5 justify-between'
        >
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => {
                  router.push(pathname + '?' + createQueryString('pillar', p.slug), {
                    scroll: false,
                  });
                  setModelTextSlug(undefined);
                }}
                className={`${
                  selectedPillar === p.slug ? 'p-base-semibold underline' : 'p-base'
                } text-green-600 p-2`}
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

      {!modelTextSlug && !isPending ? (
        <div className='min-h-screen'>
          <div className='grid grid-cols-3 gap-12 mt-14 relative w-full'>
            {filteredModelTexts?.map((text, id) => (
              <button
                key={id}
                onClick={() => {
                  router.push(pathname + '?' + createQueryString('modeltext', text.slug), {
                    scroll: false,
                  });
                }}
              >
                <ModelTextCard text={text} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className='flex items-start justify-center mt-14 w-full min-h-screen'>
          <div className='basis-1/3 h-screen overflow-y-scroll flex flex-col gap-y-8 pl-4 py-4 no-scrollbar'>
            {filteredWithSelected?.map((text, id) => (
              <button
                key={id}
                onClick={() => {
                  router.push(pathname + '?' + createQueryString('modeltext', text.slug), {
                    scroll: false,
                  });
                }}
              >
                <ModelTextCard text={text} />
              </button>
            ))}
          </div>
          <div className='basis-2/3 h-screen overflow-y-scroll pl-12 flex items-start justify-start py-4 no-scrollbar'>
            {selectedModelText && (
              <div className='rounded-cl bg-gray-100 border w-[635px] py-6 px-10'>
                <div className='flex flex-row w-full justify-between items-center'>
                  <h4 className='heading-2xl-semibold mb-2.5'>{selectedModelText.title}</h4>
                  <button
                    onClick={() => {
                      setModelTextSlug(undefined);
                      router.push(
                        pathname + '?' + createQueryString('pillar', selectedModelText.pillar),
                        {
                          scroll: false,
                        },
                      );
                    }}
                  >
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
        </div>
      )}
    </>
  );
}
