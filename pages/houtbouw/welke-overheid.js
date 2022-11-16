import Layout from '../../layouts/layout';
import TimberImage from '../../public/Timber_Measures_Web.png';
import TimberImageMob from '../../public/Timber_Measures_Mob.png';
import WelkeLayout from '../../layouts/welke-layout';

export default function InfoPage() {
  return (
    <Layout>
      <WelkeLayout
        casus='Houtbouw'
        title='Welke overheid heeft welke bevoegdheid voor houtbouwmaatregelen?'
        img={TimberImage}
        imgMob={TimberImageMob}
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
      />
    </Layout>
  );
}
