import LinkIcon from '../../components/link-icon';

export const linkComponentGreenBox = ({ children, value }) => (
  <>
    {value?.href !== 'undefined' && (
      <a
        className='link-base inline link-interaction'
        href={value?.href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='link-interaction'>{children}</span>
        <LinkIcon />
      </a>
    )}
  </>
);

export const internalLink = ({ children, value }) => {
  // update this with structure change to dynamically build the url using `/${value.transitionAgenda}/${value.thema}/${value.slug.current}`
  const href = `/measure/${value.slug.current}`;
  return (
    <a href={href} className='link-base link-interaction text-green-500'>
      {children}
    </a>
  );
};

export const linkComponent = ({ children, value }) => (
  <>
    {value?.href !== 'undefined' && (
      <a
        className='text-green-500 inline link-interaction'
        href={value?.href}
        target='_blank'
        rel='noreferrer'
      >
        <span className='link-base link-interaction'>
          {children}
          <LinkIcon />
        </span>
      </a>
    )}
  </>
);

export const linkBGDarkComponent = ({ children, value }) => (
  <>
    <a className=' inline ' href={value.href} target='_blank' rel='noreferrer'>
      <span className='link-interaction-dark-bg link-base'>
        {children}
        <LinkIcon />
      </span>
    </a>
  </>
);
