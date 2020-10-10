<template>
  <div class="statistics-main-container">
    <statistics-doughnut :chart-data="chartData" class="statistics-doughnut"></statistics-doughnut>

    <p class="pourcentage-good-answers subheading primary--text">
      Pourcentage de bonnes réponses : {{ getPourcentageGoodAnswers }}%
      ({{ getNumberGoodAnswers }} / {{ getTotalAnswers }})
    </p>

    <v-dialog v-model="dialogConfirmDeleteAllStatistics">
<!--@click.native="deleteAllStatistics"-->
      <v-btn slot="activator"
             :disabled="hasNoAnwsers"
             class="btn-delete-all-statistics"
             color="warning">
        <v-icon>delete</v-icon>
        Supprimer toutes les statistiques
      </v-btn>

      <v-card>
        <v-card-title
                class="title grey lighten-2"
                primary-title
        >
          Confirmation de suppression
        </v-card-title>

        <v-card-text>
          Êtes-vous certain de supprimer toutes les statistiques concernant le nombre de
          <span class="primary--text">bonnes</span> et <span class="primary--text">mauvaises réponses</span> ?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>

          <v-btn flat @click="dialogConfirmDeleteAllStatistics = false">
            Non
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn color="error" flat @click="deleteConfirmed">
            Oui
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import StatisticsDoughnut from './Statistics/StatisticsDoughnut'

  export default {
    components: {
      'statistics-doughnut': StatisticsDoughnut
    },
    data () {
      return {
        dialogConfirmDeleteAllStatistics: false
      }
    },
    computed: {
      ...mapGetters([
        'getTotalAnswers',
        'getPourcentageGoodAnswers',
        'getNumberGoodAnswers',
        'getNumberWrongAnswers',
        'hasNoAnwsers'
      ]),
      chartData() {
        return {
          labels: ['Bonnes réponses', 'Mauvaises réponses'],
          datasets: [
            {
              backgroundColor: ['#1976d2', '#c62828'],
              data: [this.getNumberGoodAnswers, this.getNumberWrongAnswers]
            }
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'deleteAllStatistics'
      ]),
      deleteConfirmed () {
        this.deleteAllStatistics()
        this.dialogConfirmDeleteAllStatistics = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .statistics-main-container {
    text-align: center;
  }

  .pourcentage-good-answers {
    margin-bottom: 40px;
  }

  .statistics-doughnut {
    margin: 17px 0 37px;
  }
</style>
