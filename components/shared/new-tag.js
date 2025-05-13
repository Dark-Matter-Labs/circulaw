import { useState } from 'react';

import Link from 'next/link';

const varientStyles = {
  green: 'bg-green-500 text-white',
  white: 'bg-white text-cl-black',
  black: 'bg-cl-black text-white',
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
        className={`${varientStyles[variant]} p-2xs-semibold rounded-cl px-2 py-1 first-letter:uppercase`}
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
        className={`${varientStyles[variant]} p-2xs-semibold rounded-cl px-2 py-1 first-letter:uppercase`}
      >
        {children}
      </Link>
    );
  }
}
