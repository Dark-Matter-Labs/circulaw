import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import Hero from "../components/section-hero";
import LogoCloud from "../components/section-logo-cloud";
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";

import cycleScale from "../public/cycle-scale.png";
import seedHero from "../public/seeds.png";

export default function Aanbestedingen() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  return <Layout>Aanbestedingen Placeholder</Layout>;
}
