import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DesktopSimpleButton({ name, url }) {
  const router = useRouter();
  return (
    <div
      className={`${
        router.pathname === '/'
          ? 'text-white hover:text-light-green-500'
          : 'text-green-800 hover:text-green-500'
      } h-full relative p-sm  hover:underline z-100 mr-8 flex flex-row items-center cursor-pointer`}
    >
      <Link href={url}>{name}</Link>
    </div>
  );
}
