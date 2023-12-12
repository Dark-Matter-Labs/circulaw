export default {
  name: 'agendaItem',
  title: 'Agenda Item',
  type: 'object',
  fields: [
    {
      name: 'agendaTitle',
      type: 'string',
      title: 'Agenda Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsDate',
      type: 'date',
      title: 'News Date',
      description: 'this does not effect the order in which news items are displayed',
    },
    // add link option - must be a link
  ],
};
