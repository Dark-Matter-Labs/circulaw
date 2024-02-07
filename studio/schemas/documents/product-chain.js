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
      name: 'impactItems',
      type: 'array',
      title: 'Impact Items',
      description: 'add impact list here',
      of: [{ type: 'ImpactItem' }],
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
      type: 'text',
      description: 'Links at the bottom',
      group: 'editableContent',
    },
  ],
};
