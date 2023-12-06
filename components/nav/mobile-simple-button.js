import Link from 'next/link';

export default function MobileSimpleButton({ name, url }) {
  return (
    <div
      className={`${
        name === 'Nieuws' ? 'border-t' : ''
      } text-green-800 border-b py-4 w-full text-left p-xl-semibold flex flex-row items-center`}
    >
      <Link href={url}>{name}</Link>
    </div>
  );
}
