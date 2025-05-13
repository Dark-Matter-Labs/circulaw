export default {
  title: 'EU Local tab',
  name: 'euLocalTab',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'Local Tab',
    },
    {
      title: 'EU Law',
      name: 'euLawReference',
      type: 'reference',
      to: [{ type: 'euLaw' }],
    },
    {
      name: 'localContent',
      type: 'array',
      title: 'Local Content',
      of: [{ type: 'euLawSection' }],
    },
  ],
};
