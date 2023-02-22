import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/outline';
import MeasureLinks from './measure-links-dropdown';

export default function OverviewPageHeader({ props, page }) {
  return (
    <>
      <div>
        <div className='flex justify-between items-center pb-8'>
          <div className='breadcrumb uppercase'>
            <Link className='underline' href='/'>
              Home &nbsp;
            </Link>
            <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />{' '}
            <Link href={`/${props.thema.toLowerCase().replace(/ /g, '-')}`}>
              <span className='underline inline-block uppercase'>
                {props.thema.replace('-', ' ')}
              </span>
            </Link>
          </div>
          <div className='hidden sm:block float-right'>
            <MeasureLinks type={props.thema} page={page} />
          </div>
        </div>
        <div className='items-center justify-start grid grid-cols-10'>
          <div className='col-span-1 flex h-full w-full items-start pt-2'>
            <Image src={props.icon} alt='Thema icon' width={107} height={107} />
          </div>
          <div className='col-span-9'>
            <h1 className='mobile sm:desktop text-black py-1 max-w-3xl pl-6'>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
