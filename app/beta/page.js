import Link from 'next/link';

export const metadata = {
  title: 'Beta - CircuLaw',
};
export default function Beta() {
  return (
    <div className='global-margin my-20'>
      <h1 className='heading-2xl-semibold sm:heading-5xl-semibold pb-4 text-cl-black'>
        Betaversie CircuLaw
      </h1>
      <p className='p-base max-w-2xl pb-6 text-cl-black'>
        In deze versie van ons kennisplatform hebben we op basis van feedback van onze gebruikers
        een aantal verbeteringen aangebracht. Ook hebben we nieuwe inhoud toegevoegd. Maar deze site
        is nog niet af. Het is mogelijk dat de inhoud van de site incompleet is of fouten bevat. Dat
        betekent dan ook dat aan de inhoud van deze site geen rechten kunnen worden ontleend.
      </p>
      <p className='p-base max-w-2xl pb-6 text-cl-black'>
        We horen graag wat je ervan vindt, wat je anders zou willen, wat je mist en natuurlijk horen
        we ook graag waar je blij van wordt.
      </p>
      <p className='link-lg inline text-green-500'>
        <Link href='/contact' className='link-interaction'>
          Stuur je feedback
        </Link>{' '}
      </p>
      <span className='p-base max-w-2xl text-cl-black'>op deze Betaversie</span>
    </div>
  );
}
