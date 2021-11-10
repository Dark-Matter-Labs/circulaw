import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

import Layout from "/components/layout";
import SearchFilter from "/components/search-filter";
import PolicyList from "/components/policy-list";

export default function Index() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div>
        <Link href='/laws'>
          <a>Go to private page</a>
        </Link>
      </div>
    </Layout>
  );
}
