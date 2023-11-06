import LinkIcon from '../../components/link-icon';
import Link from 'next/link';

export const linkComponentGreenBox = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='link-base sm:link-lg inline link-interaction'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='link-interaction'>{children}</span>
        <LinkIcon />
      </Link>
    </>
  ) : (
    <a className='link-base sm:link-lg link-interaction' href={value.href}>
      {children}
    </a>
  );

export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='text-green-500 sm:link-lg inline link-interaction'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='link-base link-interaction'>{children}
        <LinkIcon /></span>
      </Link>
    </>
  ) : (
    <Link className='text-green-500 sm:link-lg link-interaction' href={value.href}>
      <span className='link-interaction link-base'>{children}</span>
    </Link>
  );

export const linkBGDarkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <Link
        className='sm:link-lg inline '
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='link-interaction-dark-bg link-base'>{children}
        <LinkIcon />
        </span>
      </Link>
    </>
  ) : (
    <Link className='sm:link-lg' href={value.href}>
      <span className='link-base link-interaction-dark-bg'>{children}</span>
    </Link>
  );
