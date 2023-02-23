
export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
    {
      name: 'partners',
      type: 'array',
      title: 'Partner Logo',
      of: [{ type: 'partner' }],
    },
  ],
};
