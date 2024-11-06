import { GiEuropeanFlag } from 'react-icons/gi';

export default {
  name: 'euLaw',
  type: 'document',
  title: 'EU Law',
  icon: GiEuropeanFlag,
  groups: [
    {
      name: 'summary',
      title: 'Summery content',
      default: 'true',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'EU Law Title',
      group: 'summary',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        inUnique: 'true',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
      group: 'summary',
    },
    {
      name: 'productChain',
      title: 'Product Chain',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'transitionAgenda' }] }],
      group: 'summary',
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      description: 'SEO',
      group: 'summary',
    },
    {
      name: 'metaDescribe',
      type: 'string',
      title: 'Meta Describe',
      description: 'SEO',
      group: 'summary',
    },
    {
      name: 'introText',
      type: 'text',
      title: 'Introduction text',
      description: 'this will be displayed on the EU law card',
      group: 'summary',
    },
    {
      name: 'summaryIntroText',
      type: 'text',
      title: 'Summary Introduction text',
      description: 'this will be displayed on the Summary tab',
      group: 'summary',
    },
    {
      name: 'introImage',
      type: 'image',
      title: 'Intro Image',
      group: 'summary',
    },
    {
      name: 'searchImage',
      type: 'image',
      title: 'Search Image',
      group: 'summary',
      description: '',
    },
    {
      name: 'introImageAlt',
      type: 'string',
      title: 'Intro Image Alt Text',
      group: 'summary',
    },
    {
      name: 'statusStep',
      type: 'string',
      title: 'Is the status 2 or 3 steps?',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Two Step', value: 'Two Step' },
          { title: 'Three Step', value: 'Three Step' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'summary',
    },
    {
      name: 'statusTwoStep',
      type: 'string',
      title: 'Law Status',
      hidden: ({ document }) =>
        document.statusStep === 'Three Step' || document.statusStep === undefined,
      options: {
        list: [
          { title: 'In negotiations A', value: 'In negotiations A' },
          { title: 'In negotiations B', value: 'In negotiations B' },
          { title: 'Adopted A', value: 'Adopted A' },
          { title: 'Adopted B', value: 'Adopted B' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'summary',
    },
    {
      name: 'statusThreeStep',
      type: 'string',
      title: 'Law Status',
      hidden: ({ document }) =>
        document.statusStep === 'Two Step' || document.statusStep === undefined,
      options: {
        list: [
          { title: 'In negotiations A', value: 'In negotiations A' },
          { title: 'In negotiations B', value: 'In negotiations B' },
          { title: 'Adopted A', value: 'Adopted A' },
          { title: 'Adopted B', value: 'Adopted B' },
          { title: 'Transposed A', value: 'Transposed A' },
          { title: 'Transposed B', value: 'Transposed B' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: 'summary',
    },
    {
      title: 'Status Content',
      name: 'statusContent',
      type: 'array',
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
      group: 'summary',
    },
    {
      name: 'linkCol1',
      type: 'array',
      title: 'Bekijk ook op Circulaw.nl (internal links)',
      of: [{ type: 'linkObject' }],
      group: 'summary',
    },
    {
      name: 'linkCol2',
      type: 'array',
      title: 'Relevante NL wetgeving (external)',
      of: [{ type: 'linkObject' }],
      group: 'summary',
    },
    {
      name: 'linkCol3',
      type: 'array',
      title: 'Relevante EU wetgeving (external)',
      of: [{ type: 'linkObject' }],
      group: 'summary',
    },
  ],
};
