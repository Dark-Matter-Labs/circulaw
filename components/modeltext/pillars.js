'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import ModelTextDetail from './modeltext-detail';
import ModelTextCard from './modeltext-card';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Pillars({ pillars, modelTexts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // const [url, setUrl] = useState()

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
  console.log(selectedModelText);
  // use effect to set the pillar and filer the modeltexts
  useEffect(() => {
    // initialise from search params
    let modelTextSlug = searchParams.get('modeltext');
    if (modelTextSlug) {
      setModelTextSlug(modelTextSlug);
    }

    let pillar = searchParams.get('pillar');

    if (pillar && !modelTextSlug) {
      setSelectedPillar(pillar);
      const filtered = modelTexts.filter((t) => t.pillar === pillar);
      setFilteredModelTexts(filtered);
      setSelectedModelText(undefined);
      setFilteredWithSelected(undefined);
      setModelTextSlug(undefined);
    } else if (!pillar && !modelTextSlug) {
      // may not need this and just assure that there is always a pillar
      setSelectedPillar('materialenkringloop');
      const filtered = modelTexts.filter((t) => t.pillar === 'materialenkringloop');
      setFilteredModelTexts(filtered);
    } else if (pillar && modelTextSlug) {
      setSelectedPillar(pillar);
      let filered = modelTexts.filter((t) => t.pillar === pillar);
      let refiltered = filered.filter((t) => t.slug !== modelTextSlug);
      setSelectedModelText(modelTexts.filter((t) => t.slug === modelTextSlug));
      setFilteredWithSelected(refiltered);
    }
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
          id='pillars'
          className='bg-green-50 rounded-cl flex flex-row p-4 mt-14 gap-x-2.5 justify-between'
        >
          {pillars?.map((p) => (
            <li key={p.title}>
              <button
                onClick={() => {
                  //  setUrl(`/modeltext?${createQueryString('pillar', p.slug)}`)
                  //  window.history.pushState(null, undefined, url)
                  // router.push(`/modeltext?${createQueryString('pillar', p.slug)}`, { scroll: false })
                  // setSelectedModelText(null);
                  setModelTextSlug(undefined);
                  router.push(pathname + '?' + createQueryString('pillar', p.slug), {
                    scroll: false,
                  });
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

      {!modelTextSlug ? (
        <div className='grid-cols-3 grid gap-14 mt-14 relative'>
          {filteredModelTexts?.map((text, id) => (
            <button
              key={id}
              onClick={() => {
                // setUrl(`/modeltext?${createQueryString('pillar', text.pillar)}&${createQueryString('modeltext', text.slug)}`)
                // window.history.pushState(null, undefined, url)
                router.push(pathname + '?' + createQueryString('modeltext', text.slug), {
                  scroll: false,
                });
              }}
            >
              <ModelTextCard text={text} />
            </button>
          ))}
        </div>
      ) : (
        <div className='flex items-start justify-center mt-12' ref={modelTextRef}>
          <div className='basis-1/3 h-screen overflow-y-scroll flex flex-col gap-y-8 pl-4 py-4 no-scrollbar'>
            {filteredWithSelected?.map((text, id) => (
              <button
                key={id}
                onClick={() => {
                  // setUrl(`/modeltext?${createQueryString('pillar', text.pillar)}&${createQueryString('modeltext', text.slug)}`)
                  // window.history.pushState(null, undefined, url)
                  router.push(pathname + '?' + createQueryString('modeltext', text.slug), {
                    scroll: false,
                  });
                }}
              >
                <ModelTextCard text={text} />
              </button>
            ))}
          </div>
          <div className='basis-2/3 pl-12 flex items-start justify-start h-full py-4'>
            {selectedModelText && <ModelTextDetail selectedModelText={selectedModelText[0]} />}
          </div>
        </div>
      )}
    </>
  );
}

{
  /*

// scroll to somehwer
 

     {selectedModelText && (
         <ModelTextDetail selectedModelText = {selectedModelText}/>
        )}
  
  useEffect(() => {
    if (selectedModelText === null) {
      const filtered = modelTexts.filter((t) => t.pillar === selectedPillar);
      setFilteredModelTexts(filtered);
    } else {
      const filtered = modelTexts.filter((t) => t.pillar === selectedPillar);
      const reFiltered = filtered.sort(function (x, y) {
        return x === selectedModelText ? -1 : y === selectedModelText ? 1 : 0;
      });
      setFilteredModelTexts(reFiltered);
    }
  }, [modelTexts, selectedPillar, selectedModelText]);
  */
}
