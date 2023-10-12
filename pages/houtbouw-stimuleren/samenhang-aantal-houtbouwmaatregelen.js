import Layout from '../../components/layouts/layout';
import woodIcon from '../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../components/layouts/samenhang-layout';

export default function InfoPage() {

  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <SamenhangLayout
        thema='houtbouw-stimuleren'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className=''>
        <div className='global-margin'>
         
        </div>
      </div>
    </Layout>
  );
}
