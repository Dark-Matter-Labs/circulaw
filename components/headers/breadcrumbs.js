import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Breadcrumb({ pageType }) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path && path !== 'over');
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (pageType === 'instrument' || isMobile) {
    return (
      <button
        type='button'
        onClick={() => router.back()}
        className='p-2xs-semibold inline-flex h-min flex-row items-center justify-center rounded-full bg-green-100 px-3 py-1.5 align-middle text-green-500 hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
      >
        <IconChevronLeft className='mr-1 size-4' />
        Terug
      </button>
    );
  } else {
    return (
      <ul
        className={`${pageType === 'noHeader' ? 'rounded-full border border-green-500' : 'bg-green-100'} p-2xs-semibold hidden h-min flex-row items-center justify-center rounded-full px-3 py-1.5 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-300 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black sm:inline-flex`}
      >
        {pageType !== 'instrument' && (
          <li key='home'>
            <Link
              className='flex flex-row items-center hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
              href='/'
            >
              {' '}
              Home <IconChevronRight className='ml-2 size-3' />
            </Link>
          </li>
        )}
        {pathNames.length > 0 &&
          pathNames.map((pathName, id) =>
            pathNames.length > 1 && pathName !== pathNames.slice(-1)[0] ? (
              <li key={id}>
                <Link
                  className='ml-2 flex flex-row items-center capitalize hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                  href={id === 0 ? `/${pathName}` : `/${pathNames[0]}/${pathNames[1]}`}
                >
                  {pathName}
                  <IconChevronRight className='ml-2 size-3' />
                </Link>
              </li>
            ) : (
              <li
                key={pathName}
                className='ml-2 flex max-w-[20ch] flex-row items-center overflow-hidden whitespace-nowrap capitalize text-cl-black'
              >
                <span className='truncate'>{pathName}</span> {/* For Mobile: Single Line Clamp */}
              </li>
            ),
          )}
      </ul>
    );
  }
}
