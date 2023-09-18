import { PortableText } from '@portabletext/react';
import SectionTypes from '../section-types-list';
import { complexPortableTextComponents } from '../../lib/portable-text/pt-components';
import Link from 'next/link';

export default function TransitionAgendaLayout({ themaCardData, transitionAgendaData }) {
  return (
    <>
      <div className='global-margin'>
        <div className='mt-10'>
          <Link href='/'>
            HOME
          </Link>
        </div>
        <div className=' pt-20 pb-20'>
          <h1 className='mobile sm:desktop pb-6'>{transitionAgendaData?.transitionAgendaTitle}</h1>
          <h2 className='mobile sm:desktop'>{transitionAgendaData?.subtitle}</h2>
        </div>
        <h2 className='mobile sm:desktop py-10'>
          {transitionAgendaData?.transitionAgendaTitle} Themas and Specials
        </h2>
        <div className='py-10'>
          <SectionTypes themaCards={themaCardData} />
        </div>
        <div className='py-10'>
          {transitionAgendaData?.pageObjects.map((object) => (
            <>
              <h2 className='mobile sm:desktop py-10'>{object?.blockTitle}</h2>
              <PortableText
                value={object?.complexPortableTextBloclk}
                components={complexPortableTextComponents}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
