import { sanityFetch } from '@/lib/sanity';
import { FAQ_PAGE_QUERY } from '@/lib/queries';
import FAQPageComponent from '@/components/faq-page';

export const metadata = {
  title: 'Vraag en antwoord - CircuLaw',
};

export default async function VraagAndAntwoordPage() {
  const FAQContent = await sanityFetch({ query: FAQ_PAGE_QUERY, tags: ['FAQpage'] });
  return <FAQPageComponent data={FAQContent} />;
}
