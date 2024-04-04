import InstrumentLinksDropdown from '@/components/instrument/instrument-links-dropdown';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function OverviewPageHeader({ props, page }) {
  const router = useRouter();
  return (
    <>
      <div
        className={`${
          router.pathname.includes('categorie') ? 'mt-[50px]' : 'mt-3'
        } global-margin flex flex-col justify-between h-full`}
      >
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4'>
          <div className='p-2xs-bold text-green-600 bg-white pl-2 pr-3 py-1.5 rounded-clSm flex flex-row w-min'>
            <Link href='/' className=''>
              <span className='link-interaction'>
                Home<span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${props.transitionAgenda}`} className=''>
              <span className='link-interaction capitalize w-min whitespace-nowrap'>
                {props.transitionAgenda}
                <span className='mx-2'>{'>'}</span>
              </span>
            </Link>
            <Link href={`/${props.transitionAgenda}/${props.thema}`}>
              <span className='capitalize link-interaction w-min whitespace-nowrap'>
                {props.thema.replace('-', ' ')}{' '}
              </span>
            </Link>
          </div>
          <div className='block sm:float-right py-3 sm:py-0'>
            <div className='p-base text-white pb-2 hidden sm:block'>Bekijk de instrumenten:</div>
            <InstrumentLinksDropdown page={page} props={props} />
          </div>
        </div>
        <div className='items-center grid grid-cols-10'>
          <div
            className={`${
              router.pathname.includes('categorie') ? 'pb-[4.75rem]' : 'pb-6'
            } col-span-9`}
          >
            <h1 className='p-3xl-semibold sm:p-7xl-bold text-white max-w-5xl pb-1'>
              {props.title}
            </h1>
            {props.introPara && (
              <div className='hidden sm:block max-w-3xl pt-2'>
                <p className='p-lg text-white'>{props.introPara}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
