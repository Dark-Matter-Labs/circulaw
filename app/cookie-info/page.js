import Link from 'next/link';

export const metadata = {
  title: 'Cookiebeleid CircuLaw - CircuLaw',
};

const cookies = [
  { name: '_localConsent', description: 'bewaart je cookievoorkeuren', valid: '1 jaar' },
  {
    name: '_hjSession',
    description:
      'verzamelt statistieken over de bezoeken van de gebruiker aan de website, zoals het aantal bezoeken, de gemiddelde tijd besteed aan de site en welke pagina’s zijn gelezen',
    valid: '30 min',
  },
  {
    name: '_hjRecordingEnabled',
    description: 'wordt gezet wanneer een opname start',
    valid: 'sessie',
  },
  {
    name: '_hjClosedSurveyInvites',
    description:
      'geplaatst wanneer een gebruiker interactie heeft met een Link Survey invitation modal',
    valid: '1 jaar',
  },
  {
    name: '_pk_id.<appID>.<domainHash>',
    description: 'creëert een unieke Piwik Pro ID voor deze site',
    valid: '30 min',
  },
  {
    name: '_pk_ses.<appID>.<domainHash>',
    description:
      'verzamelt statistieken over de bezoeken van de gebruiker aan de website, zoals het aantal bezoeken, de gemiddelde tijd besteed aan de site en welke pagina’s zijn gelezen',
    valid: '30 min',
  },
  {
    name: 'ppms_privacy_<appID>',
    description: 'bewaart je cookievoorkeuren',
    valid: '1 jaar',
  },
];

export default function CookieInfo() {
  return (
    <div className='global-margin my-20 max-w-2xl text-cl-black'>
      <h1 className='heading-3xl-semibold sm:heading-5xl-semibold pb-6'>Cookiebeleid CircuLaw</h1>
      <h2 className='heading-xl-semibold sm:heading-3xl-semibold py-2'>Wat zijn cookies?</h2>
      <p className='p-base max-w-4xl pb-6'>
        Cookies zijn kleine tekstbestanden die onzichtbaar zijn voor de gebruiker en die de browser
        opslaat op de computer of mobiele apparaten van de gebruiker wanneer die een website
        bezoekt. Dankzij cookies kunnen wij je online gedrag op onze pagina’s en in onze apps
        analyseren.
      </p>
      <p className='p-base max-w-4xl pb-6'>
        Op grond van artikel 11.7a van de Telecommunicatiewet (Tw) moeten we de bezoekers van onze
        site informeren en om toestemming vragen voor het plaatsen en/of uitlezen van cookies op hun
        apparaat.
      </p>
      <p className='p-base max-w-4xl pb-6'>
        Maar er zijn een paar uitzonderingen. Toestemming hoeft niet gevraagd als de cookies
        technisch noodzakelijk zijn om de website goed te laten werken. Dit noemen we functionele
        cookies. Ook is er een uitzondering voor bepaalde analytische cookies. Er is bijvoorbeeld
        geen toestemming nodig voor het plaatsen van analytische cookies, op voorwaarde dat die
        cookies alleen gebruikt worden om bezoekers te tellen. Met analytische cookies krijgen we
        beter inzicht in het functioneren van onze website.
      </p>

      <h2 className='heading-xl-semibold sm:heading-3xl-semibold py-2'>
        CircuLaw maakt gebruik van de volgende cookies:
      </h2>
      <p className='p-base max-w-4xl'>
        Om te begrijpen hoe bezoekers door onze site navigeren en om feedback te verzamelen om de
        site te verbeteren, gebruiken we Piwik Pro. Heb je bezwaar tegen cookies? Kies dan voor
        ‘Weigeren’ of zet je instellingen op ‘cookies blokkeren.
      </p>
      <div className='p-base mt-8 flex max-w-4xl flex-col pb-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-cl'>
              <table className='min-w-full divide-y divide-cl-black'>
                <thead className='bg-gray-50'>
                  <tr className='divide-x divide-green-100'>
                    <th scope='col' className='py-3.5 pl-4 pr-4 text-left text-cl-black sm:pl-6'>
                      Cookie naam
                    </th>
                    <th scope='col' className='px-4 py-3.5 text-left text-gray-900'>
                      Beschrijving
                    </th>
                    <th scope='col' className='px-4 py-3.5 text-left text-gray-900'>
                      Looptijd
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-green-100 bg-green-100'>
                  {cookies.map((cookie) => (
                    <tr key={cookie.email} className='divide-x divide-green-100'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-4 text-cl-black sm:pl-6'>
                        {cookie.name}
                      </td>
                      <td className='p-4 text-cl-black'>{cookie.description}</td>
                      <td className='whitespace-nowrap p-4 text-cl-black'>{cookie.valid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p className='p-base max-w-4xl pb-6'>
        Heb je vragen naar aanleiding van deze cookiebeleid? Mail ons:{' '}
        <span className='link-lg link-interaction text-green-500'>
          <a href='mailto:info@circulaw.nl'>info@circulaw.nl</a>
        </span>
      </p>
      <p className='p-base max-w-4xl pb-6'>
        Zie ook onze{' '}
        <span className='link-lg link-interaction text-green-500'>
          <Link href='/privacy-policy'>Privacyverklaring.</Link>
        </span>
      </p>
    </div>
  );
}
