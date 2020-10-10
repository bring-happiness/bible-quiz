export default {
  getAllBibleVerses (state) {
    return state.allBibleVerses
  },
  getRightBibleVerset (state) {
    return (state.allBibleVerses.length > 0 && state.positionRightBibleVerset !== null) ?
      state.allBibleVerses[state.positionRightBibleVerset] : ''
  },
  getPositionRightBibleVerset (state) {
    return state.positionRightBibleVerset
  },
  getNumberAnswers (state) {
    return state.numberAnswers
  },
  getDelayNewGame (state) {
    return state.delayNewGame
  },
  getShowAnswerFooter (state) {
    return state.showAnswerFooter
  },
  pourcentageTimerCompleted (state) {
    return (state.delayTotalToShowAnswerButtons - state.delayToShowAnswerButtons) / state.delayTotalToShowAnswerButtons * 100
  },
  getScore (state) {
    return state.score
  },
  getScoreToGoNextLevel (state) {
    return state.scoreToGoNextLevel
  },
  getPourcentageToNextLevel (state) {
    return state.score / state.scoreToGoNextLevel * 100
  },
  getLevel (state) {
    return state.level
  },
  getUserHasAnswer (state) {
    return state.userHasAnswer
  },
  getScoreBonusMultiplicator (state) {
    return state.scoreBonusMultiplicator
  },
  getNumberGoodAnswers (state) {
    return state.goodAnswers
  },
  getNumberWrongAnswers (state) {
    return state.wrongAnswers
  },
  getTotalAnswers (state) {
    return (state.goodAnswers + state.wrongAnswers)
  },
  getPourcentageGoodAnswers (state) {
    return (state.goodAnswers + state.wrongAnswers < 1) ? 0 :
      Math.round((state.goodAnswers / (state.goodAnswers + state.wrongAnswers)) * 100)
  },
  hasNoAnwsers (state) {
    return (state.goodAnswers + state.wrongAnswers) < 1
  }

}