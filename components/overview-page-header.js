import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';
import InstrumentLinksDropdown from '../components/instrument/instrument-links-dropdown';
import { useRouter } from 'next/router';

export default function OverviewPageHeader({ props, page }) {
  const router = useRouter()
  return (
    <>
      <div className={`${router.pathname.includes('categorie') ? 'mt-[50px]' : 'mt-3'} global-margin flex flex-col justify-between h-full`}>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4'>
          <div className='breadcrumb uppercase'>
            <Link href='/' className='underline link-interaction-dark-bg'>
              Home &nbsp;
            <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />{' '}
            </Link>
            <Link href={`/${props.thema.toLowerCase().replace(/ /g, '-')}`}>
              <span className='underline inline-block uppercase link-interaction-dark-bg'>
                {props.thema.replace('-', ' ')}
              </span>
            </Link>
          </div>
          <div className='block sm:float-right py-3 sm:py-0'>
            <div className='p-base text-white pb-2 hidden sm:block'>Bekijk de instrumenten:</div>
            <InstrumentLinksDropdown type={props.thema} page={page} />
          </div>
        </div>
        <div className='items-center grid grid-cols-10'>
          <div className={`${router.pathname.includes('categorie') ? 'pb-[4.5rem]' : 'pb-6'} col-span-9`}>
            <h1 className='p-3xl-semibold sm:p-7xl-bold text-white max-w-3xl pb-1'>{props.title}</h1>
            {props.introPara && 
            <div className='hidden sm:block max-w-3xl pt-2'>
              <p className='p-lg text-white'>
                {props.introPara}
              </p>
           </div>}
          </div>
        </div>
      </div>
    </>
  );
}
