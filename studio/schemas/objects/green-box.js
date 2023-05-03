export default {
  title: 'Kader highlight',
  name: 'greenBox',
  type: 'object',
  description: 'Gebruik dit voor tekst die je wil benadrukken',
  fields: [
    {
      title: 'Kader highlight Titel',
      name: 'greenBoxTitle',
      type: 'string',
    },
    {
      title: 'Kader highlight text',
      name: 'greenBoxText',
      type: 'text',
    },
    {
      title: 'Kader highlight PT',
      name: 'greenBoxPText',
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
