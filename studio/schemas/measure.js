


export default {
    title: 'Measure',
    name: 'measure',
    type: 'document',
    // GROUPS 
    groups: [
      {
        name: 'overview',
        title: 'Overview Content',
        default: true
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
        validaiton: Rule => Rule.required(),
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
        title: 'Juridisch Haalbaarheid',
        name: 'juridischHaalbaarheid',
        type: 'string',
        description: 'Please select medium low or high',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Low', value: 1},
            {title: 'Medium', value: 2},
            {title: 'High', value: 3},
          ],
          layout: 'radio',
          direction: 'horizontal',
        },
        group: ['overview', 'filter']
      },
      {
        title: 'Juridisch invloed',
        name: 'juridischInvloed',
        type: 'string',
        description: 'Please select medium low or high',
        validation: Rule => Rule.required(),
        options: {
          list: [
            {title: 'Low', value: 1},
            {title: 'Medium', value: 2},
            {title: 'High', value: 3},
          ],
          layout: 'radio',
          direction: 'horizontal'
        },
        group: ['overview']
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
            {title: 'Provinciaal', value:'Provinciaal'},
            {title: 'Gemeentelijk', value:'Gemeentelijk'},
          ],
          layout: 'grid',
        },
        group: ['filter']
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
        group: ['filter']
      },
      // ITEMS ONLY IN TABLE
      {
        title: 'Rechtsgebied CHECK',
        name: 'rechtsgebied2',
        type: 'string',
        description: 'THIS NEEDS TO BE CHECKED AS THERE IS ALREADY THIS ATTRIBUTE',
        validation: Rule => Rule.required(),
        group: 'table'
      },
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
        name: 'LawDate',
        type: 'datetime',
        description: 'The date the law was created - leave empty if TBD',
        validation: Rule => Rule.required(),
        group: 'table',
        options: {
          dateFormat: 'DD-MM-YYY',
        },
      },
      {
        title: 'Content block 1',
        name: 'contentBlock1',
        type: 'array',
        of: [
          {
            type: 'block',
            lists: [
              {title: 'Bullet', value: 'bullet'},
              {title: 'Numbered', value: 'number'}
            ],
            
          },
          {
            type: 'image'
          }
        ],
        group: 'copy'
      },
      {
        title: 'Green Box',
        name: 'greenBox',
        type: 'array',
        description: 'insert text that you would like in green box ',
        of: [
          {
          type: 'block',
          styles: [
            { title: 'BoxHeading', value: 'h4' },
            { title: 'Boxtext', value: 'normal' },
          ]
        }
        ],
        group: 'copy'
      },
    ]
  }