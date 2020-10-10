<template>
  <v-app>
    <v-toolbar
            app
            extended
            extension-height="4"
    >

      <v-btn v-if="notOnGameRoute" @click.native="goBackToGame" icon>
        <v-icon>chevron_left</v-icon>
      </v-btn>

      <v-toolbar-title class="toolbar-main-title" v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click.native="gotToStatisticsPage" :color="btnStatisticColor" icon>
        <v-icon>show_chart</v-icon>
      </v-btn>

      <!--<v-btn icon>
        <v-icon>settings</v-icon>
      </v-btn>-->

      <progress-bar-score-level class="progress-bar-score-level"></progress-bar-score-level>

      <progress-bar-tool-bar slot="extension"></progress-bar-tool-bar>
    </v-toolbar>

    <v-content>
      <keep-alive :include="routesToKeepAlive">
        <router-view/>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
  import ProgressBarToolbar from './components/ProgressBarToolbar'
  import ProgressBarScoreLevel from './components/ProgressBarScoreLevel'

  export default {
    name: 'App',
    components: {
      'progress-bar-tool-bar': ProgressBarToolbar,
      'progress-bar-score-level': ProgressBarScoreLevel
    },
    data() {
      return {
        title: '',
        routesToKeepAlive: ['Game']
      }
    },
    computed: {
      btnStatisticColor () {
        return (this.$route.name === 'statistics') ? 'primary' : ''
      },
      notOnGameRoute () {
        return (this.$route.name !== 'game')
      }
    },
    methods: {
      goToGamePage () {
        this.$router.push({name: 'game'})
      },
      gotToStatisticsPage () {
        this.$router.push({name: 'statistics'})
      },
      goBackToGame () {
        this.goToGamePage()
      }
    }
  }
</script>

<style>
  html, body {
    overflow: auto;
  }

  .v-toolbar__extension {
    padding: 0 !important;
  }

  .toolbar-main-title {
    margin-left: 0 !important;
  }

  .progress-bar-score-level {
    margin: 0 9px 0 6px !important;
  }
</style>
