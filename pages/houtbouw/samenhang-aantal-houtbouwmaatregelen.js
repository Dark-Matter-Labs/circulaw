import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import TimberImage from '../../public/Timber_Process_Web.png';
import TimberImageMob from '../../public/Timber_Process_Mob.png';

export default function InfoPage() {
  return (
    <Layout>
      <div className='global-margin mt-20'>
        <div className='breadcrumb text-greenLink pb-8'>
          <Link href='/'>
            <a>Home &gt; </a>
          </Link>
          <Link href='/houtbouw'>
            <a>Houtbouw &gt; </a>
          </Link>
        </div>
        <h1 className='mobile sm:main text-green1 pb-2 max-w-3xl mx-auto'>
          Samenhang aantal houtbouwmaatregelen
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
            In een omgevingsvisie of omgevingsprogramma kunnen overheden kenbaar maken dat zij
            ambities hebben om met hout te bouwen. Hierdoor kunnen financiële bijdragen worden
            geleverd aan deze projecten en kan met bepaalde gebieden en projecten worden
            geëxperimenteerd waarmee wordt afgeweken van normale wetgeving.
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Op grond van die omgevingsvisies en omgevingsprogramma’s kunnen ook verschillende regels
            en plannen op het gebied van hergebruik en ruimtelijke ordening worden vastgesteld. Dit
            reguleert onder andere afvalstromen en vrijgekomen materiaalstromen in de stad en
            verankert houtbouw in het omgevingsplan en de omgevingsverordening. Op grond van deze
            regels kan de vergunningverlening voor bouwprojecten worden toegespitst op houtbouw.
          </p>
          <p className='body-text-mobile sm:body-text text-black1 pb-6'>
            Als laatst kunnen overheden circulair aanbesteden en grond uitgeven aan circulaire
            projecten. De MPG, LCA en verschillende keurmerken kunnen in de beoordeling van deze
            opdrachten en uitgiftes worden ingezet om circulaire initiatieven meer kans op de
            verlening van de grond of het project te geven. Ook kan de procedure zo worden ingericht
            dat houtbouw hier een rol in gaat spelen.
          </p>
        </div>
      </div>
    </Layout>
  );
}
