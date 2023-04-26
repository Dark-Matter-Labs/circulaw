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
      validation: (Rule) => Rule.required().max(200),
    },
    {
      title: 'External Link',
      name: 'externalLink',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      // validation
    },
    {
      title: 'External Link Text',
      name: 'externalLinkText',
      type: 'string',
      description: 'if you add an external link you must also write some text to explain the link. If not the link will not display'
      // validation if external link make required?
    },
    {
      title: 'Internal Link',
      name: 'internalLink',
      type: 'string',
      description: 'please copy the slug of the CL page you want to link to. all text coming after .nl this will allow us to make the links work on staging environment also. must start with /'
    },
    {
      title: 'Internal Link Text',
      name: 'internalLinkText',
      type: 'string',
      description: 'to be displayed inside button'
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
