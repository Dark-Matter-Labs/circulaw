import { useState, useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import client from '../../lib/sanity';
import woodIcon from '../../public/icons/woodIcon.svg';
import houtbouwImageMob from '../../public/bevoegdheden/bevoegdheden-houtbouw-mob.png';

export default function InfoPage() {
  const [allRegionLaws, setAllRegionLaws] = useState();
  const [natLaws, setNatLaws] = useState();
  const [provLaws, setProvLaws] = useState();
  const [gemLaws, setGemLaws] = useState();

  useEffect(() => {
    const urls = [
      `
    *[_type == "measure" && thema == "houtbouw" && "Gemeentelijk" in overheidslaag && "Provinciaal" in overheidslaag && "Nationaal" in overheidslaag]| order(lower(titel) asc)
    `,
      `
          *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3 && "Nationaal" in overheidslaag]| order(lower(titel) asc)
      `,
      `
      *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3  && "Provinciaal" in overheidslaag]| order(lower(titel) asc)
  `,
      `
          *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3 && "Gemeentelijk" in overheidslaag]| order(lower(titel) asc)
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
        thema='houtbouw'
        title='Welke overheid kan welk instrument gebruiken voor houtbouw?'
        iconPath={woodIcon}
        p1='Je kunt op rijksniveau regels bepalen voor het hergebruik van producten. Ook kan het Rijk financieel bijdragen aan doelen die worden gesteld in een omgevingsvisie en/of een programma over houtbouw.'
        p2='Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden in het gebied te vergroten. Het vaststellen van omgevingswaarden (instrumenten uit de Omgevingswet die provincies en gemeenten kunnen inzetten om beleid uit de omgevingsvisie uit te voeren),  kan hierbij helpen. Zo zou je een maximumwaarde voor CO₂ kunnen vaststellen.'
        p3='Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels bepalen voor sloopwerkzaamheden, afvalstoffen en recycling. Ook kunnen ze houtbouw opnemen in het omgevingsplan om de vergunningverlening hierop aan te passen. Ook hierbij kunnen omgevingswaarden een rol spelen.'
        p4='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond maakt het mogelijk om circulaire eisen te stellen bij de uitgifte van die grond. De omgevingsvisie is voor alle overheden belangrijk omdat je hier de beleidsdoelen voor houtbouw in kunt verankeren. En ten slotte kunnen overheden innovatie stimuleren door verschillende experimenten toe te staan.'
        allRegionLaws={allRegionLaws}
        natLaws={natLaws}
        provLaws={provLaws}
        gemLaws={gemLaws}
        imageMob={houtbouwImageMob}
      />
    </Layout>
  );
}
