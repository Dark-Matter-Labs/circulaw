'use client';
import Link from 'next/link';
import OverviewPageHeader from '../theme-page/overview-page-header';
import { IconArrowRight } from '@tabler/icons-react';

export default function GovLevelLayout({ ...props }) {
  const allRegionLaws = props.allRegionLaws;
  const provLaws = props.provLaws;
  const gemLaws = props.gemLaws;
  const natLaws = props.natLaws;

  return (
    <div className=''>
      <div className='h-[300px] sm:h-[360px] bg-gradient-to-t from-[#042D36]/20 to-[#22532200]/20 bg-green-600  sm:mx-0'>
        <OverviewPageHeader
          thema={props.thema}
          productChain={props.transitionAgenda}
          title={props.title}
          page='welke'
        />
      </div>

      <div className='global-margin flex flex-col'>
        <div className='my-16'>NAV / TOP SECTION</div>
        <div className='flex my-16'>
          <div className='flex-col items-center hidden sm:flex'>
            <div className='[writing-mode:vertical-rl] rotate-180 mb-6 heading-3xl-semibold text-green-500'>
              Instrumentn
            </div>
            <div className='bg-green-300 rounded-full h-full w-2' />
          </div>
          <div className='min-h-96 flex flex-col sm:flex-row gap-x-10 w-full ml-0 sm:ml-16'>
            <div className='sm:basis-1/2'>
              {allRegionLaws.length > 0 && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Alle overheidslagen {allRegionLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4 sm:mb-0'>
                    {allRegionLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className=''
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className='sm:basis-1/2 flex flex-col'>
              {natLaws.length > 0 && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Nationaal {natLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4'>
                    {natLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className=''
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {provLaws.length > 0 && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Provinciaal {provLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800 mb-4'>
                    {provLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className=''
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
              {gemLaws.length > 0 && (
                <>
                  <h2 className='heading-2xl-semibold text-green-500 mb-4'>
                    Gemeentelijk {gemLaws.length}
                  </h2>
                  <ul className='p-base underline text-green-800'>
                    {gemLaws.map((instrument, id) => (
                      <Link
                        key={id}
                        href={`/${instrument.transitionAgenda}/${instrument.thema}/instrumenten/${instrument.slug.current}`}
                        className=''
                      >
                        <li className='mb-2 flex flex-row items-start'>
                          <div>
                            <IconArrowRight className='text-inherit size-6 mt-0.5' />
                          </div>
                          <span className='ml-1'>{instrument.titel}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
