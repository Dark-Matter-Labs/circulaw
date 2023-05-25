import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='nl'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Urbanist:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
        <meta
          property="og:image"
          content="https://circulaw-gtg617gcp-dark-matter-labs.vercel.app/api/og"
        />
        <meta
          name='description'
          content='CircuLaw laat zien hoe je met bestaande juridische instrumenten de circulaire economie kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van die instrumenten. Ook bieden we inzicht in de samenhang tussen juridische instrumenten en overzicht over de verdeling van verantwoordelijkheden.'
        />
        <meta
          property='og:title'
          content='Regelgeving voor een circulaire economie'
          key='ogtitle'
        />
        <meta
          property='og:description'
          content='CircuLaw laat zien hoe je met bestaande juridische instrumenten de circulaire economie kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van die instrumenten. Ook bieden we inzicht in de samenhang tussen juridische instrumenten en overzicht over de verdeling van verantwoordelijkheden.'
          key='ogdesc'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
