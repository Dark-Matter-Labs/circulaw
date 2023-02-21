import { useEffect } from 'react';
import Image from 'next/image';
import Layout from '../../components/layouts/layout';
import woodIcon from '../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';
import diagram from '../../public/samenhang/Timber_page.svg';

export default function InfoPage() {
  useEffect(() => {
    import('image-map-resizer').then((module) => module.default());
  }, []);

  return (
    <Layout>
      <SamenhangLayout
        thema='houtbouw'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className='bg-green-600 border-b border-black-white-100 mt-10'>
        <div className='flex justify-center'>
          <Image src={diagram} alt='diagram' className='' useMap='#image-map' />

          <map name='image-map'>
            <area
              target=''
              alt='Gelijkwaardigheidsbepaling'
              title='Gelijkwaardigheidsbepaling'
              href='https://www.circulaw.nl/measures/gelijkwaardigheidsbepaling'
              coords='273,297,631,335'
              shape='rect'
            />
            <area
              target=''
              alt='Experimenteerbepaling'
              title='Experimenteerbepaling'
              href='https://www.circulaw.nl/measures/experimenteerbepaling'
              coords='277,351,625,385'
              shape='rect'
            />
            <area
              target=''
              alt='Gelijkwaardigheidsbepaling'
              title='Gelijkwaardigheidsbepaling'
              href='https://www.circulaw.nl/measures/gelijkwaardigheidsbepaling'
              coords='275,403,628,436'
              shape='rect'
            />
            <area
              target=''
              alt='Experimenteerbepaling'
              title='Experimenteerbepaling'
              href='https://www.circulaw.nl/measures/experimenteerbepaling'
              coords='273,454,631,485'
              shape='rect'
            />
            <area
              target=''
              alt='Gelijkwaardigheidsbepaling'
              title='Gelijkwaardigheidsbepaling'
              href='https://www.circulaw.nl/measures/gelijkwaardigheidsbepaling'
              coords='273,502,627,538'
              shape='rect'
            />
            <area
              target=''
              alt='Experimenteerbepaling'
              title='Experimenteerbepaling'
              href='https://www.circulaw.nl/measures/experimenteerbepaling'
              coords='273,554,627,585'
              shape='rect'
            />
            <area
              target=''
              alt='Financiële bijdrage'
              title='Financiële bijdrage'
              href='https://www.circulaw.nl/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              coords='1000,224,1352,260'
              shape='rect'
            />
            <area
              target=''
              alt='Financiële bijdrage'
              title='Financiële bijdrage'
              href='https://www.circulaw.nl/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              coords='999,277,1353,310'
              shape='rect'
            />
            <area
              target=''
              alt='Financiële bijdrage'
              title='Financiële bijdrage'
              href='https://www.circulaw.nl/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              coords='996,328,1352,360'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsvisie'
              title='Omgevingsvisie'
              href='https://www.circulaw.nl/measures/houtbouw-een-plek-geven-in-de-nationale-omgevingsvisie'
              coords='855,701,1206,740'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsprogramma'
              title='Omgevingsprogramma'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'
              coords='848,753,1210,789'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsvisie'
              title='Omgevingsvisie'
              href='https://www.circulaw.nl/measures/houtbouw-een-plek-geven-in-de-provinciale-omgevingsvisie'
              coords='848,804,1207,838'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsprogramma'
              title='Omgevingsprogramma'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'
              coords='851,854,1208,888'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsvisie'
              title='Omgevingsvisie'
              href='https://www.circulaw.nl/measures/houtbouw-een-plek-geven-in-de-gemeentelijke-omgevingsvisie'
              coords='849,905,1208,938'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsprogramma'
              title='Omgevingsprogramma'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'
              coords='854,954,1208,988'
              shape='rect'
            />
            <area
              target=''
              alt='AMvB over hergebruik'
              title='AMvB over hergebruik'
              href='https://www.circulaw.nl/measures/regels-hergebruik-producten'
              coords='80,859,436,898'
              shape='rect'
            />
            <area
              target=''
              alt='Sloopmelding'
              title='Sloopmelding'
              href='https://www.circulaw.nl/measures/sloopmelding'
              coords='79,910,439,944'
              shape='rect'
            />
            <area
              target=''
              alt='Meer materiaalstromen'
              title='Meer materiaalstromen'
              href='https://www.circulaw.nl/measures/meer-materiaalgroepen-eisen-bij-sloopwerkzaamheden'
              coords='79,967,436,999'
              shape='rect'
            />
            <area
              target=''
              alt='Melding ontvangst afvalstoffen'
              title='Melding ontvangst afvalstoffen'
              href='https://www.circulaw.nl/measures/meldingsplicht-ontvangst-afvalstoffen'
              coords='80,1019,436,1052'
              shape='rect'
            />
            <area
              target=''
              alt='Melding recycling houtafval'
              title='Melding recycling houtafval'
              href='https://www.circulaw.nl/measures/meldingsplicht-voorbereiding-houtafval-voor-recycling'
              coords='76,1077,438,1109'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsverordening'
              title='Omgevingsverordening'
              href='https://www.circulaw.nl/measures/houtbouw-in-de-omgevingsverordening'
              coords='537,1264,889,1299'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsplan'
              title='Omgevingsplan'
              href='https://www.circulaw.nl/measures/omgevingswaarden-in-het-omgevingsplan'
              coords='533,1317,889,1351'
              shape='rect'
            />
            <area
              target=''
              alt='Maatwerkvoorschriften'
              title='Maatwerkvoorschriften'
              href='https://www.circulaw.nl/measures/maatwerkvoorschriften-bestaande-bouw'
              coords='80,1641,435,1677'
              shape='rect'
            />
            <area
              target=''
              alt='Maatwerkvoorschriften'
              title='Maatwerkvoorschriften'
              href='https://www.circulaw.nl/measures/maatwerkvoorschriften-bestaande-bouw'
              coords='80,1696,433,1727'
              shape='rect'
            />
            <area
              target=''
              alt='Maatwerkvoorschriften'
              title='Maatwerkvoorschriften'
              href='https://www.circulaw.nl/measures/maatwerkvoorschriften-bestaande-bouw'
              coords='78,1743,433,1778'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsvergunning'
              title='Omgevingsvergunning'
              href='https://www.circulaw.nl/measures/activiteiten-waarvoor-een-omgevingsvergunning-nodig-is'
              coords='79,1791,434,1827'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsverordening'
              title='Omgevingsverordening'
              href='https://www.circulaw.nl/measures/omgevingswaarden-in-de-omgevingsverordening'
              coords='539,1813,889,1847'
              shape='rect'
            />
            <area
              target=''
              alt='Omgevingsverordening'
              title='Omgevingsverordening'
              href='https://www.circulaw.nl/measures/omgevingswaarden-in-de-omgevingsverordening'
              coords='539,1874,892,1909'
              shape='rect'
            />
            <area
              target=''
              alt='Voorkeursrecht'
              title='Voorkeursrecht'
              href='https://www.circulaw.nl/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'
              coords='996,1584,1350,1621'
              shape='rect'
            />
            <area
              target=''
              alt='Onteigening'
              title='Onteigening'
              href='https://www.circulaw.nl/measures/onteigening'
              coords='1000,1635,1355,1669'
              shape='rect'
            />
            <area
              target=''
              alt='Voorkeursrecht'
              title='Voorkeursrecht'
              href='https://www.circulaw.nl/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'
              coords='999,1685,1352,1720'
              shape='rect'
            />
            <area
              target=''
              alt='Onteigening'
              title='Onteigening'
              href='https://www.circulaw.nl/measures/onteigening'
              coords='997,1737,1351,1775'
              shape='rect'
            />
            <area
              target=''
              alt='Voorkeursrecht'
              title='Voorkeursrecht'
              href='https://www.circulaw.nl/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'
              coords='1000,1792,1355,1829'
              shape='rect'
            />
            <area
              target=''
              alt='Onteigening'
              title='Onteigening'
              href='https://www.circulaw.nl/measures/onteigening'
              coords='995,1852,1347,1885'
              shape='rect'
            />
            <area
              target=''
              alt='Tenders bij gronduitgifte'
              title='Tenders bij gronduitgifte'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'
              coords='995,2258,1352,2296'
              shape='rect'
            />
            <area
              target=''
              alt='Tenders bij gronduitgifte'
              title='Tenders bij gronduitgifte'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'
              coords='996,2310,1351,2344'
              shape='rect'
            />
            <area
              target=''
              alt='Tenders bij gronduitgifte'
              title='Tenders bij gronduitgifte'
              href='https://www.circulaw.nl/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'
              coords='993,2360,1353,2395'
              shape='rect'
            />
            <area
              target=''
              alt='Geschiktheidseisen'
              title='Geschiktheidseisen'
              href='https://www.circulaw.nl/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              coords='79,2522,436,2561'
              shape='rect'
            />
            <area
              target=''
              alt='Gunningscriterium levenscyclus'
              title='Gunningscriterium levenscyclus'
              href='https://www.circulaw.nl/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'
              coords='81,2574,434,2608'
              shape='rect'
            />
            <area
              target=''
              alt='Subsgunningscriteria'
              title='Subsgunningscriteria'
              href='https://www.circulaw.nl/measures/houtbouw-uitvragen-via-subgunningscriteria'
              coords='78,2624,436,2659'
              shape='rect'
            />
            <area
              target=''
              alt='Houtbouw keurmerk'
              title='Houtbouw keurmerk'
              href='https://www.circulaw.nl/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'
              coords='80,2678,431,2709'
              shape='rect'
            />
            <area
              target=''
              alt='Technische specificaties'
              title='Technische specificaties'
              href='https://www.circulaw.nl/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              coords='81,2727,435,2763'
              shape='rect'
            />
            <area
              target=''
              alt='Uitvoeringsvoorwaarden'
              title='Uitvoeringsvoorwaarden'
              href='https://www.circulaw.nl/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              coords='80,2777,435,2814'
              shape='rect'
            />
            <area
              target=''
              alt='Geschiktheidseisen'
              title='Geschiktheidseisen'
              href='https://www.circulaw.nl/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              coords='81,2828,435,2863'
              shape='rect'
            />
            <area
              target=''
              alt='Gunningscriterium levenscyclus'
              title='Gunningscriterium levenscyclus'
              href='https://www.circulaw.nl/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'
              coords='79,2880,434,2913'
              shape='rect'
            />
            <area
              target=''
              alt='Subsgunningscriteria'
              title='Subsgunningscriteria'
              href='https://www.circulaw.nl/measures/houtbouw-uitvragen-via-subgunningscriteria'
              coords='80,2928,435,2964'
              shape='rect'
            />
            <area
              target=''
              alt='Houtbouw keurmerk'
              title='Houtbouw keurmerk'
              href='https://www.circulaw.nl/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'
              coords='80,2976,435,3015'
              shape='rect'
            />
            <area
              target=''
              alt='Technische specificaties'
              title='Technische specificaties'
              href='https://www.circulaw.nl/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              coords='80,3028,434,3064'
              shape='rect'
            />
            <area
              target=''
              alt='Uitvoeringsvoorwaarden'
              title='Uitvoeringsvoorwaarden'
              href='https://www.circulaw.nl/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              coords='79,3079,433,3113'
              shape='rect'
            />
            <area
              target=''
              alt='Geschiktheidseisen'
              title='Geschiktheidseisen'
              href='https://www.circulaw.nl/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              coords='79,3128,436,3162'
              shape='rect'
            />
            <area
              target=''
              alt='Gunningscriterium levenscyclus'
              title='Gunningscriterium levenscyclus'
              href='https://www.circulaw.nl/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'
              coords='78,3177,434,3213'
              shape='rect'
            />
            <area
              target=''
              alt='Subsgunningscriteria'
              title='Subsgunningscriteria'
              href='https://www.circulaw.nl/measures/houtbouw-uitvragen-via-subgunningscriteria'
              coords='81,3229,435,3264'
              shape='rect'
            />
            <area
              target=''
              alt='Houtbouw keurmerk'
              title='Houtbouw keurmerk'
              href='https://www.circulaw.nl/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'
              coords='80,3276,435,3314'
              shape='rect'
            />
            <area
              target=''
              alt='Technische specificaties'
              title='Technische specificaties'
              href='https://www.circulaw.nl/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              coords='79,3328,435,3362'
              shape='rect'
            />
            <area
              target=''
              alt='Uitvoeringsvoorwaarden'
              title='Uitvoeringsvoorwaarden'
              href='https://www.circulaw.nl/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              coords='80,3377,434,3413'
              shape='rect'
            />
            <area
              target=''
              alt='Innovatiepartnerschap'
              title='Innovatiepartnerschap'
              href='https://www.circulaw.nl/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'
              coords='538,2524,888,2562'
              shape='rect'
            />
            <area
              target=''
              alt='Medegingingsprocedure'
              title='Medegingingsprocedure'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              coords='537,2574,893,2610'
              shape='rect'
            />
            <area
              target=''
              alt='Concurrentiegerichte dialoog'
              title='Concurrentiegerichte dialoog'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'
              coords='536,2622,893,2661'
              shape='rect'
            />
            <area
              target=''
              alt='Innovatiepartnerschap'
              title='Innovatiepartnerschap'
              href='https://www.circulaw.nl/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'
              coords='534,2678,893,2712'
              shape='rect'
            />
            <area
              target=''
              alt='Medegingingsprocedure'
              title='Medegingingsprocedure'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              coords='536,2727,892,2762'
              shape='rect'
            />
            <area
              target=''
              alt='Concurrentiegerichte dialoog'
              title='Concurrentiegerichte dialoog'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'
              coords='539,2778,889,2814'
              shape='rect'
            />
            <area
              target=''
              alt='Innovatiepartnerschap'
              title='Innovatiepartnerschap'
              href='https://www.circulaw.nl/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'
              coords='534,2830,893,2863'
              shape='rect'
            />
            <area
              target=''
              alt='Medegingingsprocedure'
              title='Medegingingsprocedure'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              coords='537,2880,892,2913'
              shape='rect'
            />
            <area
              target=''
              alt='Concurrentiegerichte dialoog'
              title='Concurrentiegerichte dialoog'
              href='https://www.circulaw.nl/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'
              coords='537,2928,892,2965'
              shape='rect'
            />
            <area
              target=''
              alt='MPG als subselectiecriterium'
              title='MPG als subselectiecriterium'
              href='https://www.circulaw.nl/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'
              coords='997,2504,1355,2540'
              shape='rect'
            />
            <area
              target=''
              alt='MPG als subselectiecriterium'
              title='MPG als subselectiecriterium'
              href='https://www.circulaw.nl/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'
              coords='997,2552,1351,2591'
              shape='rect'
            />
            <area
              target=''
              alt='MPG als subselectiecriterium'
              title='MPG als subselectiecriterium'
              href='https://www.circulaw.nl/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'
              coords='1000,2605,1355,2640'
              shape='rect'
            />
          </map>
        </div>
      </div>
    </Layout>
  );
}
