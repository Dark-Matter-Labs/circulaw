import { GiEuropeanFlag } from 'react-icons/gi';

export default {
  name: 'euLaw',
  type: 'document',
  title: 'EU Law',
  icon: GiEuropeanFlag,
  groups: [
    {
      name: 'summary',
      title: 'Summery content',
      default: 'true',
    },
    {
      name: 'europe',
      title: 'Europese lidstaten',
    },
    {
      name: 'local',
      title: 'lokale overheden',
    },
    {
      name: 'ce',
      title: 'circulaire economie',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'EU Law Title',
      group: 'summary',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      group: 'summary',
    },
    {
      name: 'introText',
      type: 'text',
      title: 'Introduction text',
      description: 'this will be displayed on the EU law card',
      group: 'summary',
    },

    {
      name: 'status',
      type: 'string',
      title: 'Law Status',
      options: {
        list: [
          { title: 'Proposed', value: 'Proposed' },
          { title: 'In negotiations', value: 'In negotiations' },
          { title: 'Adopted', value: 'Adopted' },
          { title: 'Transposed', value: 'Transposed' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },

      group: 'summary',
    },
    {
      name: 'europeContent',
      type: 'array',
      title: 'Europe Content',
      group: 'europe',
      of: [{ type: 'euLawSection' }],
    },
    {
      name: 'localContent',
      type: 'array',
      title: 'Local Content',
      group: 'local',
      of: [{ type: 'euLawSection' }],
    },
    {
      name: 'ceContent',
      type: 'array',
      title: 'Circular Economy Content',
      group: 'ce',
      of: [{ type: 'euLawSection' }],
    },
  ],
};
