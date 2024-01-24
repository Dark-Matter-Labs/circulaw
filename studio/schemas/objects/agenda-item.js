import { NewsItemComponent } from '../../components/news-item';
import { CiCalendarDate } from 'react-icons/ci';

export default {
  name: 'agendaItem',
  title: 'Agenda Item',
  type: 'document',
  components: { item: NewsItemComponent },
  fields: [
    {
      name: 'newsTitle',
      type: 'string',
      title: 'Agenda Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'newsDate',
      type: 'date',
      title: 'News Date',
      description: 'this does not effect the order in which news items are displayed',
    },
    {
      name: 'link',
      type: 'url',
      title: 'link to event',
      description: 'this does not effect the order in which news items are displayed',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).warning('Url is incorrect'),
    },
    // will this ever link to an interal page ?
  ],
  preview: {
    select: {
      title: 'newsTitle',
      date: 'newsDate',
      featured: 'featured',
    },
    prepare: ({ title, date, featured }) => ({
      title: [featured ? '⭐️ ' : '', `${title ?? `No book selected`}`].join(` `),
      subtitle: `${date}`,
      media: CiCalendarDate,
    }),
  },
};
