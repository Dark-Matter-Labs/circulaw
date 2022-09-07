import Image from 'next/image';
import Layout from '../../components/layout';
import TimberImage from '../../public/Timber_Measures_Web.png';

export default function InfoPage() {
  return (
    <Layout>
      <div className='mx-7 max-w-7xl lg:mx-auto my-20 max-w-2xl'>
        <h1 className='mobile sm:main text-green1 pb-2'>
          Samenhang maatregelen circulaire windturbines
        </h1>
      </div>
      <div className='mx-10'>
        <Image src={TimberImage} layout='responsive' alt='Picture of the case' />
      </div>
      <div className='mx-7 max-w-7xl lg:mx-auto my-20 max-w-2xl'>
        <p className='body-text-mobile sm:body-text text-black1 pb-6'>
          Beleid rondom circulaire windturbines kan worden opgenomen in omgevingsvisies. Door dit te
          verankeren kunnen subsidies worden vastgesteld. Daarnaast plaats kunnen overheden proberen
          meer grond te kopen om uit te kunnen geven met circulaire eisen. Ook kunnen met het
          omgevingsplan of een projectbesluit vergunningen worden verleend voor circulaire
          windturbines. Afspraken over de kosten van circulaire windturbines kunnen voor het
          omgevingsplan worden vastgelegd in een anterieure overeenkomst.
        </p>
      </div>
    </Layout>
  );
}
