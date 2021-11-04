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
      <main>{children}</main>
      <Footer />
    </>
  );
}
