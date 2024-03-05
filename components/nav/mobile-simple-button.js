import Link from 'next/link';

export default function MobileSimpleButton({ name, url, closeMenu }) {
  return (
    <div
      className={`${name === 'Nieuws' || name === 'Eu wetgeving' ? 'border-t' : ''} ${
        name === 'Eu wetgeving' ? '' : 'border-b'
      } text-green-800 py-4 w-full text-left p-xl-semibold flex flex-row items-center`}
    >
      <Link href={url} onClick={() => closeMenu(false)}>{name}</Link>
    </div>
  );
}
