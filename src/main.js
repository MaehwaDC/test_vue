import Vue from 'vue';
import '@/styles/templates.module.scss';

import App from '@/App';
import router from '@/pages/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
