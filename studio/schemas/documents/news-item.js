import { BsNewspaper } from 'react-icons/bs';

import { orderRankField } from '@sanity/orderable-document-list';

import { NewsItemComponent } from '../../components/news-item';
import { contentArray } from '../../utils/portable-text-arrays';

export default {
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  components: { item: NewsItemComponent },
  fields: [
    orderRankField({ type: 'newsItem', newItemPosition: 'before' }),
    {
      name: 'newsOrAgenda',
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
      hidden: ({ parent }) => parent.newsOrAgenda === true,
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'select the type of news item',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent.newsOrAgenda !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.newsOrAgenda === true,
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
          return parent.newsOrAgenda !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.newsOrAgenda === true,
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
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent.newsOrAgenda !== true && currentValue === undefined
            ? 'A value is required'
            : true;
        }),
      hidden: ({ parent }) => parent.newsOrAgenda === true,
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
      hidden: ({ parent }) => parent.createPage === true || parent.newsOrAgenda === true,
    },
    {
      name: 'linkUrl',
      type: 'url',
      title: 'Link',
      hidden: ({ parent }) => parent.createPage === true || parent.newsOrAgenda === true,
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
      hidden: ({ parent }) => parent.createPage === true || parent.newsOrAgenda === true,
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
      hidden: ({ parent }) => parent.newsOrAgenda === true || parent.newsOrAgenda === true,
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
      hidden: ({ parent }) => parent.createPage === false || parent.newsOrAgenda === true,
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
      hidden: ({ parent }) => parent?.createPage === false || parent?.newsOrAgenda === true,
      of: [...contentArray],
    },
    // @TODO: need to fix this - maybe make one link
    {
      name: 'link',
      type: 'url',
      title: 'link to event',
      description: 'this does not effect the order in which news items are displayed',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).warning('Url is incorrect'),
      hidden: ({ parent }) => parent.newsOrAgenda === false,
    },
  ],
  preview: {
    select: {
      title: 'title',
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
