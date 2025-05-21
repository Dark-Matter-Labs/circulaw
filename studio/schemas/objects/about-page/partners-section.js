export default {
  type: 'object',
  name: 'partnersSection',
  title: 'Partners Section',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{ type: 'partners' }],
      title: 'Partners Reference',
    },
  ],
  preview: {
    select: {
      title: 'reference.title', // or whatever field exists on your partners document
    },
    prepare(selection) {
      return {
        title: selection.title ? `Partners Section: ${selection.title}` : 'Partners Section',
      };
    },
  },
};
