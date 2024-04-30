let url = 'https://circulaw-staging.vercel.app';

if (process.env.NEXT_PUBLIC_SANITY_DATASET === 'staging') {
    url = 'https://circulaw-staging.vercel.app';
} else {
    url = 'https://circulaw.nl';
}


const globalMeta = {
	siteName: 'Regelgeving voor een circulaire economie',
	siteUrl: url,
	email: 'info@circulaw.nl',
    siteLogo: url + '/api/og',
	description: 'Ontdek hoe CircuLaw jouw gemeente helpt bij het versnellen van de circulaire economie met juridische instrumenten uit wet- en regelgeving. CircuLaw biedt ondersteuning bij het selecteren en toepassen van beleidsmaatregelen voor een circulaire toekomst.',
	keywords: 'CircuLaw, circulaire economie, juridische instrumenten'
}

export default globalMeta;