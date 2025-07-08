import { CgInternal } from 'react-icons/cg';

export const contentArray = [
  { type: 'dropDownHighlight' },
  { type: 'pdfBlock' },
  { type: 'highlightBlock' },
  { type: 'imageBlock' },
  { type: 'youtube' },
  {
    type: 'block',
    of: [{ type: 'dropDown' }],
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Number', value: 'number' },
    ],
    styles: [
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'normal', value: 'normal' },
      { title: 'subheading', value: 'subheading' }, // Only used in `aboutPage`
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
            { title: 'URL', name: 'href', type: 'url' },
            { title: 'Open in new window', name: 'blank', type: 'boolean' },
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
              to: [{ type: 'instrument' }], // Only used in `instrument` schema
              options: {
                disableNew: true,
                modal: {
                  type: 'popover',
                  width: 1,
                },
              },
            },
          ],
        },
      ],
    },
  },
];

export const simpleContentArray = [
  {
    type: 'block',
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Number', value: 'number' },
    ],
    styles: [{ title: 'normal', value: 'normal' }],
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
            { title: 'URL', name: 'href', type: 'url' },
            { title: 'Open in new window', name: 'blank', type: 'boolean' },
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
              to: [{ type: 'instrument' }], // Only used in `instrument` schema
              options: {
                disableNew: true,
                modal: {
                  type: 'popover',
                  width: 1,
                },
              },
            },
          ],
        },
      ],
    },
  },
];
