import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../layouts/layout';
import WindmillImage from '../../public/Windmill_Process_Web.png';
import WindmillImageMob from '../../public/Windmill_Process_Mob.png';
import SamenhangLayout from '../../layouts/samenhang-layout';

export default function InfoPage() {
  return (
    <Layout>
      <SamenhangLayout
        casus='circulaire Windturbines'
        title='Samenhang maatregelen circulaire windturbines'
        img={WindmillImage}
        imgMob={WindmillImageMob}
        p1='Beleid rondom circulaire windturbines kan worden opgenomen in omgevingsvisies. Door dit te verankeren kunnen subsidies worden vastgesteld. Daarnaast kunnen overheden proberen meer grond te kopen om uit te geven met circulaire eisen. Ook kunnen met het omgevingsplan of een projectbesluit vergunningen worden verleend voor circulaire windturbines. Afspraken over de kosten van circulaire windturbines kunnen voor het omgevingsplan worden vastgelegd in een anterieure overeenkomst.'
        p2=''
        p3=''
      />
    </Layout>
  );
}
