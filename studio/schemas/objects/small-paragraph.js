import { CgInternal } from 'react-icons/cg';

import { GrayBox } from '../../components/graybox';

// rename
export default {
  title: 'Gray Box',
  name: 'smallPara',
  type: 'object',
  fields: [
    {
      title: 'Kader secundaire info Title',
      name: 'smallParaTitle',
      type: 'string',
    },
    {
      title: 'Kader secundaire PT',
      name: 'smallParaPText',
      type: 'array',
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
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link (Instrument)',
                icon: CgInternal,
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'instrument' }],
                    options: {
                      disableNew: true,
                    },
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
      title: 'smallParaTitle',
    },
  },
  components: {
    preview: GrayBox,
  },
};
