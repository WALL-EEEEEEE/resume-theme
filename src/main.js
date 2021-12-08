import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

const vue = new Vue({
  vuetify,
  render: h => h(App)
})
vue.$mount('#app')
