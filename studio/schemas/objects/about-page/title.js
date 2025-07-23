export default {
  title: 'Title',
  name: 'title',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subTitle',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subTitle',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
