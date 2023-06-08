import { GrNavigate } from 'react-icons/gr';

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Navigation Item Title',
    },
    // change to aboutLink + add Thema Link
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
  ],
};
