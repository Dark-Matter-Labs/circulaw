import LinkIcon from '../../components/link-icon';
import Image from 'next/image';
import newTab from '../../public/icons/link-icon-bd-dark.svg';

export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <a
        className='text-green-500 link-base sm:link-lg inline'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <LinkIcon />
      </a>
    </>
  ) : (
    <a className='text-green-500 link-base sm:link-lg' href={value.href}>
      {children}
    </a>
  );

export const linkBGDarkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      <a
        className='text-green-300 link-base sm:link-lg inline'
        href={value.href}
        target='_blank'
        rel='noreferrer'
      >
        <span>{children}</span>
        <span className='pl-0.5 inline-block h-6 w-6 -mb-1 relative'>
          <Image className='' alt='new tab' src={newTab} width={30} height={10} />
        </span>
      </a>
    </>
  ) : (
    <a className='text-green-300 link-base sm:link-lg' href={value.href}>
      {children}
    </a>
  );
