import Layout from '../../components/layouts/layout';
import SamenhangLayout from '../../components/layouts/samenhang-layout';
import WindmillIcon from '../../public/icons/windmill.png';

export default function InfoPage() {
  return (
    <Layout title='CircuLaw - Samenhang Matrassen'>
      <SamenhangLayout
        thema='circulaire-windturbines'
        title='Samenhang instrumenten circulaire windturbines'
        icon={WindmillIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className=''>
        <div className='global-margin'></div>
      </div>
    </Layout>
  );
}
