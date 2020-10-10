<template>
  <v-badge :color="mainColorAccent">

    <span ref="scoreBonusMultiplicator" slot="badge" class="score-bonus-multiplicator">
      &#10005;{{ getScoreBonusMultiplicator }}
    </span>

    <v-progress-circular class="text-red"
                         :class="newLevelAnimationClass"
                         :rotate="-90"
                         :value="getPourcentageToNextLevel"
                         :size="34"
                         :width="5"
                         :color="progressCircularColor">

    <span class="level-text text--darken-2"
          :class="mainColorText">
      {{ getLevel }}
    </span>

    </v-progress-circular>
  </v-badge>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    mounted () {
      this.$refs.scoreBonusMultiplicator.parentElement.style.top = '-8px'
      this.$refs.scoreBonusMultiplicator.parentElement.style.right = '-14px'
    },
    data() {
      return {
        newLevelAnimationClass: '',
        levelMainColors: [
          {levelModulo: 10, value: 'amber'},
          {levelModulo: 9, value: 'blue-grey'},
          {levelModulo: 8, value: 'brown'},
          {levelModulo: 7, value: 'red'},
          {levelModulo: 6, value: 'orange'},
          {levelModulo: 5, value: 'yellow'},
          {levelModulo: 4, value: 'green'},
          {levelModulo: 3, value: 'deep-purple'},
          {levelModulo: 2, value: 'cyan'},
          {levelModulo: 1, value: 'blue'}
        ]
      }
    },
    computed: {
      ...mapGetters([
        'getScore',
        'getLevel',
        'getPourcentageToNextLevel',
        'getScoreBonusMultiplicator'
      ]),
      mainColor() {
        let mainColor = ''

        for (let i = 0; i < this.levelMainColors.length; i++) {
          let color = this.levelMainColors[i]

          if ((this.getLevel % color.levelModulo) === 0) {
            mainColor = color.value
            break
          }
        }

        return mainColor
      },
      mainColorText() {
        return (this.mainColor !== '') ? this.mainColor + '--text' : ''
      },
      mainColorAccent () {
        return this.mainColor + ' accent-4'
      },
      progressCircularColor() {
        if (this.getPourcentageToNextLevel <= 15) {
          return this.mainColor + ' lighten-3'
        } else if (this.getPourcentageToNextLevel <= 30) {
          return this.mainColor + ' lighten-1'
        } else if (this.getPourcentageToNextLevel <= 50) {
          return this.mainColor + ' darken-1'
        } else if (this.getPourcentageToNextLevel <= 75) {
          return this.mainColor + ' darken-3'
        } else {
          return this.mainColor + ' darken-4'
        }
      },
    },
    watch: {
      getLevel(newValue) {
        this.newLevelAnimationClass = 'animated zoomIn'
        setTimeout(() => {
          this.newLevelAnimationClass = ''
        }, 2000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .score-bonus-multiplicator {
    font-size: 0.8em;
  }

  .level-text {
    font-weight: bold;
  }
</style>
