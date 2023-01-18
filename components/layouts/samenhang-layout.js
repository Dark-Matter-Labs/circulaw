import Image from 'next/image';
import Link from 'next/link';

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
      <div className='global-margin mt-20'>
        <div className='breadcrumb text-greenLink pb-8'>
          <Link href='/'>Home &gt;</Link>
          <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
            <span className=' inline-block lowercase first-letter:uppercase'>
              {props.casus} &gt;{' '}
            </span>
          </Link>
        </div>
        <h1 className='mobile sm:main text-green-600 pb-2 max-w-3xl mx-auto'>{props.title}</h1>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={props.img} alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={props.imgMob} alt='Picture of the case' />
      </div>
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className='p-mobile-bg sm:p-desktop-bg text-black-white-800 pb-6'>{props.p1}</p>
          {props.p2 !== '' && (
            <p className='p-mobile-bg sm:p-desktop-bg text-black-white-800 pb-6'>{props.p2}</p>
          )}
          {props.p3 !== '' && (
            <p className='p-mobile-bg sm:p-desktop-bg text-black-white-800 pb-6'>{props.p3}</p>
          )}
        </div>
      </div>
    </>
  );
}
