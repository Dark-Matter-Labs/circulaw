import Layout from '../../components/layouts/layout';
import SamenhangLayout from '../../components/layouts/samenhang-layout';
import WindmillIcon from '../../public/icons/windmill.png';
import { client } from '../../lib/sanity';

const expertiseDataQuerie = `
*[_type == "measure" && thema == "circulaire-windturbines"] {
  "slug": slug.current,
  titel,
  overheidslaag,
  beleid,
  beleidSubCategory,
  inkoop,
  inkoopSubCategory,
  grondpositie,
  grondpositieSubCategory,
  subsidie,
  fiscaal,
}
`;


export default function InfoPage({expertiseData}) {
  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <SamenhangLayout
        thema='circulaire-windturbines'
        transitionAgenda = ''
        title='Samenhang instrumenten circulaire windturbines'
        icon={WindmillIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
        expertiseData={expertiseData}
      />
    </Layout>
  );
}


export async function getStaticProps() {
  const expertiseData = await client.fetch(expertiseDataQuerie);
  return {
    props: {
      expertiseData,
    },
    revalidate: 1,
  };
}