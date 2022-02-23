import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Hero from "../components/section-hero";
import LogoCloud from "../components/section-logo-cloud";
import ActionPanel from "../components/section-action-panel";

import Layout from "/components/layout";

export default function Index() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <Hero
        title="Juridische en fiscale maatregelen om de
      transitie naar houtbouw te versnellen"
        description="Mogelijkheden in bestaande en toekomstige wetgeving
      Voor beleidsmakers van gemeentes, provincies en ministeries
      • In de toekomst: met handelingsperspectief om maatregelen
      toe te passen"
        buttonText="Verken alle maatregelen in de houtbouw"
        buttonLink="#"
        image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        imageAlt="Test Image"
      />
      <ActionPanel
        paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
    wet- en regelgeving rond de circulaire transitie"
        buttonText="Ontvang de nieuwsbrief"
        buttonLink="/"
      />
      <LogoCloud />
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div>
        <Link href="/laws">
          <a>Go to private page</a>
        </Link>
      </div>
    </Layout>
  );
}
