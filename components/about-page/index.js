'use client';

import { YTComponent } from '@/lib/portable-text/portable-text-types';
import Header from '../headers';
import Intro from './content/intro';
import AboutPageTitle from './content/title';
import Link from 'next/link';
import TwoColumnSection from './content/two-column-section';

// Map of components based on `_type`
const componentMap = {
  title: AboutPageTitle,
  intro: Intro,
  youtube: YTComponent,
  twoColumnSection: TwoColumnSection
};

export default function AboutPageComponent({ data }) {
  console.log(data.content)
  return (
    <div>
      <Header title={data?.pageTitle} imageURL='/big-decoration.png' bgColor='bg-green-500' />
        <div className='global-margin mt-10 px-8 flex flex-row justify-between items-center'>
          <Link href='/'>
            Left Arrow
          </Link>
             <Link href='/'>
            Right Arrow
          </Link>
       </div>
      <div className='global-margin mt-32 pb-8 text-cl-black flex flex-col gap-x-8'>
      
        {data.content.map((item, index) => {
          // Get the component based on `_type`
          const Component = componentMap[item._type];
          // If a matching component exists, render it
          if (Component) {
            return (
              <div key={index} className=''>
                <Component data={item} />
              </div>
            );
          }

          // If no matching component, render a fallback or nothing
          return null;
        })}
      </div>
    </div>
  );
}
