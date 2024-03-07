import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'newsPage',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'newsItems',
      type: 'array',
      title: 'News Items',
      description:
        'these are the remaining news items. News items should not be here if they are in the Featured news section',
      of: [{ type: 'newsCard' }, { type: 'agendaItem' }],
    },
  ],
  preview: {
    select: {
      title: 'newsCard.newsTitle',
      date: 'newsCard.newsDate',
      featured: 'newsCard.featured',
    },
    prepare: ({ title, date, featured }) => ({
      title: [featured ? '⭐️ ' : '', `${title ?? `No item selected`}`].join(` `),
      date: `${date}`,
      media: BsNewspaper,
    }),
  },
};

// https://www.sanity.io/guides/create-interactive-array-items-for-featured-elements
