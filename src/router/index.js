import Vue from 'vue'
import Router from 'vue-router'

import Game from './../components/Game'
import Statistics from './../components/Statistics'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'game',
      component: Game
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
