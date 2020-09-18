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
    links:[
      {
        _id: '123162387sgahdjsadgdasj',
        url: 'somePlace',
        data: {
          avatarUrl: 'https://placekitten.com/205/200',
          name: 'Some another cat',
          desc: "seriously I don't know which one shows up"
        }
      },
      {
        _id: 'asdgashjdgksja1213a',
        url: 'someOtherPlace',
        data: {
          avatarUrl: 'https://placekitten.com/205/205',
          name: 'Some another cat different than the others',
          desc: "seriously I don't know which one shows up"
        }
      },
    ],
    programs:[

    ],
    avatar:{
      avatarUrl: 'https://placekitten.com/200/200',
      name: 'Some random cat',
      desc: "seriously I don't know which one shows up"
    },
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
    <mb-button label="test"></mb-button>
    <mb-checkbox name="test" label="test"></mb-checkbox>
    <mb-fieldset>
      <mb-input v-model="test"></mb-input>
    </mb-fieldset>
    <mb-radio label="test" name="test"></mb-radio>
    <!-- <mb-app></mb-app> MB LOADER ISN'T READY because it isn't decided -->
    <mb-avatar :avatar="avatar"></mb-avatar>
    <mb-navigation-list :links="links"></mb-navigation-list>
  </div>
</template>
