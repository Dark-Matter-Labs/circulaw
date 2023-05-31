import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function NewThemaSuggestion() {
  return (
    <>
      <div className='md:hidden h-40 cl-gradient-400 shadow rounded-cl w-full'>
        <Link href='/contact'>
          <div className='flex h-full w-full items-center justify-start'>
            <div className='text-black-white-100 pl-6 sm:pl-8'>
              <h3 className='mobile sm:desktop'>Mis je instrumenten? Praktijkvoorbeelden?</h3>
              <h3 className='mobile sm:desktop'>
                Deel je kennis!{' '}
                <span>
                  <ArrowRightIcon className='inline h-4 w-4' aria-hidden='true' />
                </span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
