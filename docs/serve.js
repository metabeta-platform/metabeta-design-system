import Vue from 'vue';
import Doc from './serve.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import router from './router';

Vue.config.productionTip = false;

const tryGet = (value) => {
  try {
    const r = value();
    if (typeof r !== 'undefined') {
      if (r === null) {
        return '';
      }
      return r;
    }

    return '';
  } catch (e) {
    return '';
  }
};

Vue.prototype.tryGet = tryGet;

new Vue({
  render: (h) => h(Doc),
  router,
}).$mount('#app');
