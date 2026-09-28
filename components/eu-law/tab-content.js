'use client';

import { portableTextComponents } from '@/lib/portable-text/pt-components';
import { PortableText } from '@portabletext/react';

import ScrollPagesTabContent from './scroll-tab-content';

// Content of one EU law sub-tab (see lib/eu-law-tabs.js). The Europe and local
// tabs are lists of titled sections; the circular economy tab is a single text.
export default function TabContent({ tab, content }) {
  if (tab.type === 'euCircularEconomyTab') {
    return (
      <div className='global-margin my-12'>
        <div className='max-w-xl 2xl:max-w-2xl'>
          <h2 className='heading-xl-semibold text-cl-black'>{tab.heading}</h2>
          <PortableText value={content} components={portableTextComponents} />
        </div>
      </div>
    );
  }
  return <ScrollPagesTabContent content={content} title={tab.heading} />;
}
