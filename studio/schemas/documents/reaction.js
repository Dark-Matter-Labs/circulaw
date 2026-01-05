import { FaQuoteLeft } from 'react-icons/fa';

export default {
  name: 'reaction',
  title: 'Reactions',
  type: 'document',
  icon: FaQuoteLeft,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
};
