export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'partners',
      type: 'array',
      title: 'Partner Logo',
      of: [{ type: 'partner' }],
    },
  ],
};
