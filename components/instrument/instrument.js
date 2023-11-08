import { PortableText } from '@portabletext/react';

import InstrumentTable from './instrument-table';
import { instrumentPTComponents } from '../../lib/portable-text/pt-components';
import InstrumentFeedbackBlock from './instrument-feedback-block';
import Instrumentheader from './instrument-header';

export default function Instrument({ data }) {
  return (
    <div className='relative bg-grey-100'>
      <Instrumentheader data={data} />
      <div className='bg-grey-100 relative z-0'>
        <InstrumentFeedbackBlock data={data} />
        <div className='global-margin sm:mt-4 z-0'>
          {/* Subtitle */}
          <div className='grid grid-cols-1 sm:pl-8'>
            {data?.measure?.subtitel && (
              <div className='max-w-[760px]'>
                <h2 className='lg:block p-lg sm:p-xl sm:mt-6'> {data?.measure?.subtitel}</h2>
              </div>
            )}
          </div>
          {/* Content */}
          <div className='grid grid-cols-1 sm:pl-8'>
            <div className='pb-20 max-w-[760px]'>
              <div className=''>
                <PortableText value={data?.measure?.content} components={instrumentPTComponents} />
              </div>
              <InstrumentTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
