import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === '/login') {
    next()
  } else {
    next({
      path: '/login'
    })
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
