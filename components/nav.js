import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Nav() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex inset-x-0 top-0 p-5 sm:p-9">
      <div className="flex-1">
        <div className="content">logo</div>
        <div className="content right-0">
          <Link href="/laws">
            <a className="px-3">Over ons</a>
          </Link>
          <Link href="/laws">
            <a className="px-3">Blog</a>
          </Link>
          <Link href="/laws">
            <a className="px-3">Contact</a>
          </Link>
        </div>
      </div>
      {/*       <div className="content">
        <Link href="/laws">
          <a className="px-3">Maatregelen</a>
        </Link>
        <Link href="/laws">
          <a className="px-3">Contact</a>
        </Link>
      </div> */}

      <div className="content">
        <Link href="/laws">
          <a className="px-3">Button</a>
        </Link>
        <Link href="/laws">
          <a className="px-3">Zoeken</a>
        </Link>
      </div>
    </div>
  );
}
