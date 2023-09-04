import Layout from '/components/layouts/layout';
import MeasuresLayout from '../../../../components/layouts/measures-layout';
import IconWood from '../../../../public/icons/woodIcon.svg';
import { client } from '../../../../lib/sanity';
import { getListPageData } from '../../../../lib/queries';

const thema = 'houtbouw-stimuleren';

export default function Measures({ instruments }) {
  return (
    <Layout title='CircuLaw - Houtbouw stimuleren'>
      <MeasuresLayout
        totalNumberOfLaws={instruments.length}
        title='Houtbouw stimuleren'
        thema={thema}
        heading='Instrumenten om de inzet van hout in de bouw te bevorderen'
        introPara={`We hebben ${instruments.length} kansrijke instrumenten gevonden die je kunt inzetten om de houtbouwtransitie te versnellen. Sommige van deze instrumenten zijn al eerder toegepast, andere nog niet. Ga aan de slag! Met jouw ervaringen help je ook anderen weer verder.`}
        icon={IconWood}
        searchTitle='Zoek in houtbouw stimuleren'
        instruments={instruments}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const instruments = await client.fetch(getListPageData(thema));
  return { props: { instruments }, revalidate: 1 };
}
