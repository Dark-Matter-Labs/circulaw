let url = 'https://circulaw-staging.vercel.app';

if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging' || process.env.SANITY_STUDIO_DATASET === 'dev') {
  url = 'https://circulaw-staging.vercel.app';
} else {
  url = 'https://circulaw.nl';
}


const globalMeta = {
	siteName: 'Regelgeving voor een circulaire economie',
	siteUrl: url,
	email: 'info@circulaw.nl',
  siteLogo: url + '/api/og',
	description: 'CircuLaw laat zien hoe je met bestaande juridische instrumenten de circulaire economie kan versnellen. We helpen beleidsmakers bij het selecteren en toepassen van die instrumenten. Ook bieden we inzicht in de samenhang tussen juridische instrumenten en overzicht over de verdeling van verantwoordelijkheden.'
}

export default globalMeta;