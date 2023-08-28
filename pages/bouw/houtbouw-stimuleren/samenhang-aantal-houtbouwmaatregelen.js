import Layout from '../../../components/layouts/layout';
import woodIcon from '../../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../../components/layouts/samenhang-layout';
import { client } from '../../../lib/sanity';

const inkoopBeleidQuery = `
*[_type == "measure" && thema == "houtbouw-stimuleren" && inkoop == true && "beleid" in vinkoopSubCategory][]{
  titel,
  inkoop,
  vinkoopSubCategory,
}
`;

const inkoopStrategieQuery = `
*[_type == "measure" && thema == "houtbouw-stimuleren" && inkoop == true && "strategie" in vinkoopSubCategory][]{
  titel,
  inkoop,
  vinkoopSubCategory,
}
`;

const inkoopContractenQuery = `
*[_type == "measure" && thema == "houtbouw-stimuleren" && inkoop == true && "contracten" in vinkoopSubCategory][]{
  titel,
  inkoop,
  vinkoopSubCategory,
}
`;

export default function InfoPage({ inkoopBeleidLaws, inkoopStrategieLaws, inkoopContractenLaws }) {
  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <SamenhangLayout
        thema='houtbouw-stimuleren'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className='py-20 global-margin'>
        <div>
          <h1 className='mobile sm:desktop'>Inkoop</h1>
        </div>
        {inkoopBeleidLaws.length > 0 && (
          <div>
            <h2 className='mobile sm:desktop'>Beleid</h2>
            {inkoopBeleidLaws?.map((law) => (
              <div key={law.titel}>
                <h3>{law.titel}</h3>
              </div>
            ))}
          </div>
        )}

        {inkoopStrategieLaws.length > 0 && (
          <div>
            <h2 className='mobile sm:desktop'>Strategie</h2>
            {inkoopStrategieLaws?.map((law) => (
              <div key={law.titel}>
                <h3>{law.titel}</h3>
              </div>
            ))}
          </div>
        )}

        {inkoopContractenLaws.length > 0 && (
          <div>
            <h2 className='mobile sm:desktop'>Contracten</h2>
            {inkoopContractenLaws?.map((law) => (
              <div key={law.titel}>
                <h3>{law.titel}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const inkoopBeleidLaws = await client.fetch(inkoopBeleidQuery);
  const inkoopStrategieLaws = await client.fetch(inkoopStrategieQuery);
  const inkoopContractenLaws = await client.fetch(inkoopContractenQuery);
  return {
    props: {
      inkoopBeleidLaws,
      inkoopStrategieLaws,
      inkoopContractenLaws,
    },
    revalidate: 1,
  };
}
