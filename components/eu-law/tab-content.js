'use client';
import { useSearchParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';

import SummaryComponent from './summary-tab-content';
import ScrollPagesTabContent from './scroll-tab-content';
import { portableTextComponents } from '@/lib/portable-text/pt-components';

export default function TabContent({ summaryData, tabData }) {
  const searchParams = useSearchParams();
  let selectedTab = searchParams.get('tab');
  if (!selectedTab) {
    selectedTab = 'overzicht';
  }

  const euCircularEconomyTab = tabData?.filter((tab) => tab._type === 'euCircularEconomyTab')[0];
  const euLocalTab = tabData?.filter((tab) => tab._type === 'euLocalTab')[0];
  const euEuropeTab = tabData?.filter((tab) => tab._type === 'euEuropeTab')[0];

  return (
    <>
      {' '}
      {selectedTab === 'overzicht' && (
        <div className=''>
          <SummaryComponent lawData={summaryData} />
        </div>
      )}
      {selectedTab === 'verplichtingen-voor-europese-lidstaten' && (
        <ScrollPagesTabContent
          content={euEuropeTab?.europeContent}
          title='Verplichting voor Europese lidstaten'
        />
      )}
      {selectedTab === 'relevantie-voor-regionale-en-lokale-overheden' && (
        <ScrollPagesTabContent
          content={euLocalTab?.localContent}
          title='Relevantie voor regionale en lokale overheden'
        />
      )}
      {selectedTab === 'relevantie-voor-de-circulaire-economie' && (
        <div className='global-margin my-20 '>
          <div className='max-w-xl 2xl:max-w-2xl'>
            <h2 className='heading-xl-semibold text-green-800'>
              Relevantie voor de circulaire economie
            </h2>
            <PortableText
              value={euCircularEconomyTab?.ceContent}
              components={portableTextComponents}
            />
          </div>
        </div>
      )}
    </>
  );
}
