import Image from 'next/image';
import Link from 'next/link';

import MeasureLinks from '../measure-links-dropdown';
import { ArrowRightIcon } from '@heroicons/react/outline';

/* list of props
casus
title
img
imgMob
p1
p2
p3
*/

export default function SamenhangLayout(props) {
  return (
    <>
      <div className='global-margin mt-8'>
        <div className='breadcrumb uppercase pb-8'>
          <Link className='underline' href='/'>Home &nbsp;</Link>
          <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />{' '}
          <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
            <span className='underline inline-block uppercase'>
              {props.casus}
            </span>
          </Link>
        </div>
        <h1 className='mobile sm:desktop text-green-600 pb-2 max-w-3xl mx-auto'>{props.title}</h1>
        <div className='hidden sm:block float-right'>
          <MeasureLinks type={props.casus} page='samenhang' />
        </div>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={props.img} alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={props.imgMob} alt='Picture of the case' />
      </div>
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className=' p-lg text-black-white-800 pb-6'>{props.p1}</p>
          {props.p2 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p2}</p>}
          {props.p3 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p3}</p>}
        </div>
      </div>
    </>
  );
}
