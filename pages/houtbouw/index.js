import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Layout from "../../components/layout";
import SectionTypes from "/components/section-types-list";

import WoodIcon from "../../public/icons/wood.svg";
import HoutbouwHero from "../../public/houtbouwHero.jpg";
import HoutbouwSection1 from "../../public/houtbouwsection1.png";
import HoutbouwSection2 from "../../public/houtbouwsection2.png";
import HoutbouwSection3 from "../../public/houtbouwsection3.png";

export default function Houtbouw() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 gradient-bg">
        <div className="mx-5 sm:mx-20 ">
          <div className="breadcrumb pt-8 text-greenLink">
            <Link href="/">
              <a>Home &gt; </a>
            </Link>
          </div>
          <div className="pb-14 pt-14 ">
            <div className="pr-4 inline-block">
              <Image src={WoodIcon} alt="Icon of Wood" width={48} />
            </div>
            <h1 className="text-green1 inline-block mobile sm:main">
              Houtbouw stimuleren{" "}
            </h1>
            <h2 className="pt-4 pb-4 mobile sm:main">
              Milieudoelstellingen behalen met houtbouw
            </h2>
            <p className="body-text-mobile sm:body-text">
              De manier waarop wij nu in Nederland bouwen is zeer belastend voor
              het milieu. Er is een eenvoudige oplossing: vervang beton deels
              door hout. Is dat hout dan wel geschikt en belasten we het milieu
              niet nog erger wanneer we bomen moeten gaan kappen? Het is goed om
              te weten dat niet alleen de bosbouw steeds duurzamer geworden is,
              maar ook dat er veel nieuwe houtproducten zijn ontwikkeld die
              grote mogelijkheden bieden. Daardoor kan houtbouw heel goed
              bijdragen aan onze klimaatdoelstellingen.
            </p>
          </div>

          <span className="text-greenLink link-mobile sm:link pt-10">
            <a
              href="https://www.ams-institute.org/documents/64/AMS_Institute_Houtbouwmythes_ontkracht.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hoe houtbouw de circulaire transitie versnelt→
            </a>
          </span>
        </div>
        <div>
          <Image src={HoutbouwHero} alt="Icon of Wood" layout="responsive" />
        </div>
      </div>

      <div className="mx-5 sm:mx-20 my-20">
        <h2 className="pb-8 mobile sm:main">
          3 maatregelen om houtbouw te stimuleren en direct mee aan de slag te
          gaan{" "}
        </h2>
        <SectionTypes type="houtbouw" />
      </div>
      <div className="pt-5 px-20 bg-green3 bg-opacity-10">
        <div className="border-b border-grey1 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="col-span-2">
              <h2 className="pt-10 mobile sm:main">
                44 houtbouwmaatregelen voor innovatieve beleidsmakers
              </h2>
              <p className="body-text-mobile sm:body-text py-5 max-w-2xl">
                Weten waar kansen liggen om de houtbouwtransitie te versnellen?
                CircuLaw biedt je nu een overzicht van 44 maatregelen die je
                daarvoor kunt inzetten.
              </p>
              <span className="text-greenLink link">
                Bekijk alle houtbouwmaatregelen →
              </span>
            </div>
            <div className="">
              <Image
                src={HoutbouwSection1}
                alt="Houtbuow section image"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="border-b border-grey1 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="col-span-2">
              <h2 className="pt-10 mobile sm:main">
                Hoe hangen de maatregelen om houtbouw te stimuleren met elkaar
                samen?
              </h2>
              <p className="body-text-mobile sm:body-text py-5 max-w-2xl">
                CircuLaw heeft 44 maatregelen gedefinieerd die je kunt inzetten
                om houtbouw te stimuleren. Als je meerdere maatregelen toepast,
                is je impact natuurlijk groter. Maar dan is het wel handig om te
                weten hoe die maatregelen met elkaar samenhangen. Daarom bieden
                we je ook inzicht in de relatie tussen de verschillende
                maatregelen.
              </p>
              <span className="text-greenLink link-mobile sm:link">
                Bekijk hoe de maatregelen met elkaar samenhangen →
              </span>
            </div>
            <div className="">
              <Image
                src={HoutbouwSection2}
                alt="Houtbuow section image"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="border-b border-grey1 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="col-span-2">
              <h2 className="pt-10 mobile sm:main">
                Welke overheid heeft welke bevoegdheid voor houtbouwmaatregelen?
              </h2>
              <p className="body-text-mobile sm:body-text py-5 max-w-2xl">
                Inzicht in bevoegdheden en verantwoordelijkheden is belangrijk
                om te komen tot een goede samenwerking in circulaire
                productieketens. In dit overzicht wordt per maatregel duidelijk
                welke overheid waarvoor aan de lat staat.
              </p>
              <span className="text-greenLink link-mobile sm:link">
                Bekijk overzicht bevoegdheden maatregelen →
              </span>
            </div>
            <div className="">
              <Image
                src={HoutbouwSection3}
                alt="Houtbuow section image"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
