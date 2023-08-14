import Layout from '../../components/layouts/layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';

export default function InfoPage() {
  let url = 'https://circulaw-staging.vercel.app';

  if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
  } else {
    url = 'https://circulaw.nl';
  }

  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <SamenhangLayout
        thema='circulaire-matrasketen'
        title='Samenhang instrumenten circulaire matrassen'
        icon={mattressIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className='bg-green-600 lgNav:border-b-0 border-black-white-100 mt-10'>
        <div className='global-margin'>
          <svg viewBox='0 0 2908 5048'>
            <image width='2908' height='5048' xlinkHref='/samenhang/samh-matress.png'></image>{' '}
            <a xlinkHref={url + '/measures/de-milieu-investeringsaftrek-(mia)'}>
              <rect x='218' y='622' fill='#fff' opacity='0' width='717' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/verlaging-omzetbelasting-bij-matras-als-dienst'}>
              <rect x='217' y='726' fill='#fff' opacity='0' width='717' height='75'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/willekeurige-afschrijving-op-milieu-investeringen-inzetten-(vamil)'
              }
            >
              <rect x='218' y='826' fill='#fff' opacity='0' width='718' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/subsidie-voor-circulaire-matrassen'}>
              <rect x='187' y='2104' fill='#fff' opacity='0' width='715' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/subsidie-voor-circulaire-matrassen'}>
              <rect x='186' y='2211' fill='#fff' opacity='0' width='719' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/subsidie-voor-circulaire-matrassen'}>
              <rect x='187' y='2315' fill='#fff' opacity='0' width='714' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/matrassen-inkopen-als-dienst---product-as-a-service'}>
              <rect x='186' y='3396' fill='#fff' opacity='0' width='715' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/matrassen-inkopen-als-dienst---product-as-a-service'}>
              <rect x='184' y='3503' fill='#fff' opacity='0' width='718' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/matrassen-inkopen-als-dienst---product-as-a-service'}>
              <rect x='183' y='3602' fill='#fff' opacity='0' width='721' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/inkoop-van-circulaire-matrassen'}>
              <rect x='1092' y='2139' fill='#fff' opacity='0' width='719' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/inkoop-van-circulaire-matrassen'}>
              <rect x='1095' y='2252' fill='#fff' opacity='0' width='717' height='76'></rect>
            </a>
            <a xlinkHref={url + '/measures/inkoop-van-circulaire-matrassen'}>
              <rect x='1094' y='2352' fill='#fff' opacity='0' width='716' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/procedure-van-de-concurrentiegerichte-dialoog-'}>
              <rect x='1078' y='3395' fill='#fff' opacity='0' width='716' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/mededingingsprocedure-met-onderhandeling-'}>
              <rect x='1077' y='3495' fill='#fff' opacity='0' width='717' height='74'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-een-innovatiepartnerschap-'
              }
            >
              <rect x='1078' y='3595' fill='#fff' opacity='0' width='716' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/procedure-van-de-concurrentiegerichte-dialoog-'}>
              <rect x='1079' y='3699' fill='#fff' opacity='0' width='714' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/mededingingsprocedure-met-onderhandeling-'}>
              <rect x='1077' y='3800' fill='#fff' opacity='0' width='720' height='77'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-een-innovatiepartnerschap-'
              }
            >
              <rect x='1079' y='3901' fill='#fff' opacity='0' width='721' height='78'></rect>
            </a>
            <a xlinkHref={url + '/measures/procedure-van-de-concurrentiegerichte-dialoog-'}>
              <rect x='1079' y='4007' fill='#fff' opacity='0' width='718' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/mededingingsprocedure-met-onderhandeling-'}>
              <rect x='1077' y='4117' fill='#fff' opacity='0' width='716' height='75'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-een-innovatiepartnerschap-'
              }
            >
              <rect x='1078' y='4216' fill='#fff' opacity='0' width='718' height='79'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/circulariteit-bevorderen-via-het-landelijk-afvalbeheerplan'
              }
            >
              <rect x='1998' y='555' fill='#fff' opacity='0' width='723' height='82'></rect>
            </a>
            <a xlinkHref={url + '/measures/statiegeld-en-matrassen'}>
              <rect x='2000' y='654' fill='#fff' opacity='0' width='717' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/terugnamegarantie-voor-matrassen'}>
              <rect x='2002' y='761' fill='#fff' opacity='0' width='715' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/terugnamegarantie-voor-matrassen'}>
              <rect x='2001' y='866' fill='#fff' opacity='0' width='712' height='81'></rect>
            </a>
            <a xlinkHref={url + '/measures/afvalstoffenheffing-gemeenten'}>
              <rect x='1998' y='972' fill='#fff' opacity='0' width='718' height='85'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/circulariteit-bevorderen-via-het-landelijk-afvalbeheerplan'
              }
            >
              <rect x='1998' y='1072' fill='#fff' opacity='0' width='722' height='81'></rect>
            </a>
            <a
              xlinkHref={url + '/measures/circulariteit-bevorderen-via-de-afvalstoffenverordening'}
            >
              <rect x='2001' y='1174' fill='#fff' opacity='0' width='722' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/terugnamegarantie-voor-matrassen'}>
              <rect x='1992' y='1274' fill='#fff' opacity='0' width='722' height='80'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/sponsoring-door-matrasproducenten---commerci%C3%ABle-mediadiensten'
              }
            >
              <rect x='1982' y='2165' fill='#fff' opacity='0' width='723' height='77'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulaire-matrassen-in-buitenreclame'}>
              <rect x='1987' y='2262' fill='#fff' opacity='0' width='714' height='79'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/reclameverbod-matrassen---commerci%C3%ABle-mediadiensten-'
              }
            >
              <rect x='1990' y='2363' fill='#fff' opacity='0' width='714' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/reclameverbod-matrassen---publieke-mediadiensten'}>
              <rect x='1988' y='2464' fill='#fff' opacity='0' width='716' height='86'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulaire-matrassen-in-buitenreclame'}>
              <rect x='1986' y='2574' fill='#fff' opacity='0' width='721' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulaire-matrassen-in-buitenreclame'}>
              <rect x='1985' y='2678' fill='#fff' opacity='0' width='722' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-uitvragen-via-subgunningscriteria-'}>
              <rect x='2001' y='3431' fill='#fff' opacity='0' width='717' height='94'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/circulariteit-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden-'
              }
            >
              <rect x='2006' y='3541' fill='#fff' opacity='0' width='713' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-verwerken-in-geschiktheidseisen'}>
              <rect x='2001' y='3643' fill='#fff' opacity='0' width='716' height='76'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-technische-specificaties-'
              }
            >
              <rect x='2003' y='3740' fill='#fff' opacity='0' width='716' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-uitvragen-via-subgunningscriteria-'}>
              <rect x='2001' y='3844' fill='#fff' opacity='0' width='717' height='83'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/circulariteit-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden-'
              }
            >
              <rect x='2005' y='3951' fill='#fff' opacity='0' width='708' height='75'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-verwerken-in-geschiktheidseisen'}>
              <rect x='2001' y='4046' fill='#fff' opacity='0' width='716' height='81'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-technische-specificaties-'
              }
            >
              <rect x='1995' y='4146' fill='#fff' opacity='0' width='721' height='79'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-uitvragen-via-subgunningscriteria-'}>
              <rect x='2000' y='4251' fill='#fff' opacity='0' width='718' height='77'></rect>
            </a>
            <a
              xlinkHref={
                url + '/measures/circulariteit-verwerken-in-de-bijzondere-uitvoeringsvoorwaarden-'
              }
            >
              <rect x='1994' y='4349' fill='#fff' opacity='0' width='720' height='80'></rect>
            </a>
            <a xlinkHref={url + '/measures/circulariteit-verwerken-in-geschiktheidseisen'}>
              <rect x='1997' y='4448' fill='#fff' opacity='0' width='723' height='82'></rect>
            </a>
            <a
              xlinkHref={
                url +
                '/measures/stimuleer-de-circulariteit-van-matrassen-met-technische-specificaties-'
              }
            >
              <rect x='2001' y='4552' fill='#fff' opacity='0' width='721' height='74'></rect>
            </a>
          </svg>
        </div>
      </div>
    </Layout>
  );
}
