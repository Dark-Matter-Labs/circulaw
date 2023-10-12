import Layout from '../../components/layouts/layout';
import mattressIcon from '../../public/icons/matressIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';

export default function InfoPage() {
 
  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <SamenhangLayout
        thema='circulaire-matrasketen'
        title='Samenhang instrumenten circulaire matrassen'
        icon={mattressIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
   
    </Layout>
  );
}
