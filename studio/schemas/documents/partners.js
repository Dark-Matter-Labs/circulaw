export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'developingPartners',
      type: 'array',
      title: 'Developing Partners',
      of: [{ type: 'partner' }],
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Knowledge partners',
      of: [{ type: 'partner' }],
    },
    {
      name: 'financingPartners',
      type: 'array',
      title: 'Financing partners',
      of: [{ type: 'partner' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Partners List', // Or use a custom field if you have one
      };
    },
  },
};
