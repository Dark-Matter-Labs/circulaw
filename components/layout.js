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
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className="p-8">
        {!session && <>{children}</>}
        {session && <>{children}</>}
      </main>
      <Footer />
    </>
  );
}
