export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      title: 'Titel navigatiepagina',
      name: 'internalLink',
      description: 'Selecteer hier de pagina waarnaar je wilt linken',
      type: 'reference',
      to: [
        { type: 'aboutPage' },
        { type: 'thema' },
        { type: 'FAQpage' },
        { type: 'transitionAgenda' },
        { type: 'simpleThema' },
      ],
    },
  ],
};
