import { useState } from 'react';

import Layout from '../../../components/layouts/layout';
import woodIcon from '../../../public/icons/woodIcon.svg';
import SamenhangLayout from '../../../components/layouts/samenhang-layout';
import { client } from '../../../lib/sanity';
import SamenhagInstruments from '../../../components/samenhang-instruments';

// definging thema as that way we can keep the one getSamenhangData function for all samenhang pages.
// thema can also be product group.
const thema = 'houtbouw-stimuleren';

function getSamenhangData(thema, category, subCategory) {
  const queries = {
    beleid: `
    *[_type == "measure" && thema == "${thema}" && ${category} == true && "beleid" in ${subCategory}][]{
      titel,
      ${category},
      ${subCategory},
    }
    `,
    strategie: `*[_type == "measure" && thema == "${thema}" && ${category} == true && "strategie" in ${subCategory}][]{
      titel,
      ${category},
      ${subCategory},
    }`,
    contracten: `*[_type == "measure" && thema == "${thema}" && ${category} == true && "contracten" in ${subCategory}][]{
      titel,
      ${category},
      ${subCategory},
    }`,
  };
  return queries;
}

// need to fix vinkoop as it is meant to be inkoop.
const tabCategories = [
  {
    name: 'beleidsinstrumentenEnVergunningen',
    title: 'Beleids Instrumenten En Vergunningen',
    subCategory: 'beleidsinstrumentenEnVergunningenSubCategory',
  },
  { name: 'verkoop', title: 'Verkoop', subCategory: 'verkoopSubCategory' },
  { name: 'inkoop', title: 'Inkoop', subCategory: 'vinkoopSubCategory' },
  { name: 'financiering', title: 'Financiering', subCategory: 'financieringSubCategory' },
  { name: 'fiscaal', title: 'Fiscaal', subCategory: 'fiscaalSubCategory' },
];

// there are so many props and queries. Wondering if it is better to fetch all the data and filter on the front end or filter using the querires.
// I guess as they are being fetched statically it is better for performance to filter the laws on the server side vs client side.
export default function InfoPage({
  beleidsinstrumentenEnVergunningenBeleidLaws,
  beleidsinstrumentenEnVergunningenStrategieLaws,
  beleidsinstrumentenEnVergunningenContractenLaws,
  verkoopBeleidLaws,
  verkoopStrategieLaws,
  verkoopContractenLaws,
  inkoopBeleidLaws,
  inkoopStrategieLaws,
  inkoopContractenLaws,
  financieringBeleidLaws,
  financieringStrategieLaws,
  financieringContractenLaws,
  fiscaalBeleidLaws,
  fiscaalStrategieLaws,
  fiscaalContractenLaws,
}) {
  const [selected, setSelected] = useState('beleidsinstrumentenEnVergunningen');

  const beleidsinstrumentenEnVergunningen = [
    beleidsinstrumentenEnVergunningenBeleidLaws,
    beleidsinstrumentenEnVergunningenStrategieLaws,
    beleidsinstrumentenEnVergunningenContractenLaws,
  ];
  const verkoop = [verkoopBeleidLaws, verkoopStrategieLaws, verkoopContractenLaws];
  const inkoop = [inkoopBeleidLaws, inkoopStrategieLaws, inkoopContractenLaws];
  const financiering = [
    financieringBeleidLaws,
    financieringStrategieLaws,
    financieringContractenLaws,
  ];
  const fiscaal = [fiscaalBeleidLaws, fiscaalStrategieLaws, fiscaalContractenLaws];
  return (
    <Layout title='CircuLaw - Samenhang Aantal Houtbouwmaatregelen'>
      <SamenhangLayout
        thema='houtbouw-stimuleren'
        title='Samenhang instrumenten houtbouw'
        icon={woodIcon}
        p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
      />
      <div className='py-20 global-margin'>
        <div className='hidden sm:grid grid-cols-4'>
          <div className='hidden sm:grid col-span-1 grid-rows-5 gap-4'>
            <ul>
              {tabCategories.map((cat) => (
                <li key={cat.name} className='h-44 border border-green-800'>
                  <button className='w-full h-full' onClick={() => setSelected(cat.name)}>
                    <h3 className='desktop p-4'>{cat.title}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <SamenhagInstruments
            selected={selected}
            beleidsinstrumentenEnVergunningen={beleidsinstrumentenEnVergunningen}
            verkoop={verkoop}
            inkoop={inkoop}
            financiering={financiering}
            fiscaal={fiscaal}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const beleidsinstrumentenEnVergunningenBeleidLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[0].name, tabCategories[0].subCategory).beleid,
  );
  const beleidsinstrumentenEnVergunningenStrategieLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[0].name, tabCategories[0].subCategory).strategie,
  );
  const beleidsinstrumentenEnVergunningenContractenLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[0].name, tabCategories[0].subCategory).contracten,
  );

  const verkoopBeleidLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[1].name, tabCategories[1].subCategory).beleid,
  );
  const verkoopStrategieLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[1].name, tabCategories[1].subCategory).strategie,
  );
  const verkoopContractenLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[1].name, tabCategories[1].subCategory).contracten,
  );

  const inkoopBeleidLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[2].name, tabCategories[2].subCategory).beleid,
  );
  const inkoopStrategieLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[2].name, tabCategories[2].subCategory).strategie,
  );
  const inkoopContractenLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[2].name, tabCategories[2].subCategory).contracten,
  );

  const financieringBeleidLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[3].name, tabCategories[3].subCategory).beleid,
  );
  const financieringStrategieLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[3].name, tabCategories[3].subCategory).strategie,
  );
  const financieringContractenLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[3].name, tabCategories[3].subCategory).contracten,
  );

  const fiscaalBeleidLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[4].name, tabCategories[4].subCategory).beleid,
  );
  const fiscaalStrategieLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[4].name, tabCategories[4].subCategory).strategie,
  );
  const fiscaalContractenLaws = await client.fetch(
    getSamenhangData(thema, tabCategories[4].name, tabCategories[4].subCategory).contracten,
  );
  return {
    props: {
      beleidsinstrumentenEnVergunningenBeleidLaws,
      beleidsinstrumentenEnVergunningenStrategieLaws,
      beleidsinstrumentenEnVergunningenContractenLaws,
      verkoopBeleidLaws,
      verkoopStrategieLaws,
      verkoopContractenLaws,
      inkoopBeleidLaws,
      inkoopStrategieLaws,
      inkoopContractenLaws,
      financieringBeleidLaws,
      financieringStrategieLaws,
      financieringContractenLaws,
      fiscaalBeleidLaws,
      fiscaalStrategieLaws,
      fiscaalContractenLaws,
    },
    revalidate: 1,
  };
}

{
  /* filter option for govt level ? although it is multiple filters here - assuming we do not need number of instruments. 
if (selected.rLadder.length > 0) {
      let temparr = [];
      for (let i = 0; i < filteredLaws.length; i++) {
        if (filteredLaws[i].rLadder.some((rValue) => selected.rLadder.includes(rValue)) === true)
          temparr.push(filteredLaws[i]);
      }
      filteredLaws = temparr;
    }
  
*/
}
