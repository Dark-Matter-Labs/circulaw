'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Tabs({ summaryData, initialTab }) {
  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    if (initialTab !== undefined) {
      setSelectedTab(initialTab);
    } else {
      setSelectedTab('overzicht');
    }
  }, [initialTab]);

  return (
    <div className='sticky top-16 lgNav:top-24 shadow-lg z-50'>
      <div className='bg-green-800 -mt-12 sm:-mt-[72px] flex overflow-x-scroll snap-x snap-mandatory no-scrollbar lgNav:block pt-4'>
        <div className='global-margin'>
          <div className='flex flex-row gap-x-2 justify-start p-2xs-semibold text-green-500 h-[57px] max-w-3xl'>
            <Link
              className={`${
                selectedTab === 'overzicht'
                  ? 'bg-gray-100 text-green-500'
                  : 'bg-green-500 text-white'
              }  h-full rounded-t-cl px-3 py-2 flex items-start justify-center w-[73px]`}
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
                  ? 'bg-gray-100 text-green-500'
                  : 'bg-green-500 text-white'
              } h-full rounded-t-cl px-3 py-2 flex items-start justify-center w-[140px]`}
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
                  ? 'bg-gray-100 text-green-500'
                  : 'bg-green-500 text-white'
              } h-full rounded-t-cl px-3 py-2 flex items-start justify-center w-[170px]`}
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
                  ? 'bg-gray-100 text-green-500'
                  : 'bg-green-500 text-white'
              } h-full rounded-t-cl px-3 py-2 flex items-start justify-center w-[140px]`}
              href={{
                pathname: `/eu-wetgeving/${summaryData?.slug?.current}`,
                query: { tab: 'relevantie-voor-de-circulaire-economie' },
              }}
              onClick={() => setSelectedTab('relevantie-voor-de-circulaire-economie')}
            >
              Relevantie voor de circulaire economie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
