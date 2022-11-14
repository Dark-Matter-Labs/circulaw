import Link from "next/link"
import Image from "next/image"
import SectionTypes from "./section-types-list"
import WoodIcon from '../public/icons/wood.svg';
import HoutbouwHero from '../public/houtbouwHero.jpeg';
import HoutbouwSection1 from '../public/Measures_Teaser.png';
import HoutbouwSection2 from '../public/Timber_Process_Teaser.png';
import HoutbouwSection3 from '../public/Timber_Measures_Teaser.png';

export default function ThemeLayout (props) {
    return (
        <div className='gradient-bg'>
        <div className='global-margin'>
            {/*there was not gap-x20 mb10 on the wood page.
            I put it in here as it makes the title go below the icon consistent on both pages */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 mb-10'>
            <div className='max-w-2xl'>
              <div className='breadcrumb pt-8 text-greenLink'>
                <Link href='/'>
                  <a>Home &gt; </a>
                </Link>
              </div>
              <div className='pb-14 pt-14 '>
                {/*maybe make the icon closer to the home link.
                may need to re-jig the top and bottom paddings here
                I find it a bit to much */}
                <div className='pr-4 inline-block'>
                  <Image src={props.icon} alt={props.iconAlt} width={48} />
                </div>
                <h1 className='text-green1 inline-block mobile sm:main'>
                    {props.title}{' '}
                </h1>
                <p className='pt-4 body-text-mobile sm:body-text'>
                  {props.shortDescription}
                </p>
                {props.shortDescription2 !== '' &&
                <p className='body-text-mobile sm:body-text'>
                  {props.shortDescription2}
                </p>
                }
              </div>
                {props.pdfSource !== '' &&
              <span className='text-greenLink link-mobile sm:link pt-10'>
                <a
                  href={props.pdfSource}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Meer over nut van houtbouw →
                </a>
              </span>
              }
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
          {/*using the prop isSpecialMeasures to conditionally render this section
          if there is not special measure set this to '' and the section will not render*/}
          {props.isSpecialMeasures !== '' &&
          <div className='my-20'>
            <h2 className='pb-8 mobile sm:main'>
              {props.isSpecialMeasures}
            </h2>
            <SectionTypes type= {props.type} />
          </div>
          }
        </div>

        <div className='bg-green3 bg-opacity-10'>
          <div className='pt-5 global-margin  '>
            <div className='border-b border-grey1 pb-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <h2 className='pt-10 mobile sm:main'>{props.seeMeasuresTitle}</h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src= {props.seeMeasuresImage}
                      alt={props.seeMeasuresImageAlt}
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    {props.seeMeasuresText}
                  </p>
                  <Link href= {props.seeMeasuresLink}>
                    <a>
                      <span className='text-greenLink link-mobile sm:link'>
                        {props.seeMeasuresLinkText}
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <Image src={props.seeMeasuresImage} alt={props.seeMeasuresImageAlt} layout='responsive' />
                </div>
              </div>
            </div>
            <div className='border-b border-grey1 pb-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <h2 className='pt-10 mobile sm:main'>{props.samenhangTitle}</h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src= {props.samenhangImage}
                      alt= {props.samenhangImageAlt}
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    {props.samenhangText}
                  </p>
                  <Link href= {props.samenhangLink}>
                    <a>
                      <span className='text-greenLink link-mobile sm:link'>
                        {props.samenhangLinkText}
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <Image src={props.samenhangImage} alt={props.samenhangImageAlt} layout='responsive' />
                </div>
              </div>
            </div>
            <div className='border-b border-grey1 pb-40 pt-10'>
              <div className='grid grid-cols-1 sm:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <h2 className='pt-10 mobile sm:main'>
                    {props.welkeTitle}
                  </h2>
                  <div className='block py-4 sm:hidden'>
                    <Image
                      src= {props.welkeImage}
                      alt={props.welkeImageAlt}
                      layout='responsive'
                    />
                  </div>
                  <p className='body-text-mobile sm:body-text py-5 max-w-2xl'>
                    {props.welkeText}
                  </p>
                  <Link href= {props.welkeLink}>
                    <a>
                      <span className='text-greenLink link-mobile sm:link'>
                        {props.welkeLinkText}
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block'>
                  <Image src={props.welkeImage} alt={props.welkeImageAlt} layout='responsive' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}