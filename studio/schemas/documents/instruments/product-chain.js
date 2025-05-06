import { BsCircle } from 'react-icons/bs';

import { lineBreak } from '../../components/headerInput';

export default {
  title: 'Transitie-agenda',
  name: 'transitionAgenda',
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
    {
      name: 'high-level',
      title: 'High level content',
    },
    {
      name: 'homepage',
      title: 'Home Page',
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
      title: 'Product Chain Titel',
      name: 'pcName',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'DO NOT CHANGE This will be displayed in the Navigation, Footer, Thema Card etc',
      group: 'devOnly',
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
      group: 'devOnly',
      description: 'DO NOT CHANGE',
      options: {
        source: 'pcName',
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
      title: 'Home Page Image',
      name: 'homepageImage',
      type: 'image',
      fields: [
        {
          title: 'Alt text',
          type: 'string',
          name: 'altText',
        },
      ],
      group: 'homepage',
    },
    {
      title: 'Homepage Card Text',
      name: 'cardText',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Home Page order',
      group: 'homepage',
    },
    {
      name: 'introOne',
      type: 'text',
      title: 'Intro Text 1',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      name: 'introTwo',
      type: 'text',
      title: 'Intro Text 2',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      name: 'impactTitle',
      type: 'string',
      title: 'Impact Title',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      name: 'impactItems',
      type: 'array',
      title: 'Impact Items',
      description: 'add impact list here',
      of: [{ type: 'ImpactItem' }],
      group: 'editableContent',
    },
    {
      name: 'ambitionTitle',
      type: 'string',
      title: 'Ambition Title',
      validation: (Rule) => Rule.required(),
      group: 'editableContent',
    },
    {
      name: 'ambitionItems',
      type: 'array',
      title: 'Ambition Items',
      description: 'add ambition items here',
      of: [{ type: 'AmbitionItem' }],
      group: 'editableContent',
    },
    {
      title: 'Links',
      name: 'pcLinks',
      type: 'array',
      description: 'Links at the bottom',
      of: [{ type: 'linkObject' }],
      group: 'editableContent',
    },
  ],
};
