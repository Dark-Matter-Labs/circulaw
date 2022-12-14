import Link from 'next/link';
import Image from 'next/image';
import SectionTypes from '../../components/section-types-list';
import ThemeBottomSection from '../section-bottom-theme-index';

export default function ThemeLayout(props) {
  return (
    <div className='gradient-bg'>
      <div className='global-margin'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 mb-10'>
          <div className='max-w-2xl'>
            <div className='breadcrumb pt-8 text-greenLink'>
              <Link href='/'>
                <a>Home &gt; </a>
              </Link>
            </div>
            <div className='pb-14 pt-14 '>
              {/* maybe make the icon closer to the home link.
                may need to re-jig the top and bottom paddings here
                I find it a bit to much */}
              <div className='pr-4 inline-block'>
                <Image src={props.icon} alt={props.iconAlt} width={48} />
              </div>
              <h1 className='text-green1 inline-block mobile sm:main'>{props.title} </h1>
              <p className='pt-4 body-text-mobile sm:body-text'>{props.shortDescription}</p>
              {props.shortDescription2 !== '' && (
                <p className='body-text-mobile sm:body-text'>{props.shortDescription2}</p>
              )}
            </div>
            {props.pdfSource !== '' && (
              <span className='text-greenLink link-mobile sm:link pt-10'>
                <a href={props.pdfSource} target='_blank' rel='noopener noreferrer'>
                  Meer over nut van houtbouw →
                </a>
              </span>
            )}
          </div>
          <div className='sm:justify-self-center lg:justify-self-end'>
            <div className='hidden lg:block'>
              <Image src={props.heroImage} alt={props.heroImageAlt} height='549px' width='597px' />
            </div>
            <div className='block lg:hidden'>
              <Image src={props.heroImage} alt={props.heroImageAlt} height='549px' width='597px' />
            </div>
          </div>
        </div>
        {/* using the prop isSpecialMeasures to conditionally render this section
          if there is not special measure set this to '' and the section will not render*/}
        {props.isSpecialMeasures && (
          <div className='my-20'>
            <h2 className='pb-8 mobile sm:main'>{props.isSpecialMeasures}</h2>
            <SectionTypes type={props.type} />
          </div>
        )}
      </div>
      <ThemeBottomSection props={props} />
    </div>
  );
}
