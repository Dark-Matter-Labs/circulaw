import Link from 'next/link';

export default function MobileSimpleButton({ name, url, closeMenu }) {
  return (
    <div
      className={`${name === 'Nieuws' || name === 'EU wetgeving' ? 'border-t' : ''} ${
        name === 'EU wetgeving' ? '' : 'border-b'
      } text-green-800 py-4 w-full text-left heading-xl-semibold flex flex-row items-center`}
    >
      <Link href={url} onClick={() => closeMenu(false)}>
        {name}
      </Link>
    </div>
  );
}
