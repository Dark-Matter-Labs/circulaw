import { BsNewspaper } from 'react-icons/bs';

import { orderRankField } from '@sanity/orderable-document-list';

import { NewsItemComponent } from '../../components/news-item';

export default {
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  components: { item: NewsItemComponent },
  fields: [
    orderRankField({ type: 'newsItem', newItemPosition: 'before' }),
    {
      name: 'isAgendaItem',
      type: 'boolean',
      title: 'Is this an Agenda Item?',
      description: 'select true if this is an Agenda Itme',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hasPage',
      type: 'boolean',
      title: 'Create Page for the news item',
      description: 'Select true if the news item will have its own page with content',
      initialValue: false,
      hidden: ({ parent }) => parent.isAgendaItem === true,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'select the type of news item',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent.isAgendaItem !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.isAgendaItem === true,
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
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent.isAgendaItem !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.isAgendaItem === true,
      options: {
        list: [
          { title: 'Light green', value: 'green-200' }, // green 200
          { title: 'Green', value: 'green-300' }, // green 300
          { title: 'Dark green', value: 'green-400' }, // green-400
        ],
      },
    },
    {
      name: 'newsText',
      type: 'text',
      title: 'News item text',
      description:
        'keep this short and sweet. If you need more space to write, consider creating a page for the news item',
      validation: (Rule) =>
        Rule.max(300).custom((currentValue, { parent }) => {
          return parent.isAgendaItem !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.isAgendaItem === true,
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
      hidden: ({ parent }) => parent.hasPage === true || parent.isAgendaItem === true,
    },
    {
      name: 'linkUrl',
      type: 'url',
      title: 'Link',
      hidden: ({ parent }) => parent.hasPage === true || parent.isAgendaItem === true,
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
      name: 'isExternal',
      type: 'boolean',
      title: 'Internal or External Link',
      initialValue: false,
      description: 'select true if external',
      hidden: ({ parent }) => parent.hasPage === true || parent.isAgendaItem === true,
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
      validation: (Rule) =>
        Rule.custom((currentValue, { document }) => {
          return currentValue === undefined && document.isFeatured === true
            ? 'Featured news items must have an image'
            : true;
        }),
      hidden: ({ parent }) => parent.isAgendaItem === true,
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((currentValue, { document }) => {
              return currentValue === undefined && document.newsImage !== undefined
                ? 'You need to add a caption to the image, this will only be visible to screen readers'
                : true;
            }),
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      hidden: ({ parent }) => parent.hasPage === false || parent.isAgendaItem === true,
      description:
        'Klik op ‘aanmaken’. (Slug is het gedeelte van een URL die na de domeinnaam komt. Deze paginanaam wordt automatisch gegenereerd aan de hand van de titel.)',
      options: {
        source: (doc, context) => context.parent.title,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      title: 'Inhoud',
      name: 'content',
      type: 'array',
      hidden: ({ parent }) => parent?.hasPage === false || parent?.isAgendaItem === true,
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
          type: 'youtube',
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
                    initialValue: false,
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
    // @TODO: need to fix this - maybe make one link
    {
      name: 'link',
      type: 'url',
      title: 'link to event',
      description: 'this does not effect the order in which news items are displayed',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).warning('Url is incorrect'),
      hidden: ({ parent }) => parent.isAgendaItem === false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'newsDate',
      isFeatured: 'isFeatured',
    },
    prepare: ({ title, date, isFeatured }) => ({
      title: [isFeatured ? '⭐️ ' : '', `${title ?? `No book selected`}`].join(` `),
      subtitle: `${date}`,
      media: BsNewspaper,
    }),
  },
};
