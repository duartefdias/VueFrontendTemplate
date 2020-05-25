// Import environment variable and sensitive data from ../.env
// Import this before other files for them to access these variables
import 'dotenv/config'
// Other imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  VueAxios,
  icons: {
    iconfont: 'mdi'
  },
  render: h => h(App)
}).$mount('#app')
