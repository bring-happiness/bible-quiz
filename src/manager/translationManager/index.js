import {store} from './../../store'

const allLanguage = ['fr']
let allTranslations = {}

allLanguage.forEach((language) => {
  allTranslations[language] = require('./translations/' + language + '').default
})

export default {
  getTranslation (key) {
    return allTranslations[store.state.language][key]
  }
}