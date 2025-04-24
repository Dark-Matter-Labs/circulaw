'use client';

import { Link as ScrollLink } from 'react-scroll';

import { useRouter } from 'next/navigation';

import { scrollToTop } from '@/utils/scroll-to-top';
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconFileDownload,
  IconPdf,
  IconThumbDown,
  IconThumbUp,
} from '@tabler/icons-react';

const varientStyles = {
  primaryLight:
    'bg-white text-green-500 border-2 border-white hover:border-green-200 group-hover:border-green-200 hover:bg-green-200 hover:text-green-500 group-hover:bg-green-200 group-hover:text-green-500 focus:bg-green-200 focus:outline-2 focus:outline-green-500 focus:text-green-500 focus:border-green-500 active:bg-green-300 active:text-green-500',
  primaryDark:
    'bg-green-500 text-white border-2 border-green-500 hover:border-green-200 group-hover:border-green-200 hover:bg-green-200 hover:text-green-500 group-hover:bg-green-200 group-hover:text-green-500 focus:bg-green-200 focus:outline-2 focus:outline-green-500 focus:text-green-500 focus:border-green-500 active:bg-green-300 active:text-green-500',
  secondaryLight:
    'bg-transparent text-white border-2 box-border border-white hover:border-green-200 group-hover:border-green-200 rounded-full hover:bg-green-200 hover:text-green-600 group-hover:bg-green-200 group-hover:text-green-600 focus:bg-green-200 focus:outline-2 focus:outline-green-500 focus:text-green-500 focus:border-green-500 active:bg-green-300 active:text-green-500',
  secondaryDark:
    'bg-transparent text-green-500 border-green-500 border-2 box-border hover:border-green-200 group-hover:border-green-200 rounded-full hover:bg-green-200 hover:text-green-600 group-hover:bg-green-200 group-hover:text-green-600 focus:bg-green-200 focus:outline-2 focus:outline-green-500 focus:text-green-500 focus:border-green-500 active:bg-green-300 active:text-green-500',
};

export default function NewButton({ variant, icon, href, newTab, scrollTo, children, ...props }) {
  const router = useRouter();

  const openNewTab = () => {
    window.open(href, '_blank', 'noreferrer');
  };

  const handleClick = (newTab) => {
    // return nothing if props.type exists.
    if (props.type) return scrollToTop();
    if (newTab === true) {
      openNewTab();
    } else {
      router.push(`${href}`);
    }
  };

  if (scrollTo) {
    return (
      <ScrollLink
        className={`button p-base-semibold inline-flex max-w-min cursor-pointer items-center justify-center text-nowrap rounded-full px-4 py-2 ${varientStyles[variant]}`}
        smooth={true}
        offset={-100}
        to={scrollTo}
      >
        {children}
        {icon === 'pdf' && <IconPdf className='ml-2 size-5' />}
        {icon === 'arrowRight' && <IconArrowRight className='ml-2 size-5' />}
        {icon === 'arrowDown' && <IconArrowDown className='ml-2 size-5' />}
        {icon === 'arrowUp' && <IconArrowUp className='ml-2 size-5' />}
        {icon === 'download' && <IconFileDownload className='ml-2 size-5' />}
      </ScrollLink>
    );
  } else if (props.onClick !== undefined) {
    return (
      <button
        className={`button p-base-semibold inline-flex max-w-min cursor-pointer items-center justify-center text-nowrap rounded-full px-4 py-2 ${varientStyles[variant]}`}
        {...props}
      >
        {icon === 'thumbDown' && <IconThumbDown className='mr-2 size-5' />}
        {icon === 'thumbUp' && <IconThumbUp className='mr-2 size-5' />}
        {icon === 'pdf' && <IconPdf className='ml-2 size-5' />}
        {icon === 'arrowRight' && <IconArrowRight className='ml-2 size-5' />}
        {icon === 'arrowDown' && <IconArrowDown className='ml-2 size-5' />}
        {icon === 'arrowUp' && <IconArrowUp className='ml-2 size-5' />}
        {icon === 'download' && <IconFileDownload className='ml-2 size-5' />}
        {children}
      </button>
    );
  } else {
    return (
      <button
        {...props}
        className={`button p-base-semibold inline-flex max-w-min cursor-pointer items-center justify-center text-nowrap rounded-full px-4 py-2 ${varientStyles[variant]}`}
        onClick={() => handleClick(newTab)}
      >
        {children}
        {icon === 'pdf' && <IconPdf className='ml-2 size-5' />}
        {icon === 'arrowRight' && <IconArrowRight className='ml-2 size-5' />}
        {icon === 'arrowDown' && <IconArrowDown className='ml-2 size-5' />}
        {icon === 'arrowUp' && <IconArrowUp className='ml-2 size-5' />}
        {icon === 'download' && <IconFileDownload className='ml-2 size-5' />}
      </button>
    );
  }
}
