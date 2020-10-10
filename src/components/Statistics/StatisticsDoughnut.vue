<script>
  import {mapGetters} from 'vuex'
  import {Doughnut, mixins} from 'vue-chartjs'
  const { reactiveProp } = mixins

  export default {
    extends: Doughnut,
    mixins: [reactiveProp],
    data () {
      return {
        options: {responsive: true, maintainAspectRatio: false}
      }
    },
    mounted () {
      this.renderChart(this.chartData)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
