export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fields: [
    {
      title: 'Call to action title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Call to action text',
      name: 'ctaText',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link text',
      name: 'linkText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
