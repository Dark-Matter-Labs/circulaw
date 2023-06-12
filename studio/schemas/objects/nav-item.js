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
      title: 'Navigatietitel',
      description: 'Alleen zichtbaar in Sanity. Moet gelijk zijn aan de links/titels.',
    },
    // change to aboutLink + add Thema Link
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Url navigatietitel',
      description: 'Selecteer hier de url waarnaar je wilt linken',
    },
  ],
};
