// create new page in cms and front end.
// Product Chain layout.
// on product chain pages we need following components.
//

import Layout from '../../components/layouts/layout';
import TransitionAgendaLayout from '../../components/layouts/transition-agenda-layout';
import { client } from '../../lib/sanity';
import { getThemaCardData, getTransitionAgendaData } from '../../lib/queries';


// need to add breadcrumb on this page. Not sure if we want the HOME option as it was on the thema page. 
const transtionAgenda = 'bouw';

export default function Bouw({ themaCardData, transitionAgendaData }) {
  return (
    <Layout>
      <TransitionAgendaLayout
        themaCardData={themaCardData}
        transitionAgendaData={transitionAgendaData}
      ></TransitionAgendaLayout>
    </Layout>
  );
}

export async function getStaticProps() {
  const transitionAgendaData = await client.fetch(getTransitionAgendaData(transtionAgenda));
  const themaCardData = await client.fetch(getThemaCardData(transtionAgenda));
  return {
    props: {
      transitionAgendaData,
      themaCardData,
    },
    revalidate: 1,
  };
}
