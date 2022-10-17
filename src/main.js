import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Application global style
import global from "./assets/global.scss";
Vue.use(global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
