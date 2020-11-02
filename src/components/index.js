import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
/* eslint-disable import/prefer-default-export */
export { default as MbRadioGroup } from "@/components/tissues/MbRadioGroup.vue";
export { default as MbCheckboxGroup } from "@/components/tissues/MbCheckboxGroup.vue";
export { default as MbFormSelect } from "@/components/cells/form/MbFormSelect.vue";
export { default as MbApp } from "@/components/cells/page/MbApp.vue";
export { default as MbOrganization } from "@/components/cells/page/MbOrganization.vue";
export { default as MbTopbar } from "@/components/cells/page/MbTopbar.vue";
// export { default as MbTab } from "@/components/cells/page/MbTab.vue";
// export { default as MbTabGroup } from "@/components/cells/page/MbTabGroup.vue";
export { default as MbDialog } from "@/components/cells/MbDialog.vue";
export { default as MbDrawer } from "@/components/cells/MbDrawer.vue";
export { default as MbButton } from "@/components/cells/MbButton.vue";
export { default as MbFooterActions } from "@/components/cells/MbFooterActions.vue";
export { default as MbHeaderActions } from "@/components/cells/MbHeaderActions.vue";
export { default as MbPanel } from "@/components/cells/MbPanel.vue";
export { default as MbTooltip } from "@/components/cells/MbTooltip.vue";
export { default as MbEdgesLayout } from "@/components/cells/MbEdgesLayout.vue";
export { default as MbNavigationList } from "@/components/cells/MbNavigationList.vue";
export { default as MbMenu } from "@/components/cells/MbMenu.vue";
export { default as MbChip } from "@/components/cells/MbChip.vue";
export { default as MbAlert } from "@/components/cells/MbAlert.vue";
export { default as MbMenuItem } from "@/components/cells/MbMenuItem.vue";
export { default as MbCheckbox } from "@/components/cells/form/MbCheckbox.vue";
export { default as MbFieldset } from "@/components/cells/form/MbFieldset.vue";
export { default as MbTextInput } from "@/components/cells/form/MbTextInput.vue";
export { default as MbRadio } from "@/components/cells/form/MbRadio.vue";
export { default as MbIcon } from "@/components/cells/MbIcon.vue";
export { default as MbAvatar } from "@/components/cells/MbAvatar.vue";
export { default as MbTextarea } from "@/components/cells/form/MbTextarea.vue";

const tryGet = (value) => {
  try {
    const r = value();
    if (typeof r !== "undefined") {
      if (r === null) {
        return "";
      }
      return r;
    }

    return "";
  } catch (e) {
    return "";
  }
};

Vue.prototype.tryGet = tryGet;

Vue.prototype.tryGet = tryGet;
const cdnUrl =
  "https://s3.eu-west-1.amazonaws.com/cdn.metabeta.com/static/images/";

class DefaultImages {
  constructor() {
    this.images = {
      investor: {
        icon: `${cdnUrl}investor/investor-icon.svg`,
        logo: `${cdnUrl}investor/investor-icon.svg`,
      },
      startup: {
        icon: `${cdnUrl}startup/startup-icon.svg`,
        logo: `${cdnUrl}startup/startup-icon.svg`,
      },
      program: {
        icon: `${cdnUrl}program/program-icon.svg`,
        logo: `${cdnUrl}program/program-icon.svg`,
      },
      user: {
        icon: `${cdnUrl}user/user-icon.svg`,
        logo: `${cdnUrl}user/user-icon.svg`,
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
