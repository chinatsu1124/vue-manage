import Vue from 'vue'
import { Button, Select, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card } from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import store from '../store'
import router from '../router'

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
