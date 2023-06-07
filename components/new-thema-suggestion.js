import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function NewThemaSuggestion() {
  return (
    <>
      <div className='md:hidden h-40 cl-gradient-400 shadow rounded-cl w-full'>
        <Link href='/contact'>
          <div className='flex h-full w-full items-center justify-between'>
            <div className='text-black h-auto flex flex-col justify-between items-start p-4'>
              <h3 className='mobile sm:desktop pb-2'>Nieuw thema</h3>
              <p className='mobile'>
                Stap voor stap werkt CircuLaw de instrumenten uit voor nieuwe thema&apos;s.
              </p>
              <span className='link-interaction link-base pt-4'>
                Houd me op de hoogte{' '}
                <ArrowRightIcon className='inline h-4 w-4' aria-hidden='true' />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
