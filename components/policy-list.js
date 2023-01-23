import Link from 'next/link';
import Image from 'next/image';

import IconWood from '../public/icons/wood.svg';
import WindmillIcon from '../public/windmill.svg';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law, index) => (
        <div key={index} className='block sm:ml-0 lg:ml-28 pb-8 sm:pb-10'>
          <div className=''>
            <div className='inline-block'>
              {law?.thema === 'houtbouw' && (
                <Image width='20' height='20' src={IconWood} alt='Icon of Wood' />
              )}
              {law?.thema === 'circulaire-windturbines' && (
                <Image width='20' height='20' src={WindmillIcon} alt='Icon of Wood' />
              )}
              {law?.thema === 'matrassen' && (
                <Image width='20' height='20' src={IconWood} alt='Icon of Wood' />
              )}
              <span className='inline-block pl-4 casus'>{law?.thema.replace('-', ' ')}</span>
              {law?.extraContent &&
                law?.extraContent.map((content) => (
                  <span
                    key={content}
                    className='ml-2 p-1 heading-sm rounded bg-green-500 text-black-white-200 no-underline'
                  >
                    {content}
                  </span>
                ))}
            </div>
            <div className='block my-1'>
              <Link href={'/measures/' + law.slug.current} key={law.slug.current}>
                <span className='no-underline hover:text-green-500'>
                  <h3 className='mobile sm:desktop'>{law.titel} </h3>
                </span>
              </Link>
              <div className='block  pb-1'>
                {law?.overheidslaag?.map((level) => (
                  <span key={level} className='capitalize heading-sm text-green-500'>
                    {level} {law?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                  </span>
                ))}
              </div>

              <div className='block newlineDisplay twoLines p-mobile-md sm:p-desktop-md text-black-white-800 mb-4'>
                <Link href={'/measures/' + law.slug.current} key={law.slug.current} passHref>
                  <p className='max-w-xs sm:max-w-5xl'>{law.introText}</p>
                </Link>
              </div>

              <div className='grid grid-cols-1 lg:flex space-x-0 lg:space-x-8 space-y-4 sm:space-y-0  py-2 sm:py-0'>
                <div className='flex-2 mr-5 '>
                  <span className='block-inline flex items-center text-black-white-500 heading-sm'>
                    Invloed:{' '}
                    <span className='text-green-500 uppercase pl-1'>{law.juridischInvloed}</span>
                  </span>
                </div>

                <div className='flex-2 mr-5 '>
                  <span className='block-inline flex items-center text-black-white-500 heading-sm'>
                    Juridische Haalbaarheid:{' '}
                    <span className='text-green-500 uppercase pl-1'>
                      {law.juridischeHaalbaarheid}
                    </span>
                  </span>
                </div>
                <div className='flex-2 md:mr-5 text-black-white-500 heading-sm'>
                  R-ladder:{' '}
                  <span className='block-inline text-black-white-200 r-category'>
                    {law.rLadder.map((rValue) => (
                      <span key={rValue} className='bg-green-500 rounded-full p-1 mr-2'>
                        {rValue}{' '}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className='flex space-x-8'>
                <div className='p-1 rounded bg-black-white-300 heading-sm text-black-white-800 '>
                  {law.subrechtsgebied}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
