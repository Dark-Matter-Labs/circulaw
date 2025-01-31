import { CgInternal } from 'react-icons/cg';
import { VscLaw } from 'react-icons/vsc';

export default {
  title: 'instrument',
  name: 'instrument',
  type: 'document',
  icon: VscLaw,
  // GROUPS
  groups: [
    {
      name: 'high-level',
      title: 'High level content',
      default: 'true',
    },
    {
      name: 'copy',
      title: 'Copy Content',
    },
    {
      name: 'meta-data',
      title: 'Meta Data',
    },
  ],
  // FIELDS
  fields: [
    {
      title: 'Uitgelicht op thema-pagina',
      name: 'isFeatured',
      type: 'boolean',
      description: 'Moet dit instrument op de thema-pagina worden uitgelicht?',
      validation: (Rule) => Rule.required(),
      group: 'high-level',
      initialValue: false,
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      hidden: ({ document }) => document.isFeatured === false,
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
      group: 'high-level',
    },
    {
      title: 'Titel',
      name: 'titel',
      type: 'string',
      description: 'Titel van het instrument. Zorg dat deze titel uniek is.',
      validation: (Rule) => Rule.required(),
      group: 'high-level',
      initialValue: 'New Instrument',
    },
    {
      title: 'Subtitel',
      name: 'subtitel',
      type: 'text',
      description: 'Subtitel en/of intro-tekst  -  komt direct onder de titel.',
      validation: (Rule) => Rule.max(300),
      group: 'high-level',
    },
    {
      title: 'Meta Page Title',
      name: 'metaTitle',
      type: 'string',
      description: 'SEO',
    },
    {
      title: 'Meta Description',
      name: 'metaDescribe',
      type: 'string',
      description: 'SEO',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description:
        'Klik op ‘aanmaken’. (Slug is het gedeelte van een URL die na de domeinnaam komt. Deze paginanaam wordt automatisch gegenereerd aan de hand van de titel.)',
      options: {
        source: 'titel',
        inUnique: 'true',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
      group: 'high-level',
    },
    {
      title: 'Transitie-agenda',
      name: 'transitionAgenda',
      type: 'reference',
      group: 'high-level',
      description:
        'Selecteer de transitieagenda waaronder dit instrument valt (is nog niet zichtbaar op de site)',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'transitionAgenda' }],
    },
    {
      title: 'Thema',
      name: 'thema',
      type: 'reference',
      weak: true,
      description: 'Selecteer het thema waaronder dit instrument valt.',
      validation: (Rule) => Rule.required(),
      group: 'high-level',

      to: [{ type: 'thema' }, { type: 'simpleThema' }],
    },
    {
      title: 'Bevat extra info',
      name: 'extraContent',
      type: 'array',
      description: 'Bevat het instrument voorbeelden en/of leidraden?',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Leidraad', value: 'Leidraad' },
          { title: 'Voorbeeld', value: 'Voorbeeld' },
        ],
        layout: 'grid',
      },
      group: ['meta-data'],
    },
    // ITEMS ONLY IN MetaData
    {
      title: 'Overheidslaag',
      name: 'overheidslaag',
      type: 'array',
      description: 'Selecteer een of meer relevante overheidslagen.',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Europees', value: 'Europees' },
          { title: 'Nationaal', value: 'Nationaal' },
          { title: 'Provinciaal', value: 'Provinciaal' },
          { title: 'Gemeentelijk', value: 'Gemeentelijk' },
        ],
        layout: 'grid',
      },
      group: ['meta-data'],
    },
    {
      title: 'Invloed',
      name: 'juridischInvloed',
      type: 'string',
      description: 'Selecteer de mate van invloed.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Beperkt', value: 'Beperkt' },
          { title: 'Gemiddeld', value: 'Gemiddeld' },
          { title: 'Hoog', value: 'Hoog' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: ['meta-data'],
    },
    {
      title: 'Toelichting invloed',
      name: 'invloedTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      group: 'meta-data',
    },
    {
      title: 'Juridische Haalbaarheid',
      name: 'juridischeHaalbaarheid',
      type: 'string',
      description: 'Selecteer de mate van haalbaarheid.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Beperkt', value: 'Beperkt' },
          { title: 'Gemiddeld', value: 'Gemiddeld' },
          { title: 'Hoog', value: 'Hoog' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: ['meta-data'],
    },
    {
      title: 'Toelichting juridische haalbaarheid',
      name: 'JHTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      group: 'meta-data',
    },
    {
      title: 'R-Ladder',
      name: 'rLadder',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Selecteer de R-waarde die van toepassing is.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'R1', value: 'R1' },
          { title: 'R2', value: 'R2' },
          { title: 'R3', value: 'R3' },
          { title: 'R4', value: 'R4' },
          { title: 'R5', value: 'R5' },
          { title: 'R6', value: 'R6' },
        ],
        layout: 'grid',
      },
      group: ['meta-data'],
    },
    {
      title: 'Rechtsgebied',
      name: 'rechtsgebied',
      type: 'string',
      description: 'Selecteer een rechtsgebied.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Privaatrecht', value: 'Privaatrecht' },
          { title: 'Publiekrecht', value: 'Publiekrecht' },
          { title: 'Fiscaal recht', value: 'Fiscaal recht' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      group: ['meta-data'],
    },
    {
      title: 'Subrechtsgebied',
      name: 'subrechtsgebied',
      type: 'string',
      description: 'Selecteer een subrechtsgebied.',
      validaton: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Erfpacht', value: 'Erfpacht' },
          { title: 'Omgevingsrecht', value: 'Omgevingsrecht' },
          { title: 'Aanbesteding', value: 'Aanbesteding' },
          { title: 'Contracten', value: 'Contracten' },
          { title: 'Gronduitgifte', value: 'Gronduitgifte' },
          { title: 'Cultureel recht', value: 'Cultureel recht' },
          { title: 'Staats-en bestuursrecht', value: 'Staats-en bestuursrecht' },
          { title: 'Milieurecht', value: 'Milieurecht' },
          { title: 'Fiscaal recht', value: 'Fiscaal recht' },
        ],
        layout: 'dropdown',
      },
      group: ['meta-data'],
    },
    {
      title: 'Citeertitel relevante wet',
      name: 'citeertitel',
      type: 'string',
      description: 'De naam van de relevante wet (bv Aanbestedingswet 2012)',
      validation: (Rule) => Rule.required(),
      group: 'meta-data',
    },
    {
      title: 'Wetsartikel-nummer',
      name: 'artikel',
      type: 'string',
      description: 'Geef het nummer van het wetsartikel op (bv 2.8a).',
      validation: (Rule) => Rule.required(),
      group: 'meta-data',
    },
    {
      title: 'Link wetsartikel',
      name: 'artikelLink',
      type: 'url',
      description: 'De link naar een wetsartikel moet altijd beginnen met http of https.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      group: 'meta-data',
    },
    {
      title: 'Ingangsdatum wet',
      name: 'lawDate',
      type: 'date',
      description: 'Ingangsdatum wet (laat open als wet nog niet van kracht is)',
      group: 'meta-data',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      title: 'Beleid',
      name: 'beleid',
      type: 'boolean',
      initialValue: false,
      group: 'meta-data',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Beleid sub category',
      name: 'beleidSubCategory',
      type: 'array',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent?.beleid === true &&
            typeof currentValue === 'undefined' &&
            parent?.transitionAgenda?._ref === '4759ffe9-96e8-4963-90a3-047fd9910e45'
            ? 'A value is required.'
            : true;
        }),
      hidden: ({ document }) =>
        document.beleid === false ||
        document?.transitionAgenda?._ref !== '4759ffe9-96e8-4963-90a3-047fd9910e45',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Strategie', value: 'strategie' },
          { title: 'Beleidsdoorwerking', value: 'beleidsdoorwerking' },
          { title: 'Beleidsuitvoering', value: 'beleidsuitvoering' },
        ],
        layout: 'grid',
      },
      group: 'meta-data',
    },

    {
      title: 'Inkoop',
      name: 'inkoop',
      type: 'boolean',
      initialValue: false,
      group: 'meta-data',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Inkoop sub category',
      name: 'inkoopSubCategory',
      type: 'array',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent?.inkoop === true && typeof currentValue === 'undefined'
            ? 'A value is required.'
            : true;
        }),
      hidden: ({ document }) => document.inkoop === false,
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Beleid', value: 'beleid' },
          { title: 'Strategie', value: 'strategie' },
          { title: 'Bijzondere procedures', value: 'bijzondere-procedures' },
          { title: 'Selectiecriteria', value: 'selectiecriteria' },
          { title: 'Gunningscriteria', value: 'gunningscriteria' },
          { title: 'Contracteisen', value: 'contracteisen' },
        ],
        layout: 'grid',
      },
      group: 'meta-data',
    },
    {
      title: 'Grondpositie',
      name: 'grondpositie',
      type: 'boolean',
      initialValue: false,
      group: 'meta-data',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent?.transitionAgenda === 'bouw' && typeof currentValue === 'undefined'
            ? 'A value is required.'
            : true;
        }),
    },
    {
      title: 'Grondpositie sub category',
      name: 'grondpositieSubCategory', // remo
      type: 'array',
      validation: (Rule) =>
        Rule.custom((currentValue, { parent }) => {
          return parent?.grondpositie === true &&
            typeof currentValue === 'undefined' &&
            parent?.transitionAgenda?._ref === '4759ffe9-96e8-4963-90a3-047fd9910e45'
            ? 'A value is required.'
            : true;
        }),
      hidden: ({ document }) =>
        document.grondpositie === false ||
        document?.transitionAgenda?._ref !== '4759ffe9-96e8-4963-90a3-047fd9910e45',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Strategie', value: 'strategie' },
          { title: 'Selectiecriteria', value: 'selectiecriteria' },
          { title: 'Gunningscriteria', value: 'gunningscriteria' },
          { title: 'Contracteisen', value: 'contracteisen' },
        ],
        layout: 'grid',
      },
      group: 'meta-data',
    },
    {
      title: 'Subsidie',
      name: 'subsidie',
      type: 'boolean',
      initialValue: false,
      group: 'meta-data',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'fiscaal',
      name: 'fiscaal',
      type: 'boolean',
      initialValue: false,
      group: 'meta-data',
      validation: (Rule) => Rule.required(),
    },
    // COPY CONTENT
    {
      title: 'Intro-regels',
      name: 'introText',
      type: 'text',
      description:
        'Plak hier de tekst van de eerste zinnen in (deze tekst wordt in de lijst met alle  instrumenten weergegeven).',
      validation: (Rule) => Rule.required().max(215),
      group: 'copy',
    },
    {
      title: 'Inhoud',
      name: 'content',
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
                icon: CgInternal,
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
                options: {
                  modal: {
                    type: 'popover',
                    width: 1,
                  },
                },
              },
            ],
          },
        },
      ],
      group: 'copy',
    },
  ],
};
