import { IoPersonOutline } from 'react-icons/io5';

export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'document',
  icon: IoPersonOutline,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'linkedIn',
      name: 'linkedIn',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
};
