import { GiEuropeanFlag } from 'react-icons/gi';

// Text blocks with the marks the site's about-page renderer supports.
const richText = {
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              { name: 'blank', type: 'boolean', title: 'Open in new tab' },
            ],
          },
        ],
      },
    },
  ],
};

const pdfVersion = {
  type: 'object',
  name: 'pdfVersion',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'For example "Overzicht 2.0".',
    },
    {
      name: 'file',
      title: 'PDF',
      type: 'file',
      options: { accept: 'application/pdf' },
    },
    {
      name: 'url',
      title: 'Or a link to the PDF',
      type: 'string',
      description: 'Use when the PDF is already on the site, for example /European_green_deal.pdf.',
    },
    {
      name: 'updatedAt',
      title: 'Laatst bijgewerkt',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
  ],
  validation: (Rule) =>
    Rule.custom((value) =>
      !value || value.file?.asset || value.url ? true : 'Upload a PDF or add a link to one.',
    ),
  preview: {
    select: { title: 'label', subtitle: 'updatedAt' },
  },
};

export default {
  name: 'euOverviewPage',
  title: 'EU Overview Page',
  type: 'document',
  icon: GiEuropeanFlag,
  groups: [
    { name: 'intro', title: 'Intro & PDF', default: true },
    { name: 'domains', title: 'Domeinen' },
    { name: 'articles', title: 'Artikelen' },
  ],
  fields: [
    {
      name: 'introTitle',
      title: 'Intro title',
      type: 'string',
      group: 'intro',
    },
    {
      ...richText,
      name: 'introText',
      title: 'Intro text',
      description: 'Explains the Green Deal overview and what changed in the latest PDF.',
      group: 'intro',
    },
    {
      ...pdfVersion,
      name: 'currentPdf',
      title: 'Current overview PDF',
      description:
        'When you upload a new version, first add the old one to "Previous versions" below.',
      group: 'intro',
    },
    {
      name: 'previewImage',
      title: 'PDF preview image',
      type: 'image',
      description: 'Screenshot of the PDF shown next to the intro.',
      fields: [{ name: 'altText', title: 'Alt text', type: 'string' }],
      group: 'intro',
    },
    {
      name: 'spreadsheetUrl',
      title: 'Monitoring spreadsheet link',
      type: 'url',
      description: 'Read-only link to the detailed overview spreadsheet. Leave empty to hide.',
      group: 'intro',
    },
    {
      name: 'previousPdfs',
      title: 'Previous versions',
      type: 'array',
      of: [pdfVersion],
      group: 'intro',
    },
    {
      ...richText,
      name: 'changesText',
      title: 'What changed',
      description: 'Explains the difference between the current and the previous PDF.',
      group: 'intro',
    },
    {
      name: 'moreInfo',
      title: 'More information',
      description: 'Fold-out sections below the PDFs, for example how to read the legend.',
      type: 'array',
      group: 'intro',
      of: [
        {
          type: 'object',
          name: 'euInfoSection',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            { ...richText, name: 'body', title: 'Body' },
          ],
        },
      ],
    },
    {
      name: 'domainsTitle',
      title: 'Domains title',
      type: 'string',
      group: 'domains',
    },
    {
      ...richText,
      name: 'domainsIntro',
      title: 'Domains intro',
      description: 'The method: how the legislation is grouped into domains.',
      group: 'domains',
    },
    {
      name: 'domains',
      title: 'Domains',
      description: 'Each domain becomes a tab on the page.',
      type: 'array',
      group: 'domains',
      of: [
        {
          type: 'object',
          name: 'euDomain',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            { ...richText, name: 'body', title: 'Body' },
          ],
        },
      ],
    },
    {
      name: 'articlesTitle',
      title: 'Articles title',
      type: 'string',
      group: 'articles',
    },
    {
      name: 'articles',
      title: 'Articles',
      description:
        'News items to show on the EU page, such as the Omnibus analyses. Add them as news items first.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'newsItem' }] }],
      group: 'articles',
    },
  ],
  preview: {
    prepare: () => ({ title: 'EU Overview Page' }),
  },
};
