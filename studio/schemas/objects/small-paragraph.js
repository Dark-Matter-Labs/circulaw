export default {
  title: 'Kader secundaire info',
  name: 'smallPara',
  type: 'object',
  fields: [
    {
      title: 'Kader secundaire info Title',
      name: 'smallParaTitle',
      type: 'string',
    },
    {
      title: 'Kader secundaire info Text',
      name: 'smallParaText',
      type: 'text',
    },
    {
      title: 'Kader secundaire PT',
      name: 'smallParaPText',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            {
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
    },
  ],
};
