import Link from 'next/link';
import LangSwitch from './lang-switch';

export default function BetaBanner({ type }) {
  if (type === 'home') {
    return (
      <div
        className='flex grid-cols-1 lg:grid-cols-3 justify-between items-center global-margin'
        name='top'
      >
        <div className='hidden sm:block min-w-[10%]'></div>
        <div className='bg-black-white-300 border border-black-white-600 rounded-b-[20px] md:max-w-sm 2xl:max-w-sm sm:mx-5 w-full'>
          <div className=' py-2 text-center'>
            <div className='flex justify-between flex-wrap mx-2'>
              <div className='w-0 flex-1'>
                <div className=' text-black-white-800 truncate'>
                  <div className='md:hidden'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie - </h5>
                    <span className='link-base text-green-500 link-interaction'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                  <div className='hidden md:inline'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                    <span className='link-base text-green-500 link-interaction'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LangSwitch />
      </div>
    );
  } else {
    return (
      <div className='flex grid-cols-1 lg:grid-cols-3 justify-between items-center'>
        <div className='hidden sm:block min-w-[10%]'></div>
        <div className='bg-green-400 rounded-b-[20px] md:max-w-sm 2xl:max-w-sm sm:mx-5 w-full'>
          <div className='py-2 text-center'>
            <div className='flex justify-between flex-wrap mx-2'>
              <div className='w-0 flex-1'>
                <div className=' text-black-white-200 truncate'>
                  <div className='md:hidden'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie - </h5>
                    <span className='link-base text-green-600 link-interaction'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                  <div className='hidden md:inline'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                    <span className='link-base text-green-600 link-interaction'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LangSwitch />
      </div>
    );
  }
}
