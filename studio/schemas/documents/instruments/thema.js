import { BsCircle } from 'react-icons/bs';

import { lineBreak } from '../../../components/headerInput';

export default {
  title: 'Thema',
  name: 'thema',
  type: 'document',
  icon: BsCircle,
  groups: [
    {
      name: 'editableContent',
      title: 'Editable Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'seo',
    },
  ],
  fieldsets: [
    {
      name: 'homePageCards',
      title: 'HOMEPAGE KAARTEN',
    },
    {
      name: 'overviewCards',
      title: 'OVERZICHTSKAARTEN',
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
      initialValue: 'New Thema',
    },
    {
      title: 'New thema?',
      name: 'new',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
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
      group: 'editableContent',
      description: 'DO NOT CHANGE',
      validation: (Rule) => Rule.required(),
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
      description:
        'Selecteer de transitieagenda waaronder dit instrument valt (is nog niet zichtbaar op de site)',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'transitionAgenda' }],
      group: 'editableContent',
    },
    {
      title: 'Thema intro',
      name: 'themaSubtitle',
      type: 'string',
      description: 'Kort intro onder de thematitel',
      validation: (Rule) => Rule.required(), // how do we handle links? Seems a bit much to put in a PT block.
      group: 'editableContent',
    },
    {
      title: 'Hoofdafbeelding',
      name: 'heroImage',
      type: 'image',
      description: 'Gebruik alleen beeld met verloop en in formaat 1440ppx x 440px',
      group: 'editableContent',
    },
    {
      title: 'Hoofdafbeelding mobiel',
      name: 'heroImageMobile',
      type: 'image',
      description: 'Gebruik originele formaat',
      group: 'editableContent',
    },
    {
      title: 'Titel overzichten',
      name: 'overviewsTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Titel die boven de 3 kaarten met instrumenten en overzichten',
      group: 'editableContent',
    },
    {
      title: 'Titel uitgelichte instrumenten',
      name: 'featuredInstrumentTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Is de titel die in kop komt: Uitgelicht: 3 [titel]',
      group: 'editableContent',
    },
    {
      title: 'Subkop onder uitgelichte instrumenten',
      name: 'featureInstrumentSubtitle',
      type: 'text',
      description: 'Subkop onder de kop Uitgelicht: 3 [titel]',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Intro op lijstkaart',
      name: 'listText',
      type: 'text',
      fieldset: 'overviewCards',
      description:
        'Tekst over de instrumentenlijst. Titel op deze kaart wordt automatisch gegenereerd.',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Titel samenhang-kaart',
      name: 'samenhangTitle',
      type: 'string',
      fieldset: 'overviewCards',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Intro samenhang-kaart',
      name: 'samenhangText',
      type: 'text',
      fieldset: 'overviewCards',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Titel bevoegdheden-kaart',
      name: 'welkeTitle',
      type: 'string',
      fieldset: 'overviewCards',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Intro bevoegdhedenkaart',
      name: 'welkeText',
      type: 'text',
      fieldset: 'overviewCards',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Tekst homepage-themakaart', // need to add max length
      name: 'homePageCardText',
      type: 'text',
      group: 'editableContent',
      fieldset: 'homePageCards',
    },
    {
      title: 'Volgorde presentatie thema’s', // need to add max length
      name: 'homePageOrder',
      type: 'number',
      description:
        'Elk thema moet een eigen nummer krijgen. Nummer bepaalt de volgorde van presentatie.',
      fieldset: 'homePageCards',
      group: 'editableContent',
    },
    {
      title: 'Beeld homepage thema-kaart', // need to add max length
      name: 'homePageCardImage',
      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
      fieldset: 'homePageCards',
      group: 'editableContent',
    },
    {
      title: 'Beeld homepage thema-kaart mobile', // need to add max length
      name: 'homePageCardImageMobile',
      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
      fieldset: 'homePageCards',
      group: 'editableContent',
    },
    {
      title: 'Reports',
      name: 'reports',
      type: 'array',
      of: [{ type: 'themePageReport' }],
      validation: (Rule) => Rule.max(3),
      group: 'editableContent',
    },
    {
      title: 'Theme sponsors',
      name: 'themeSponsors',
      type: 'array',
      of: [{ type: 'partner' }],
      group: 'editableContent',
    },
  ],
};
