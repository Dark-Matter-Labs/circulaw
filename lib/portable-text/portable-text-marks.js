import LinkIcon from '../../components/link-icon';

export const linkComponentGreenBox = ({ children, value }) =>
  value.blank == true ? (
    <>
      <a
        className='text-black link-base sm:link-lg inline link-interaction'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </a>
    </>
  ) : (
    <a className='text-green-500 link-base sm:link-lg link-interaction' href={value.href}>
      {children}
    </a>
  );

export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <a
        className='text-green-500 link-base sm:link-lg inline link-interaction'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </a>
    </>
  ) : (
    <a className='text-green-500 link-base sm:link-lg link-interaction' href={value.href}>
      {children}
    </a>
  );

export const linkBGDarkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <a
        className='text-green-300 link-base sm:link-lg inline link-interaction-dark-bg'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </a>
    </>
  ) : (
    <a className='text-green-300 link-base sm:link-lg link-interaction-dark-bg' href={value.href}>
      {children}
    </a>
  );
