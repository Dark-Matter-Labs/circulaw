'use client';
import { Link } from 'react-scroll';

// TODO: move this component to a shared components folder and import it in other places where we use React Scroll e.g. home page
export default function ScrollButton({ to, offset, children }) {
  return (
    <>
      <Link to={to} offset={offset} smooth={true}>
        {children}
      </Link>
    </>
  );
}
