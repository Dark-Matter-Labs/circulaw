import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'AmbitionItem',
  title: 'Ambition Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Ambition Title',
      validation: (Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
