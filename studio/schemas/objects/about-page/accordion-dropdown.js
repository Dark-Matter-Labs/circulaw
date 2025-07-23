export default {
  title: 'Accordion Dropdown',
  name: 'accordionDropdown',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'accordionDropdownContent' }, { type: 'imageBlock' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'design',
      type: 'string',
      title: 'Design',
      description: 'Select the design for the accordion dropdown',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Orange', value: 'orange' },
        ],
        layout: 'radio',
      },
    },
  ],
};
