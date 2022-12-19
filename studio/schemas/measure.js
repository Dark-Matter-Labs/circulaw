
import { InformationCircleIcon } from "@heroicons/react/outline"

export default {
    title: 'Measure',
    name: 'measure',
    type: 'document',
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
        default: true,
      },
      {
        name: 'filter',
        title: 'Filter Content',
      },
    ],
    // FIELDS
    fields: [
      {
        title: 'Is Extended',
        name: 'isExtended',
        type: 'boolean',
        description: 'Select if this is the measure you want displayed as extended',
        validation: Rule => Rule.required(),
      },
      {
        title: 'Titel',
        name: 'titel',
        type: 'string',
        description: 'The title of the measure which will be displayed at the top of the page',
        validation: Rule => Rule.required(),
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description: 'please click on generate',
        options: {
          source: 'titel',
          inUnique: 'true',
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        },
      },
      {
        title: 'Thema',
        name: 'thema',
        type: 'string',
        description: 'What themas is the measure?',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Houtbouw', value: 'houtbouw'},
            {title: 'Circulaire windturbines', value: 'circular-windturbines'},
            {title: 'Mattress', value: 'mattress'},
          ], // <-- predefined values - can store these elsewhere if we want
          layout: 'dropdown'
        },
        group: 'overview'
      },
      {
        title: 'Transition Agenda',
        name: 'transitionAgenda',
        type: 'string',
        options: {
          list: [
            {title: 'Biomassa en voedsel', value: 'biomassa-en-voedsel'}, 
            {title: 'Kunststoffen', value: 'kunststoffen'},
            {title: 'Consumptiegoederen', value: 'consumptiegoederen'},
            {title: 'Bouw', value: 'bouw'}, 
            {title: 'Maakindustrie', value: 'maakindustrie'},          
          ], // <-- predefined values
          layout: 'dropdown' // <-- defaults to 'dropdown'
        }
      },
      {
        title: 'Product Group',
        name: 'productGroup',
        type: 'string',
        options: {
          list: [
            {title: 'Plastic verpakkingen', value: 'plastic-verpakkingen'},
            {title: 'Plastic (afval) in de bouw', value: 'pastic-afval-in-de-bouw'},
            {title: 'Landbouwfolie', value: 'landbouwfolie'},
            {title: 'Plastic verpakkingen en verbruiksartikelen', value: 'plastic-verpakkingen-en-verbruiksartikelen'},
            {title: 'Chemische producten', value: 'chemische-producten'},
            {title: 'Textiel (incl. kleding)', value: 'textiel-inc-kleding)'},
            {title: 'Elektrische apparaten', value: 'elektrische-apparaten'},
            {title: 'Elektrische apparaten', value: 'elektrische apparaten'},
            {title: 'Meubels', value: 'meubels'},
            {title: 'Kunstwerken (gestart met viaducten)', value: 'unstwerken-gestart-met-viaducten'},
            {title: 'Wegen (gestart met asfalt)', value: 'wegen-gestart-met-asfalt)'},
            {title: 'Woningen', value: 'woningen'},
            {title: 'Bedrijfsruimte/kantoren', value: 'bedrijfsruimte-kantoren'},
            {title: 'Capital Equipment', value: 'capital-equipment'},
            {title: 'Windparken', value: 'windparken'},
            {title: 'Zonneparken', value: 'zonneparken'},
            {title: 'Klimaatinstallaties', value: 'klimaatinstallaties'},
          ], // <-- predefined values
          layout: 'dropdown' // <-- defaults to 'dropdown'
        }
      },
      // ITEMS ONLY IN OVERVIEW/FILTER
      {
        title: 'R Ladder',
        name: 'rLadder',
        type: 'array',
        of: [{type: 'string'}],
        description: 'Please select applicable R Values',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'R1', value: 'R1'},
            {title: 'R2', value: 'R2'},
            {title: 'R3', value: 'R3'},
            {title: 'R4', value: 'R4'},
            {title: 'R5', value: 'R5'},
            {title: 'R6', value: 'R6'},
          ],
          layout: 'grid',
        },
        group: ['overview', 'filter']
      },
      {
        title: 'Subrechtsgebied',
        name: 'subrechtsgebied',
        type: 'string',
        description: 'Please select a subrechtsgebied',
        validaton: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Erfpacht', value: 'erfpacht'},
            {title: 'Omgevingsrecht', value: 'omgevingsrecht'},
            {title: 'Aanbesteding', value: 'aanbesteding'},
            {title: 'Contracten', value: 'contracten'},
            {title: 'Gronduitgifte', value: 'gronduitgifte'},
          ],
          layout: 'dropdown'
        },
        group: ['overview', 'filter'],
      },
      {
        title: 'Juridisch invloed',
        name: 'juridischInvloed',
        type: 'string',
        description: 'Please select medium low or high',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Low', value: '1'},
            {title: 'Medium', value: '2'},
            {title: 'High', value: '3'},
          ],
          layout: 'radio',
          direction: 'horizontal'
        },
        group: ['overview']
      },
      {
        title: 'Juridisch Haalbaarheid',
        name: 'juridischHaalbaarheid',
        type: 'string',
        description: 'Please select medium low or high',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Low', value: '1'},
            {title: 'Medium', value: '2'},
            {title: 'High', value: '3'},
          ],
          layout: 'radio',
          direction: 'horizontal',
        },
        group: ['overview', 'filter']
      },
      {
        title: 'Government Level',
        name: 'governmentLevel',
        type: 'array',
        description: 'Please select one or more levels of government',
        of: [{type: 'string'}],
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Europees', value: 'europees'},
            {title: 'Nationaal', value: 'nationaal'},
            {title: 'Provinciaal', value:'provinciaal'},
            {title: 'Waterschappen', value: 'waterschappen'},
            {title: 'Gemeentelijk', value:'gemeentelijk'},
          ],
          layout: 'grid',
        },
        group: ['filter', 'table']
      },
      {
        title: 'Rechtsgebied',
        name: 'rechtsgebied',
        type: 'string',
        description: 'Please select medium one option',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Privaatrecht', value: 'privaatrecht'},
            {title: 'Publiekrecht', value: 'publiekrecht'},
            {title: 'Fiscaalrecht', value: 'fiscaalrecht'},
          ],
          layout: 'radio',
          direction: 'horizontal'
        },
        group: ['filter', 'table']
      },
      // ITEMS ONLY IN TABLE
      {
        title: 'Citeertitel',
        name: 'citeertitel',
        type: 'string',
        description: 'The citeertitel of law e.g. aanbestedingswet 2012 ',
        validation: Rule => Rule.required(),
        group: 'table'
      },
      {
        title: 'Artikel',
        name: 'artikel',
        type: 'string',
        description: 'The aricle of law e.g. 2.8a ',
        validation: Rule => Rule.required(),
        group: 'table'
      },
      {
        title: 'Artikel link',
        name: 'artikelLink',
        type: 'url',
        description: 'The aricle of law referenced above - must commence with http or https',
        validation: Rule => Rule.required().uri({scheme: ['http', 'https']}),
        group: 'table'
      },
      {
        title: 'Geldig vanaf',
        name: 'lawDate',
        type: 'datetime',
        description: 'The date the law was created - leave empty if TBD',
        group: 'table',
        options: {
          dateFormat: 'DD-MM-YYYY',
        },
      },
      // COPY CONTENT
      {
        title: 'Content Builder',
        name: 'contentBuilder',
        type: 'array',
        of: [
          {type: 'copyBlock'},
          {type: 'greenBox'},
          {type: 'pdfBlock'},
          {type: 'imageBlock'}
        ],
        group: 'copy'
      },
      // MAKE GOOD ONE
      {
        title:'Content',
        name: 'content',
        type: 'array',
        of: [
          {
            type: 'greenBox'
          },
          {
            type: 'block',
            of: [{type: 'hoverText'}],
            lists: [
              {title: 'Bullet', value: 'bullet'},
              {title: 'Number', value: 'number'},
            ],
            styles: [
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'H4', value: 'h4'},
              {title: 'H5', value: 'h5'},
              {title: 'normal', value: 'normal'},
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
                      type: 'url'
                    },
                    {
                      title: 'Open in new winder',
                      name: 'blank',
                      type: 'boolean',
                    }
                  ],
                },
                ]
            }
          }
        ],
        group: 'copy'
      }
    ]
  }