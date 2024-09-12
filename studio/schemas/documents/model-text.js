import { InstrumentInput } from "../../components/instrument-reference";


export default {
    name: 'modelText',
    type: 'document',
    title: 'Model Texts',
    fields: [
        {
            title: 'Title', // this is actually the goal column. not all values in this col are unique.
            type: 'string',
            name: 'title',
        },
        {
            title: 'Slug',
            type: 'slug', 
            name: 'slug',
            options: {
                source: 'title',
                inUnique: 'true',
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').replace('?', '').slice(0, 200),
              },
        }, 
        {
            title: 'Pijler',
            type: 'reference',
            name: 'pillar',
            to: [{type: 'pillar'}]
        },
        {
            title: 'Schaalniveau',
            type: 'string',
            name: 'scale'
        },
        {
            title: 'Type regel',
            type: 'string',
            name: 'type',
        },
        {
            title: 'Juridische houdbaarheid',
            type: 'string',
            name: 'impactLevel',
            options: {
                list: [
                    {
                        title: 'Hoog',
                        value: 'hoog'
                    },
                    {
                        title: 'Gemiddeld',
                        value: 'gemiddeld'
                    },
                    {
                        title: 'Beperkt',
                        value: 'beperkt'
                    }
                ]
            }
        },
        {
            title: 'Modeltekst', // Portable text with only bullet and numbered lists
            type: 'array',
            name: 'modelText',
            of: [
                {
                  type: 'block',
                  styles: [{ title: 'normal', value: 'normal' }],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Number', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
              ],
        },
        {
            title: 'Toelichting:',
            type: 'array',
            name: 'description',
            of: [
                {
                  type: 'block',
                  styles: [{ title: 'normal', value: 'normal' }],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Number', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                  },
                },
              ],
        },
        {
            title: 'Instruments',
            type: 'array',
            name: 'linkedInstruments',
            of: [{
                type: 'object',
                fields: [
                  {
                    name: 'instrument',
                    title: 'Instrument',
                    type: 'reference',
                    to: [{ type: 'instrument' }],
                    components: { input: InstrumentInput },
                  },
                ],
              }],
        }
       
    ]
}