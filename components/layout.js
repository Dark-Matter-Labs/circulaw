import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className="w-1/2 sm:w-full">{children}</main>
      <Footer />
    </>
  );
}
