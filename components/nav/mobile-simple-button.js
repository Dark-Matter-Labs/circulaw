import Link from 'next/link';

export default function MobileSimpleButton({ name, url, closeMenu }) {
  return (
    <div
      className={`${name === 'Nieuws' || name === 'EU wetgeving' ? 'border-t' : ''} ${
        name === 'EU wetgeving' ? '' : 'border-b'
      } heading-xl-semibold flex w-full flex-row items-center py-4 text-left text-green-800`}
    >
      <Link href={url} onClick={() => closeMenu(false)}>
        {name}
      </Link>
    </div>
  );
}
