'use client';
import InstrumentLinksDropdown from '@/components/theme-page/instrument-links-dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function OverviewPageHeader({ thema, productChain, title, page }) {
  console.log(thema)
  console.log(productChain)
  console.log(title)
  console.log(page)
  const pathname = usePathname();
  return (
    <>
      <div
        className={`${
          pathname.includes('categorie') ? 'mt-[50px]' : 'mt-3'
        } global-margin flex flex-col justify-between h-full`}
      >
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4'>
          <div className='p-2xs-bold text-green-600 bg-gray-100 pl-2 pr-3 py-1.5 rounded-clSm flex flex-row w-min'>
            <Link href='/' className=''>
              <span className='link-interaction'>
                Home<span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${productChain}`} className=''>
              <span className='link-interaction capitalize w-min whitespace-nowrap'>
                {productChain}
                <span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${productChain}/${thema}`}>
              <span className='capitalize link-interaction w-min whitespace-nowrap'>
                {thema?.replace('-', ' ')}{' '}
              </span>
            </Link>
          </div>
          <div className='block sm:float-right py-3 sm:py-0'>
            <div className='p-base text-white pb-2 hidden sm:block'>Bekijk de instrumenten:</div>
            <InstrumentLinksDropdown page={page} productChain={productChain} thema={thema} />
          </div>
        </div>
        <div className='items-center grid grid-cols-10'>
          <div
            className={`${pathname.includes('categorie') ? 'pb-[4.75rem]' : 'pb-10'} col-span-9`}
          >
            <h1 className='heading-2xl-semibold sm:heading-5xl-semibold text-white max-w-5xl pb-1'>
              {title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
