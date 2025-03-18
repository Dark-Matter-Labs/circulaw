import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import AreaPlanningLayout from '@/components/layouts/area-planning';

export default function AreaPlanning({ params }) {
  if (params.productChain === 'bouw') {
    return (
      <>
        <div className='block h-[260px] w-full bg-green-500 sm:h-[300px]'>
          <div className='global-margin z-5 relative flex h-[260px] flex-col justify-between sm:h-[300px]'>
            <div className='pt-8'>
              <Link
                className='group inline-flex flex-row items-center justify-center rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-600'
                href='/'
              >
                <span className='p-2xs-bold align-middle group-hover:text-green-300 group-focus:text-green-200 group-focus:ring-2 group-focus:ring-white group-active:text-green-800'>
                  {' '}
                  Home <span className='ml-2'>{'>'}</span>
                </span>
              </Link>
            </div>
            <div className='max-w-5xl pb-8'>
              <div className=''>
                <h1 className='heading-3xl-semibold sm:heading-5xl-semibold inline-block text-gray-100'>
                  Stimuleer houtbouw in circulaire gebiedsontwikkeling
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='relative my-5 w-full items-center md:hidden'>
          <Image
            src='/area-planning-mob.png'
            alt='Visual waarin de fases van de gebiedsontwikkeling te zien zijn'
            width={900}
            height={900 * (380 / 1160)}
            sizes='
                              (max-width: 768px) 95vw,
                              (max-width: 1200px) 60vw,
                              40vw'
            className='w-full'
          />
        </div>
        <AreaPlanningLayout />
      </>
    );
  } else return notFound();
}
