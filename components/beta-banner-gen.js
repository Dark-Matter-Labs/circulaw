import Link from 'next/link';

export default function BetaBanner() {
  return (
    <div className='bg-green-400 rounded-b-[20px] max-w-lg 2xl:max-w-sm mx-auto'>
      <div className='global-margin py-2 text-center'>
        <div className='flex justify-between flex-wrap'>
          <div className='w-0 flex-1'>
            <p className='ml-3 text-black-white-200 truncate'>
              <div className='md:hidden'>
                <h5 className='inline bold'>Beta</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                <span className=' link-lg text-green-600'>
                  <Link href='/beta'>Lees meer -&gt;</Link>
                </span>
              </div>
              <div className='hidden md:inline'>
                <h5 className='inline bold'>Beta</h5>{' '}
                <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                <span className=' link-lg text-green-600'>
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
