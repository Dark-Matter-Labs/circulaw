import { useState, useEffect } from 'react';
import client from '../../lib/sanity';
import Layout from '../../components/layouts/layout';
import WelkeLayout from '../../components/layouts/welke-layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import matrassenImageMob from '../../public/bevoegdheden/bevoegdheden-matrassen.png';

export default function InfoPage() {
  const [allRegionLaws, setAllRegionLaws] = useState();
  const [natLaws, setNatLaws] = useState();
  const [provLaws, setProvLaws] = useState();
  const [gemLaws, setGemLaws] = useState();

  useEffect(() => {
    const urls = [
      `
    *[_type == "measure" && thema == "matrassen" && "Gemeentelijk" in overheidslaag && "Provinciaal" in overheidslaag && "Nationaal" in overheidslaag]| order(lower(titel) asc)`,
      `
    *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3 && "Nationaal" in overheidslaag]| order(lower(titel) asc)`,
      `
    *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3  && "Provinciaal" in overheidslaag]| order(lower(titel) asc)`,
      `
    *[_type == "measure" && thema == "matrassen" && length(overheidslaag) < 3 && "Gemeentelijk" in overheidslaag]| order(lower(titel) asc)`,
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
        thema='matrassen'
        title='Welke overheid kan welk instrument inzetten om de circulaire matrasketen te stimuleren?'
        iconPath={mattressIcon}
        p1='Rijk, provincies en gemeenten kunnen op verschillende manieren circulaire matrassen inkopen, bijvoorbeeld door middel van een innovatiepartnerschap, concurrentiegerichte dialogen of het verwerken van circulariteit in geschiktheidseisen. Daarnaast kan een terugnamegarantie helpen bij het recyclen van de matrassen aan het einde van hun levensduur. Dit kun je ook meenemen in de inkoopprocedure. Subsidies kunnen helpen om de ontwikkeling en productie van circulaire matrassen voor partijen aantrekkelijker te maken.'
        p2='Op nationaal niveau kan circulair beleid worden gemaakt via het landelijk afvalbeheerplan. Een meer ingrijpend instrument is het instellen van een reclameverbod voor matrassen die niet duurzaam of niet te recyclen zijn. Statiegeld bij aanschaf van een matras kan er ook voor zorgen dat een matras aan het einde van de levenscyclus weer terug wordt gebracht naar de verkoper, om zo droog en schoon te kunnen worden gerecycled. Op nationaal niveau kunnen fiscale instrumenten worden ingezet om de investeringen in en de verkoop van circulaire matrassen aantrekkelijker te maken.'
        p3='Gemeenten zijn ten slotte bevoegd om afvalstoffen doelmatig te beheren: dit regelen zij via de afvalstoffenverordening waarbij een extra heffing kan worden ingezet voor de inzameling van matrassen.'
        p4=''
        allRegionLaws={allRegionLaws}
        natLaws={natLaws}
        provLaws={provLaws}
        gemLaws={gemLaws}
        imageMob={matrassenImageMob}
      />
    </Layout>
  );
}
