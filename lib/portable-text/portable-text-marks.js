import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';


export const linkComponentGreenBox = ({ children, value }) =>
  value.blank == true ? (
    <>
      {value?.href !== 'undefined' && (
          <Link
          className='link-interaction inline text-green-500'
          href={value?.href}
          target='_blank'
          rel='noreferrer'
        >
          <span className='link-base link-interaction flex items-center'>
            <span className='flex items-center'>
              {children}
            </span>
            <span className='inline-block ml-1'>
              <IconExternalLink className='size-5' />
            </span>
          </span>
        </Link>
      )}
    </>
  ) : (
    <a className='link-base link-interaction' href={value?.href}>
      {children}
    </a>
  );

export const internalLink = ({ children, value }) => {
  const href = `/${value?.transitionAgenda}/${value?.thema}/instrumenten/${value?.slug?.current}`;
  return (
    <a href={href} className='link-base link-interaction text-green-500'>
      {children}
    </a>
  );
};

export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      {value?.href !== 'undefined' && (
      <Link
      className='link-interaction inline text-green-500'
      href={value?.href}
      target='_blank'
      rel='noreferrer'
    >
      <span className='link-base link-interaction flex items-center'>
        <span className='flex items-center'>
          {children}
        </span>
        <span className='inline-block ml-1'>
          <IconExternalLink className='size-5' />
        </span>
      </span>
    </Link>
      )}
    </>
  ) : (
    <>
      {value?.href !== 'undefined' && (
        <a className='link-interaction text-green-500' href={value?.href}>
          <span className='link-interaction link-base'>{children}</span>
        </a>
      )}
    </>
  );


export const bold = ({ children }) => <span className='font-semibold'>{children}</span>;

export const italic = ({ children }) => <span className='italic'>{children}</span>;
