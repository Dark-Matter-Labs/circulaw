import { BiNews } from 'react-icons/bi';

export default {
  title: 'News Item',
  name: 'newsItem',
  type: 'document',
  icon: BiNews,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Text Content',
      name: 'text',
      type: 'text',
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      // validation
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      type: 'reference',
      to: [{ type: 'aboutPage' }, { type: 'thema' }, { type: 'FAQpage' }, { type: 'englishPage' }],
      // do we want to ref this?
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      description:
        'Date that will be displayed on the card. This will not affect the order of the card',
    },
  ],
};
