import { CgInternal } from 'react-icons/cg';
import { GrayBoxDropDown } from '../../components/graybox-dropdown';

// rename
export default {
  title: 'Gray Box dropdown',
  name: 'greenBox',
  type: 'object',
  description: 'Gebruik dit voor tekst die je wil benadrukken',
  fields: [
    {
      title: 'Kader highlight Titel',
      name: 'greenBoxTitle',
      type: 'string',
    },
    {
      title: 'Kader highlight PT',
      name: 'greenBoxPText',
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
      title: 'greenBoxTitle'
    }
  },
  components: {
    preview: GrayBoxDropDown
  }
};
