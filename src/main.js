import Vue from 'vue'
import {Button, Select} from 'element-ui'
import App from './App.vue'
// import 'element-ui/lib/theme-chalk/index.css'

import router from '../router'

Vue.use(Button)
Vue.use(Select)
Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
