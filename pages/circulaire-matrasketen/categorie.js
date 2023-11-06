import Layout from '../../components/layouts/layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import ExpertiseLayout from '../../components/layouts/expertise-layout';

export default function InfoPage() {
  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <ExpertiseLayout
        thema='circulaire-matrasketen'
        title='Samenhang instrumenten circulaire matrassen'
        icon={mattressIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
    </Layout>
  );
}
