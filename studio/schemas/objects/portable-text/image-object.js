export default {
  title: 'Image',
  name: 'imageBlock',
  type: 'object',
  fields: [
    {
      title: 'Image Title',
      name: 'imageTitle',
      type: 'string',
    },
    {
      title: 'Image File',
      name: 'imageFile',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
    },
  ],
};
