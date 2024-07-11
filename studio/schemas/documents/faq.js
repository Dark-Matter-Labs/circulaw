import { FaQuestion } from 'react-icons/fa';

export default {
  title: 'FAQ Pages',
  name: 'FAQpage',
  type: 'document',
  icon: FaQuestion,
  fields: [
    {
      title: 'Page Title',
      name: 'pageTitle',
      type: 'string',
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
      options: {
        source: 'pageTitle',
        inUnique: 'true',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'FAQ Content',
      name: 'FAQPageContent',
      type: 'array',
      of: [
        {
          type: 'faqSection',
        },
        {
          type: 'faqItem',
        },
      ],
    },
  ],
};
