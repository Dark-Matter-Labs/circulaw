import React from 'react';

import Link from 'next/link';

import { IconExternalLink } from '@tabler/icons-react';

export default function InlineExternalLink({ href, size, children }) {
  return (
    <Link className='text-green-500' href={href} target='_blank' rel='noreferrer'>
      <span className='link-interaction inline'>
        {' '}
        {children}
        <IconExternalLink className={`${size ? `size-${size}` : ''} ml-1 inline align-text-top`} />
      </span>{' '}
    </Link>
  );
}
