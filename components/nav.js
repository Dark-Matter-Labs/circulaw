import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Nav() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className=''>
      <div className='p-5'>Digitale tool Juridisch Landschap</div>
      <div className='bg-black text-white flex justify-between space-x-4 py-3'>
        <Link href='/laws'>
          <a className='px-5 font-bold'>Home</a>
        </Link>

        <div className='justify-between px-5'>
          <Link href='/laws'>
            <a className='px-3'>Maatregelen</a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Voorbeelprojecten </a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Juridische kaart</a>
          </Link>
        </div>

        <div className='justify-between px-5'>
          <Link href='/laws'>
            <a className='px-3'>Over ons</a>
          </Link>
          <Link href='/laws'>
            <a className='px-3'>Contact </a>
          </Link>
          {!session && (
            <>
              <button
                onClick={signIn}
                className='justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium '
              >
                Sign in
              </button>
            </>
          )}
          {session && (
            <>
              <button
                onClick={signOut}
                className='justify-center py-1 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium '
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
