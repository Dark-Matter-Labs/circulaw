'use client';
import InstrumentLinksDropdown from '@/components/theme-page/instrument-links-dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function OverviewPageHeader({ thema, productChain, title, page }) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`${
          pathname.includes('categorie') ? 'mt-[50px]' : 'mt-3'
        } global-margin flex h-full flex-col justify-between`}
      >
        <div className='flex flex-col pt-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='p-2xs-bold flex w-min flex-row rounded-clSm bg-gray-100 py-1.5 pl-2 pr-3 text-green-600'>
            <Link href='/' className=''>
              <span className='link-interaction'>
                Home<span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${productChain}`} className=''>
              <span className='link-interaction w-min whitespace-nowrap capitalize'>
                {productChain}
                <span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${productChain}/${thema}`}>
              <span className='link-interaction w-min whitespace-nowrap capitalize'>
                {thema?.replace('-', ' ')}{' '}
              </span>
            </Link>
          </div>
          <div className='block py-3 sm:float-right sm:py-0'>
            <div className='p-base hidden pb-2 text-white sm:block'>Bekijk de instrumenten:</div>
            <InstrumentLinksDropdown page={page} productChain={productChain} thema={thema} />
          </div>
        </div>
        <div className='grid grid-cols-10 items-center'>
          <div
            className={`${pathname.includes('categorie') ? 'pb-[4.75rem]' : 'pb-10'} col-span-9`}
          >
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold max-w-5xl pb-1 text-white'>
              {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
