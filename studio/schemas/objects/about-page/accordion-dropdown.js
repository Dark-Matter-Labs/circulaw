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
      of: [{ type: 'accordionDropdownContent' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
