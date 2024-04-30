import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/layouts/layout';

export default function Beta() {
  const router = useRouter();
  return (
    <Layout title='CircuLaw - Beta' pageUrl={router.asPath}>
      <div className='global-margin my-20'>
        <h1 className='mobile sm:desktop text-grey-800 pb-4'>Betaversie CircuLaw</h1>
        <p className=' p-lg text-grey-800 pb-6  max-w-2xl'>
          In deze versie van ons kennisplatform hebben we op basis van feedback van onze gebruikers
          een aantal verbeteringen aangebracht. Ook hebben we nieuwe inhoud toegevoegd. Maar deze
          site is nog niet af. Het is mogelijk dat de inhoud van de site incompleet is of fouten
          bevat. Dat betekent dan ook dat aan de inhoud van deze site geen rechten kunnen worden
          ontleend.
        </p>
        <p className=' p-lg text-grey-800 pb-6  max-w-2xl'>
          We horen graag wat je ervan vindt, wat je anders zou willen, wat je mist en natuurlijk
          horen we ook graag waar je blij van wordt.
        </p>
        <p className='text-green-500 link-lg inline '>
          <Link href='/contact' className='link-interaction'>
            Stuur je feedback
          </Link>{' '}
        </p>
        <span className=' p-lg text-grey-800 max-w-2xl'>op deze Betaversie</span>
      </div>
    </Layout>
  );
}
