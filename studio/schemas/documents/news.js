import { BiNews } from 'react-icons/bi';

export default {
  title: 'News Item',
  name: 'newsItem',
  type: 'document',
  icon: BiNews,
  fields: [
    {
      title: 'Titel',
      name: 'title',
      type: 'string',
      description: 'Titel op kaart nieuw onderwerp',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Inhoud',
      name: 'text',
      type: 'text',
      description: 'Tekst exclusief titel max 220 tekens.',
      validation: (Rule) => Rule.required().max(220),
    },
    {
      title: 'Externe link',
      name: 'externalLink',
      type: 'url',
      description: 'De url waarnaar je wilt linken',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      // validation
    },
    {
      title: 'Tekst die linkt',
      name: 'externalLinkText',
      type: 'string',
      description: 'De tekst waar de link aan gekoppeld wordt. Link opent in een nieuwe tab.',
    },
    {
      title: 'Interne link',
      name: 'internalLink',
      type: 'string',
      description:
        'Kopieer de slug (het deel van de URL na de domeinnaam/punt) waarnaar je wilt linken.',
    },
    {
      title: 'Tekst die linkt',
      name: 'internalLinkText',
      type: 'string',
      description: 'De tekst die op de knop komt.',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      description:
        'De datum wordt op de kaart getoond, maar bepaalt niet de volgorde van de kaarten.',
    },
  ],
};
