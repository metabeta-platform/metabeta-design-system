/* eslint-disable import/prefer-default-export */
export  {default as MbRadioGroup } from './tissues/MbRadioGroup.vue';
export  {default as MbCheckboxGroup } from './tissues/MbCheckboxGroup.vue';

export  {default as MbApp } from './cells/page/MbApp.vue';
export  {default as MbButton } from './cells/MbButton.vue';
export  {default as MbFooterActions } from './cells/MbFooterActions.vue';
export  {default as MbHeaderActions } from './cells/MbHeaderActions.vue';
export  {default as MbPanel } from './cells/MbPanel.vue';
export  {default as MbTooltip } from './cells/MbTooltip.vue';

export  {default as MbCheckbox } from './cells/form/MbCheckbox.vue';
export  {default as MbFieldset } from './cells/form/MbFieldset.vue';
export  {default as MbInput } from './cells/form/MbInput.vue';
export  {default as MbRadio } from './cells/form/MbRadio.vue';

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