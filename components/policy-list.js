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
              {law?.thema === 'mattress' && (
                <Image width='20' height='20' src={IconWood} alt='Icon of Wood' />
              )}
              <span className='inline-block pl-4 font-openSans casus'>{law?.thema.replace('-', ' ')}</span>
              {law?.extraContent &&
                law?.extraContent.map((content) => (
                  <span
                    key={content}
                    className='ml-2 p-1 text-normal rounded font-semibold text-sm bg-green2 text-white no-underline'
                  >
                    {content}
                  </span>
                ))}
            </div>
            <div className='block my-1'>
              <Link href={'/measures/' + law.slug.current} key={law.slug.current}>
                <a className='text-lg font-semibold no-underline hover:text-greenLink'>
                  <h3>{law.titel} </h3>
                </a>
              </Link>
              <div className='block font-manrope font-bold text-xs pb-1'>
                {law?.governmentLevel.map((level) => (
                  <span key={level} className='capitalize'>
                    {level} {law?.governmentLevel.slice(-1)[0] !== level && <span>- </span>}
                  </span>
                ))}
              </div>

              <div className='block newlineDisplay twoLines font-manrope font-normal font-base mb-4'>
                <Link href={'/measures/' + law.slug.current} key={law.slug.current} passHref>
                  <a>
                    <p className='max-w-xs sm:max-w-5xl'>{law.introText}</p>
                  </a>
                </Link>
              </div>

              <div className='grid grid-cols-1 lg:flex space-x-0 lg:space-x-8 space-y-4 sm:space-y-0  py-2 sm:py-0'>
                <div className='flex-2 mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400 '>
                  <span className='block-inline flex items-center'>
                    Juridische invloed:{' '}
                    <span className='text-black uppercase pl-1'>{law.juridischInvloed}</span>
                  </span>
                </div>

                <div className='flex-2 mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400 '>
                  <span className='block-inline flex items-center'>
                    Juridische invloed:{' '}
                    <span className='text-black uppercase pl-1'>{law.juridischHaalbaarheid}</span>
                  </span>
                </div>
                <div className='flex-2 md:mr-5 text-normal font-openSans text-xs text-black1 sm:text-gray-400 '>
                  R-ladder:{' '}
                  <span className='block-inline text-gray-900 r-category'>
                    {law.rLadder.map((rValue) => (
                      <span key={rValue} className='bg-green2 text-white rounded-full p-1 mr-2'>
                        {rValue}{' '}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className='flex space-x-8'>
                <div className='p-1 subrecht-text rounded text-sm font-openSans bg-grey3 bg-opacity-50 '>
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
