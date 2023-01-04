import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import OverNav from '../../components/over-nav';

export default function WaaromCirculaw() {
  return (
    <Layout>
      <div className='global-margin'>
        <div className='breadcrumb pt-8 text-greenLink'>
          <Link href='/'>Home &gt;</Link>
        </div>
        <div className='grid grid-col-1 lg:grid-cols-3'>
          <div className='my-20 col-span-2 text-black1'>
            <h1 className='pb-5 mobile sm:main'>Waarom CircuLaw?</h1>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-10'>
              Voor het tegengaan van klimaatverandering, het verminderen van vervuiling, het behoud
              van biodiversiteit en de beschikbaarheid van grondstoffen is een circulaire economie
              essentieel. In Nederland hebben we nog een lange weg te gaan. De wet- en regelgeving
              die hierbij kan helpen is complex, ontoegankelijk, moeilijk vindbaar, onbekend.
              Gevolg: er worden oplossingen gezocht die vaak te vrijblijvend zijn. CircuLaw laat
              daarom zien waar en hoe regelgeving mogelijkheden biedt om circulaire doelen te halen
              en zo bij te dragen aan een versnelling van de circulaire transitie.
            </p>

            <h2 className='mobile sm:main pt-5 pb-2'>
              Wet-en regelgeving biedt aanknopingspunten voor actie, maar…
            </h2>
            <p className='body-text-mobile sm:body-text max-w-4xl pb-5'>
              Wet-en regelgeving biedt goede mogelijkheden om circulair beleid te maken.
              Mogelijkheden die vaak onbenut blijven. Want regelgeving is complex. Daardoor is het
              voor beleidsmakers vrijwel onmogelijk om een breed inzicht en overzicht te krijgen van
              die mogelijkheden. Daar komt nog eens bij dat juristen binnen organisaties vaak sterk
              gespecialiseerd zijn, waardoor het voor beleidsmakers lastig is om een overzicht te
              krijgen en te weten welke overheidslaag welke bevoegdheden heeft. CircuLaw maakt
              daarom transparant waar en hoe regelgeving mogelijkheden biedt om circulair beleid te
              maken.
            </p>
          </div>
          <div className='mx-20 my-20 max-w-sm'>
            <OverNav pagename='waarom' />
          </div>
        </div>
      </div>
    </Layout>
  );
}
