import Vue from 'vue';
import VueRouter from 'vue-router'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
