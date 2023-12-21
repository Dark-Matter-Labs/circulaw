import { BsCircle } from 'react-icons/bs';
import { lineBreak } from '../../components/headerInput';

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
      name: 'devOnly',
      title: 'Dev Only',
    },
  ],
  fields: [
    {
      name: 'General',
      title: 'GENERAL',
      type: 'text',
      components: {
        input: lineBreak,
      },
      group: 'editableContent',
    },
    {
      title: 'Titel thema',
      name: 'themaName',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'DO NOT CHANGE This will be displayed in the Navigation, Footer, Thema Card etc',
      group: 'devOnly',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'devOnly',
      description: 'DO NOT CHANGE',
      options: {
        source: 'themaName',
        inUnique: 'true',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Transitie-agenda',
      name: 'transitionAgenda',
      type: 'string',
      description:
        'Selecteer de transitieagenda waaronder dit instrument valt (is nog niet zichtbaar op de site)',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Biomassa en voedsel', value: 'biomassa-en-voedsel' },
          { title: 'Kunststoffen', value: 'kunststoffen' },
          { title: 'Consumptiegoederen', value: 'consumptie-goederen' },
          { title: 'Bouw', value: 'bouw' },
          { title: 'Maakindustrie', value: 'maakindustrie' },
        ], // <-- predefined values
        layout: 'dropdown', // <-- defaults to 'dropdown'
      },
      group: 'devOnly',
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
      title: 'Link introtekst',
      name: 'linkText',
      type: 'string',
      description: 'Niet verplicht',
      group: 'editableContent',
    },
    {
      title: 'Url introtekst',
      name: 'headerLink',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
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
      name: 'overviewCards',
      title: 'OVERZICHTSKAARTEN',
      type: 'text',
      components: {
        input: lineBreak,
      },
      group: 'editableContent',
    },
    {
      title: 'Intro op lijstkaart',
      name: 'listText',
      type: 'text',
      description:
        'Tekst over de instrumentenlijst. Titel op deze kaart wordt automatisch gegenereerd.',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Titel samenhang-kaart',
      name: 'samenhangTitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Intro samenhang-kaart',
      name: 'samenhangText',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Titel bevoegdheden-kaart',
      name: 'welkeTitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Intro bevoegdhedenkaart',
      name: 'welkeText',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      name: 'homePageCards',
      title: 'HOMEPAGE KAARTEN',
      type: 'text',
      components: {
        input: lineBreak,
      },
      group: 'editableContent',
    },
    {
      title: 'Tekst homepage-themakaart', // need to add max length
      name: 'homePageCardText',
      type: 'text',
      group: 'editableContent',
    },
    {
      title: 'Home Page Card Button Text', // need to add max length
      name: 'homePageCardButtonText',
      type: 'string',
      group: 'editableContent',
    },
    {
      title: 'Volgorde presentatie thema’s', // need to add max length
      name: 'homePageOrder',
      type: 'number',
      description:
        'Elk thema moet een eigen nummer krijgen. Nummer bepaalt de volgorde van presentatie.',
      group: 'editableContent',
    },
    {
      title: 'Beeld homepage thema-kaart', // need to add max length
      name: 'homePageCardImage',
      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
      group: 'editableContent',
    },
    {
      title: 'Beeld homepage thema-kaart mobile', // need to add max length
      name: 'homePageCardImageMobile',
      type: 'image',
      description:
        'Beeld moet altijd icoon van thema bevatten. Bij nieuw thema banner ‘NIEUW’ toevoegen.',
      group: 'editableContent',
    },
  ],
};
