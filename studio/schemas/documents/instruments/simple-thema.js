import { BsCircle } from 'react-icons/bs';

export default {
  title: 'Simple Thema (top 5)',
  name: 'simpleThema',
  type: 'document',
  icon: BsCircle,
  fieldsets: [
    {
      name: 'homePageCards',
      title: 'HOMEPAGE KAARTEN',
    },
  ],
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
  fields: [
    {
      title: 'Titel thema',
      name: 'themaName',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'DO NOT CHANGE This will be displayed in the Navigation, Footer, Thema Card etc',
      group: 'editableContent',
    },
    {
      title: 'New thema?',
      name: 'new',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      description: 'select true if you want the new banner to appear',
      group: 'editableContent',
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
      group: 'seo',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'DO NOT CHANGE',
      group: 'editableContent',
      options: {
        source: 'themaName',
        inUnique: 'true',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      title: 'Transitie-agenda',
      name: 'transitionAgenda',
      type: 'reference',
      group: 'editableContent',

      description:
        'Selecteer de transitieagenda waaronder dit instrument valt (is nog niet zichtbaar op de site)',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'transitionAgenda' }],
    },
    {
      title: 'Thema intro',
      name: 'themaSubtitle',
      type: 'string',
      group: 'editableContent',
      description: 'Kort intro onder de thematitel',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hoofdafbeelding',
      name: 'heroImage',
      type: 'image',
      group: 'editableContent',

      description: 'Gebruik alleen beeld met verloop en in formaat 1440ppx x 440px',
    },
    {
      title: 'Hoofdafbeelding mobiel',
      name: 'heroImageMobile',
      type: 'image',
      group: 'editableContent',

      description: 'Gebruik originele formaat',
    },
    {
      title: 'Intro text title',
      name: 'introTextTitle',
      type: 'string',
      group: 'editableContent',

      validation: (Rule) => Rule.required(),
      description: 'Text that comes after "Eerste XX"',
    },
    {
      title: 'Intro text',
      name: 'introText',
      type: 'text',
      group: 'editableContent',

      validation: (Rule) => Rule.required(),
      description: 'Text to introduce the top 5 instruments',
    },
    {
      title: 'Tekst homepage-themakaart', // need to add max length
      name: 'homePageCardText',
      type: 'text',
      group: 'editableContent',

      validation: (Rule) => Rule.required(),
      fieldset: 'homePageCards',
    },
    {
      title: 'Volgorde presentatie thema’s', // need to add max length
      name: 'homePageOrder',
      type: 'number',
      group: 'editableContent',

      fieldset: 'homePageCards',
      description:
        'Elk thema moet een eigen nummer krijgen. Nummer bepaalt de volgorde van presentatie.',
    },
    {
      title: 'Beeld homepage thema-kaart', // need to add max length
      name: 'homePageCardImage',
      fieldset: 'homePageCards',
      group: 'editableContent',

      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
    },
    {
      title: 'Beeld homepage thema-kaart mobile', // need to add max length
      name: 'homePageCardImageMobile',
      fieldset: 'homePageCards',
      group: 'editableContent',

      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
    },
    {
      title: 'Theme sponsors',
      name: 'themeSponsors',
      group: 'editableContent',

      type: 'array',
      of: [{ type: 'partner' }],
    },
  ],
};
