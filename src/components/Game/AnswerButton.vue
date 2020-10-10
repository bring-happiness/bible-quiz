<template>
  <v-btn v-if="showText || showSuccess"
         flat
         block
         :disabled="showSuccess || showNothing"
         @click.native="buttonClicked"
         class="answer-button grey--text caption"
  >

    <span class="verse-text"
          :class="{ 'success--text': showSuccess }">
      {{ verseText }}
    </span>

    <vue-star class="vue-star-container" v-if="isRightAnswer" :id="vueStarId"></vue-star>

  </v-btn>
</template>

<script>
  import VueStar from 'vue-star'
  import translationManager from './../../manager/translationManager'
  import {mapGetters, mapActions} from 'vuex'

  const SHOW_TEXT = 'showText'
  const SHOW_SUCCESS = 'showSuccess'
  const SHOW_NOTHING = 'showNothing'

  export default {
    components: {
      'vue-star': VueStar
    },
    props: {
      index: {
        type: Number,
        required: true
      },
      verse: {
        type: Object,
        required: true
      },
      isRightAnswer: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        status: 'showText',
        hasAlreadyAnswered: false
      }
    },
    computed: {
      ...mapGetters([
        'getRightBibleVerset',
        'getUserHasAnswer',
        'getDelayNewGame'
      ]),
      verseText() {
        let lastVerset = (this.getRightBibleVerset.nombre_versets > 1) ?
          '-' + (this.verse.verset_depart + this.getRightBibleVerset.nombre_versets - 1) : ''

        return translationManager.getTranslation(this.verse.livre) + ' ' +
          this.verse.chapitre + ':' +
          this.verse.verset_depart + lastVerset
      },
      showText() {
        return this.status === SHOW_TEXT
      },
      showSuccess() {
        return this.status === SHOW_SUCCESS
      },
      showNothing() {
        return this.status === SHOW_NOTHING
      },
      vueStarId() {
        return 'vue-star-id-' + this.index
      }
    },
    methods: {
      ...mapActions([
        'startNewGame',
        'answer'
      ]),
      buttonClicked(event) {
        if (this.hasAlreadyAnswered ||
          !(event.target.className.includes('verse-text') || event.target.className.includes('answer-button'))) {
          return
        }

        this.answer(this.isRightAnswer)
        this.animateRightAnswerButton(this.isRightAnswer)
        this.hasAlreadyAnswered = true

        setTimeout(() => {
          this.startNewGame()
        }, this.getDelayNewGame)
      },
      animateRightAnswerButton(animate = true) {
        if (!this.isRightAnswer || this.hasAlreadyAnswered) {
          return
        }

        if (animate) {
          let vueStarSelector = '#' + this.vueStarId + ' .VueStar__icon'
          document.querySelector(vueStarSelector).click()
        }

        this.status = SHOW_SUCCESS
      }
    },
    watch: {
      getUserHasAnswer(newVal, oldVal) {
        if (newVal === true) {
          if (this.isRightAnswer) {
            setTimeout(() => {
              this.animateRightAnswerButton(false)
            }, this.getDelayNewGame / 2)
          } else {
            this.status = SHOW_NOTHING
          }
        } else {
          this.hasAlreadyAnswered = false
          this.status = SHOW_TEXT
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .answer-button {
    display: flex;
    flex: 1;
    height: 100%;
    border: 1px #EAEAEA solid;
  }

  .answer-button .verse-text {
    z-index: 1000;
    transition: font-size 0.7s;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answer-button .vue-star-container {
    z-index: -1;
  }

  .success--text {
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>
