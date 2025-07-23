export default {
  name: 'mediaItems',
  type: 'object',
  title: 'Media Items',
  fields: [
    {
      name: 'mediaItems',
      type: 'array',
      title: 'Media Items',
      of: [{ type: 'mediaItem' }],
      validation: (Rule) => Rule.required().min(1).error('At least one media item is required.'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Media Items',
      };
    },
  },
};
