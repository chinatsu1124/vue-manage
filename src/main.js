import Vue from 'vue'
import { Button, Select, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, Dropdown, DropdownMenu, DropdownItem, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Option, Switch, DatePicker, Dialog, Pagination, MessageBox, Message } from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
import store from '../store'
import router from '../router'
import '../api/mock.js'
import http from 'axios'

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
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)

Vue.prototype.$http = http
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ path: '/home' })
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
