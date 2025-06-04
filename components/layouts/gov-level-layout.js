'use client';

import Xarrow, { useXarrow } from 'react-xarrows';

import Image from 'next/image';
import Link from 'next/link';

import OverviewPageHeader from '../theme-page/overview-page-header';

// TODO: refactor this to work on mobile and implement new design once it is ready
export default function GovLevelLayout({ ...props }) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;

  const lines = [
    {
      start: 'allId',
      startAnchor: 'right',
      end: 'allEnd',
      endAnchor: 'top',
      strokeWidth: 2,
      showHead: false,
      path: 'grid',
      gridBreak: '90%',
      lineColor: '#25C38B',
    },
    {
      start: 'natId',
      startAnchor: 'left',
      end: 'natEnd',
      endAnchor: 'top',
      strokeWidth: 2,
      showHead: false,
      path: 'grid',
      gridBreak: '90%',
      lineColor: '#25C38B',
    },
    {
      start: 'gemId',
      startAnchor: 'left',
      end: 'gemEnd',
      endAnchor: 'top',
      strokeWidth: 2,
      showHead: false,
      path: 'grid',
      gridBreak: '90%',
      lineColor: '#25C38B',
    },
  ];

  return (
    <div onLoad={useXarrow()}>
      <div className=''>
        <div className='h-[300px] bg-green-600 bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 sm:mx-0 sm:h-[360px]'>
          <OverviewPageHeader
            thema={props.thema}
            productChain={props.transitionAgenda}
            title={props.title}
            page='welke'
          />
        </div>
        {/* DYNAMIC IMAGE */}
        <div className='global-margin mb-20 mt-5 hidden sm:mt-20 sm:block'>
          <div className='flex grid-cols-3 items-start 2xl:justify-center'>
            {/* LEFT HAND SIDE */}
            <div className='col-span-1 mt-10 grid h-full w-80 items-start justify-center'>
              <div
                id='allId'
                className='justify-left flex h-10 w-80 items-center rounded-full border border-green-800 bg-gray-100 text-gray-800'
              >
                <div className='flex h-10 w-10 items-center justify-center rounded-full border-b border-r border-t border-green-800'>
                  <h5 className='p-2xs-semibold sm:p-xs-semibold'>A</h5>
                </div>
                <div className='-ml-10 flex h-full w-full items-center justify-center'>
                  <h4 className='p-base-semibold sm:headling-xl-semibold'>Alle overheidslagen</h4>
                </div>
              </div>
              <div className='pl-4 pt-3'>
                {allRegionLaws?.length != 0 &&
                  allRegionLaws?.map((law) => (
                    <Link
                      key={law.titel}
                      href={`/${law.transitionAgenda}/${law.thema}/instrumenten/${law.slug.current}`}
                      className='link-interaction inline-block'
                    >
                      <div className='flex max-w-80 items-start justify-start py-1'>
                        <span className='inline-block pr-2'>
                          {' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='#028352'
                            className='mt-1 h-4 w-4'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                            />
                          </svg>
                        </span>
                        <h5 className='p-2xs-semibold sm:p-xs-semibold inline-block hover:underline'>
                          {law.titel}
                        </h5>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* DIAGRAM */}
            <div
              onLoad={useXarrow()}
              className='relative mx-4 flex h-[34rem] min-h-[34rem] w-[34rem] min-w-[34rem] items-center justify-center'
            >
              <div className='border-1 flex h-full w-full items-end justify-center rounded-full border-green-800 bg-green-800'>
                <div className='border-1 flex h-5/6 w-5/6 items-end justify-center rounded-full border-green-500 bg-green-500'>
                  <div className='border-1 flex h-[70%] w-[70%] items-end justify-center rounded-full border-green-400 bg-green-400'>
                    <div className='overview-radial-gradient h-[34rem] w-[33%] rounded-[50%]'></div>
                  </div>
                </div>
              </div>

              {props.thema === 'windturbines' && (
                <>
                  {/* All regions = 5 */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* National = 1 */}
                  <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 3 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local = 3 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'matrasketen' && (
                <>
                  {/* All regions = 12 */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[42%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[40%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[70%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[28%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* National = 8 */}
                  <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[70%] right-[85%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[85%] right-[75%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[13%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[95%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[88%] right-[40%] h-3 w-3 rounded-full bg-gray-100'></div>
                  {/* Provincial = 0 */}

                  {/* Local = 3 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'houtbouw' && (
                <>
                  {/* All regions = 18 18 dec 2023 -> 24 */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[46%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[56%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[84%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[74%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[42%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[40%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[70%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[70%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>

                  <div className='absolute bottom-[60%] right-[54%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[44%] right-[54%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[56%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[55%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* National = 2 */}
                  <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 3 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local = 8  -- 11*/}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[20%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[34%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[66%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'voedselverspilling' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* National = 2 */}
                  <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 2 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[60%] right-[80%] h-3 w-3 rounded-full bg-gray-100'></div>
                  {/* Local = 8 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'infra' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[56%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* National = 2 */}
                  <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[70%] right-[85%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[80%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[85%] right-[75%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[13%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[95%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 2 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[60%] right-[80%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[35%] h-3 w-3 rounded-full bg-gray-100'></div>
                  {/* Local = 8 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'bedrijventerreinen' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 2 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local = 8 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'bedrijfskleding' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local = 8 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'consumententextiel' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial = 2 */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local = 8 */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[20%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[34%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'zonnepanelen' && (
                <>
                  {/* National */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[46%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[56%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[35%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[60%] right-[80%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}
              {props.thema === 'organische-reststromen' && (
                <>
                  {/* National */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[46%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[56%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[75%] right-[35%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[60%] right-[80%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[20%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[34%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {props.thema === 'biobased-isoleren' && (
                <>
                  {/* All regions =  */}
                  <div className='absolute bottom-[8%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Provincial */}
                  <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>

                  {/* Local */}
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}


              {props.thema === 'afvalpreventie' && (
                <>
                  <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[20%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[34%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
                  <div className='absolute bottom-[12%] right-[66%] h-3 w-3 rounded-full bg-gray-100'></div>
                </>
              )}

              {/* ALL Regions 
            <div className='absolute bottom-[8%]  right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[50%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[33%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div> 
            <div className='absolute bottom-[92%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[90%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[12%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[14%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[22%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[24%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[36%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[46%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[56%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[84%] right-[50%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[74%] right-[47%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[65%] right-[51%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[42%] right-[46%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[40%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[70%] right-[45%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[70%] right-[53%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[28%] right-[52%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[39%] right-[44%] h-3 w-3 rounded-full bg-gray-100'></div>*/}

              {/* NATIONAL             
            <div className='absolute bottom-[90%] right-[30%] h-3 w-3 rounded-full bg-gray-100' ></div>
            <div className='absolute bottom-[80%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[80%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[70%] right-[85%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[85%] right-[75%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[75%] right-[13%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[95%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[88%] right-[40%] h-3 w-3 rounded-full bg-gray-100'></div>*/}

              {/* Provincial 
            <div className='absolute bottom-[55%] right-[20%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[65%] right-[30%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[65%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[75%] right-[35%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[60%] right-[80%] h-3 w-3 rounded-full bg-gray-100'></div>*/}

              {/* Local 
            <div className='absolute bottom-[20%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[35%] right-[70%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[15%] right-[60%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[30%] right-[25%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[45%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[15%] right-[33%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[45%] right-[65%] h-3 w-3 rounded-full bg-gray-100'></div>
            <div className='absolute bottom-[30%] right-[38%] h-3 w-3 rounded-full bg-gray-100'></div>*/}

              {allRegionLaws && (
                <div>
                  <div id='allEnd' className='absolute bottom-[85%] right-[50%] h-3 w-3'></div>
                  {natLaws.length > 0 && (
                    <div id='natEnd' className='absolute right-40 top-24 h-3 w-3'></div>
                  )}
                  <div id='gemEnd' className='absolute bottom-[15%] right-[30%] h-3 w-3'></div>
                  {lines.map((line, i) => (
                    <Xarrow key={i} {...line} />
                  ))}
                </div>
              )}

              {provLaws?.length > 0 && (
                <div>
                  <div id='provEnd' className='absolute right-32 top-60 h-[1rem] w-[1rem]'></div>
                  <Xarrow
                    start='provStart'
                    startAnchor='left'
                    end='provEnd'
                    endAnchor='top'
                    strokeWidth={2}
                    showHead={false}
                    path='grid'
                    lineColor='#25C38B'
                  />
                </div>
              )}
            </div>

            {/* RIGHT HAND SIDE */}
            <div className='col-span-1 mt-10 grid h-full w-80 items-start justify-center'>
              {/* National */}
              {natLaws?.length != 0 && (
                <div className='pb-3'>
                  <div
                    id='natId'
                    className='justify-left flex h-10 w-80 items-center rounded-full bg-green-800 text-white'
                  >
                    <div className='-ml-10 flex h-full w-full items-center justify-center'>
                      <h4 className='p-base-semibold sm:headling-xl-semibold'>Nationaal</h4>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full border-b border-l border-t border-white'>
                      <h5 className='p-2xs-semibold sm:p-xs-semibold'>Nat</h5>
                    </div>
                  </div>

                  <div className='pl-4 pt-3'>
                    {natLaws?.map((law) => (
                      <Link
                        key={law.titel}
                        href={`/${law.transitionAgenda}/${law.thema}/instrumenten/${law.slug.current}`}
                        className='link-interaction'
                      >
                        <div className='flex max-w-80 items-start justify-start py-1'>
                          <span className='inline-block pr-2'>
                            {' '}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={2}
                              stroke='#028352'
                              className='mt-1 h-4 w-4'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                              />
                            </svg>
                          </span>
                          <h5 className='p-2xs-semibold sm:p-xs-semibold inline-block hover:underline'>
                            {law.titel}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Provinciaal */}
              {provLaws?.length != 0 && (
                <div className='pb-3'>
                  <div
                    id='provStart'
                    className='justify-left flex h-10 w-80 items-center rounded-full bg-green-500 text-white'
                  >
                    <div className='-ml-10 flex h-full w-full items-center justify-center'>
                      <h4 className='p-base-semibold sm:headling-xl-semibold'>Provinciaal</h4>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full border-b border-l border-t border-white'>
                      <h5 className='p-2xs-semibold sm:p-xs-semibold'>Pr</h5>
                    </div>
                  </div>
                  <div className='pl-4 pt-3'>
                    {provLaws?.map((law) => (
                      <Link
                        key={law.titel}
                        href={`/${law.transitionAgenda}/${law.thema}/instrumenten/${law.slug.current}`}
                        className='link-interaction'
                      >
                        <div className='flex max-w-80 items-start justify-start py-1'>
                          <span className='inline-block pr-2'>
                            {' '}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={2}
                              stroke='#028352'
                              className='mt-1 h-4 w-4'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                              />
                            </svg>
                          </span>
                          <h5 className='p-2xs-semibold sm:p-xs-semibold inline-block hover:underline'>
                            {law.titel}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {/* Gemeentelijk */}
              {gemLaws?.length != 0 && (
                <div>
                  <div
                    id='gemId'
                    className='justify-right flex h-10 w-80 items-center rounded-full bg-green-400 text-white'
                  >
                    <div className='-ml-10 flex h-full w-full items-center justify-center'>
                      <h4 className='p-base-semibold sm:headling-xl-semibold'>Gemeentelijk</h4>
                    </div>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full border-b border-l border-t border-white'>
                      <h5 className='p-2xs-semibold sm:p-xs-semibold'>Gem</h5>
                    </div>
                  </div>
                  <div className='pl-4 pt-3'>
                    {gemLaws?.map((law) => (
                      <Link
                        key={law.titel}
                        href={`/${law.transitionAgenda}/${law.thema}/instrumenten/${law.slug.current}`}
                        className='link-interaction'
                      >
                        <div
                          key={law.titel}
                          className='flex max-w-80 items-start justify-start py-1'
                        >
                          <span className='inline-block pr-2'>
                            {' '}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={2}
                              stroke='#028352'
                              className='mt-1 h-4 w-4'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                              />
                            </svg>
                          </span>
                          <h5 className='p-2xs-semibold sm:p-xs-semibold inline-block hover:underline'>
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
      </div>

      {/* TEXT COMPONENT */}
      <div className='global-margin mb-20 mt-4'>
        <div className='mx-auto max-w-3xl'>
          <p className='p-base pb-6 text-gray-800'>{props.p1}</p>
          {props.p2 !== '' && <p className='p-base pb-6 text-gray-800'>{props.p2}</p>}
          {props.p3 !== '' && <p className='p-base pb-6 text-gray-800'>{props.p3}</p>}
          {props.p4 !== '' && <p className='p-base pb-6 text-gray-800'>{props.p4}</p>}
        </div>
        <div className='sm:hidden'>
          <div className='pb-6'>
            <p className='p-base italic'>
              Bekijk deze afbeelding door in te zoomen of bekijk de site op een groter scherm
            </p>
          </div>
          <Image src={props.imageMob} alt='image of bevoegdheden' />
        </div>
      </div>
    </div>
  );
}
