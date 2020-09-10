import Vue from 'vue';
import Doc from './serve.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Doc),
}).$mount('#app');
