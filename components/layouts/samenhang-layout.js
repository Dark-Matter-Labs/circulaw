import OverviewPageHeader from '../overview-page-header';

export default function SamenhangLayout({ ...props }) {
  return (
    <>
      <div className='global-margin mt-8'>
        <OverviewPageHeader props={props} page='samenhang' />
        <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 sm:justify-items-end mb-10 sm:mb-0'>
          <div className='col-span-2'>
            <p className=' p-lg text-grey-800 pb-6'>{props.p1}</p>
          </div>
          
          
        </div>
        <div className='h-screen bg-red-100'>

          </div>
      </div>
    </>
  );
}
