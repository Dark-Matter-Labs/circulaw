import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'AmbitionItem',
  title: 'Ambition Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Ambition Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subTitle',
      type: 'string',
      title: 'Ambition Sub title',
    },
    {
      name: 'detail',
      type: 'text',
      title: 'Ambition Detail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Ambition Image',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
    },
    {
      title: 'Button text',
      name: 'buttonText',
      type: 'string',
    },
    {
      title: 'Button link',
      name: 'buttonLink',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
