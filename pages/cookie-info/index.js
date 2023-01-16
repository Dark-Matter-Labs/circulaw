import Layout from '../../components/layouts/layout';

export default function Privacy() {
  return (
    <Layout>
      <div className='global-margin my-20 max-w-2xl text-black1'>
        <h1 className='mobile sm:main pb-6'>Cookies Info</h1>
        <h2 className='mobile sm:main py-2'>Hoe gaan we om met cookies?</h2>
        <p className='body-text-mobile sm:body-text pb-6 max-w-4xl'>
          Een cookie is een klein tekstbestand dat onzichtbaar is voor de gebruiker en dat de
          browser opslaat op de computer of het mobiele apparaat van de gebruiker wanneer de
          gebruiker een website bezoekt.
        </p>
        <p className='body-text-mobile sm:body-text pb-6 max-w-4xl'>
          Op grond van artikel 11.7a van de Telecommunicatiewet (Tw) moeten de bezoekers van de
          website geïnformeerd worden over en toestemming geven voor het plaatsen en/of uitlezen van
          cookies op hun apparaat (zoals hun computer, laptop of smartphone).
        </p>
        <p className='body-text-mobile sm:body-text pb-6 max-w-4xl'>
          Er zijn uitzonderingen op het toestemmingsvereiste. Bijvoorbeeld als de cookies technisch
          noodzakelijk zijn om de website goed te laten werken. Dit noemen we functionele cookies.
          Ook is er een uitzondering voor bepaalde analytische cookies. Er is bijvoorbeeld geen
          toestemming nodig voor het plaatsen van analytische cookies, mits die cookies alleen
          gebruikt worden om bezoekers te tellen. Met analytische cookies krijgen wij beter inzicht
          in het functioneren van onze website.
        </p>
        <p className='body-text-mobile sm:body-text max-w-4xl pb-6'>
          We are using{' '}
          <span className='text-greenLink link-mobile sm:link'>
            <a target='_blank' href='https://www.hotjar.com/' rel='noopener noreferrer'>
              Hotjar
            </a>
          </span>{' '}
          to understand how people use the site and collect feedback. We respect your privacy and do
          not track or collect anything if you click Reject or have Do Not Track enabled.
        </p>

        <h2 className='mobile sm:main py-2'>Cookies used</h2>
        <ul className='list-disc pl-6 body-text-mobile sm:body-text max-w-4xl pb-6'>
          <li>_localConsent: Saves your cookie preference, expires in 1 year</li>
          <li>_hjSessionUser: Set when a user first lands on a page, expires in 1 year</li>
          <li>_hjSession: Holds current session data, expires in 30 mins</li>
          <li>_hjRecordingEnabled: Set when a recording starts, expires in 30 mins</li>
          <li>
            _hjClosedSurveyInvites: Set when a user interacts with a Link Survey invitation modal,
            expires in 1 year
          </li>
        </ul>
        <p className='body-text-mobile sm:body-text max-w-4xl pb-6'>
          For more info you can read{' '}
          <span className='text-greenLink link-mobile sm:link'>
            <a
              target='_blank'
              href='https://help.hotjar.com/hc/en-us/articles/6952777582999-Cookies-Set-by-the-Hotjar-Tracking-Code'
              rel='noopener noreferrer'
            >
              here
            </a>
          </span>
          .
        </p>

        <h2 className='mobile sm:main py-2'>Wijziging van deze Privacyverklaring</h2>
        <p className='body-text-mobile sm:body-text pb-6 max-w-4xl'>
          De gemeente Amsterdam heeft het recht om haar Privacyverklaring te wijzigen. Als er
          inhoudelijke wijzigingen worden doorgevoerd, maken we dit bekend via de website{' '}
          <span className='text-greenLink link-mobile sm:link'>
            <a href='https://www.amsterdam.nl/' target='_blank' rel='noopener noreferrer'>
              amsterdam.nl
            </a>
          </span>
          .{' '}
        </p>
        <p className='body-text-mobile sm:body-text max-w-4xl pb-6'>
          Heb je vragen naar aanleiding van deze Privacyverklaring? Mail ons dan op{' '}
          <span className='text-greenLink link-mobile sm:link'>
            <a href='mailto:info@circulaw.nl'>info@circulaw.nl</a>
          </span>
        </p>
      </div>
    </Layout>
  );
}
