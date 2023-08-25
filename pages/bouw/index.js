
// create new page in cms and front end.
// Product Chain layout.
// on product chain pages we need following components. 
// 

import Layout from '../../components/layouts/layout';
import TransitionAgendaLayout from '../../components/layouts/transition-agenda-layout';
import { client } from '../../lib/sanity';
import { getThemaCardData, getTransitionAgendaData } from '../../lib/queries';


// update homepage thema query to get only themas within the 
const transtionAgenda = 'bouw'

export default function Bouw({themaCardData, transitionAgendaData}) {
  console.log(transitionAgendaData, 'hello')
  return (
<Layout>
    <TransitionAgendaLayout themaCardData={themaCardData} transitionAgendaData={transitionAgendaData}>


    </TransitionAgendaLayout>
</Layout>

    )
    
}

export async function getStaticProps() {
  const transitionAgendaData = await client.fetch(getTransitionAgendaData(transtionAgenda))
  const themaCardData = await client.fetch(getThemaCardData(transtionAgenda))
    return {
      props: {
        transitionAgendaData,
        themaCardData,
      },
      revalidate: 1,
    };
  }
  