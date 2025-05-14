'use client';

import Pagination from '@/components/about-page/pagination';
import { InlineImageComponent, YTComponent } from '@/lib/portable-text/portable-text-types';

import Header from '../headers';
import AccordionDropdown from './content/accordion-dropdown';
import Cta from './content/cta';
import Intro from './content/intro';
import AboutPageTitle from './content/title';
import TwoColumnSection from './content/two-column-section';

// Map of components based on `_type`
const componentMap = {
  title: AboutPageTitle,
  intro: Intro,
  youtube: YTComponent,
  twoColumnSection: TwoColumnSection,
  accordionDropdown: AccordionDropdown,
  imageBlock: InlineImageComponent,
  cta: Cta,
};

export default function AboutPageComponent({ data }) {
  return (
    <div>
      <Header title={data?.pageTitle} imageURL='/big-decoration.png' bgColor='bg-green-500' />
      <Pagination pages={data.pages} />
      <div className='global-margin mt-32 flex flex-col gap-x-8 text-cl-black'>
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
      <div className='my-10'>
        <Pagination pages={data.pages} />
      </div>
    </div>
  );
}
