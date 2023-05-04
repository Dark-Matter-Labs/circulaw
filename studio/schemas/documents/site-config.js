export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      title: 'Over CircuLaw',
      name: 'overCirculaw',
      description: 'Select menu for about navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Vraag & antwoord',
      name: 'vraagAntwoord',
      description: 'Select menu for FAQ navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: "Thema's",
      name: 'themas',
      description: 'Select menu for Thema navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'About Section Title',
      name: 'aboutSectionTitle',
      type: 'string',
      description: 'The title of the about section on the home page'
    },
    {
      title: 'About Section Text',
      name: 'aboutSectionText',
      type: 'text',
    },
    {
      title: 'About Section Mobile Text',
      name: 'aboutSectionMobileText',
      type: 'text',
    },
    {
      title: 'About Section Page',
      name: 'aboutSectionPage',
      type: 'reference',
      to: [{type: 'aboutPage'}]
    },
  ],
};
