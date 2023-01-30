import { useState, useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import client from '../../lib/sanity';
import woodIcon from '../../public/icons/woodIcon.svg'

export default function InfoPage() {
  const [allRegionLaws, setAllRegionLaws] = useState();
  const [natLaws, setNatLaws] = useState()
  const [provLaws, setProvLaws] = useState()
  const [gemLaws, setGemLaws] = useState()

  // fetch all laws with National + Provinciaal + Nationaal
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "measure" && thema == "houtbouw" && "Gemeentelijk" in overheidslaag && "Provinciaal" in overheidslaag && "Nationaal" in overheidslaag]| order(lower(titel) asc)
    `,
      )
      .then((data) => setAllRegionLaws(data));
  }, []);

  // fetch all laws with only National
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3 && "Nationaal" in overheidslaag]| order(lower(titel) asc)
    `,
      )
      .then((data) => setNatLaws(data));
  }, []);

  // fetch all laws with only Provincial 
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3  && "Provinciaal" in overheidslaag]| order(lower(titel) asc)
    `,
      )
      .then((data) => setProvLaws(data));
  }, []);
  
  // fetch all laws with only Gemeentelijk
  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "measure" && thema == "houtbouw" && length(overheidslaag) < 3 && "Gemeentelijk" in overheidslaag]| order(lower(titel) asc)
    `,
      )
      .then((data) => setGemLaws(data));
  }, []);



  return (
    <Layout>
      <WelkeLayout
        casus='Houtbouw'
        title='Welke overheid heeft welke bevoegdheid voor houtbouwmaatregelen?'
        iconPath={woodIcon}
        p1='Op rijksniveau kunnen regels gesteld worden ten aanzien van hergebruik van producten en
      kan het Rijk financieel bijdragen aan doelen die gesteld worden in een omgevingsvisie -
      en/of programma over houtbouw.'
        p2='Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden
      in het gebied te vergroten. Het stellen van omgevingswaarden kan hierbij helpen.'
        p3='Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels stellen over
      sloopwerkzaamheden, afvalstoffen en recycling. Daarnaast kan houtbouw opgenomen worden
      in het omgevingsplan om de vergunningverlening hierop aan te passen. Omgevingswaarden
      kunnen hierbij een rol spelen.'
        p4='Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen
      spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond zorgt
      ervoor dat circulaire eisen kunnen worden gesteld bij de uitgifte van die gronden. De
      omgevingsvisie is voor alle overheden belangrijk omdat hier de beleidsdoelen voor
      houtbouw in kunnen worden verankerd. Als laatste kunnen overheden innovatie toestaan
      middels technische gelijkwaardigheid van bouwonderdelen en door experimenten.'
      allRegionLaws={allRegionLaws}
      natLaws={natLaws}
      provLaws={provLaws}
      gemLaws={gemLaws}

      />
    </Layout>
  );
}
