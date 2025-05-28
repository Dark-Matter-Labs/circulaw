import { simpleContentArray } from '../../../utils/portable-text-arrays';

export default {
  name: 'urgency',
  type: 'object',
  title: 'Urgency Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the urgency section.',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [...simpleContentArray],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'ctaContent',
      name: 'ctaContent',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Urgency Section',
      };
    },
  },
};
