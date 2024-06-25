let url = 'https://circulaw-staging.vercel.app';

if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
} else {
    url = 'https://wwww.circulaw.nl';
}


const globalMeta = {
	siteName: 'Regelgeving voor een circulaire economie',
	siteUrl: url,
	email: 'info@circulaw.nl',
    siteLogo: url + '/api/og',
	description: 'CircuLaw helpt decentrale overheden met het versnellen van de circulaire transitie. Door te laten zien hoe je daarvoor bestaande wet-en regelgeving kunt inzetten.',
	keywords: 'CircuLaw, circulaire economie, juridische instrumenten'
}

export default globalMeta;