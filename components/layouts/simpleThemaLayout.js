import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import LinkIcon from '../link-icon';
import Tag from '../tag';
import InstrumentMetaData from '../instrument/instrument-metadata';

export default function SimpleThemaLayout({instruments,  numberOfLaws, ...props}) {
    const themaData = props.thema;
    return (
        <>
        {/* HEADER DESKTOP */}
        <div className='hidden sm:block w-full h-[360px]'>
          <div className='relative object-cover w-full h-full mt-3'>
            <Image
              src={urlFor(themaData?.heroImage).url()}
              alt={`${themaData.themaName} + 'hero image'`}
              fill
              className='z-0 bg-cover'
              priority
            />

            <div className='global-margin h-[360px] z-5 relative flex flex-col justify-between'>
              <div className='pt-8'>
                <Link
                  className='rounded-clSm bg-breadcrumb px-4 pt-0.5 pb-1.5 w-auto text-gray-100'
                  href='/'
                >
                  <span className='p-2xs-bold link-interaction align-middle'>Home &nbsp; &gt;</span>
                </Link>
              </div>

              <div className='pb-8 max-w-5xl'>
                <div className=''>
                  <h1 className='mobile sm:desktop text-grey-100 inline-block lg mobile sm:desktop'>
                    {themaData?.themaName}
                  </h1>
                </div>
                <div className='col-span-7'>
                  <p className='pt-4 text-grey-100 p-lg '>
                    {themaData?.themaSubtitle}{' '}
                    {themaData?.linkText && (
                      <span className='text-green-300 link-base inline-block hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white group'>
                        <a href={themaData?.headerLink} target='_blank' rel='noopener noreferrer'>
                          {themaData?.linkText}
                          <LinkIcon />
                        </a>
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER MOBILE */}
        <div className='h-[300px] mt-3 sm:hidden'>
          <div className='flex items-center h-full w-full relative z-0 object-cover'>
            <Image
              src={urlFor(themaData?.heroImageMobile).url()}
              alt={`${themaData.themaName} + 'hero image'`}
              fill
              className=' absolute'
            />
            <div className='w-full h-full bg-gradient-to-t from-[#035E46] to-[#035E4600] z-0 absolute'></div>

            <div className='w-full h-full z-10 flex flex-col justify-between global-margin'>
              <div>
                <div className='pt-8'>
                  <Link
                    className='rounded-clSm bg-breadcrumb px-4 pt-0.5 pb-1.5 w-auto text-gray-100'
                    href='/'
                  >
                    <span className='p-2xs-bold link-interaction align-middle'>
                      Home &nbsp; &gt;
                    </span>
                  </Link>
                </div>
              </div>
              <div className='mb-6'>
                <h1 className='p-5xl-semibold text-gray-50 pb-1'>{themaData?.themaName}</h1>
                <p className='p-base text-gray-50'>
                  {themaData?.themaSubtitle}
                  {themaData?.linkText && (
                    <span className='text-green-500 link-base inline-block '>
                      <a
                        href={themaData?.headerLinkURL}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-green-200 active:text-green-100 focus:text-green-100 focus:right-2 focus:ring-white'
                      >
                        {themaData?.linkText}
                        <LinkIcon />
                      </a>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='global-margin'>
            <div className='max-w-3xl mb-10'>            
            <h2 className='p-5xl-semibold pb-4 pt-7'>
            Top {numberOfLaws} instrumenten voor plastic in de bouw
            </h2>
            <p>
                {themaData?.introText}
            </p>
            </div>
            <div className='max-w-7xl flex pb-10'>
              <div className='w-2 bg-gradient-to-b from-[#25C38B] to-[#035E46] mr-4 rounded-full mb-10'>

              </div>
              <div>
                
                {/* This can be a component - policy list, theme bottom section + here */}
                {instruments.map((measure) => (
                    <Link href={'/measures/' + measure.slug.current} key={measure.titel}>
                    <div className='block mb-10 max-w-[825px]'>
                    <div className='flex justify-start items-center -ml-1'>
                     {/* Expertise Tag */}
                     {measure?.beleid === true && <Tag classes='bg-green-500 text-gray-100'>Beleid</Tag>}
                     {measure?.inkoop === true && <Tag classes='bg-green-500 text-gray-100'>Inkoop</Tag>}
                     {measure?.grondpositie === true && (
                       <Tag classes='bg-green-500 text-gray-100'>Grondpositie</Tag>
                     )}
                     {measure?.subsidie === true && <Tag classes='bg-green-500 text-gray-100'>Subsidie</Tag>}
                     {measure?.fiscaal === true && <Tag classes='bg-green-500 text-gray-100'>Fiscaal</Tag>}
                   </div>
       
                   <div className='block mt-2 max-w-4xl'>
                     <div className=' mb-2'>
                       <h3 className='p-4xl-semibold text-grey-800 no-underline hover:text-green-300 active:text-green-800 focus:text-green-200 focus:ring-2 focus:ring-white'>
                         {measure.titel}{' '}
                       </h3>
                     </div>
       
                     <div className='block newlineDisplay p-md text-grey-800 mt-2 pb-2'>
                       <p className='p-base'>{measure.introText}</p>
                     </div>
                     <InstrumentMetaData data={measure} />
                   </div>
                 </div>
                 </Link>
                ))}
              </div>
            </div>
        </div>
        </>

    )
}