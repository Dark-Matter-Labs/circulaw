import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='bg-black-white-300 border border-black-white-600 rounded-b-[20px] max-w-sm mx-auto'>
      <div className='global-margin py-2 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <p className='ml-3  text-black-white-800 truncate'>
              <div className='md:hidden'>
                <h5 className='inline mobile sm:desktop'>Beta</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                <span className=' link-lg text-green-500'>
                  <Link href='/beta'>Lees meer -&gt;</Link>
                </span>
              </div>
              <div className='hidden md:inline'>
                <h5 className='inline mobile sm:desktop'>Beta</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                <span className=' link-lg text-green-500'>
                  <Link href='/beta'>Lees meer -&gt;</Link>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
