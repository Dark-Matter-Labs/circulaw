import Link from 'next/link';
import Image from 'next/image';
// import Xarrow, { Xwrapper } from 'react-xarrows'
import { useRef } from 'react';

import MeasureLinks from '../measure-links-dropdown';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(30,60))

export default function WelkeLayout(props) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;
  const allRef = useRef()
  const natRef = useRef()
  const provRef = useRef()
  const gemRef = useRef()


  return (
    <>
      {/* Header */}
      <div className='global-margin mt-10 mb-20 max-w-2xl'>
        <div className='flex justify-between items-center pb-8'>
          <div className='breadcrumb text-green-500'>
            <Link href='/'>Home &gt;</Link>
            <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
              <span className='inline-block lowercase first-letter:uppercase'>
                {props.casus} &gt;{' '}
              </span>
            </Link>
          </div>
          <div className='hidden sm:block float-right'>
            <MeasureLinks type={props.casus} page='welke' />
          </div>
        </div>

        <div className='items-center justify-start grid grid-cols-10'>
          <div className='col-span-1 flex h-full w-full items-start pt-2'>
            <Image src={props.iconPath} alt='Thema icon' width={107} height={107} />
          </div>
          <div className='col-span-9'>
            <h1 className='mobile sm:desktop text-black py-1 max-w-3xl pl-6'>{props.title}</h1>
          </div>
        </div>
      </div>
      {/* DYNAMIC IMAGE */}
      <div className='global-margin mb-20'>
        <div className='flex grid-cols-3 items-start justify-center'>
          {/* LEFT HAND SIDE */}
          <div className='grid col-span-1 items-start justify-center h-full w-80 mt-10'>
            <div ref={allRef} className='w-80 h-10 border border-green-800 rounded-full text-black-white-800 bg-black-white-200 flex items-center justify-left'>
              <div className='h-10 w-10 border-r border-t border-b border-green-800 rounded-full flex items-center justify-center'>
                <h5 className='mobile sm:desktop'>A</h5>
              </div>
              <div className='flex items-center justify-center w-full h-full -ml-10'>
                <h4 className='mobile sm:desktop'>Alle overheidslagen</h4>
              </div>
            </div>
            <div className='pl-4 pt-3'>
              {allRegionLaws &&
                allRegionLaws.map((law) => (
                  <Link
                    key={law.titel}
                    href={`/measures/${law.slug.current}`}
                    className='inline-block'
                  >
                    <div className='flex items-center justify-start max-w-80'>
                      <span className='pr-2 inline-block'>
                        {' '}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={2}
                          stroke='#028352'
                          className='w-4  h-4'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                          />
                        </svg>
                      </span>
                      <h5 className='py-1 inline-block mobile sm:desktop hover:underline'>
                        {law.titel}
                      </h5>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* DIAGRAM */}
          <div className='w-[34rem] h-[34rem] min-w-[34rem] min-h-[34rem] flex items-center justify-center mx-4 relative'>
            <div className='w-full h-full border-1 border-green-800 bg-green-800 rounded-full flex items-end justify-center'>
              <div className='w-5/6 h-5/6 border-1 border-green-500 bg-green-500 rounded-full flex items-end justify-center'>
                <div className='w-[70%] h-[70%] border-1 border-green-400 bg-green-400 rounded-full flex items-end justify-center'>
                  <div className='w-[33%] h-[34rem] rounded-[50%] overview-radial-gradient'></div>
                </div>
              </div>
            </div>
            {props.casus === 'circulaire Windturbines' &&
            <>
            <div className='absolute top-10  h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute top-20 left-44 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute top-40 left-40 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute top-44 left-72 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute top-32 right-48 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute top-64 right-32 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-28 left-1/2 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-38 left-[55%] h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-52 left-[45%] h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-44 left-36 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-32 right-44 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-44 right-48 h-3 w-3 rounded-full bg-white'></div>
            <div className='absolute bottom-44 right-48 h-3 w-3 rounded-full bg-red-600'></div>
            </>
            }

            {/* 
            <div id='allEnd' className='absolute top-20 left-50 h-[1rem] w-[1rem] bg-black'></div>
            <div id='nationalEnd' className='absolute top-24 right-40 h-[1rem] w-[1rem] bg-black'></div>
            <div id='provEnd' className='absolute top-60 right-32 h-[1rem] w-[1rem] bg-black'></div>
            <div id='gemEnd' className='absolute bottom-20 right-40 h-[1rem] w-[1rem] bg-black'></div>*/}
          </div>
          {/* 
          <Xarrow start ={allRef} startAnchor='right' end='allEnd' endAnchor='top' strokeWidth={2} showHead = {false} path='smooth' gridBreak='90%' lineColor='#25C38B' />
          <Xarrow start ={natRef} startAnchor='left' end='nationalEnd' endAnchor='top' strokeWidth={2} showHead = {false} path='smooth' lineColor='#25C38B' />
          <Xarrow start ={provRef} startAnchor='left' end='provEnd' endAnchor='top' strokeWidth={2} showHead = {false} path='smooth' lineColor='#25C38B' />
          <Xarrow start ={gemRef} startAnchor='left' end='gemEnd' endAnchor='top' strokeWidth={2} showHead = {false} path='smooth' lineColor='#25C38B' />*/}

          {/* RIGHT HAND SIDE */}
          <div className='grid col-span-1 items-start justify-center h-full w-80 mt-10'>
            {/* National */}
            {natLaws && (
              <div className='pb-3'>
                <div ref={natRef} className='w-80 h-10 bg-green-800 text-white rounded-full flex items-center justify-left'>
                  <div className='flex items-center justify-center w-full h-full -ml-10'>
                    <h4 className='mobile sm:desktop'>National</h4>
                  </div>
                  <div className='h-10 w-10 border-l border-t border-b border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Nat</h5>
                  </div>
                </div>
                <div className='pl-4 pt-3'>
                  {natLaws.map((law) => (
                    <Link key={law.titel} href={`/measures/${law.slug.current}`}>
                      <div className='flex items-center justify-start max-w-80'>
                        <span className='pr-2 inline-block'>
                          {' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='#028352'
                            className='w-4  h-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                            />
                          </svg>
                        </span>
                        <h5 className='py-1 inline-block mobile sm:desktop hover:underline'>
                          {law.titel}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Provinciaal */}
            {provLaws && (
              <div className='pb-3'>
                <div ref={provRef} className='w-80 h-10 rounded-full text-white bg-green-500 flex items-center justify-left'>
                  <div className='flex items-center justify-center w-full h-full -ml-10'>
                    <h4 className='mobile sm:desktop'>Provinciaal</h4>
                  </div>
                  <div className='h-10 w-10 border-l border-t border-b border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Pr</h5>
                  </div>
                </div>
                <div className='pl-4 pt-3'>
                  {provLaws.map((law) => (
                    <Link key={law.titel} href={`/measures/${law.slug.current}`}>
                      <div className='flex items-center justify-start max-w-80'>
                        <span className='pr-2 inline-block'>
                          {' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='#028352'
                            className='w-4  h-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                            />
                          </svg>
                        </span>
                        <h5 className='py-1 inline-block mobile sm:desktop hover:underline'>
                          {law.titel}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Gemeentelijk */}
            {gemLaws && (
              <div>
                <div ref={gemRef} className='w-80 h-10 rounded-full bg-green-400 text-white flex items-center justify-right'>

                  <div className='flex items-center justify-center w-full h-full -ml-10'>
                    <h4 className='mobile sm:desktop'>Gemeentelijk</h4>
                  </div>
                  <div className='h-10 w-10 border-l border-t border-b border-white rounded-full flex items-center justify-center'>
                    <h5 className='mobile sm:desktop'>Gem</h5>
                  </div>
                </div>
                <div className='pl-4 pt-3'>
                  {gemLaws.map((law) => (
                    <Link key={law.titel} href={`/measures/${law.slug.current}`}>
                      <div key={law.titel} className='flex items-center justify-start max-w-80'>
                        <span className='pr-2 inline-block'>
                          {' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='#028352'
                            className='w-4  h-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                            />
                          </svg>
                        </span>
                        <h5 className='py-1 inline-block mobile sm:desktop hover:underline'>
                          {law.titel}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* TEXT COMPONENT */} {/* NEED TO CHECK FINAL CONTENT */}
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className=' p-lg text-black-white-800 pb-6'>{props.p1}</p>
          {props.p2 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p2}</p>}
          {props.p3 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p3}</p>}
          {props.p4 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p4}</p>}
        </div>
      </div>
    </>
  );
}
