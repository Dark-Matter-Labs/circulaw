// potential to refactor other portable text - this is a copy of the instrument page pt

export default {
    title: 'Complex Portable Text',
    name: 'complexPortableText',
    type: 'object', 
    fields: [
        {
            title: 'Title of block',
            name: 'blockTitle',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            title: 'New Block',
            name: 'complexPortableTextBloclk',
            type: 'array',
            of: [
                {
                    type: 'greenBox',
                  },
                  {
                    type: 'pdfBlock',
                  },
                  {
                    type: 'smallPara',
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
                      { title: 'firstH2', value: 'firstH2' },
                      { title: 'H3', value: 'h3' },
                      { title: 'normal', value: 'normal' },
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
                              title: 'Open in new winder',
                              name: 'blank',
                              type: 'boolean',
                            },
                          ],
                        },
                      ],
                    },
                  },
            ]
        }
    ]
}