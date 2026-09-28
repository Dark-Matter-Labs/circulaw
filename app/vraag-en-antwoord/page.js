import FAQPageComponent from '@/components/faq-page';
import FaqStructuredData from '@/components/structured-data/faq-page';
import { FAQ_PAGE_QUERY } from '@/lib/queries';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'Vraag en antwoord - CircuLaw',
  alternates: { canonical: '/vraag-en-antwoord' },
};

export default async function VraagAndAntwoordPage() {
  const FAQContent = await sanityFetch({ query: FAQ_PAGE_QUERY, tags: ['FAQpage'] });
  return (
    <>
      <FaqStructuredData content={FAQContent?.FAQPageContent} />
      <FAQPageComponent data={FAQContent} />
    </>
  );
}
