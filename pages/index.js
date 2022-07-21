import Link from "next/link";
import Image from "next/image";
import { ArrowNarrowDownIcon } from '@heroicons/react/solid'
import ActionPanel from "../components/section-action-panel";
import Layout from "/components/layout";
import SectionTypes from "/components/section-types-list";
import cycleScale from "../public/Circulaw_texture.svg";
import seedHero from "../public/seeds.png";
import hammerIcon from "../public/hammer.svg";
import userIcon from "../public/person.svg";
import leafIcon from "../public/leaf.svg";

export default function Index() {
  return (
    <Layout>
      <div className="items-center bg-green2 text-white">
        <div className="mx-20 pb-20">
        <div className="grid grid-cols-2 gap-1">
          <div className="font-bold text-5xl pb-6 font-publicSans max-w-md pt-20">
          Regelgeving voor een circulaire economie
          </div>
          <div className="texture-move invisible sm:visible">
          <Image src={cycleScale} alt="texture icon" />
        </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-5">
            <div>
              <Image src={hammerIcon} alt="hammer" className="h-12 w-12" />
              <h2 className="font-manrope text-xl font-bold pt-2 pb-8">Wegwijs in regelgeving</h2>
              <p className="font-manrope text-lg font-normal">CircuLaw maakt regelgeving toegankelijk en  geeft inzicht in regelgevende instrumenten die de circulaire economie kunnen versnellen, en toont hoe instrumenten samenhangen.</p>
            </div>
            <div>
              <Image src={userIcon} alt="hammer" className="h-12 w-12" />
              <h2 className="font-manrope text-xl font-bold pt-2 pb-8">Voor beleidsmedewerkers en transitiemanagers</h2>
              <p className="font-manrope text-lg font-normal">CircuLaw is voor circulaire beleidsmakers en transitiemanagers. CircuLaw biedt hulp bij het selecteren van de juiste instrumenten en geeft handvatten voor de toepassing in  circulaire projecten en programma’s.</p>
            </div>
            <div>
              <Image src={leafIcon} alt="hammer" className="h-12 w-12" />
              <h2 className="font-manrope text-xl font-bold pt-2 pb-8">Versterken ketensamenwerking</h2>
              <p className="font-manrope text-lg font-normal">CircuLaw maakt voor een circulaire productgroep inzichtelijk welke instrumenten per overheidslaag beschikbaar zijn. Zo wordt helder wie wat moet doen, en kan ketensamenwerking worden opgezet.</p>
            </div>
          </div>
          <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-green2 bg-white hover:bg-light focus:outline-none "
      >
        Waarom CircuLaw?
        <ArrowNarrowDownIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
        </div>
      </div>

      <div className="mx-20">
      <h1 className="font-bold text-3xl pb-6 pt-10 font-manrope font-extrabold">
        Thema’s
      </h1>

      <SectionTypes
        qty="4"
        title="Circulaire bouweconomie"
        description=""
        data="0"
      />

      </div>
     

      <ActionPanel
        paragraph="Blijf wekelijks op de hoogte van nieuwe kansen binnen de
    wet- en regelgeving rond de circulaire transitie"
        buttonText="Ontvang de nieuwsbrief"
        buttonLink="/"
      />
    </Layout>
  );
}
