import { client } from '@/lib/sanity';
import { THEME_PATHS_QUERY, THEME_QUERY } from '@/lib/queries';
import SimpleThemaLayout from '@/components/layouts/simple-thema-layout';
import ThemeLayout from '@/components/layouts/theme-index-layout';

export async function generateStaticParams() {
  const themas = await client.fetch(THEME_PATHS_QUERY);
  return themas.map((thema) => ({ thema: thema.thema }));
}

export const dynamicParams = false

async function getThemeData(params) {
  const thema = params;
  const themaData = await client.fetch(THEME_QUERY, { thema });
  if (!themaData) {
    throw new Error('could not get theme data');
  }
  return themaData;
}

export default async function ThemePage({ params }) {
  const themeData = await getThemeData(params.thema);
  if (themeData.thema._type === 'simpleThema') {
    return (
      <SimpleThemaLayout
        thema={themeData?.thema}
        numberOfLaws={themeData?.length}
        instruments={themeData?.instruments ?? []}
      />
    );
  } else if (themeData.thema._type === 'thema') {
    return (
      <ThemeLayout
        featuredLaws={themeData?.featured}
        thema={themeData?.thema}
        numberOfLaws={themeData?.length}
      />
    );
  }
}
