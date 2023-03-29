import { FaQuestion } from 'react-icons/fa';

export default {
  title: 'FAQ Pages',
  name: 'FAQpage',
  type: 'document',
  icon: FaQuestion,
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
        slugify: (input) => input.replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'FAQ Content',
      name: 'FAQPageContent',
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
