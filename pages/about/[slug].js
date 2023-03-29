import Layout from '../../components/layouts/layout';
import client from '../../lib/sanity';
import { aboutPagePathsQuery, aboutPageQuery } from '../../lib/queries';
import AboutPageComponent from '../../components/about-page';

// import suspense change gsp 

export default function AboutPage({ data }) {
  return (
    <Layout>
      <AboutPageComponent data={data} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(aboutPagePathsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const aboutPage = await client.fetch(aboutPageQuery, { slug });
  return {
    props: { data: { aboutPage } },
    revalidate: 1,
  };
}
