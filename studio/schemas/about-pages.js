export default {
    title: 'About Pages',
    name: 'aboutPage',
    type: 'document',
    fields: [
      {
        title: 'Page Title',
        name: 'pageTitle',
        type: 'string',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'pageTitle',
            inUnique: 'true',
            slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
          },
      },
        {
            title: 'About Content',
            name: 'aboutPageContent',
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
                    type: 'hoverText',
                  },
                ],
                lists: [
                  { title: 'Bullet', value: 'bullet' },
                  { title: 'Number', value: 'number' },
                ],
                styles: [
                  { title: 'H1', value: 'h1' },
                  { title: 'H2', value: 'h2' },
                  { title: 'firstH2', value: 'firstH2' },
                  { title: 'H3', value: 'h3' },
                  { title: 'H4', value: 'h4' },
                  { title: 'H5', value: 'h5' },
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
            ],
          },
    ],
  };
  