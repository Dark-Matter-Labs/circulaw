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
      <main className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">{children}</main>
      <Footer />
    </>
  );
}
