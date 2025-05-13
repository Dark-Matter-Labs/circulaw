import {defineMigration, at, set} from 'sanity/migrate'

const oldType = 'greenBox'
const newType = 'dropDownHighlight'

export default defineMigration({
  title: 'renameGreenBox',
  documentTypes: ["instrument", "aboutPage", "newsItem", "faqPage", "euEuropeTab", "euLocalTab"], // "aboutPage", "newsItem", "faqPage", "euEuropeTab", "euLocalTab"

  migrate: {
    object(object, path, context) {
      if (object._type === oldType) {
        return at('_type', set(newType))
      }
    }
  }
})
