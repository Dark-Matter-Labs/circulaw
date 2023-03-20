import { BsCircle } from 'react-icons/bs';

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
      title: 'Thema Titel',
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
      title: 'Thema Subtitle',
      name: 'themaSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(), // how do we handle links? Seems a bit much to put in a PT block.
      group: 'editableContent',
    },
    {
      title: 'Link Text',
      name: 'linkText',
      type: 'string',
      group: 'editableContent',
    },
    {
      title: 'Header Link',
      name: 'headerLink',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
      group: 'editableContent',
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image',
      description: 'This image must already have the gradient',
      group: 'editableContent',
    },
    {
      title: 'Hero Image Mobile',
      name: 'heroImageMobile',
      type: 'image',
      description: 'This must be the original image',
      group: 'editableContent',
    },
    {
      title: 'Overviews Title',
      name: 'overviewsTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'This will be displayed above the 3 cards leading to the overviews on the Thema page',
      group: 'editableContent',
    },
    {
      title: 'Featured Instrument Title',
      name: 'featuredInstrumentTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description:
        'This will be displayed about the legal instruments that are featured on the Thema page (Uitgelicht: X ...) start from after the number',
      group: 'editableContent',
    },
    {
      title: 'Featured Instrument Subtitle',
      name: 'featureInstrumentSubtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },

    // the info for the 3 cards on the thema page - all need a max Length
    //  {
    //    title: 'List Title', // max length
    //  name: 'listTitle',
    // type: 'string',
    // validation: (Rule) => Rule.required().max(50),
    // group: 'editableContent',
    // },
    {
      title: 'List Card Text',
      name: 'listText',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'List Card Link',
      name: 'listLink',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'devOnly',
    },
    {
      title: 'Samenhang Card Title',
      name: 'samenhangTitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Samenhang Card Text',
      name: 'samenhangText',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Samenhang Card Link',
      name: 'samenhangLink',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'devOnly',
    },
    {
      title: 'Welke Overheid Card Title',
      name: 'welkeTitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(70),
      group: 'editableContent',
    },
    {
      title: 'Welke Overheid Card Text',
      name: 'welkeText',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      title: 'Welke Overheid Card Link',
      name: 'welkeLink',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'devOnly',
    },
    {
      title: 'Home Page Card Text', // need to add max length
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
      title: 'Home Page Order', // need to add max length
      name: 'homePageOrder',
      type: 'number',
      group: 'editableContent',
    },
    {
      title: 'Home Page Card Image', // need to add max length
      name: 'homePageCardImage',
      type: 'image',
      description: 'image must include Icon',
      group: 'editableContent',
    },
  ],
};
