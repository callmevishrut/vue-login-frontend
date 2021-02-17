import Vue from 'vue'
import App from './App.vue'
import router from './router'

// importing boostrap
import 'bootstrap'
// importing cdn for font icons/css
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
