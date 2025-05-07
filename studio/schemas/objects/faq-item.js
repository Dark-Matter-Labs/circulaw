import { contentArray } from '../../utils/portable-text-arrays';

export default {
  title: 'FAQ Item',
  name: 'faqItem',
  type: 'object',
  description: 'Add a new faq item to the faq page',
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      validation: (Rule) => Rule.required().max(110),
      description: 'Enter the question',
    },
    {
      title: 'Response',
      name: 'response',
      type: 'array',
      of: [...contentArray],
    },
  ],
};
