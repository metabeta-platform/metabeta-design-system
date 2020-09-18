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
    TRUE_FLAG: true,
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
    <mb-button @click="TRUE_FLAG = !TRUE_FLAG" label="CloseModal"></mb-button>
    <mb-modal title="testTitle" :is-visible="TRUE_FLAG">
      <template slot="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta quisquam necessitatibus mollitia dignissimos, labore quaerat corporis? Hic libero, fugiat quia pariatur provident sapiente accusantium ullam? Delectus ratione soluta nulla.Sit veritatis laboriosam animi laudantium quo perferendis doloremque pariatur id beatae maxime, commodi suscipit dolorem soluta perspiciatis sunt molestias? Culpa rem omnis sapiente? Iste corporis quod repellat odit consectetur harum.
      </template>
    </mb-modal>
  </div>
</template>
