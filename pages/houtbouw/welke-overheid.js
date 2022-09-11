import Image from 'next/image';
import Layout from '../../components/layout';
import TimberImage from '../../public/Timber_Measures_Web.png';
import TimberImageMob from '../../public/Timber_Measures_Mob.png';

export default function InfoPage() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl'>
        <h1 className='mobile sm:main text-green1 pb-2'>
          Welke overheid heeft welke bevoegdheid voor houtbouwmaatregelen?
        </h1>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={TimberImage} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={TimberImage} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Op rijksniveau kunnen regels gesteld worden ten aanzien van hergebruik van producten en
            kan het Rijk financieel bijdragen aan doelen die gesteld worden in een omgevingsvisie -
            en/of programma over houtbouw.
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Provincies kunnen houtbouw integreren in hun omgevingsverordening door de houtopstanden
            in het gebied te vergroten. Het stellen van omgevingswaarden kan hierbij helpen
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Gemeenten kunnen ook veel doen. Zo kunnen gemeenten regels stellen over
            sloopwerkzaamheden, afvalstoffen en recycling. Daarnaast kan houtbouw opgenomen worden
            in het omgevingsplan om de vergunningverlening hierop aan te passen. Omgevingswaarden
            kunnen hierbij een rol spelen.
          </p>
          <p className='body-text-mobile sm:body-text text-black1'>
            Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: aanbestedingen
            spelen hierbij de grootste rol. Het vergroten van het aandeel publieke grond zorgt
            ervoor dat circulaire eisen kunnen worden gesteld bij de uitgifte van die gronden. De
            omgevingsvisie is voor alle overheden belangrijk omdat hier de beleidsdoelen voor
            houtbouw in kunnen worden verankerd. Als laatste kunnen overheden innovatie toestaan
            middels technische gelijkwaardigheid van bouwonderdelen en door experimenten.
          </p>
        </div>
      </div>
    </Layout>
  );
}
