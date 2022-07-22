import Link from "next/link";
import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-blush2 border border-grey1">
        <div className="mx-20 p-4">
          <div className="flex justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium text-black1 truncate font-manrope font-normal">
                <span className="md:hidden">
                  <span className="font-bold bg-blush1 p-2">ALPHA</span>{" "}
                  Testversie CircuLaw -{" "}
                  <span className="link text-greenLink">Lees meer -&gt;</span>
                </span>
                <span className="hidden md:inline">
                  <span className="font-bold bg-blush1 p-4 m-2">ALPHA</span>{" "}
                  Testversie CircuLaw -{" "}
                  <span className="link-mobile text-greenLink">
                    Lees meer -&gt;
                  </span>
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
