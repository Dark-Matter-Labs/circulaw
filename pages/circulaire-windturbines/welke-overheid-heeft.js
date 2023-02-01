import { useState, useEffect } from 'react';
import client from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import WindmillIcon from '../../public/windmill.svg';
import windmillImageMob from '../../public/bevoegdheden/bevoegdheden-windmill.png';

export default function InfoPage() {
  const [allRegionLaws, setAllRegionLaws] = useState();
  const [natLaws, setNatLaws] = useState();
  const [provLaws, setProvLaws] = useState();
  const [gemLaws, setGemLaws] = useState();

  useEffect(() => {
    const urls = [
      `
    *[_type == "measure" && thema == "circulaire-windturbines" && "Gemeentelijk" in overheidslaag && "Provinciaal" in overheidslaag && "Nationaal" in overheidslaag]| order(lower(titel) asc)
    `,
      `
          *[_type == "measure" && thema == "circulaire-windturbines" && length(overheidslaag) < 3 && "Nationaal" in overheidslaag]| order(lower(titel) asc)
      `,
      `
      *[_type == "measure" && thema == "circulaire-windturbines" && length(overheidslaag) < 3  && "Provinciaal" in overheidslaag]| order(lower(titel) asc)
  `,
      `
          *[_type == "measure" && thema == "circulaire-windturbines" && length(overheidslaag) < 3 && "Gemeentelijk" in overheidslaag]| order(lower(titel) asc)
      `,
    ];
    Promise.all(urls.map((u) => client.fetch(u)))
      .then((responses) => Promise.all(responses.map((res) => res)))
      .then((measures) => {
        setAllRegionLaws(measures[0]);
        setNatLaws(measures[1]);
        setProvLaws(measures[2]);
        setGemLaws(measures[3]);
      });
  }, []);
  return (
    <Layout>
      <WelkeLayout
        thema='circulaire-windturbines'
        title='Welk instrument kan welke overheid gebruiken voor circulaire windturbines?'
        iconPath={WindmillIcon}
        p1='Rijk, provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om kenbaar te maken dat zij hiermee aan de slag willen. Het vergroten van het aandeel publieke grond van provincies en gemeenten maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van grond. Dit kan bijvoorbeeld door middel van tenders of het sluiten van huurovereenkomsten. Daarnaast helpen subsidies om bijvoorbeeld de productie, het aanschaffen of recyclen van circulaire windturbines aan te moedigen.'
        p2='Ook kunnen Rijk en provincie met een projectbesluit het omgevingsplan wijzigen om  daarmee de ontwikkeling van circulaire windturbineparken te borgen en te stimuleren.'
        p3='Provincies en gemeenten kunnen hun grondpositie versterken door beschikbare grond op te kopen. Ook kunnen zij in lokale verordeningen en plannen, eisen opnemen die circulariteit van windturbines aanmoedigen.'
        p4='En ten slotte kunnen gemeenten in een anterieure overeenkomst kosten voor gebiedsontwikkeling vastleggen en daar ook circulariteit bij betrekken.'
        allRegionLaws={allRegionLaws}
        natLaws={natLaws}
        provLaws={provLaws}
        gemLaws={gemLaws}
        imageMob={windmillImageMob}
      />
    </Layout>
  );
}
