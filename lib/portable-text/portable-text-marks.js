import LinkIcon from '../../components/link-icon';

export const linkComponentGreenBox = ({ children, value }) => 
  value.blank == true ? (
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
  ) : (
    <a className='link-base link-interaction' href={value?.href}>
      {children}
    </a>
  );

export const internalLink = ({ children, value }) => {
  // update this with structure change to dynamically build the url using `/${value.transitionAgenda}/${value.thema}/${value.slug.current}`
  const href = `/measures/${value.slug.current}`;
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
  ) : (
    <>
      {value?.href !== 'undefined' && (
        <a className='text-green-500  link-interaction' href={value?.href}>
          <span className='link-interaction link-base'>{children}</span>
        </a>
      )}
    </>
  );

export const linkBGDarkComponent = ({ children, value }) => 
  value.blank == true ? (
    <>
      <a className=' inline ' href={value.href} target='_blank' rel='noreferrer'>
        <span className='link-interaction-dark-bg link-base'>
          {children}
          <LinkIcon />
        </span>
      </a>
    </>
  ) : (
    <a className='s' href={value?.href}>
      <span className='link-base link-interaction-dark-bg'>{children}</span>
    </a>
  );
