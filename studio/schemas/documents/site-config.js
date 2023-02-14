export default {
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Site title',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        description: 'The main site url. Used to create canonical url',
      },
      {
        title: 'Over CircuLaw',
        name: 'overCirculaw',
        description: 'Select menu for main navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Vraag & antwoord',
        name: 'VraagAntwoord',
        description: 'Select menu for social navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
    ],
  };