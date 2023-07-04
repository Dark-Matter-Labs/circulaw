import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FAQPagePTComponents } from '../lib/portable-text/pt-components';

export default function FAQPageComponent({ data }) {

  console.log(data, 'hello')
  
  return (
    <div className='global-margin pb-8 text-black-white-800'>
      <div className='grid grid-cols-1 w-full md:grid-cols-3'>
        <div className='col-span-2'>
          <div className='breadcrumb pt-8 text-green-500 link-interaction'>
            <Link href='/'>Home &gt;</Link>
          </div>
          <div className='max-w-4xl'>
            <h1 className='lg:block sm:pt-10 py-6 sm:pb-10 mobile sm:desktop text-green-500'>
              {data?.pageTitle}
            </h1>
            
            <div>
              {data.FAQPageContent.map((item) => (
              
                <div key={item._key}>
                  {item?.sectionTitle}
                  <br />
                  {item.question}
                  <br />
                  {console.log(item.response)}
                  <PortableText value = {item.response} components={FAQPagePTComponents}/>
                  <br />
                  </div>  
              ))}
              <div>
                <PortableText value = {data?.faqPdf[0]} components={FAQPagePTComponents} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
