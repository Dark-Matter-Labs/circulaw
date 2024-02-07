import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'ImpactItem',
  title: 'Impact Item',
  type: 'document',
  fields: [
    {
      name: 'detail',
      type: 'string',
      title: 'Impact Detail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'question',
      type: 'string',
      title: 'Impact Question',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Impact Image',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
    }, // TODO: add tool tip content
  ],
  preview: {
    select: {
      title: 'detail',
    },
  },
};
