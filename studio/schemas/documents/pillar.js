import { orderRankField } from '@sanity/orderable-document-list';

export default {
  title: 'Pillar',
  type: 'document',
  name: 'pillar',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    orderRankField({ type: 'pillar', newItemPosition: 'after' }),
    {
      title: 'Slug',
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace('?', '').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
};
