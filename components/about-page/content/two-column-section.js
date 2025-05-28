import { PortableText } from 'next-sanity';

import TitleDecorator from '@/components/title-decorator';

import { aboutPageReducedPortableTextComponents } from '../../../lib/portable-text/pt-components';

export default function TwoColumnSection({ data }) {
  return (
    <div className='mb-[60px] grid grid-cols-1 gap-x-8 gap-y-8 sm:mb-[120px] sm:grid-cols-2'>
      <div className='flex max-w-[500px] flex-col'>
        <div className='mb-2'>
          <h3 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-500'>
            {data?.leftColumnTitle}
          </h3>
          <TitleDecorator width='w-1/4' />
        </div>
        <PortableText
          value={data?.leftColumnContent}
          components={aboutPageReducedPortableTextComponents}
        />
      </div>
      <div className='flex max-w-[500px] flex-col'>
        <div className='mb-2'>
          <h3 className='heading-2xl-semibold sm:heading-3xl-semibold text-green-500'>
            {data?.rightColumnTitle}
          </h3>
          <TitleDecorator width='w-1/4' />
        </div>
        <PortableText
          value={data?.rightColumnContent}
          components={aboutPageReducedPortableTextComponents}
        />
      </div>
    </div>
  );
}
