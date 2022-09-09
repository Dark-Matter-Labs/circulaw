import Link from 'next/link';
import Layout from '../../components/layout';

export default function Alpha() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl'>
        <h1 className='mobile sm:main text-black1 pb-2'>Testversie CircuLaw</h1>
        <p className='body-text-mobile sm:body-text text-black1'>
          In deze versie testen we de techniek, de opzet én de inhoud van de site.
        </p>
        <p className='body-text-mobile sm:body-text text-black1'>
          We horen heel graag wat jij ervan vindt, wat je anders zou willen, wat je mist en
          natuurlijk horen we ook graag waar je blij van wordt.
        </p>
        <p className='body-text-mobile sm:body-text text-black1'>
          Ga als gebruiker dus vooral aan de slag met alles wat je hier vindt, maar weet ook dat
          CircuLaw nog lang niet af is.
          <ul className='list-disc pl-6'>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/status-en-ambities'>
                <a>De status van CircuLaw</a>
              </Link>
            </li>
            <li className='text-greenLink link-mobile sm:link'>
              <Link href='/contact'>
                <a>Mijn feedback op deze testversie</a>
              </Link>{' '}
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}
