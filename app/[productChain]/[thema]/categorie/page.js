import { THEME_PATHS_QUERY, CATEGORIE_PAGE_QUERY } from '@/lib/queries';
import { client } from '@/lib/sanity';
import ExpertiseLayout from '@/components/layouts/expertise-layout';

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY);
  return themas.map((thema) => ({ thema: thema.thema, productChain: thema.productChain }));
}

export const dynamicParams = false;

async function getCategoryData(params) {
  const thema = params;
  const categorieData = await client.fetch(CATEGORIE_PAGE_QUERY, { thema });
  if (!categorieData) {
    throw new Error('could not get categorie data');
  }
  return categorieData;
}

export default async function CategoriePage({ params }) {
  const categorieContent = await getCategoryData(params.thema);
  return (
    <ExpertiseLayout
      thema={params?.thema}
      transitionAgenda={params?.productChain}
      expertiseData={categorieContent}
      title={`${params?.themaName} instrumenten per categorie`}
      // p1='In dit overzicht zie je hoe de verschillende instrumenten met elkaar samenhangen, welke overheden verantwoordelijk zijn en hoe je verschillende instrumenten kunt combineren.'
    />
  );
}
