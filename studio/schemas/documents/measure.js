import { VscLaw } from 'react-icons/vsc'

export default {
  title: 'Measure',
  name: 'measure',
  type: 'document',
  icon: VscLaw,
  // GROUPS
  groups: [
    {
      name: 'overview',
      title: 'Overview Content',
    },
    {
      name: 'table',
      title: 'Table Content',
    },
    {
      name: 'copy',
      title: 'Copy Content',
    },
    {
      name: 'filter',
      title: 'Filter Content',
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
    },
    {
      title: 'Titel',
      name: 'titel',
      type: 'string',
      description: 'Titel van het instrument. Zorg dat deze titel uniek is.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Subtitel',
      name: 'subtitel',
      type: 'text',
      description: 'Subtitel en/of intro-tekst  -  komt direct onder de titel.',
      validation: (Rule) => Rule.max(130),
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
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Thema',
      name: 'thema',
      type: 'string',
      description: 'Selecteer het thema waaronder dit instrument valt.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Houtbouw', value: 'houtbouw' },
          { title: 'Circulaire windturbines', value: 'circulaire-windturbines' },
          { title: 'Matrassen', value: 'matrassen' },
        ], // <-- predefined values - can store these elsewhere if we want
        layout: 'dropdown',
      },
      group: 'overview',
    },
    {
      title: 'Transitie-agenda',
      name: 'transitionAgenda',
      type: 'string',
      description:
        'Selecteer de transitieagenda waaronder dit instrument valt (is nog niet zichtbaar op de site)',
      options: {
        list: [
          { title: 'Biomassa en voedsel', value: 'biomassa-en-voedsel' },
          { title: 'Kunststoffen', value: 'kunststoffen' },
          { title: 'Consumptiegoederen', value: 'consumptiegoederen' },
          { title: 'Bouw', value: 'bouw' },
          { title: 'Maakindustrie', value: 'maakindustrie' },
        ], // <-- predefined values
        layout: 'dropdown', // <-- defaults to 'dropdown'
      },
    },
    {
      title: 'Productgroep',
      name: 'productGroup',
      type: 'string',
      description: 'Productgroep',
      options: {
        list: [
          { title: 'Plastic verpakkingen', value: 'plastic-verpakkingen' },
          { title: 'Plastic (afval) in de bouw', value: 'pastic-afval-in-de-bouw' },
          { title: 'Landbouwfolie', value: 'landbouwfolie' },
          {
            title: 'Plastic verpakkingen en verbruiksartikelen',
            value: 'plastic-verpakkingen-en-verbruiksartikelen',
          },
          { title: 'Chemische producten', value: 'chemische-producten' },
          { title: 'Textiel (incl. kleding)', value: 'textiel-inc-kleding)' },
          { title: 'Elektrische apparaten', value: 'elektrische-apparaten' },
          { title: 'Elektrische apparaten', value: 'elektrische apparaten' },
          { title: 'Meubels', value: 'meubels' },
          {
            title: 'Kunstwerken (gestart met viaducten)',
            value: 'unstwerken-gestart-met-viaducten',
          },
          { title: 'Wegen (gestart met asfalt)', value: 'wegen-gestart-met-asfalt)' },
          { title: 'Woningen', value: 'woningen' },
          { title: 'Bedrijfsruimte/kantoren', value: 'bedrijfsruimte-kantoren' },
          { title: 'Capital Equipment', value: 'capital-equipment' },
          { title: 'Windparken', value: 'windparken' },
          { title: 'Zonneparken', value: 'zonneparken' },
          { title: 'Klimaatinstallaties', value: 'klimaatinstallaties' },
          { title: 'Matrassen', value: 'matrassen' },
        ], // <-- predefined values
        layout: 'dropdown', // <-- defaults to 'dropdown'
      },
    },
    // ITEMS ONLY IN OVERVIEW/FILTER
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
      group: ['overview', 'filter'],
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
      group: ['overview', 'filter'],
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
      group: ['overview'],
    },
    {
      title: 'Toelichting invloed',
      name: 'invloedTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      group: 'overview',
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
      group: ['overview', 'filter'],
    },
    {
      title: 'Toelichting juridische haalbaarheid',
      name: 'JHTooltipText',
      type: 'string',
      description: 'Beschrijf kort waarom dit beperkt, gemiddeld of hoog is',
      group: 'overview',
    },
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
      group: ['filter', 'table'],
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
      group: ['filter', 'table'],
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
      group: ['filter'],
    },
    // ITEMS ONLY IN TABLE
    {
      title: 'Citeertitel relevante wet',
      name: 'citeertitel',
      type: 'string',
      description: 'De naam van de relevante wet (bv Aanbestedingswet 2012)',
      validation: (Rule) => Rule.required(),
      group: 'table',
    },
    {
      title: 'Wetsartikel-nummer',
      name: 'artikel',
      type: 'string',
      description: 'Geef het nummer van het wetsartikel op (bv 2.8a).',
      validation: (Rule) => Rule.required(),
      group: 'table',
    },
    {
      title: 'Link wetsartikel',
      name: 'artikelLink',
      type: 'url',
      description: 'De link naar een wetsartikel moet altijd beginnen met http of https.',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
      group: 'table',
    },
    {
      title: 'Ingangsdatum wet',
      name: 'lawDate',
      type: 'date',
      description: 'Ingangsdatum wet (laat open als wet nog niet van kracht is)',
      group: 'table',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
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
              type: 'hoverText',
            },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          styles: [
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'firstH2', value: 'firstH2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'normal', value: 'normal' },
          ],
          marks: {
            decorators: [],
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
                  },
                  {
                    title: 'Open in new winder',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
      group: 'copy',
    },
    {
      title: 'Juridische toelichting',
      name: 'juridischeToelichting',
      type: 'array',
      of: [{ type: 'block' }],
      group: ['copy', 'table'],
    },
  ],
};
