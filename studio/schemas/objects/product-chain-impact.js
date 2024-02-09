import { BsNewspaper } from 'react-icons/bs';

export default {
  name: 'ImpactItem',
  title: 'Impact Item',
  type: 'document',
  fields: [
    {
      name: 'detail',
      type: 'string',
      title: 'Impact Detail',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'question',
      type: 'string',
      title: 'Impact Question',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Impact Image',
      type: 'image',
      fields: [
        {
          title: 'Alt Text',
          name: 'altText',
          type: 'string',
        },
      ],
    },
    {
      title: 'Slide out title',
      name: 'disclosureTitle',
      type: 'string',
    },
    {
      title: 'Slide out content',
      name: 'disclosureContentt',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'normal', value: 'normal' },             { title: 'H2', value: 'h2' },
        ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },],
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
                    title: 'Open in new window',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  
  ],
  preview: {
    select: {
      title: 'detail',
    },
  },
};
