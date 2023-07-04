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
    {
      title: 'FAQ Pdf',
      name: 'faqPdf',
      type: 'array',
      description: 'Only one PDF can be rendered on this page', 
      of: [
        {
          type: 'pdfBlock'
        }
      ]
    }
  ],
};
