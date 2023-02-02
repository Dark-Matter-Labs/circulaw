import { useEffect } from 'react';
import Layout from '../../components/layouts/layout';
import ThemeLayout from '../../components/layouts/theme-index-layout';
import client from '../../lib/sanity';
import LinkIcon from '../../components/link-icon';

const windQuery = `
*[_type == "measure" && thema == "circulaire-windturbines"]
`;

export default function Windturbine({ laws }) {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <Layout>
      <ThemeLayout
        // header
        title='Circulaire windturbines'
        thema='circulaire-windturbines'
        headerSubtitle='Door meer windturbines in te zetten en door windturbines te ontwikkelen die zelf circulair zijn,  kunnen we grote stappen zetten om onze samenleving circulairder te maken.'
        // headerLinkText='' // will be displayed in the same sentence as header subtitle
        // headerLinkURL='/'
        bgHero='bg-windmill-hero'
        heroImage='/windturbineHero.jpg'
        // number of laws
        numberOfLaws={laws.length}
        cardTitle='Overzichten van instrumenten die circulaire windturbines bevorderen'
        // card titles
        listTitle={`Lijst van ${laws.length} instrumenten`}
        samenhangTitle='Samenhang álle instrumenten voor circulaire windturbines in beeld'
        waarvoorTitle='Wie is waarvoor bevoegd?'
        // card texts
        listText='Alle instrumenten op een rijtje, met handige filters om snel te vinden wat je zoekt.'
        samenhangText='Zie hoe instrumenten zich tot elkaar verhouden en hoe je ze met elkaar kunt combineren.'
        waarvoorText='Zonder samenwerking geen succes. Maar dan moet je wel weten wie waarvoor bevoegd en verantwoordelijk is.'
        // card links
        cardLinkList='/measures/windturbines'
        cardLinkSamenhang='/circulaire-windturbines/samenhang-maatregelen'
        cardLinkWaarvoor='/circulaire-windturbines/welke-overheid-heeft'
        extendedMeasureHeading='instrumenten om circulariteit van windturbines te bevorderen'
        extendedMeasureSubtitle='Met voorbeelden.'
      />
      <div className='global-margin pt-10 pb-20'>
        <p className='p-lg'>
          De informatie over windturbines is mede tot stand gekomen door nauwe samenwerking met de{' '}
          <span className='text-green-500 link-lg inline-block'>
            <a href='https://www.noord-holland.nl/' target='_blank' rel='noopener noreferrer'>
              Provincie Noord-Holland
              <LinkIcon />
            </a>
          </span>
          {/* TODO: unhide div when PDF is ready */}
          <div className='hidden'>
            {' '}
            Zie het{' '}
            <span className='text-green-500 link-lg inline-block'>
              rapport-Analyse CircuLaw: Circulaire Windturbines (download pdf)
            </span>
            .{' '}
          </div>{' '}
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const laws = await client.fetch(windQuery);
  return { props: { laws: laws } };
}
