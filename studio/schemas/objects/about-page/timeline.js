export default {
  title: 'Timeline',
  name: 'timeline',
  type: 'object',
  fields: [
    {
      title: 'Timeline Items',
      name: 'timelineItems',
      type: 'array',
      of: [{ type: 'milestone' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      timelineItems: 'timelineItems',
    },
    prepare({ timelineItems }) {
      return {
        title: `Timeline with ${timelineItems.length} items`,
        subtitle: 'Timeline',
      };
    },
  },
};
