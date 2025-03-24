import { useState } from 'react';

import Link from 'next/link';

const varientStyles = {
  green: 'bg-green-500 text-white',
  white: 'bg-white text-cl-black',
  black: 'bg-cl-black text-white',
};

export default function Tag({ variant, href, children, category, ...props }) {
  function setCategorie(value) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedTab', value);
      setSelectedTab(value);
    }
  }
  
  // eslint-disable-next-line
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <Link
      {...props}
      onClick={() => setCategorie(category)}
      href={href}
      className={`${varientStyles[variant]} rounded-cl p-2xs-semibold px-2 py-1 first-letter:uppercase`}
    >
      {children}
    </Link>
  );
}
