import LinkIcon from '../../components/link-icon';
import Link from 'next/link';

export const linkComponentGreenBox = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='link-base sm:link-lg inline link-interaction-light-green-bg'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </Link>
    </>
  ) : (
    <a className='link-base sm:link-lg link-interaction-light-green-bg' href={value.href}>
      {children}
    </a>
  );

export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='text-green-500 link-base sm:link-lg inline link-interaction'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </Link>
    </>
  ) : (
    <Link className='text-green-500 link-base sm:link-lg link-interaction' href={value.href}>
      {children}
    </Link>
  );

export const linkBGDarkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='link-base sm:link-lg inline link-interaction-dark-bg'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </Link>
    </>
  ) : (
    <Link className='link-base sm:link-lg link-interaction-dark-bg' href={value.href}>
      {children}
    </Link>
  );
