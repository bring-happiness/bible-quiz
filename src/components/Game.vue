<template>
  <div>
    <v-container fluid class="game-main-container" :class="{ 'full-height': !getShowAnswerFooter }">
      <v-slide-y-transition mode="out-in">
        <v-layout row align-center justify-center>
          <v-flex md6>
            <bible-verse :text="getRightBibleVerset.texte"></bible-verse>
            <answer-buttons></answer-buttons>
          </v-flex>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<script>
  import BibleVerse from './Game/BibleVerse'
  import AnswerButtons from './Game/AnswerButtons'

  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Game',
    components: {
      'bible-verse': BibleVerse,
      'answer-buttons': AnswerButtons
    },
    created() {
      this.startNewGame()
    },
    computed: {
      ...mapGetters([
        'getRightBibleVerset',
        'getShowAnswerFooter'
      ])
    },
    methods: {
      ...mapActions([
        'startNewGame'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .game-main-container {
    height: calc(100vh - 135px);
    overflow: auto;
  }

  .game-main-container.full-height {
    height: calc(100vh - 65px);
  }

  .verse-citation {
    padding-left: 17px;
    text-align: left;
    margin: 17px 0;
  }

  .verse-citation:before {
    content: '\275d ';
  }

  .verse-citation:after {
    content: ' \275d ';
  }

  .verse-citation .verse-new-line {
    height: 14px;
  }

  .verse-new-line {
    height: 24px;
  }
</style>
