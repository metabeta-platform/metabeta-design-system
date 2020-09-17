import Vue from 'vue';
import Doc from './serve.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

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

const requireIcons = require.context('../src/assets/icons', false, /\.svg$/);

requireIcons.keys().forEach((fileName) => {
  const iconName = upperFirst(camelCase(fileName.replace(/(\.\/|\.svg)/g, '')));

  const componentConfig = requireIcons(fileName);

  Vue.component(iconName, componentConfig.default || componentConfig);
});

new Vue({
  render: (h) => h(Doc),
}).$mount('#app');
