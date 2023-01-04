import Link from 'next/link';
import Layout from '../../components/layouts/layout';

export default function Alpha() {
  return (
    <Layout>
      <div className='global-margin my-20'>
        <h1 className='mobile sm:main text-black1 pb-2'>Testversie CircuLaw</h1>
        <p className='body-text-mobile sm:body-text text-black1 pb-6  max-w-2xl'>
          Welkom bij CircuLaw. Deze website is volop in ontwikkeling. In deze versie testen we de
          techniek, opzet en inhoud van de site. Het is mogelijk dat de inhoud van de site
          incompleet is of fouten bevat. Dat betekent dan ook dat aan de inhoud van deze site geen
          rechten kunnen worden ontleend.
        </p>
        <p className='body-text-mobile sm:body-text text-black1 pb-6  max-w-2xl'>
          We horen graag wat je ervan vindt, wat je anders zou willen, wat je mist en natuurlijk
          horen we ook graag waar je blij van wordt.
        </p>
        <p className='text-greenLink link-mobile sm:link'>
          <Link href='/contact'>Stuur je feedback op deze testversie</Link>{' '}
        </p>
      </div>
    </Layout>
  );
}
