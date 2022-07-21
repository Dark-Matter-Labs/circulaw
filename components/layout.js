import Link from "next/link";
import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-green3">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-green3">
              </span>
              <p className="ml-3 font-medium text-white truncate font-manrope font-normal">
                <span className="md:hidden">
                <span className="font-bold bg-light p-2">ALPHA</span> Testversie CircuLaw – je <u>feedback</u> helpt ons CircuLaw te verbeteren
                </span>
                <span className="hidden md:inline">
                  <span className="font-bold bg-light p-2">ALPHA</span> Testversie CircuLaw – je <u>feedback</u> helpt ons CircuLaw te verbeteren
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <Head>
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
