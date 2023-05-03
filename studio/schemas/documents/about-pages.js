import { FcAbout } from 'react-icons/fc';

export default {
  title: 'About Pages',
  name: 'aboutPage',
  type: 'document',
  icon: FcAbout,
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
        slugify: (input) => input.replace(/\s+/g, '-').replace('?', '').slice(0, 200),
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
          type: 'imageBlock',
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
      ],
    },
  ],
};
