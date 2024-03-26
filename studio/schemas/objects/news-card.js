import { BsNewspaper } from 'react-icons/bs';
import { NewsItemComponent } from '../../components/news-item';

export default {
  name: 'newsCard', // change to news item later - remove old news item.
  title: 'News Card',
  type: 'document',
  components: { item: NewsItemComponent },
  fields: [
    {
      name: 'newsTitle',
      type: 'string',
      title: 'News Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'createPage',
      type: 'boolean',
      title: 'Create Page for the news item',
      description: 'Select true if the news item will have its own page with content',
      initialValue: false,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'select the type of news item',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Nieuw op de site', value: 'Nieuw op de site' },
          { title: 'Artikelen', value: 'Artikelen' },
          { title: 'Circulair nieuws', value: 'Circulair nieuws' },
        ],
      },
    },
    {
      name: 'colour',
      type: 'string',
      title: 'Card Colour',
      description:
        'select the colour of the news item card. Make sure it works with the other news items next to it.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Light green', value: 'lightGreen' },
          { title: 'Green', value: 'green' },
          { title: 'Dark green', value: 'darkGreen' },
          { title: 'Extra dark green', value: 'extraDarkGreen' },
        ],
      },
    },
    {
      name: 'newsText',
      type: 'text',
      title: 'News item text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newsDate',
      type: 'date',
      title: 'News Date',
      description: 'this does not effect the order in which news items are displayed',
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link text',
      description: 'text to be displayed in the link',
      hidden: ({ parent }) => parent.createPage === true,
    },
    {
      name: 'linkUrl',
      type: 'url',
      title: 'Link',
      hidden: ({ parent }) => parent.createPage === true,
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent.linkText !== undefined && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      description:
        'Link to internal or external page. please select whethere it is internal or external below.',
    },
    {
      name: 'internalExternal',
      type: 'boolean',
      title: 'Internal or External Link',
      description: 'select true if external',
      hidden: ({ parent }) => parent.createPage === true,
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent?.linkUrl !== undefined && currentValue === undefined
            ? 'A value is required.'
            : true;
        }),
    },
    {
      title: 'News Image',
      name: 'newsImage',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      hidden: ({ parent }) => parent.createPage === false,
      description:
        'Klik op ‘aanmaken’. (Slug is het gedeelte van een URL die na de domeinnaam komt. Deze paginanaam wordt automatisch gegenereerd aan de hand van de titel.)',
      options: {
        source: (doc, context) => context.parent.newsTitle,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Inhoud',
      name: 'content',
      type: 'array',
      hidden: ({ parent }) => parent.createPage === false,
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
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link (Instrument)',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'instrument' }],
                    validation: (Rule) => Rule.required(),
                    options: {
                      disableNew: true,
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'newsTitle',
      date: 'newsDate',
      featured: 'featured',
    },
    prepare: ({ title, date, featured }) => ({
      title: [featured ? '⭐️ ' : '', `${title ?? `No book selected`}`].join(` `),
      subtitle: `${date}`,
      media: BsNewspaper,
    }),
  },
};
