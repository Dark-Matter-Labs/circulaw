import { IoPersonOutline } from 'react-icons/io5';

export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'object',
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
      title: 'Department',
      name: 'department',
      type: 'string',
      options: {
        list: [
          { title: 'Onze juristen', value: 'legal' },
          { title: 'Onze ontwikkelaars', value: 'developers' },
          { title: 'Het strategische team', value: 'strategy' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
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
  preview: {
    select: {
      name: 'name',
      department: 'department',
    },
    prepare({ name, department }) {
      // Map department value to title
      const departmentTitles = {
        legal: 'Onze juristen',
        developers: 'Onze ontwikkelaars',
        strategy: 'Het strategische team',
      };
      return {
        title: name,
        subtitle: departmentTitles[department] || '',
        media: IoPersonOutline,
      };
    },
  },
};
