import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Layout({ children }) {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav />
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className='relative max-w-xl mx-auto px-8 max-w-7xl'>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && <>{children}</>}
      </main>
      <Footer />
    </>
  );
}
