
import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import { measurePagePathsQuery, measureQuery } from '../../lib/queries';
import Instrument from '../../components/instrument'


export default function Measure({ data }) {
  return (
    <Layout>
      <Instrument data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(measurePagePathsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const measure = await client.fetch(measureQuery, { slug });
  return {
    props: { data: { measure } },
    revalidate: 1,
  };
}
