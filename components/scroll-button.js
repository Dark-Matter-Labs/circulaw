'use client';

import { Link } from 'react-scroll';

// TODO: use this component in other places where we use React Scroll e.g. home page
export default function ScrollButton({ to, offset, children }) {
  return (
    <>
      <Link to={to} offset={offset} smooth={true}>
        {children}
      </Link>
    </>
  );
}
