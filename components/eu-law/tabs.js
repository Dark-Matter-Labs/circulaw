'use client';

import { useEffect, useState, useRef } from 'react';

import Link from 'next/link';

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    // Start observing the element
    observer.observe(ref.current);

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Tabs({ summaryData, initialTab }) {
  const [selectedTab, setSelectedTab] = useState();

  const target = useRef();
  const targetVisible = useIsVisible(target);


  useEffect(() => {
    if (initialTab !== undefined) {
      setSelectedTab(initialTab);
    } else {
      setSelectedTab('overzicht');
    }
  }, [initialTab]);

  return (
    <>
    <div ref={target} className='absolute top-72 md:top-32 left-0'/>
    <div className={`${targetVisible === false ? 'bg-white md:translate-y-0 -translate-y-8 ' : '-translate-y-20 md:-translate-y-11'} transition duration-150 sticky top-24 content-end h-[128px] z-20`}>
        <div className='global-margin '>
    <div className={`${targetVisible === false ? 'rounded-cl': 'rounded-b-cl'} no-scrollbar flex h-full snap-x snap-mandatory flex-row justify-start content-end gap-x-3 overflow-x-scroll  bg-cl-black px-16 sm:h-[87px] lgNav:block`}>
      <div className='p-2xs-semibold flex h-[57px] max-w-3xl flex-row justify-start self-end gap-x-2 text-green-500'>
        <Link
          className={`${
            selectedTab === 'overzicht' ? 'bg-green-100 text-green-500' : 'bg-green-500 text-white'
          } flex h-full w-[73px] items-start justify-center rounded-t-cl px-3 py-2`}
          href={{
            pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
            query: { tab: 'overzicht' },
          }}
          onClick={() => setSelectedTab('overzicht')}
        >
          Overzicht
        </Link>
        <Link
          className={`${
            selectedTab === 'verplichtingen-voor-europese-lidstaten'
              ? 'bg-green-100 text-green-500'
              : 'bg-green-500 text-white'
          } flex h-full w-[140px] items-start justify-center rounded-t-cl px-3 py-2`}
          href={{
            pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
            query: { tab: 'verplichtingen-voor-europese-lidstaten' },
          }}
          onClick={() => setSelectedTab('verplichtingen-voor-europese-lidstaten')}
        >
          Verplichtingen voor Europese lidstaten
        </Link>
        <Link
          className={`${
            selectedTab === 'relevantie-voor-regionale-en-lokale-overheden'
              ? 'bg-green-100 text-green-500'
              : 'bg-green-500 text-white'
          } flex h-full w-[170px] items-start justify-center rounded-t-cl px-3 py-2`}
          href={{
            pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
            query: { tab: 'relevantie-voor-regionale-en-lokale-overheden' },
          }}
          onClick={() => setSelectedTab('relevantie-voor-regionale-en-lokale-overheden')}
        >
          Relevantie voor regionale en lokale overheden{' '}
        </Link>
        <Link
          className={`${
            selectedTab === 'relevantie-voor-de-circulaire-economie'
              ? 'bg-green-100 text-green-500'
              : 'bg-green-500 text-white'
          } flex h-full w-[140px] items-start justify-center rounded-t-cl px-3 py-2`}
          href={{
            pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
            query: { tab: 'relevantie-voor-de-circulaire-economie' },
          }}
          onClick={() => setSelectedTab('relevantie-voor-de-circulaire-economie')}
        >
          Relevantie voor de circulaire economie
        </Link>
        </div>
        </div> </div>
        </div>
        </>
  );
}
