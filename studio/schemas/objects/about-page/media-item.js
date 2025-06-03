import { validation } from 'sanity';

export default {
  name: 'mediaItem',
  type: 'object',
  title: 'Media Item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the media item, e.g., "Podcast Episode 1"',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Podcast', value: 'podcast' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
          validation: (Rule) =>
            Rule.custom(({ parent }) => {
              return parent !== undefined
                ? 'You need to add a caption to the image, this will only be visible to screen readers'
                : true;
            }),
        },
      ],
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Link to the media item, e.g., YouTube or podcast URL',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Media Item',
        media,
      };
    },
  },
};
