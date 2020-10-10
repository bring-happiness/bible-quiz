class DataManager {
  constructor() {
    this.text_traductions = {}
    this.texte_titres = [
      'evangile_matthieu'
    ]

    this.versesAlreadyFound = []
  }

  getBibleVerses (language, numberVerses, bibleCategories) {
    if (!this.getTranslationData(language)) {
      return
    }

    this.versesAlreadyFound = []
    const verses = []

    for(let i = 0; i < numberVerses; i++) {
      verses.push(this.getRandomVerse(language, bibleCategories))
    }

    return verses
  }

  getRandomVerse (language, bibleCategories) {
    let verse = null

    do {
      const allBooks = Object.keys(this.text_traductions[language])
      const numberBooks = allBooks.length

      const randomBookName = allBooks[this.getRandomNumber(numberBooks)]
      const randomBook = this.text_traductions[language][randomBookName]

      verse = randomBook[this.getRandomNumber(randomBook.length)]
      verse.livre = randomBookName
    } while(this.isVerseAlreadyFound(verse));

    this.versesAlreadyFound[this.getVerseSlug(verse)] = 'found'

    return verse
  }

  isVerseAlreadyFound (verse) {
    return (Object.keys(this.versesAlreadyFound)).indexOf(this.getVerseSlug(verse)) > -1
  }

  getVerseSlug (verse) {
    return verse.livre + '-' + verse.chapitre + '-' + verse.verset_depart;
  }

  getTranslationData(language) {
    try {
      if (this.text_traductions[language]) {
        return true
      }

      let Bible = {}

      this.texte_titres.forEach((value) => {
        Bible[value] = require('./' + language + '/' + value + '.json')
      })

      this.text_traductions[language] = Bible

      return true

    } catch (e) {
      console.log('There is no translations for language \'' + language + '\'')
      return false
    }
  }

  getRandomNumber (maxNumber) {
    return Math.floor(Math.random() * Math.floor(maxNumber));
  }
}

let dataManager = new DataManager()

export default dataManager