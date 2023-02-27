import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BetaBanner({ type }) {
  const router = useRouter();
  if (type === 'home') {
    return (
      <div className='flex grid-cols-1 lg:grid-cols-3 justify-between global-margin'>
        <div className='min-w-[10%]'></div>
        <div className='bg-black-white-300 border border-black-white-600 rounded-b-[20px] md:max-w-sm 2xl:max-w-sm mx-5 w-full'>
          <div className='global-margin py-2 text-center'>
            <div className='flex justify-between flex-wrap'>
              <div className='w-0 flex-1'>
                <div className=' text-black-white-800 truncate'>
                  <div className='md:hidden'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                    <span className='link-base text-green-500'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                  <div className='hidden md:inline'>
                    <h5 className='inline bold'>Beta</h5>{' '}
                    <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                    <span className='link-base text-green-500'>
                      <Link href='/beta'>Lees meer -&gt;</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* can put this into component */}
        <div className='text-black-white-200 flex justify-center items-center min-w-[10%] pt-2 pr-4'>
          <span
            className={`hover:underline ${router.pathname === '/en' ? 'enLink' : 'enLinkSelected'}`}
          >
            <Link href='/'>NL</Link>
          </span>
          <span className='px-1 enLink'>|</span>
          <span
            className={`hover:underline ${router.pathname === '/en' ? 'enLinkSelected' : 'enLink'}`}
          >
            <Link href='/en'>EN</Link>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-green-400 rounded-b-[20px] max-w-lg 2xl:max-w-sm mx-auto'>
        <div className='global-margin py-2 text-center'>
          <div className='flex justify-between flex-wrap'>
            <div className='w-0 flex-1'>
              <div className='ml-3 text-black-white-200 truncate'>
                <div className='md:hidden'>
                  <h5 className='inline bold'>Beta</h5>{' '}
                  <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                  <span className='link-base text-green-600'>
                    <Link href='/beta'>Lees meer -&gt;</Link>
                  </span>
                </div>
                <div className='hidden md:inline'>
                  <h5 className='inline bold'>Beta</h5>{' '}
                  <h5 className='inline mobile sm:desktop'>versie van CircuLaw - </h5>
                  <span className='link-base text-green-600'>
                    <Link href='/beta'>Lees meer -&gt;</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
