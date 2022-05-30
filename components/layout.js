import Link from "next/link";
import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

import { SpeakerphoneIcon } from "@heroicons/react/outline";

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Alpha-versie CircuLaw voor testen
                </span>
                <span className="hidden md:inline">
                  Alpha-versie CircuLaw voor testen
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href="/faq">
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                  Lees meer
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <Head>
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
