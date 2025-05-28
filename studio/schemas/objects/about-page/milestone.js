import { GoMilestone } from 'react-icons/go';
import { VscMilestone } from 'react-icons/vsc';

import HighlightLargeText from '../../../components/highlight-large-text';

export default {
  title: 'Milestone',
  name: 'milestone',
  type: 'object',
  icon: GoMilestone,
  fields: [
    {
      title: 'Type of Milestone',
      name: 'typeOfMilestone',
      type: 'string',
      options: {
        list: [
          { title: 'Milestone', value: 'milestone' },
          { title: 'Aggregate Milestone', value: 'aggregateMilestone' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'milestone',
    },
    // Fields for both types
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'The title of the milestone will not be shown',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Year',
      name: 'year',
      type: 'number',
      validation: (Rule) => Rule.min(1900).max(new Date().getFullYear()).integer(),
    },
    // Only show month for "milestone"
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
      hidden: ({ parent }) => parent?.typeOfMilestone !== 'milestone',
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
  preview: {
    select: {
      typeOfMilestone: 'typeOfMilestone',
      title: 'title',
      year: 'year',
      month: 'month',
      description: 'description',
    },
    prepare(selection) {
      const { typeOfMilestone, title, year, month } = selection;
      if (typeOfMilestone === 'aggregateMilestone') {
        return {
          title: `Aggregate: ${title}`,
          subtitle: `Year: ${year}`,
          media: VscMilestone,
        };
      }
      // For "milestone"
      return {
        title: title,
        subtitle: `Month: ${month || '-'} | Year: ${year}`,
        media: GoMilestone,
      };
    },
  },
};
