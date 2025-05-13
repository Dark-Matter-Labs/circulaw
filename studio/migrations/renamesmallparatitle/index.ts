import { defineMigration, at, set, unset, setIfMissing } from 'sanity/migrate';

const from = 'smallParaTitle';
const to = 'title';

export default defineMigration({
  title: 'Rename greenBoxTitle to title in dropDownHighlight nodes',
  documentTypes: ['instrument', "aboutPage", "newsItem", "faqPage", "euEuropeTab", "euLocalTab"], // Specify the document types to migrate

  migrate: {
    object(node, path, context) {
      // Check if the node is of type 'dropDownHighlight' and has the `greenBoxTitle` field
      if (node._type === 'highlightBlock' && node[from] !== undefined) {

        return [
          at(to, setIfMissing(node[from])),
          at(from, unset())
        ];
      }
      // If no changes are needed, return nothing
      return;
    },
  },
});