import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='bg-black-white-300 border border-black-white-600 rounded-b-[20px] max-w-lg mx-auto'>
      <div className='global-margin py-4 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <p className='ml-3  text-black-white-800 truncate'>
              <span className='md:hidden'>
                <h6 className='xb mobile inline'>Beta</h6>{' '}
                <h6 className='mobile sm:desktop inline'>versie van CircuLaw - </h6>
                <span className='link-mobile sm:link-desktop text-green-500'>
                  <Link href='/alpha'>Lees meer -&gt;</Link>
                </span>
              </span>
              <span className='hidden md:inline'>
                <h6 className='xb inline'>Beta</h6>{' '}
                <h6 className='mobile sm:desktop inline'>versie van CircuLaw - </h6>
                <span className='link-mobile sm:link-desktop text-green-500'>
                  <Link href='/alpha'>Lees meer -&gt;</Link>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
