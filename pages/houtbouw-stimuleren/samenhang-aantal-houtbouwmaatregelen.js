import Layout from '../../components/layouts/layout';
import woodIcon from '../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';

export default function InfoPage() {
  let url = 'https://circulaw-staging.vercel.app';

  if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
  } else {
    url = 'https://circulaw.nl';
  }
  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <SamenhangLayout
        thema='houtbouw-stimuleren'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className='bg-green-600 lgNav:border-b border-grey-100 mt-10'>
        <div className='global-margin'>
          <svg viewBox='0 0 3098 7296'>
            <image width='3098' height='7296' xlinkHref='/samenhang/samh-hou.png'></image>{' '}
            <a xlinkHref={url + '/measures/gelijkwaardigheidsbepaling'}>
              <rect x='553' y='608' fill='#fff' opacity='0' width='714' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/experimenteerbepaling'}>
              <rect x='552' y='711' fill='#fff' opacity='0' width='716' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/gelijkwaardigheidsbepaling'}>
              <rect x='550' y='808' fill='#fff' opacity='0' width='717' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/experimenteerbepaling'}>
              <rect x='548' y='908' fill='#fff' opacity='0' width='718' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/gelijkwaardigheidsbepaling'}>
              <rect x='545' y='1008' fill='#fff' opacity='0' width='722' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/experimenteerbepaling'}>
              <rect x='549' y='1109' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/regels-hergebruik-producten'}>
              <rect x='164' y='1727' fill='#fff' opacity='0' width='717' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/sloopmelding'}>
              <rect x='163' y='1827' fill='#fff' opacity='0' width='718' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/meer-materiaalgroepen-eisen-bij-sloopwerkzaamheden'}>
              <rect x='162' y='1934' fill='#fff' opacity='0' width='719' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/meldingsplicht-ontvangst-afvalstoffen'}>
              <rect x='162' y='2043' fill='#fff' opacity='0' width='720' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/meldingsplicht-voorbereiding-houtafval-voor-recycling'}>
              <rect x='164' y='2158' fill='#fff' opacity='0' width='717' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/maatwerkvoorschriften-bestaande-bouw'}>
              <rect x='159' y='3292' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/maatwerkvoorschriften-bestaande-bouw'}>
              <rect x='159' y='3391' fill='#fff' opacity='0' width='719' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/maatwerkvoorschriften-bestaande-bouw'}>
              <rect x='160' y='3489' fill='#fff' opacity='0' width='716' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/activiteiten-waarvoor-een-omgevingsvergunning-nodig-is'}>
              <rect x='159' y='3592' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'}>
              <rect x='153' y='5069' fill='#fff' opacity='0' width='719' height='76'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              }
            >
              <rect x='152' y='5169' fill='#fff' opacity='0' width='718' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'}>
              <rect x='154' y='5269' fill='#fff' opacity='0' width='716' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'}>
              <rect x='154' y='5372' fill='#fff' opacity='0' width='718' height='77'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              }
            >
              <rect x='153' y='5473' fill='#fff' opacity='0' width='717' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'}>
              <rect x='154' y='5577' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/vernieuw-houtbouw-met-een-innovatiepartnerschap'}>
              <rect x='154' y='5678' fill='#fff' opacity='0' width='717' height='76'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/innovatieve-houtbouw-via-de-mededingingsprocedure-met-onderhandeling'
              }
            >
              <rect x='151' y='5777' fill='#fff' opacity='0' width='720' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/innovatieve-houtbouw-via-concurrentiegerichte-dialoog'}>
              <rect x='154' y='5878' fill='#fff' opacity='0' width='715' height='77'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              }
            >
              <rect x='1076' y='5068' fill='#fff' opacity='0' width='721' height='76'></rect>
            </a>
            <a
              xlinkHref={url + '/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'}
            >
              <rect x='1077' y='5170' fill='#fff' opacity='0' width='715' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'}>
              <rect x='1077' y='5371' fill='#fff' opacity='0' width='718' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-uitvragen-via-subgunningscriteria'}>
              <rect x='1079' y='5265' fill='#fff' opacity='0' width='716' height='81'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              }
            >
              <rect x='1077' y='5475' fill='#fff' opacity='0' width='717' height='74'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              }
            >
              <rect x='1078' y='5576' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-uitvragen-via-subgunningscriteria'}>
              <rect x='1078' y='5875' fill='#fff' opacity='0' width='718' height='79'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              }
            >
              <rect x='1076' y='5677' fill='#fff' opacity='0' width='720' height='77'></rect>
            </a>
            <a
              xlinkHref={url + '/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'}
            >
              <rect x='1079' y='5779' fill='#fff' opacity='0' width='715' height='74'></rect>
            </a>
            <a xlinkHref={url + '/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'}>
              <rect x='1075' y='5975' fill='#fff' opacity='0' width='719' height='79'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              }
            >
              <rect x='1076' y='6075' fill='#fff' opacity='0' width='717' height='80'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              }
            >
              <rect x='1076' y='6178' fill='#fff' opacity='0' width='720' height='76'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/ervaring-met-houtbouw-als-geschiktheidseis-stellen-bij-aanbesteding'
              }
            >
              <rect x='1075' y='6274' fill='#fff' opacity='0' width='718' height='78'></rect>
            </a>
            <a
              xlinkHref={url + '/measures/levenscycluskosten-als-gunningscriterium,-meer-houtbouw'}
            >
              <rect x='1073' y='6376' fill='#fff' opacity='0' width='721' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-uitvragen-via-subgunningscriteria'}>
              <rect x='1077' y='6476' fill='#fff' opacity='0' width='714' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/eis-een-(houtbouw-)keurmerk-bij-aanbesteding'}>
              <rect x='1075' y='6575' fill='#fff' opacity='0' width='721' height='81'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/hoe-technische-specificaties-in-overheidsopdrachten-houtbouw-kunnen-bevorderen'
              }
            >
              <rect x='1075' y='6676' fill='#fff' opacity='0' width='719' height='78'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/houtbouw-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden'
              }
            >
              <rect x='1080' y='6777' fill='#fff' opacity='0' width='717' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-in-de-omgevingsverordening'}>
              <rect x='1075' y='2537' fill='#fff' opacity='0' width='715' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-in-het-omgevingsplan'}>
              <rect x='1075' y='2640' fill='#fff' opacity='0' width='715' height='73'></rect>
            </a>
            <a xlinkHref={url + '/measures/omgevingswaarden-in-de-omgevingsverordening'}>
              <rect x='1075' y='3632' fill='#fff' opacity='0' width='719' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/omgevingswaarden-in-het-omgevingsplan'}>
              <rect x='1076' y='3752' fill='#fff' opacity='0' width='720' height='75'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              }
            >
              <rect x='2001' y='455' fill='#fff' opacity='0' width='712' height='82'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              }
            >
              <rect x='2001' y='563' fill='#fff' opacity='0' width='716' height='77'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/financiele-bijdrage-voor-houten-bouwwerken-op-basis-van-een-omgevingsvisie-of-programma'
              }
            >
              <rect x='2001' y='659' fill='#fff' opacity='0' width='717' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-een-plek-geven-in-de-nationale-omgevingsvisie'}>
              <rect x='1705' y='1413' fill='#fff' opacity='0' width='721' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'}>
              <rect x='1709' y='1515' fill='#fff' opacity='0' width='716' height='75'></rect>
            </a>
            <a
              xlinkHref={url + '/measures/houtbouw-een-plek-geven-in-de-provinciale-omgevingsvisie'}
            >
              <rect x='1708' y='1613' fill='#fff' opacity='0' width='720' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'}>
              <rect x='1709' y='1711' fill='#fff' opacity='0' width='719' height='79'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/houtbouw-een-plek-geven-in-de-gemeentelijke-omgevingsvisie'
              }
            >
              <rect x='1711' y='1812' fill='#fff' opacity='0' width='716' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-in-het-omgevingsprogramma'}>
              <rect x='1708' y='1912' fill='#fff' opacity='0' width='727' height='83'></rect>
            </a>
            <a xlinkHref={url + '/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'}>
              <rect x='1999' y='3167' fill='#fff' opacity='0' width='716' height='85'></rect>
            </a>
            <a xlinkHref={url + '/measures/onteigening'}>
              <rect x='1996' y='3268' fill='#fff' opacity='0' width='723' height='87'></rect>
            </a>
            <a xlinkHref={url + '/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'}>
              <rect x='1998' y='3375' fill='#fff' opacity='0' width='719' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/onteigening'}>
              <rect x='1997' y='3480' fill='#fff' opacity='0' width='717' height='82'></rect>
            </a>
            <a xlinkHref={url + '/measures/het-voorkeursrecht-als-aanjager-van-houtbouw'}>
              <rect x='1998' y='3592' fill='#fff' opacity='0' width='715' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/onteigening'}>
              <rect x='1996' y='3705' fill='#fff' opacity='0' width='724' height='82'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'}>
              <rect x='2000' y='4522' fill='#fff' opacity='0' width='717' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'}>
              <rect x='1997' y='4622' fill='#fff' opacity='0' width='718' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/houtbouw-bevorderen-door-tenders-bij-gronduitgifte'}>
              <rect x='1997' y='4722' fill='#fff' opacity='0' width='714' height='83'></rect>
            </a>
            <a xlinkHref={url + '/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'}>
              <rect x='1996' y='5012' fill='#fff' opacity='0' width='716' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'}>
              <rect x='1998' y='5112' fill='#fff' opacity='0' width='715' height='82'></rect>
            </a>
            <a xlinkHref={url + '/measures/mpg-als-subselectiecriterium-bij-gronduitgifte'}>
              <rect x='1998' y='5218' fill='#fff' opacity='0' width='715' height='73'></rect>
            </a>
          </svg>
        </div>
      </div>
    </Layout>
  );
}
