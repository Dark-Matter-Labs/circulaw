import Link from 'next/link';
import Image from 'next/image';

import MeasureLinks from '../measure-links-dropdown';
import MatrassenIcon from '../../public/icons/matressIcon.svg';


/* list of props
casus
title
img
imgMob
p1
p2
p3
*/

export default function WelkeLayout(props) {
  return (
    <>
      <div className='global-margin mt-10 mb-20 max-w-2xl'>
        <div className='flex justify-between items-center  pb-8'>
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
       
       
        <div className=' items-center justify-start grid grid-cols-10'>
        <div className='col-span-1 flex h-full items-start pt-2'>
          <Image src={MatrassenIcon} alt='Matress case icon'/>
        </div>
        <div className='col-span-9'>
        <h1 className='mobile sm:desktop text-black pb-2 max-w-3xl pl-6'>{props.title}</h1>
        </div>
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
          {props.p4 !== '' && <p className=' p-lg text-black-white-800 pb-6'>{props.p4}</p>}
        </div>
      </div>
    </>
  );
}
