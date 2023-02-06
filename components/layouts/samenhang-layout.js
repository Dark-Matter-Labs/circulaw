import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

import MeasureLinks from '../measure-links-dropdown';

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
        <div className='flex justify-between items-center pb-8'>
          <div className='breadcrumb uppercase'>
            <Link className='underline' href='/'>
              Home &nbsp;
            </Link>
            <ArrowRightIcon className='inline-block h-4 w-4' aria-hidden='true' />{' '}
            <Link href={`/${props.casus.toLowerCase().replace(/ /g, '-')}`}>
              <span className='underline inline-block uppercase'>{props.casus}</span>
            </Link>
          </div>
          <div className='hidden sm:block float-right'>
            <MeasureLinks type={props.casus} page='samenhang' />
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
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 justify-items-end'>
          <div className='col-span-2'>
            <p className=' p-lg text-black-white-800 pb-6'>{props.p1}</p>
          </div>
          <div className=''>
            <h3 className='mobile text-black mx-20 mb-4'>Legenda</h3>
            <div className='h-10 rounded-full text-white bg-green-800 flex items-center justify-left mb-2'>
              <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                <h5 className='mobile sm:desktop'>Nat</h5>
              </div>
              <div className='flex items-center justify-center w-full h-full -ml-10'>
                <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                <h4 className='mobile sm:desktop'>Nationaal</h4>
              </div>
            </div>

            <div className='h-10 rounded-full text-white bg-green-500 flex items-center justify-left mb-2'>
              <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                <h5 className='mobile sm:desktop'>Pr</h5>
              </div>
              <div className='flex items-center justify-center w-full h-full -ml-10'>
                <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                <h4 className='mobile sm:desktop'>Provinciaal</h4>
              </div>
            </div>

            <div className='h-10 rounded-full text-white bg-green-400 flex items-center justify-left'>
              <div className='h-10 w-10 border border-white rounded-full flex items-center justify-center'>
                <h5 className='mobile sm:desktop'>Gem</h5>
              </div>
              <div className='flex items-center justify-center w-full h-full -ml-10'>
                <ArrowRightIcon className='inline-block h-4 w-4 mr-2' aria-hidden='true' />
                <h4 className='mobile sm:desktop'>Gemeente</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
