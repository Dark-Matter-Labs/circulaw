export default {
  title: 'Transition Agenda',
  name: 'transitionAgenda',
  type: 'document',
  fields: [
    {
      title: 'Transition Agenda',
      name: 'transitionAgendaTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'transitionAgendaTitle',
        inUnique: 'true',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // can add in link/cover image/other things if need be
    {
      title: 'Page Objects',
      name: 'pageObjects',
      type: 'array',
      of: [
        {
          type: 'complexPortableText',
        },
      ],
    },
    {
      title: 'Talks and Presentations',
      name: 'talksAndPresentations',
      type: 'array',
      of: [
        { type: 'complexPortableText' }, // create talks and presentations block - or this could be just a page object with links.
      ],
    },
  ],
};
