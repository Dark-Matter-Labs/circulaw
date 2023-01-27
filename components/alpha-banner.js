export default function AlphaBanner() {
  return (
    <div className='bg-black-white-300 border border-black-white-600 rounded-b-[20px] max-w-lg 2xl:max-w-sm mx-5 sm:mx-auto '>
      <div className='global-margin py-2 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <div className='ml-3 text-black-white-800 truncate'>
              <div className='md:hidden'>
              <a href='https://circulaw-alpha.vercel.app/'>
                <h5 className='inline mobile sm:desktop'>Bekijk de </h5>
                <h5 className='inline bold'>Alpha</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw</h5>
                <span className=' link-base text-green-500'>
                 -&gt;
                </span>
                </a>
              </div>
              <div className='hidden md:inline'>
              <a href='https://circulaw-alpha.vercel.app/'>
                <h5 className='inline mobile sm:desktop'>Bekijk de </h5>
                <h5 className='inline bold'>Alpha</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw</h5>
                <span className='link-base text-green-500'>
                 -&gt;
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
