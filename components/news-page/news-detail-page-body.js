import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/portable-text/pt-components';

export default function NewsDetailPageBody({ data }) {
  return (
    <>
      <div className='grid grid-cols-12 items-start justify-start global-margin relative mb-20 mt-10'>
        <div className='col-span-12 sm:col-span-6'>
          <PortableText value={data?.content} components={portableTextComponents} />
        </div>
      </div>
    </>
  );
}
