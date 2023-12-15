
import Layout from '@/components/layouts/layout';
import { client } from '@/lib/sanity';

const newsSlugsQuery = `
*[_type == "newsPage"][0]{
    newsItems[slug != undefined]{
      "paths": slug.current
    }
 }
`
const newsDetailPageQuery =`
*[_type == "newsPage"][0]{
    newsItems[slug.current == $slug]{
      ...,
    }
}
`

export default function NewsDetailPage({data}) {
    console.log(data)
    return (
        <>
        <Layout>
        <div>
            {JSON.stringify(data)}
        </div>
        </Layout>
       
        </>
    )
}

export async function getStaticPaths() {
    const fetchSlugs = await client.fetch(newsSlugsQuery);
    const paths = fetchSlugs.newsItems.map((slug) => slug.paths)
    return {
      paths: paths. map((slug) => ({ params: { slug } })),
      fallback: true,
    };
  }

  export async function getStaticProps({params}) {
    const slug = { slug: params?.slug.toString() };
    const data = await client.fetch(newsDetailPageQuery ,slug);
    return {
      props: {
        data: data.newsItems,
      },
      revalidate: 1,
    };
  }