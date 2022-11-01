import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import TimberImage from '../../public/Windmill_Measures_Web.png';
import TimberImageMob from '../../public/Windmill_Measures_Mob.png';

export default function InfoPage() {
  return (
    <Layout>
      {/* TODO: this page and Houtbouw welke overheid page are very similar and basic layout should be combined */} 
      <div className='global-margin my-20 max-w-2xl'>
        <div className='breadcrumb text-greenLink pb-8'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
          <Link href='/circulaire-windturbines'>
            <a>Circulaire windturbines &gt; </a>
          </Link>
        </div>
        <h1 className='mobile sm:main text-green1 pb-2 max-w-3xl mx-auto'>
          Welke overheid heeft welke bevoegdheid voor maatregelen circulaire windturbines?
        </h1>
      </div>
      <div className='hidden sm:block image-margin'>
        <Image src={TimberImage} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='block sm:hidden'>
        <Image src={TimberImageMob} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='global-margin mb-20'>
        <div className='max-w-3xl mx-auto'>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Provincies en gemeenten kunnen circulaire windturbines opnemen in hun omgevingsvisie om
            dit beleidsdoel kenbaar te maken. Het vergroten van het aandeel publieke grond van
            provincies en gemeenten zorgt ervoor dat circulaire eisen kunnen worden gesteld bij de
            uitgifte van de gronden.
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Gemeenten kunnen daarnaast circulariteit opnemen in hun omgevingsplan en zodoende
            aanvullende eisen stellen bij de vergunningverlening. In een anterieure overeenkomst
            worden kosten voor gebiedsontwikkeling vastgelegd en daar kan circulariteit ook bij
            betrokken worden.
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Gemeenten, provincies en Rijk hebben ook nog gedeelde bevoegdheden: door circulaire
            eisen te stellen bij gronduitgifte - door verkoop, erfpacht en huurovereenkomsten -
            wordt het plaatsen van circulaire windturbines aangemoedigd.
          </p>
        </div>
      </div>
    </Layout>
  );
}
