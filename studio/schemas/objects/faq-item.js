export default {
  title: 'FAQ Item',
  name: 'faqItem',
  type: 'object',
  description: 'Add a new faq item to the faq page',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: (Rule) => Rule.required().max(110),
      description: 'Enter the question',
    },
    {
      title: 'Response',
      name: 'response',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'normal', value: 'normal' }],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new window',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
