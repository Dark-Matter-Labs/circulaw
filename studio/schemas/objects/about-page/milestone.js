import { GoMilestone } from 'react-icons/go';

import HighlightLargeText from '../../../components/highlight-large-text';

export default {
  title: 'Milestone',
  name: 'milestone',
  type: 'object',
  icon: GoMilestone,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'the title of the milestone will not be shown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Year',
      name: 'year',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).integer(),
    },
    {
      title: 'Month',
      name: 'month',
      type: 'number',
      options: {
        list: [
          { title: 'January', value: 1 },
          { title: 'February', value: 2 },
          { title: 'March', value: 3 },
          { title: 'April', value: 4 },
          { title: 'May', value: 5 },
          { title: 'June', value: 6 },
          { title: 'July', value: 7 },
          { title: 'August', value: 8 },
          { title: 'September', value: 9 },
          { title: 'October', value: 10 },
          { title: 'November', value: 11 },
          { title: 'December', value: 12 },
        ],
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [{ title: 'normal', value: 'normal' }],
          marks: {
            decorators: [
              {
                title: 'Large Highlight',
                value: 'highlight',
                blockEditor: {
                  render: HighlightLargeText,
                  icon: GoMilestone,
                },
              },
            ],
            annotations: [],
          },
          lists: [],
        },
      ],
    },
  ],
};
