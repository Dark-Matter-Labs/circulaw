import Image from 'next/image';
import Layout from '../../components/layouts/layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';
import diagram from '../../public/Matress_page.svg';

export default function InfoPage() {
  return (
    <Layout>
      <SamenhangLayout
        casus='matrassen'
        title='Samenhang instrumenten circulaire matrassen'
        icon={mattressIcon}
        p1='Beleid rondom circulaire windturbines kun je opnemen in een omgevingsvisie, zodat je een subsidie daarvoor kunt vaststellen. Ook kun je als overheden proberen meer grond te kopen om die vervolgens uit te geven met circulaire eisen. Verder kun je als overheid met het omgevingsplan of een projectbesluit vergunningen verlenen voor circulaire windturbines. Afspraken over de kosten van circulaire windturbines op grond van het omgevingsplan kun je vastleggen in een anterieure overeenkomst.'
      />
      <div className='bg-green-600 border-b border-black-white-100'>
        <div className='flex justify-center'>
          <Image src={diagram} alt='diagram' useMap='#image-map' />
          <map name='image-map'>
            <area
              target=''
              alt='Gelijkwaardigheidsbepaling'
              title='Gelijkwaardigheidsbepaling'
              href='https://www.circulaw.nl/measures/gelijkwaardigheidsbepaling'
              coords='283,305,633,344'
              shape='rect'
            />
            <area
              target=''
              alt='Experimenteerbepaling'
              title='Experimenteerbepaling'
              href='https://www.circulaw.nl/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              coords='278,360,625,388'
              shape='rect'
            />
          </map>
        </div>
      </div>
    </Layout>
  );
}
