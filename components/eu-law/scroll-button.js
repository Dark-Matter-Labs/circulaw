'use client';
import { Link } from 'react-scroll';

export default function ScrollButton({ to, offset, children }) {
  return (
    <>
      <Link to={to} offset={offset} smooth={true}>
        {children}
      </Link>
    </>
  );
}
