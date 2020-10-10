import dataManager from './../manager/dataManager'

export default {
  setNewBibleVerses(state) {
    state.allBibleVerses = dataManager.getBibleVerses(state.language, state.numberAnswers)
  },

  setPositionRightBibleVersetRandomly(state) {
    if (state.allBibleVerses.length > 0) {
      state.positionRightBibleVerset = dataManager.getRandomNumber(state.allBibleVerses.length)
    }
  },

  setDelayToShowAnswerButtons(state) {
    let timePerWord = 100

    if (state.speedToShowAnswerButtons === 'slow') timePerWord = 200
    else if (state.speedToShowAnswerButtons === 'fast') timePerWord = 75
    else if (state.speedToShowAnswerButtons === 'super-fast') timePerWord = 50
    else if (state.speedToShowAnswerButtons === 'immediately') timePerWord = 0

    state.delayToShowAnswerButtons = state.delayTotalToShowAnswerButtons =
      state.allBibleVerses[state.positionRightBibleVerset].texte.split(' ').length * timePerWord
  },

  decrementDelayToShowAnswerButtons(state, decrementBy) {
    state.delayToShowAnswerButtons -= decrementBy

    if (state.delayToShowAnswerButtons <= 0) {
      state.showAnswerFooter = true
      clearInterval(state.timerInterval)
    }
  },

  setTimerInterval(state, timerInterval) {
    state.timerInterval = timerInterval
  },

  setShowAnswerFooter(state, value) {
    state.showAnswerFooter = value
  },

  setUserHasAnswer(state, value) {
    state.userHasAnswer = value
  },

  setScore(state, isRightAnswer) {
    if (isRightAnswer) {
      state.score += 10 * state.scoreBonusMultiplicator
      state.goodAnswers++

      if (state.scoreBonusMultiplicator < 5) state.scoreBonusMultiplicator++

    } else {
      state.score -= 3
      state.wrongAnswers++
      state.scoreBonusMultiplicator = 1
    }

    if (state.score < 0) {
      state.score = 0
    }

    localStorage.score = state.score
    localStorage.goodAnswers = state.goodAnswers
    localStorage.wrongAnswers = state.wrongAnswers
    localStorage.scoreBonusMultiplicator = state.scoreBonusMultiplicator
  },

  goToNextLevel(state) {
    if (state.score >= state.scoreToGoNextLevel) {
      state.level++
      state.score = 0
      state.scoreBonusMultiplicator = 1

      let multiplicator = 1 + 1 / Math.ceil(state.level / 3)
      state.scoreToGoNextLevel = state.scoreToGoNextLevel * multiplicator

      localStorage.level = state.level
      localStorage.scoreToGoNextLevel = state.scoreToGoNextLevel
      localStorage.scoreBonusMultiplicator = state.scoreBonusMultiplicator
    }
  },

  deleteAllStatistics(state) {
    state.goodAnswers = 0
    state.wrongAnswers = 0

    localStorage.goodAnswers = state.goodAnswers
    localStorage.wrongAnswers = state.wrongAnswers
  }
}