import { useState, useEffect } from 'react';
import client from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import WindmillIcon from '../../public/windmill.svg';

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
        title='Welke overheid heeft welke bevoegdheid voor maatregelen circulaire windturbines?'
        iconPath={WindmillIcon}
        p1='Provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om
      dit beleidsdoel kenbaar te maken. Het vergroten van het aandeel publieke grond van
      provincies en gemeenten zorgt ervoor dat circulaire eisen kunnen worden gesteld bij de
      uitgifte van de gronden.'
        p2='Gemeenten kunnen daarnaast circulariteit opnemen in hun omgevingsplan en zodoende
      aanvullende eisen stellen bij de vergunningverlening. In een anterieure overeenkomst
      worden kosten voor gebiedsontwikkeling vastgelegd en daar kan circulariteit ook bij
      betrokken worden.'
        p3='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: door circulaire
      eisen te stellen bij gronduitgifte - door verkoop, erfpacht en huurovereenkomsten -
      wordt het plaatsen van circulaire windturbines aangemoedigd.'
        p4=''
        allRegionLaws={allRegionLaws}
        natLaws={natLaws}
        provLaws={provLaws}
        gemLaws={gemLaws}
      />
    </Layout>
  );
}
