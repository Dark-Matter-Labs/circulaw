import { ArrowRightIcon } from '@heroicons/react/outline';
import OverviewPageHeader from '../overview-page-header';

export default function SamenhangLayout({ ...props }) {
  console.log(props, 'samenhang layout')
  // title, icon, thema, transitionAgenda page 

  return (
    <>
      <div className='global-margin mt-8'>
        <OverviewPageHeader title={props.title} icon = {props.icon} thema = {props.thema} transitionAgenda='' props={props} page='samenhang' />


        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 sm:justify-items-end mb-10 sm:mb-0'>
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

            <div className='h-10 rounded-full text-white bg-[#6d9f6b] flex items-center justify-left'>
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
        <div className='sm:hidden'>
          <div className='pb-6'>
            <p className='p-base italic'>
              Bekijk deze afbeelding door in te zoomen of bekijk de site op een groter scherm
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
