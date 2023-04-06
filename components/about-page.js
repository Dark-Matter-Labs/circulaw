import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import OverNav from './over-nav';
import { aboutPagePTComponents } from '../lib/portable-text/pt-components';


export default function AboutPageComponent({data}) {
    return (
      <div>
      <div className='bg-about-header bg-cover h-40'>
      </div>
        <div className='global-margin pb-8 text-black-white-800'>
        <div className='grid grid-cols-1 w-full lg:grid-cols-3'>
          <div className='col-span-2'>
            <div className='breadcrumb pt-8 text-green-500'>
              <Link href='/'>Home &gt;</Link>
            </div>
            <div className='max-w-4xl'>
              <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop text-green-500'>
                {data?.aboutPage?.pageTitle}
              </h1>
              <PortableText value={data?.aboutPage?.aboutPageContent} components={aboutPagePTComponents} />
            </div>
          </div>
            <div className='mt-3 lg:-mr-[500px] lg:ml-12 lg:mb-20 lg:mt-32 col-span-1'>
              <OverNav pagename={data?.aboutPage?.slug.current} />
            </div>
        </div>
      </div>
      </div>
    )
}
