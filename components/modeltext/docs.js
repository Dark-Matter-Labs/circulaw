'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Link from 'next/link';
import { IconX, IconCopy } from '@tabler/icons-react';
import { PortableText } from '@portabletext/react';
import { reducedPortableTextComponents } from '@/lib/portable-text/pt-components';

export default function Docs({ pillars, modelTexts }) {
  const router = useRouter();
  const searchParams = useSearchParams();
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
  // const [modelTextSlug, setModelTextSlug] = useState();
  //  const [filteredWithSelected, setFilteredWithSelected] = useState();
  // const [selectedModelText, setSelectedModelText] = useState(null);
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  useEffect(() => {
    let modelTextSlug = searchParams.get('modeltext');
    let pillar = searchParams.get('pillar');
    if (modelTextSlug !== '') {
      // setModelTextSlug(modelTextSlug);
    } else if (modelTextSlug === '') {
      // setModelTextSlug(undefined);
    }

    if (pillar && !modelTextSlug) {
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
      // setSelectedModelText(undefined);
      //  setFilteredWithSelected(undefined);
      // setModelTextSlug(undefined);
    } else if (!pillar && !modelTextSlug) {
      setSelectedPillar('materialenkringloop');
      const filtered = modelTexts.filter((t) => t.pillar === 'materialenkringloop');
      setFilteredModelTexts(filtered);
    }
  }, [modelTexts, searchParams]);
  console.log(filteredModelTexts);
  return (
    <>
      <div></div>
      <div className='my-20 flex relative'>
        <div className='relative min-h-screen w-[17rem] shrink-0 lg:block lg:pr-px xl:pr-[2px]'>
          <ul className='sticky top-40'>
            {pillars.map((p, id) => (
              <li
                key={id}
                className={`${
                  p.slug === selectedPillar ? 'text-green-50 bg-green-500' : ''
                } px-2 py-1 rounded-cl heading-xl-semibold my-3 flex`}
              >
                <button
                  className='text-left'
                  onClick={() => {
                    router.push(pathname + '?' + createQueryString('pillar', p.slug));
                    // setModelTextSlug(undefined);
                  }}
                >
                  {p.title} {'('}
                  {modelTexts.filter((text) => text.pillar === p.slug).length}
                  {')'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-y-10 mx-4 min-w-0 flex-1 pt-16'>
          {filteredModelTexts?.map((t, id) => (
            <Element key={id} id={`${t.slug}`}>
              <div className='rounded-cl bg-gray-100 border w-[635px] py-6 px-10'>
                <div className='flex flex-row w-full justify-between items-center'>
                  <h4 className='heading-2xl-semibold mb-2.5'>{t.title}</h4>
                  <button
                    onClick={() => {
                      // setModelTextSlug(undefined);
                      router.push(pathname + '?' + createQueryString('pillar', t.pillar), {
                        scroll: false,
                      });
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
                        navigator.clipboard.writeText(t.modelTextPT);
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
                  <PortableText value={t.modelText} components={reducedPortableTextComponents} />
                </div>
                <div className='flex flex-col max-w-[425px] mb-6'>
                  <h6 className='heading-xl-semibold'>Toelichting</h6>
                  <PortableText value={t.description} components={reducedPortableTextComponents} />
                </div>
                <div className='flex flex-col mb-10 max-w-[425px]'>
                  <h6 className='heading-xl-semibold mb-6'>Gelinkte instrumenten</h6>
                  <ul className='list-disc list-inside ml-2'>
                    {t?.linkedInstruments?.map((instrument) => (
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
                        {t.scale}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Houdbaarheid</div>
                      <div className='text-xs text-gray-600 bg-white border border-gray-200 rounded-cl px-2 py-1'>
                        {t.impactLevel}
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='p-xs-semibold mb-2'>Type regel</div>
                      <div className='text-xs text-gray-600 bg-white border border-gray-200 rounded-cl px-2 py-1'>
                        {t.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          ))}
        </div>
        <div className='relative min-h-screen w-[17rem] xl:block'>
          <ul className='sticky top-40'>
            {filteredModelTexts?.map((t, id) => (
              <li key={id} className='my-4 text-green-800'>
                <ScrollLink
                  to={`${t.slug}`}
                  smooth={true}
                  spy={true}
                  offset={-120}
                  activeClass='bg-green-500 !text-white font-semibold transition-all duration-100 min-w-[390px]'
                  className='p-base py-2 pl-4 pr-8 h-full break-words rounded-cl whitespace-nowrap cursor-pointer'
                  onClick={() => {
                    router.push(pathname + '?' + createQueryString('modeltext', t.slug), {
                      scroll: false,
                    });
                  }}
                >
                  {t.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
