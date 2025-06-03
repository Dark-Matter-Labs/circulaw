import { IoPersonOutline } from 'react-icons/io5';

export default {
  title: 'Team',
  name: 'team',
  type: 'object',
  icon: IoPersonOutline,
  fields: [
    {
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array',
      of: [{ type: 'teamMember' }],
      validation: (Rule) => Rule.required().min(1).error('At least one team member is required'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Member Section',
        media: IoPersonOutline,
      };
    },
  },
};
