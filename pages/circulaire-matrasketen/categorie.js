import Layout from '../../components/layouts/layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import ExpertiseLayout from '../../components/layouts/expertise-layout';
import { client } from '../../lib/sanity';

const expertiseDataQuerie = `
*[_type == "measure" && thema == "circulaire-matrasketen"] {
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
      <ExpertiseLayout
        thema='circulaire-matrasketen'
        expertiseData={expertiseData}
        title='Samenhang instrumenten circulaire matrassen'
        icon={mattressIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
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
