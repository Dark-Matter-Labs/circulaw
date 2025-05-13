import { AiOutlineHighlight } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';

import Highlight from '../../components/highlight';
// import { orderRankField } from '@sanity/orderable-document-list';

import { contentArray } from '../../utils/portable-text-arrays';

export default {
  title: 'About Pages',
  name: 'aboutPage',
  type: 'document',
  groups: [
    {
      name: 'editableContent',
      title: 'Editable Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  icon: FcAbout,
  fields: [
    // orderRankField({ type: 'aboutPage', newItemPosition: 'before' }),
    {
      title: 'Titel',
      name: 'pageTitle',
      type: 'string',
      group: 'editableContent',
      validation: (Rule) => Rule.required(),
      description:
        'Voer de titel in. De titel komt terug in de slug (het deel van de URL na de domeinnaam - zichtbaar in de navigatie en footer)',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'Klik op ‘aanmaken’ (Slug is het het deel van de URL na de domeinnaam - zichtbaar in de navigatie en footer).',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
      options: {
        source: 'pageTitle',
        inUnique: 'true',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/\s+/g, '-')
            .replace('?', '')
            .slice(0, 200),
      },
    },
    {
      title: 'Subtitle',
      name: 'subTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
      description: 'this will display on top of the title in the page',
    },
    {
      title: 'Intro text',
      name: 'introText',
      type: 'array',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
      of: [
        {
          type: 'block',
          styles: [{ title: 'normal', value: 'normal' }],
          marks: {
            decorators: [
              {
                title: 'Highlight',
                value: 'highlight',
                blockEditor: {
                  render: Highlight,
                  icon: AiOutlineHighlight,
                },
              },
            ],
            annotations: [],
          },
          lists: [],
        },
      ],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      group: 'editableContent',
      of: [{ type: 'dropDownHighlight' }, { type: 'title' }, { type: 'twoColumnSection' }],
    },
    {
      title: 'Meta Page Title',
      name: 'metaTitle',
      type: 'string',
      description: 'SEO',
      group: 'seo',
    },
    {
      title: 'Meta Description',
      name: 'metaDescribe',
      type: 'string',
      description: 'SEO',
    },
    {
      title: 'Copy',
      name: 'aboutPageContent',
      type: 'array',
      description:
        'Voer hier de tekst in (maak gebruik van voorgestelde subkoppen, alinea-indeling,  enz.).',
      of: [...contentArray],
    },
  ],
};
