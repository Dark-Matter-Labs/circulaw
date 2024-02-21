import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DesktopNavCard({ transitionAgenda, themas, slug }) {
  const router = useRouter();
  return (
    <div
      className={`${
        router.pathname === '/' ? 'bg-green-600 text-green-200' : 'bg-green-100 text-green-800'
      } w-full h-full  ${
        transitionAgenda === 'bouw'
          ? 'pl-4 lgNav:pl-10 xl:pl-20 3xl:pl-32 pt-8 pr-2'
          : 'pl-3 lg:pl-6 pt-8 pr-2'
      }  p-lg-semibold first-letter:uppercase `}
    >
      <Link href={`/${slug}`} className='hover:underline'>
        {transitionAgenda} {'>'}
      </Link>
      {themas.map((thema) => (
        <div className='mt-2' key={thema.name}>
          <Link
            href={thema.url}
            className={`${
              router.pathname === '/' ? 'text-white' : 'text-green-600 hover:text-green-500 '
            } p-xs hover:underline active:p-xs-semibold active:no-underline cursor-pointer`}
          >
            {thema.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
