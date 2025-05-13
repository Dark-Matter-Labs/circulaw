import {defineMigration, at, set} from 'sanity/migrate'

const oldType = 'smallPara'
const newType = 'highlightBlock'

export default defineMigration({
  title: 'renameSmallParaObject',
  documentTypes: ["instrument", "aboutPage", "newsItem", "faqPage", "euEuropeTab", "euLocalTab"],

  migrate: {
    object(object, path, context) {
      if (object._type === oldType) {
        return at('_type', set(newType))
      }
    }
  }
})
