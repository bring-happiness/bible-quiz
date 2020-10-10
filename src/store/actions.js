export default {
  startNewGame({commit}) {
    commit('setShowAnswerFooter', false)
    commit('setUserHasAnswer', false)
    commit('setNewBibleVerses')
    commit('setPositionRightBibleVersetRandomly')
    commit('setDelayToShowAnswerButtons')

    setTimeout(() => {
      let decrementBy = 50
      let timerInterval = setInterval(() => {
        commit('decrementDelayToShowAnswerButtons', decrementBy)
      }, decrementBy)

      commit('setTimerInterval', timerInterval)
    }, 500)
  },

  answer(context, isRightAnswer) {
    context.commit('setUserHasAnswer', true)

    setTimeout(() => {
      context.commit('setScore', isRightAnswer)

      setTimeout(() => {
        context.commit('goToNextLevel')
      }, 500)
    }, context.getters.getDelayNewGame)
  },

  deleteAllStatistics({commit}) {
    commit('deleteAllStatistics')
  }
}