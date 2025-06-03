import InlineExternalLink from '@/components/shared/inline-external-link';

export const linkComponentGreenBox = ({ children, value }) =>
  value.blank == true ? (
    <>
      {value?.href !== 'undefined' && (
        <InlineExternalLink href={value?.href} size='5'>
          {children}
        </InlineExternalLink>
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
        <InlineExternalLink href={value?.href} size='5'>
          {children}
        </InlineExternalLink>
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

export const linkComponentLg = ({ children, value }) =>
  value.blank == true ? (
    <>
      {value?.href !== 'undefined' && (
        <InlineExternalLink href={value?.href} size='8'>
          {children}
        </InlineExternalLink>
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
