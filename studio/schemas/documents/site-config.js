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
  ],
};
