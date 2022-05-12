import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Head>
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className=" max-w-screen-xl mx-4 xl:mx-auto">{children}</main>
      <Footer />
    </>
  );
}
