import { GoMilestone } from 'react-icons/go';

export default {
  title: 'Milestone',
  name: 'milestone',
  type: 'document',
  icon: GoMilestone,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm:ss',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
};
