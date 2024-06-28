

export default {
    title: 'EU Circulate economy tab',
    name: 'euCircularEconomyTab',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            initialValue: 'Circular economy Tab'

        },
        {
            title: 'EU Law',
            name: 'euLawReference',
            type: 'reference',
            to: [{type: 'euLaw'}]
        },
        {
            name: 'ceContent',
            type: 'array',
            title: 'Circular Economy Content',
            of: [
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
          }
    ]
}