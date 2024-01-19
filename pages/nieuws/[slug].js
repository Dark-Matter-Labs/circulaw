import { useState, useEffect } from 'react';
import Layout from '@/components/layouts/layout';
import NewsDetailPageHeader from '@/components/news-page/news-detail-page-header';
import { client } from '@/lib/sanity';
import NewsDetailPageBody from '@/components/news-page/news-detail-page-body';

const newsSlugsQuery = `
*[_type == "newsPage"][0]{
    newsItems[slug != undefined]{
      "paths": slug.current
    }
 }
`;
const newsDetailPageQuery = `
*[_type == "newsPage"][0]{
    newsItems[slug.current == $slug]{
      ...,
    }
}
`;

export default function NewsDetailPage({ data }) {
  const [cardColour, setCardColour] = useState();

  useEffect(() => {
    if (data) {
      let data = data[0]
      if (data?.colour === 'lightGreen') {
        setCardColour('bg-green-300');
      } else if (data?.colour === 'green') {
        setCardColour('bg-green-500');
      } else if (data?.colour === 'darkGreen') {
        setCardColour('bg-green-600');
      } else setCardColour('bg-green-800');
    }
  }, [data]);

  return (
    <>
      <Layout>
        <NewsDetailPageHeader cardColour={cardColour} data={data[0]} />
        <NewsDetailPageBody data={data[0]} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const fetchSlugs = await client.fetch(newsSlugsQuery);
  const paths = fetchSlugs.newsItems.map((slug) => slug.paths);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const slug = { slug: params?.slug.toString() };
  const data = await client.fetch(newsDetailPageQuery, slug);
  return {
    props: {
      data: data.newsItems,
    },
    revalidate: 1,
  };
}
