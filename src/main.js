import Vue from 'vue'
import App from './App.vue'
// import Vant from 'vant';
// import 'vant/lib/index.css';

import router from './router/router.js'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'
import animejs from 'animejs'
Vue.prototype.$echarts=echarts;
Vue.prototype.$animejs=animejs
// Vue.use(Vant);
Vue.use(ElementUi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
