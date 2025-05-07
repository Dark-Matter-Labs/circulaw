import { VscLaw } from 'react-icons/vsc';
import { contentArray } from '../../../utils/portable-text-arrays';

export default {
  title: 'instrument',
  name: 'instrument',
  type: 'document',
  icon: VscLaw,
  groups: [
    {
      name: 'copy',
      title: 'Copy Content',
    },
  ],
  fieldsets: [{ name: 'category', title: 'Category' }],
  fields: [
    {
      title: 'Uitgelicht op thema-pagina',
      name: 'isFeatured',
      type: 'boolean',
      description: 'Moet dit instrument op de thema-pagina worden uitgelicht?',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule) =>
            Rule.custom(({ parent }) => {
              return parent !== undefined
                ? 'You need to add a caption to the image, this will only be visible to screen readers'
                : true;
            }),
        },
      ],
    },
    {
      title: 'Titel*',
      name: 'titel',
      type: 'string',
      description: 'Per thema moet de titel uniek zijn. Max 80 tekens (incl. spaties)',
      validation: (Rule) => Rule.required().max(80), // TODO: add max length here.
      initialValue: 'New Instrument',
    },
    {
      title: 'Intro*',
      name: 'subtitel',
      type: 'text',
      description: 'Komt direct onder de titel. Max 300 tekens (incl. spaties)',
      validation: (Rule) => Rule.max(300),
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
      title: 'Slug*',
      name: 'slug',
      type: 'slug',
      description:
        'Klik op ‘Generate’. Als de titel gelijk is aan een instrument binnen een ander thema, voeg dan altijd het thema toe: _[thema]',
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
    },
    {
      title: 'Productketen*',
      name: 'transitionAgenda',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'transitionAgenda' }],
    },
    {
      title: 'Thema*',
      name: 'thema',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: [{ type: 'thema' }, { type: 'simpleThema' }],
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
    },
    {
      title: 'Beleid',
      name: 'beleid',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      fieldset: 'category',
    },
    {
      title: 'Beleid sub category',
      name: 'beleidSubCategory',
      type: 'array',
      fieldset: 'category',
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
    },

    {
      title: 'Inkoop',
      name: 'inkoop',
      type: 'boolean',
      fieldset: 'category',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Inkoop sub category',
      name: 'inkoopSubCategory',
      type: 'array',
      fieldset: 'category',
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
          { title: 'Geschiktheidseisen', value: 'geschiktheidseisen' },
        ],
        layout: 'grid',
      },
    },
    {
      title: 'Grondpositie',
      name: 'grondpositie',
      type: 'boolean',
      fieldset: 'category',
      initialValue: false,
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
      fieldset: 'category',
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
    },
    {
      title: 'Subsidie',
      name: 'subsidie',
      type: 'boolean',
      fieldset: 'category',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'fiscaal',
      name: 'fiscaal',
      type: 'boolean',
      fieldset: 'category',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Citeertitel relevante wet',
      name: 'citeertitel',
      type: 'string',
      description: 'De naam van de relevante wet (bv Aanbestedingswet 2012)',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Wetsartikel-nummer',
      name: 'artikel',
      type: 'string',
      description: 'Geef het nummer van het wetsartikel op (bv 2.8a).',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link wetsartikel',
      name: 'artikelLink',
      type: 'url',
      description: 'De link naar een wetsartikel moet altijd beginnen met http of https.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    },
    // do all laws have dates ?
    {
      title: 'Ingangsdatum wet',
      name: 'lawDate',
      type: 'date',
      description: 'Ingangsdatum wet (laat open als wet nog niet van kracht is)',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    // COPY CONTENT
    {
      title: 'Inhoud',
      name: 'content',
      type: 'array',
      validation: (rule) =>
        rule.custom((blocks) => {
          const emptyBlocks = (blocks || []).filter(
            (block) =>
              block._type === 'block' &&
              block.children.every((span) => span._type === 'span' && span.text.trim() === ''),
          );
          const emptyPaths = emptyBlocks.map((block, index) => [{ _key: block._key }] || [index]);

          return emptyPaths.length === 0
            ? true
            : {
                message: 'Paragraph cannot be empty',
                paths: emptyPaths,
              };
        }),
      of: [...contentArray],
      group: 'copy',
    },
    // depreciated fields
    {
      title: 'Intro-regels',
      name: 'introText',
      type: 'text',
      description:
        'Plak hier de tekst van de eerste zinnen in (deze tekst wordt in de lijst met alle  instrumenten weergegeven).',
      deprecated: {
        reason: 'Please use subtitle instead',
      },
      hidden: ({ value }) => (value === undefined ? true : false),
    },
    {
      title: 'Bevat extra info',
      name: 'extraContent',
      type: 'array',
      description: 'Bevat het instrument voorbeelden en/of leidraden?',
      deprecated: {
        reason: 'this field is no longer used in instruments',
      },
      hidden: ({ value }) => (value === undefined ? true : false),
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Leidraad', value: 'Leidraad' },
          { title: 'Voorbeeld', value: 'Voorbeeld' },
        ],
        layout: 'grid',
      },
    },
    {
      title: 'Toelichting invloed',
      name: 'invloedTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      deprecated: {
        reason: 'This field is no longer used in instruments',
      },
      hidden: ({ value }) => (value === undefined ? true : false),
    },
    {
      title: 'Toelichting juridische haalbaarheid',
      name: 'JHTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      deprecated: {
        reason: 'this field is no longer used in instruments',
      },
      hidden: ({ value }) => (value === undefined ? true : false),
    },
  ],
  preview: {
    select: {
      title: 'titel',
      subtitle: 'thema.themaName',
    },
  },
};
