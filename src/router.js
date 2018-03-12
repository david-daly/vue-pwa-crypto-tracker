import Vue from 'vue'
import Router from 'vue-router'
import TickerComponent from './components/Ticker.vue'
import PortfolioComponent from './components/Portfolio.vue'

// import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: '/ticker',
      name: 'ticker',
      component: TickerComponent
    }
  ]
})
