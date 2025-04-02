import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function InlineLink({ isExternal, href, children }) {
  const lastWord = children.split(' ').pop();
  const leadingWords = children.split(' ').slice(0, -1).join(' ');
  return (
    <>
      &nbsp;
      <Link
        href={href}
        target={isExternal ? '_blank' : ''}
        className='inline font-semibold text-green-500 underline hover:text-green-400 focus:text-green-300 focus:ring-2 focus:ring-white active:text-cl-black'
      >
        {leadingWords}{' '}
        <span className='inline-flex items-center text-nowrap underline'>
          {lastWord}
          {isExternal === true && <IconExternalLink className='ml-1 text-inherit' />}
        </span>
      </Link>
      &nbsp;
    </>
  );
}
