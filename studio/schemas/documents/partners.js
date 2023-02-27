
export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Partner Logo',
      of: [{ type: 'partner' }],
    },
  
  ],

};
