<template>
  <v-progress-linear :indeterminate="false"
                     :active="true"
                     :value="pourcentageTimerCompleted"
                     :height="4">

  </v-progress-linear>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'pourcentageTimerCompleted'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
