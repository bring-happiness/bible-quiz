<template>
  <v-slide-y-reverse-transition>
    <v-footer fixed
              :height="height"
              v-show="getShowAnswerFooter">

      <answer-button v-for="(answer, index) in getAllBibleVerses"
                     :index="index"
                     :verse="answer"
                     :is-right-answer="index === getPositionRightBibleVerset"
                     :key="index">
      </answer-button>
    </v-footer>
  </v-slide-y-reverse-transition>
</template>

<script>
  import AnswerButton from './AnswerButton'

  import {mapGetters} from 'vuex'

  export default {
    components: {
      'answer-button': AnswerButton
    },
    data() {
      return {
        height: 76
      }
    },
    computed: {
      ...mapGetters([
        'getAllBibleVerses',
        'getPositionRightBibleVerset',
        'getShowAnswerFooter'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
