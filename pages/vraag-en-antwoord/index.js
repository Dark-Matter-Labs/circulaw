import { useRouter } from 'next/router';
import FAQPageComponent from '@/components/faq-page';
import Layout from '@/components/layouts/layout';
import { FAQPageQuery } from '@/lib/queries';
import { client } from '@/lib/sanity';

export default function FAQ({ FAQ }) {
  const router = useRouter();
  return (
    <Layout title='Vraag en antwoord' pageUrl={router.asPath}>
      <FAQPageComponent data={FAQ} />
    </Layout>
  );
}

export async function getStaticProps() {
  const FAQ = await client.fetch(FAQPageQuery);
  return {
    props: {
      FAQ,
    },
    revalidate: 1,
  };
}
