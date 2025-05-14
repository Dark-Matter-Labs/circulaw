export default {
  title: 'Two Column Section',
  name: 'twoColumnSection',
  type: 'object',
  fields: [
    {
      title: 'Left Column Title',
      name: 'leftColumnTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Left Column Content',
      name: 'leftColumnContent',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Right Column Title',
      name: 'rightColumnTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Right Column Content',
      name: 'rightColumnContent',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      leftColumnTitle: 'leftColumnTitle',
      rightColumnTitle: 'rightColumnTitle',
    },
    prepare({ leftColumnTitle, rightColumnTitle }) {
      return {
        title: `${leftColumnTitle} | ${rightColumnTitle}`,
        subtitle: 'Two Column Section',
      };
    },
  },
};
