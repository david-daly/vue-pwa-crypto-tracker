import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('round', function (value, decimals) {
  if (!value) {
    value = 0
  }

  if (!decimals) {
    decimals = 0
  }

  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  return value
})

Vue.filter('negative', function (value) {
  if (!value) {
    return
  }

  if (value > 0) {
    return value
  }

  value = `(${Math.abs(value)})`
  return value
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
