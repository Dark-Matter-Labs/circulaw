import Layout from '../../../components/layouts/layout';
import woodIcon from '../../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../../components/layouts/samenhang-layout';
// import { client } from '../../../lib/sanity';


export default function InfoPage() {
  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <SamenhangLayout
        thema='houtbouw-stimuleren'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
     <div className='py-20'>
      here goes new samenhang
     </div>
    </Layout>
  );
}


// need to have a query that includes the current transition agenda 
// all the measures ordered according to their metadata. 

