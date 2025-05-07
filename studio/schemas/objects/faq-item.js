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
          type: 'dropDownHighlight',
        },
        {
          type: 'pdfBlock',
        },
        {
          type: 'highlightBlock',
        },
        {
          type: 'imageBlock',
        },
        {
          type: 'block',
          of: [
            {
              type: 'dropDown',
            },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          styles: [
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'normal', value: 'normal' },
            // { title: 'subheading', value: 'subheading' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
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

                    validation: (Rule) =>
                      Rule.required()
                        .uri({ scheme: ['http', 'https'] })
                        .warning('Url is incorrect'),
                  },
                  {
                    title: 'Open in new window',
                    name: 'blank',
                    type: 'boolean',
                    validation: (Rule) => Rule.required(),
                    initialValue: false,
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
