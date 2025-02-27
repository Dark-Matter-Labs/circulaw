import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconChevronRight } from '@tabler/icons-react';

export default function Breadcrumb({ pageType }) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  return (
    <ul className='p-2xs-semibold inline-flex h-min flex-row items-center justify-center rounded-clSm bg-green-100 py-1.5 pl-2 pr-3 align-middle text-green-500 group-hover:text-green-400 group-focus:text-green-300 group-focus:ring-2 group-focus:ring-white group-active:text-cl-black'>
      {pageType !== 'instrument' && (
        <li>
          <Link
            className='flex flex-row items-center hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
            href='/'
          >
            {' '}
            Home <IconChevronRight className='ml-2 size-3' />
          </Link>
        </li>
      )}
      {pathNames.length > 0 && (
        <>
          {pathNames.map((pathName, id) => (
            <>
              {pathNames.length > 1 && pathName !== pathNames.slice(-1)[0] ? (
                <li key={id}>
                  <Link
                    className='ml-2 flex flex-row items-center capitalize hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
                    href='/bouw'
                  >
                    {pathName}

                    <IconChevronRight className='ml-2 size-3' />
                  </Link>
                </li>
              ) : (
                <li key={id} className='ml-2 flex flex-row items-center capitalize text-cl-black'>
                  {pathName}
                </li>
              )}
            </>
          ))}
        </>
      )}
    </ul>
  );
}
