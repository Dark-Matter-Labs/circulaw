import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { FAQPagePTComponents } from '../lib/portable-text/pt-components'


export default function FAQPageComponent({data}) {
    return (
        <div className='global-margin pb-8 text-black-white-800'>
        <div className='grid grid-cols-1 w-full md:grid-cols-3'>
          <div className='col-span-2'>
            <div className='breadcrumb pt-8 text-green-500'>
              <Link href='/'>Home &gt;</Link>
            </div>
            <div className='max-w-4xl'>
              <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop'>
                {data?.pageTitle}
              </h1>
              <PortableText value={data?.FAQPageContent} components={FAQPagePTComponents} />
            </div>
          </div>
        </div>
      </div>
    )
}