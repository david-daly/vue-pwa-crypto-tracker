import Vue from 'vue'
import Router from 'vue-router'
import TickerComponent from './components/Ticker.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TickerComponent
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
