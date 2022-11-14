import Link from 'next/link'
import Image from 'next/image'
import WindmillImage from '../public/Windmill_Measures_Web.png';
import WindmillImageMob from '../public/Windmill_Measures_Mob.png';

/* list of props
casus
title
img
imgMob
p1
p2
p3
*/

export default function WelkeLayout (props) {
    return (
     <>
     <div className='global-margin my-20 max-w-2xl'>
     <div className='breadcrumb text-greenLink pb-8'>
       <Link href='/'>
         <a>Home &gt; </a>
       </Link>
       <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
         <a className= 'inline-block lowercase first-letter:uppercase'>{props.casus} &gt; </a>
       </Link>
     </div>
     <h1 className='mobile sm:main text-green1 pb-2 max-w-3xl mx-auto'>
       {props.title}
     </h1>
   </div>
   <div className='hidden sm:block image-margin'>
     <Image src={props.img} layout='responsive' alt='Picture of the case' />
   </div>
   <div className='block sm:hidden'>
     <Image src={props.imgMob} layout='responsive' alt='Picture of the case' />
   </div>
   <div className='global-margin mb-20'>
     <div className='max-w-3xl mx-auto'>
       <p className='body-text-mobile sm:body-text text-black1 pb-6'>
        {props.p1}
       </p>
       {props.p2 !== '' &&
       <p className='body-text-mobile sm:body-text text-black1 pb-6'>
         {props.p2}
       </p>
       }
       {props.p3 !== '' &&
       <p className='body-text-mobile sm:body-text text-black1 pb-6'>
         {props.p3}
       </p>
       }
       {props.p4 !== '' &&
       <p className='body-text-mobile sm:body-text text-black1 pb-6'>
         {props.p4}
       </p>
       }
     </div>
   </div>
   </>
)
}