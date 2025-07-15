import { useState } from 'react';

import Link from 'next/link';

const varientStyles = {
  white: 'bg-white text-green-500',
  black: 'bg-cl-black text-white',
  'white-hover': 'bg-white text-green-500 hover:bg-green-200',
  'black-hover': 'bg-cl-black text-white hover:bg-cl-grey',
};

export default function Tag({ variant, href, children, category, themaType, ...props }) {
  function setCategorie(value) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedTab', value);
      setSelectedTab(value);
    }
  }

  // eslint-disable-next-line
  const [selectedTab, setSelectedTab] = useState(null);
  if (themaType === 'simpleThema') {
    return (
      <div
        {...props}
        className={`${varientStyles[themaType === 'simpleThema' ? variant : `${variant}-hover`]} p-2xs-semibold rounded-cl px-2 py-1 first-letter:uppercase`}
      >
        {children}
      </div>
    );
  } else {
    return (
      <Link
        {...props}
        onClick={() => setCategorie(category)}
        href={href}
        className={`${varientStyles[themaType === 'simpleThema' ? variant : `${variant}-hover`]} p-2xs-semibold rounded-cl px-2 py-1 first-letter:uppercase`}
      >
        {children}
      </Link>
    );
  }
}
