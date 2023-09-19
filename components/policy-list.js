import Link from 'next/link';
import Image from 'next/image';

import IconWood from '../public/icons/houtbuowSm.svg';
import WindmillIcon from '../public/icons/windmill.png';
import MatrassenIcon from '../public/icons/matressIcon.svg';
import { Fragment } from 'react';

export default function PolicyList(props) {
  let lawData = [];
  if (props.data) {
    lawData = props.data;
  }
  return (
    <>
      {lawData.map((law) => (
        <Link href={'/measures/' + law.slug.current} key={law.titel}>
          <div className='block sm:ml-0 pb-8 sm:pb-10'>
            <div className=''>
              <div className='inline-block flex justify-start items-center'>
                {law?.thema === 'houtbouw-stimuleren' && (
                  <div className='inline-block'>
                    <Image width='30' height='30' src={IconWood} alt='Icon of Wood' />
                  </div>
                )}
                {law?.thema === 'circulaire-windturbines' && (
                  <Image width='30' height='30' src={WindmillIcon} alt='Icon of Wood' />
                )}
                {law?.thema === 'circulaire-matrasketen' && (
                  <div className='inline-block'>
                    <Image width='30' height='30' src={MatrassenIcon} alt='Icon of Wood' />
                  </div>
                )}
                <h6 className=' pl-2 inline uppercase text-green-600 hidden sm:inline-block'>
                  {law?.thema.replace('-', ' ')}
                </h6>
                <h4 className='mobile inline-block pl-2 inline uppercase text-green-600 sm:hidden'>
                  {law?.thema.replace('-', ' ')}
                </h4>
                {law?.extraContent &&
                  law?.extraContent?.map((content) => {
                    if (content === 'Leidraad') {
                      return (
                        <h6
                          key={content + law.titel}
                          className='ml-2 px-2 py-0.5 rounded bg-green-600 text-black-white-100 no-underline'
                        >
                          {content}
                        </h6>
                      );
                    } else {
                      return (
                        <h6
                          key={content + law.titel}
                          className='ml-2 px-2 py-0.5 rounded bg-green-500 text-black-white-100 no-underline'
                        >
                          {content}
                        </h6>
                      );
                    }
                  })}
              </div>
              <div className='block my-1 max-w-3xl'>
                <span className='no-underline hover:text-green-500'>
                  <h3 className='desktop text-black-white-800'>{law.titel} </h3>
                </span>
                <div className='block pb-1'>
                  {law?.overheidslaag?.map((level) => (
                    <Fragment key={level + law.titel}>
                      <h6
                        key={level + law.titel + 'heading6'}
                        className='capitalize text-green-500 hidden sm:inline'
                      >
                        {level} {law?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                      </h6>
                      <h4
                        key={level + law.titel + 'heading4'}
                        className='capitalize mobile text-green-500 inline sm:hidden block'
                      >
                        {level} {law?.overheidslaag.slice(-1)[0] !== level && <span>- </span>}
                      </h4>
                    </Fragment>
                  ))}
                </div>

                <div className='block newlineDisplay p-base text-black-white-800 mb-4'>
                  <p className=''>{law.introText}</p>
                </div>

                <div className='lg:flex space-x-0 lg:space-x-8 space-y-2 sm:space-y-0 pt-2 pb-3 sm:py-1 border-b border-t border-black-white-500 mb-2 items-center'>
                  <div className='flex-2 mr-5'>
                    <h6 className='block-inline flex items-center text-black-white-500'>
                      Invloed:{' '}
                      <span className='text-green-500 uppercase pl-1'>{law.juridischInvloed}</span>
                    </h6>
                  </div>

                  <div className='flex-2 mr-5 '>
                    <h6 className='block-inline flex items-center text-black-white-500'>
                      Juridische Haalbaarheid:{' '}
                      <span className='text-green-500 uppercase pl-1'>
                        {law.juridischeHaalbaarheid}
                      </span>
                    </h6>
                  </div>
                  <div className='flex-2 md:mr-5 text-black-white-500'>
                    <h6 className='inline'>R-ladder: </h6>
                    <h6 className='block-inline text-black-white-100 inline'>
                      {law.rLadder.map((rValue) => (
                        <div
                          key={law.titel + rValue}
                          className='inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-500 mr-2'
                        >
                          <span className='text-white'>{rValue} </span>
                        </div>
                      ))}
                    </h6>
                  </div>
                  <div className='flex space-x-8 block sm:hidden'>
                    <h6 className='p-1 rounded bg-black-white-300 text-black-white-800 '>
                      {law.subrechtsgebied}
                    </h6>
                  </div>
                </div>
                <div className=' space-x-8 hidden sm:flex'>
                  <h6 className='p-1 rounded bg-black-white-300 text-black-white-800 '>
                    {law.subrechtsgebied}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
