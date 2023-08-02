
// create new page in cms and front end.
// Product Chain layout.
// on product chain pages we need following components. 
// 

import Layout from '../../components/layouts/layout';
import TransitionAgendaLayout from '../../components/layouts/transition-agenda-layout';
import { client } from '../../lib/sanity';
import { homePageThemaQuery } from '../../lib/queries';

export default function Bouw({homePageThemaData}) {
    return (
<Layout>
    <TransitionAgendaLayout themeData = {homePageThemaData}>


    </TransitionAgendaLayout>
</Layout>

    )
    
}

export async function getStaticProps() {
    const homePageThemaData = await client.fetch(homePageThemaQuery);
    return {
      props: {
        homePageThemaData,
      },
      revalidate: 1,
    };
  }
  