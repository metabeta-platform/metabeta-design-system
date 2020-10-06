import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
/* eslint-disable import/prefer-default-export */
export  {default as MbRadioGroup } from '@/components/tissues/MbRadioGroup.vue';
export  {default as MbCheckboxGroup } from '@/components/tissues/MbCheckboxGroup.vue';

export  {default as MbApp } from '@/components/cells/page/MbApp.vue';

export  {default as MbOrganization } from '@/components/cells/page/MbOrganization.vue';
export  {default as MbTopbar } from '@/components/cells/page/MbTopbar.vue';
export  {default as MbTabs} from '@/components/cells/page/MbTabs.vue';
export  {default as MbModal} from '@/components/cells/MbModal.vue';
export  {default as MbDrawer} from '@/components/cells/MbDrawer.vue';
export  {default as MbButton } from '@/components/cells/MbButton.vue';
export  {default as MbFooterActions } from '@/components/cells/MbFooterActions.vue';
export  {default as MbHeaderActions } from '@/components/cells/MbHeaderActions.vue';
export  {default as MbPanel } from '@/components/cells/MbPanel.vue';
export  {default as MbTooltip } from '@/components/cells/MbTooltip.vue';
export  {default as MbEdgesLayout } from '@/components/cells/MbEdgesLayout.vue';
export  {default as MbNavigationList } from '@/components/cells/MbNavigationList.vue';
export  {default as MbMenu} from '@/components/cells/MbMenu.vue';
export  {default as MbMenuItem} from '@/components/cells/MbMenuItem.vue';
export  {default as MbCheckbox } from '@/components/cells/form/MbCheckbox.vue';
export  {default as MbFieldset } from '@/components/cells/form/MbFieldset.vue';
export  {default as MbInput } from '@/components/cells/form/MbInput.vue';
export  {default as MbFormInput } from '@/components/cells/form/MbFormInput.vue';
export  {default as MbRadio } from '@/components/cells/form/MbRadio.vue';
export  {default as MbIcon} from '@/components/cells/MbIcon.vue';
export  {default as MbAvatar} from '@/components/cells/MbAvatar.vue';

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

class DefaultImages {
  constructor() {
    this.images = {
      investor: {
        icon: 'http://cdn.metabeta.com/static/images/accelerator/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/accelerator/logo.png',
      },
      startup: {
        icon: 'http://cdn.metabeta.com/static/images/startup/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/startup/logo.png',
      },
      program: {
        icon: 'http://cdn.metabeta.com/static/images/program/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/program/logo.png',
      },
      user: {
        icon: 'http://cdn.metabeta.com/static/images/user/icon.png',
      },
    };
  }

  getImage(entity, type) {
    try {
      const url = this.images[`${entity}`][`${type}`];
      return url;
    } catch (error) {
      throw new Error(`Could not get default ${type} image for ${entity}`);
    }
  }
}

Vue.prototype.defaultImages = new DefaultImages();
