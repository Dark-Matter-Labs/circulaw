import Layout from '@/components/layouts/layout';
import WelkeLayout from '@/components/layouts/welke-layout';
import { client } from '@/lib/sanity';
import { creatQuery } from '@/lib/queries';

const thema = 'voedselverspilling';

export default function InfoPage({ ...props }) {
  return (
    <Layout title='CircuLaw - Welke Overheid Heeft Voedselverspilling voorkomen'>
      <WelkeLayout
        thema={thema}
        transitionAgenda='biomassa-en-voedsel'
        title='Welke overheid kan welk instrument gebruiken voor voedselverspilling?'
        p1=''
        p2=''
        p3=''
        p4=''
        allRegionLaws={props.allRegionLaws}
        natLaws={props.natLaws}
        provLaws={props.provLaws}
        gemLaws={props.gemLaws}
      />
    </Layout>
  );
}
export async function getStaticProps() {
  const allRegionLaws = await client.fetch(creatQuery(thema).allRegions);
  const natLaws = await client.fetch(creatQuery(thema).national);
  const provLaws = await client.fetch(creatQuery(thema).provincial);
  const gemLaws = await client.fetch(creatQuery(thema).local);
  return {
    props: {
      allRegionLaws: allRegionLaws,
      natLaws: natLaws,
      provLaws: provLaws,
      gemLaws: gemLaws,
    },
    revalidate: 1,
  };
}
