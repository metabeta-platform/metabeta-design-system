<script>
import Vue from 'vue';
import { 
    MbButton,
    MbCheckbox,
    MbFieldset,
    MbInput,
    MbRadio,
    MbApp,
    MbOrganization,
    MbTabs,
    MbTopbar,
    MbAvatar,
    MbDrawer,
    MbEdgesLayout,
    MbFooterActions,
    MbHeaderActions,
    MbIcon,
    MbModal,
    MbNavigationList,
    MbPanel,
    MbTooltip,
    MbCheckboxGroup,
    MbRadioGroup, } from '../src/components/index';

export default Vue.extend({
  data : () =>({
    test: 'test',
    organizations:[
      {
        _id: '1',
        avatarUrl: 'https://placekitten.org/200/200',
        name: 'test',
        desc: 'desc',        
      },
      {

      }
    ],
    programs:[

    ],
  }),
  name: 'ServeDev',
  components: {
    MbButton,
    MbCheckbox,
    MbFieldset,
    MbInput,
    MbRadio,
    MbApp,
    MbOrganization,
    MbTabs,
    MbTopbar,
    MbAvatar,
    MbDrawer,
    MbEdgesLayout,
    MbFooterActions,
    MbHeaderActions,
    MbIcon,
    MbModal,
    MbNavigationList,
    MbPanel,
    MbTooltip,
    MbCheckboxGroup,
    MbRadioGroup,
  }
});
</script>

<template>
  <div id="app">
    <mb-radio-group></mb-radio-group>
    <mb-checkbox-group></mb-checkbox-group>
    <mb-tooltip></mb-tooltip>
    <mb-panel></mb-panel>
    <mb-navigation-list></mb-navigation-list>
    <mb-modal></mb-modal>
    <mb-icon name="hr"></mb-icon>
    <mb-header-actions></mb-header-actions>
    <mb-footer-actions></mb-footer-actions>
    <mb-drawer></mb-drawer>
    <mb-avatar></mb-avatar>
    <mb-topbar></mb-topbar>
    <mb-tabs></mb-tabs>
    <mb-button label="test"></mb-button>
    <mb-checkbox name="test" label="test"></mb-checkbox>
    <mb-fieldset>
      <mb-input v-model="test"></mb-input>
    </mb-fieldset>
    <mb-radio label="test" name="test"></mb-radio>
    <!-- <mb-app></mb-app> MB LOADER ISN'T READY because it isn't decided -->
    <mb-organization></mb-organization>
  </div>
</template>
