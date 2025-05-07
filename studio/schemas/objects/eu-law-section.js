import { contentArray } from '../../utils/portable-text-arrays'

export default {
  name: 'euLawSection',
  type: 'object',
  title: 'EU Law Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
      validation: (Rule) => Rule.max(40),
    },
    {
      title: 'Inhoud',
      name: 'content',
      type: 'array',
      of: [...contentArray],
    },
  ],
};
