import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import OverNav from './over-nav'
import { aboutPagePTComponents } from '../lib/portable-text/pt-components'


export default function AboutPageComponent({data}) {
    return (
        <div className='global-margin pb-8 text-black-white-800'>
        <div className='grid grid-cols-1 w-full md:grid-cols-3'>
          <div className='col-span-2'>
            <div className='breadcrumb pt-8 text-green-500'>
              <Link href='/'>Home &gt;</Link>
            </div>
            <div className='max-w-4xl'>
              <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop'>
                {data?.aboutPage?.pageTitle}
              </h1>
              <PortableText value={data?.aboutPage?.aboutPageContent} components={aboutPagePTComponents} />
            </div>
          </div>
          {data?.aboutPage?.pageTitle !== 'VRAAG & ANTWOORD' && (
            <div className='mt-3 md:ml-5 lg:mx-5 lg:my-20 max-w-sm col-span-1'>
              <OverNav pagename={data?.aboutPage?.slug.current} />
            </div>
          )}
        </div>
      </div>
    )
}