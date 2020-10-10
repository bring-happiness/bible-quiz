import localStorageManager from '../manager/localStorageManager'

export default {
  allBibleVerses: [],
  positionRightBibleVerset: null,

  delayNewGame: 3000,
  delayTotalToShowAnswerButtons: null,
  delayToShowAnswerButtons: null,
  speedToShowAnswerButtons: 'normal', // can be 'slow', 'normal', 'fast', 'super-fast', 'immediately'
  numberAnswers: 3,
  showAnswerFooter: false,
  userHasAnswer: false,

  bibleCategories: 'all',
  language: 'fr',
  level: localStorageManager.getInteger('level') || 1,
  scoreToGoNextLevel: localStorageManager.getInteger('scoreToGoNextLevel') || 100,
  score: localStorageManager.getInteger('score') || 0,
  goodAnswers: localStorageManager.getInteger('goodAnswers') || 0,
  wrongAnswers: localStorageManager.getInteger('wrongAnswers') || 0,
  scoreBonusMultiplicator: localStorageManager.getInteger('scoreBonusMultiplicator') || 1,

  timerInterval: null
}