import Link from "next/link"
import Head from "next/head";
import Footer from "/components/footer";
import Nav from "/components/nav";

import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'


export default function Layout({ children }) {
  return (
    <>
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Deze website is een alpha-versie om mee te testen, te experimenteren en om te leren van eindgebruikers vóórdat CircuLaw live gaat. De inhoud is niet definitief.</span>
              <span className="hidden md:inline">Deze website is een alpha-versie om mee te testen, te experimenteren en om te leren van eindgebruikers vóórdat CircuLaw live gaat. De inhoud is niet definitief.</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <Link href="/contact">
            <a               className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
>Lees meer</a>
          </Link>
           
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
      <Nav />
      <Head>
        <title>Digitale tool Juridisch Landschap</title>
      </Head>
      <main className=" max-w-screen-xl mx-4 xl:mx-auto">{children}</main>
      <Footer />
    </>
  );
}
