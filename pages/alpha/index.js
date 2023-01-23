import Link from 'next/link';
import Layout from '../../components/layouts/layout';

export default function Alpha() {
  return (
    <Layout>
      <div className='global-margin my-20'>
        <h2 className='mobile sm:main text-black-white-800 pb-2'>Testversie CircuLaw</h2>
        <p className='p-mobile-bg sm:p-desktop-bg text-black-white-800 pb-6  max-w-2xl'>
          Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
          techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
          incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
          rechten kunnen worden ontleend.
        </p>
        <p className='p-mobile-bg sm:p-desktop-bg text-black-white-800 pb-6  max-w-2xl'>
          We horen graag wat je ervan vindt, wat je anders zou willen, wat je mist en natuurlijk
          horen we ook graag waar je blij van wordt.
        </p>
        <p className='text-green-500 link-mobile sm:link-desktop'>
          <Link href='/contact'>Stuur je feedback op deze testversie</Link>{' '}
        </p>
      </div>
    </Layout>
  );
}
