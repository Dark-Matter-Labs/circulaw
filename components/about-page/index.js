'use client';

import Pagination from '@/components/shared/pagination';
import { InlineImageComponent, YTComponent } from '@/lib/portable-text/portable-text-types';

import Header from '../headers';
import AccordionDropdown from './content/accordion-dropdown';
import Cta from './content/cta';
import Intro from './content/intro';
import MediaItems from './content/media-items';
import Partners from './content/partners';
import Team from './content/team';
import Testimonials from './content/testimonials';
import TiledImages from './content/tiled-images';
import Timeline from './content/timeline';
import AboutPageTitle from './content/title';
import TwoColumnSection from './content/two-column-section';
import Urgency from './content/urgency';

// Map of components based on `_type`
const componentMap = {
  title: AboutPageTitle,
  intro: Intro,
  youtube: YTComponent,
  twoColumnSection: TwoColumnSection,
  accordionDropdown: AccordionDropdown,
  imageBlock: InlineImageComponent,
  cta: Cta,
  timeline: Timeline,
  tiledImages: TiledImages,
  team: Team,
  partnersSection: Partners,
  mediaItems: MediaItems,
  testimonials: Testimonials,
  urgency: Urgency,
};

export default function AboutPageComponent({ data }) {
  return (
    <div>
      <Header title={data?.pageTitle} imageURL='/big-decoration.png' bgColor='bg-green-500' />
      <div className='global-margin'>
        <Pagination pages={data.pages} position='top' />
      </div>
      <div className='global-margin mt-[60px] flex flex-col gap-x-8 text-cl-black sm:mt-[120px]'>
        {data.content.map((item, index) => {
          const Component = componentMap[item._type];
          if (Component) {
            return (
              <div key={index} className=''>
                <Component data={item} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='mb-10'>
        <Pagination pages={data.pages} />
      </div>
    </div>
  );
}
