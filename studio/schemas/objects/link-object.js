export default {
  name: 'linkObject',
  type: 'object',
  title: 'Link Object',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
};
