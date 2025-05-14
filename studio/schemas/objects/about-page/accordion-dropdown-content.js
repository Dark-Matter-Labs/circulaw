import { simpleContentArray } from '../../../utils/portable-text-arrays';

export default {
  title: 'Accordion Dropdown Content',
  name: 'accordionDropdownContent',
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
      of: [...simpleContentArray],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({ title, content }) {
      return {
        title,
        subtitle: content ? `${content.length} blocks` : 'No content',
      };
    },
  },
};
