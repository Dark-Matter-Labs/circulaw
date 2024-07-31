let url = 'https://circulaw-git-migrate-from-pages-to-app-router-dark-matter-labs.vercel.app';

if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-git-migrate-from-pages-to-app-router-dark-matter-labs.vercel.app';
} else {
    url = 'https://www.circulaw.nl';
}


const globalMeta = {
	siteName: 'Regelgeving voor een circulaire economie', // added to rootLayout
	description: 'CircuLaw helpt decentrale overheden met het versnellen van de circulaire transitie. Door te laten zien hoe je daarvoor bestaande wet-en regelgeving kunt inzetten.', // added to rootLayout
	keywords: ['CircuLaw, circulaire economie, juridische instrumenten'], // added to rootLayout
	siteUrl: url,
	email: 'info@circulaw.nl',
    siteLogo: url + '/api/og',
}

export default globalMeta;