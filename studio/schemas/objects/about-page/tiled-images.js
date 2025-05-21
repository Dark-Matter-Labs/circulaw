export default {
  name: 'tiledImages',
  title: 'Tiled Images',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
              validation: Rule => Rule.required().error('Caption is required'),
            },
          ],
        },
      ],
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(3)
          .error('You must provide exactly 3 images, each with a caption'),
    },
  ],
    preview: {
    prepare() {
        return {
        title: 'Tiled Images',
        };
    },
    },
};