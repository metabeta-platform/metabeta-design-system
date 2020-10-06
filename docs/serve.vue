<script>
import Vue from 'vue';
import {
  MbButton,
  MbCheckbox,
  MbFieldset,
  MbFormInput,
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
  MbMenu,
  MbMenuItem,
  MbPanel,
  MbTooltip,
  MbCheckboxGroup,
  MbRadioGroup,
} from '../src/components/index';

export default Vue.extend({
  data: () => ({
    isVisible: false,
    selectedParent: '',
    metricName: '',
    metricOrder: 0,
    test: 'test',
    organizations: [
      {
        _id: '1',
        avatarUrl: 'https://placekitten.org/200/200',
        name: 'test',
        desc: 'desc',
      },
      {

      }
    ],

    currentWorkspace: {
      avatarUrl: 'https://images.generated.photos/YHkop4O20ludTdLsJvOn4ROBaPu0V8SFY3lU6HHxrxQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjg5MjUuanBn.jpg',
      name: 'Jane Joe',
      description: "Company, Job"
    },
    programs: [
      {
        _id: '1',
        avatarUrl: 'https://placekitten.org/200/200',
        name: 'test',
        desc: 'desc',
      },
      {

      }
    ],

    items: [
      {
        _id: '123162387sgahdjsadgdasj',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 1',
        isDisabled: true
      },
      {
        _id: 'asdgashjdgksja1213a',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 2'
      },
      {
        _id: 'sdsdfsd',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 3'
      },
    ],
    menuItems: [
      {
        _id: '123162387sgahdjsadgdasj',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 4',
        isDisabled: true
      },
      {
        _id: '123162387sgssssdjsadgdasj',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item New',
        isDisabled: true
      },
      {
        _id: 'asdgashjdgksja1213a',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 5'
      },
      {
        _id: 'sdsdfsd',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 6'
      },
    ],
    openModal: false,
    openDrawer: false,
    tabs: [
      {
        _id: 'asdgashdgksja1213a',
        name: 'Tab 1',
        url: '#tab1'
      },
      {
        _id: 'asdgashjdgksja113a',
        name: 'Tab 2',
        url: '#tab2'
      },
      {
        _id: 'asdashjdgksja1213a',
        name: 'Tab 3',
        url: '#tab3'
      },
      {
        _id: 'asdgashjdgksja213a',
        name: 'Tab 4',
        url: '#tab4'
      },
    ],
    user: {
      avatarUrl: 'https://images.generated.photos/YHkop4O20ludTdLsJvOn4ROBaPu0V8SFY3lU6HHxrxQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjg5MjUuanBn.jpg',
      name: 'Jane Joe',
      description: "nventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel. A radical inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel."
    },
    userSmall: {
      avatarUrl: 'https://images.generated.photos/YHkop4O20ludTdLsJvOn4ROBaPu0V8SFY3lU6HHxrxQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjg5MjUuanBn.jpg',
      name: 'Jane Joe',
      description: "Company, Position"
    },
    organization: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwMYrqRxreis8fdCGMc3-1jnsR8SdwrgThzA&usqp=CAU',
      name: 'Pied Piper',
      description: "Inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel. A radical inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel."
    },
  }),
  name: 'ServeDev',
  components: {
    MbButton,
    MbCheckbox,
    MbFieldset,
    MbFormInput,
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
    MbMenu,
    MbMenuItem,
    MbPanel,
    MbTooltip,
    MbCheckboxGroup,
    MbRadioGroup,
  }
});
</script>
<style lang="scss" >
.mb-checkbox-group {
  ul {
    li {
      margin: 0;
      padding: 0;
    }
  }
  &.mb-flow {
    &-horizontal {
      ul {
        li {
          display: inline-block;
          margin-right: $mb-space-m;
        }
      }
    }
    &-vertical {
      ul {
        li {
          display: flex;
        }
      }
    }
  }
}
.mb-avatar {
  margin-top: 16px !important;
}
</style> 

<template>
  <div id="app">
    <mb-organization :currentWorkspace="currentWorkspace">

    </mb-organization>
    <mb-tabs :tabs="tabs">
    </mb-tabs>
    <br />
    <p>icon</p>
    <mb-icon name="add"></mb-icon>
    <!-- <img src="~@/assets/icons/add.svg" alt="" width="40%" class="">-->
    <mb-checkbox
      name="checkbox-1"
      label="Checkbox-1"
      :isDisabled="true"
    ></mb-checkbox>
    <mb-checkbox
      name="checkbox-2"
      label="Checkbox-2"
      :isDisabled="true"
      :isChecked="true"
    ></mb-checkbox>
    <div class="mb-checkbox-group mb-flow-horizontal">
      <ul>
        <li>
          <mb-checkbox
            name="checkbox-3"
            label="Checkbox-3"
          ></mb-checkbox>
        </li>
        <li>
          <mb-checkbox
            name="checkbox-4"
            label="Checkbox-4"
          ></mb-checkbox>
        </li>
        <li>
          <mb-checkbox
            name="checkbox-5"
            label="Checkbox-5"
          ></mb-checkbox>
        </li>
      </ul>
    </div>
    <mb-tooltip
      placement="top"
      content="Top tooltip"
    >tossssssssp</mb-tooltip>
    <mb-tooltip
      placement="right"
      content="right tooltip"
    >tosssdsssssp</mb-tooltip>
    <mb-tooltip
      placement="left"
      content="left tooltip"
    >tosssdsssssp</mb-tooltip>
    <mb-tooltip
      placement="bottom"
      content="bottom tooltip"
    >tosssdsssssp</mb-tooltip>
    <mb-form-input
      type="text"
      label="Label for input"
      help="Help for label"
      name="input-test"
      placeholder="input-placeholder"
      value="test-value"
      :is-required="true"
      :is-disabled="true"
      error="danger"
      hint="This is a form field - hint"
    >
    </mb-form-input>
    <mb-form-input
      type="password"
      label="Label for password"
      name="input-password"
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      placeholder="Password"
      error="danger"
      hint="This is a form field - danger"
    >
    </mb-form-input>
    <section id="drawers">
      <mb-button
        @click="openDrawer = !openDrawer"
        label="Open drawer"
      ></mb-button>
      <mb-drawer
        :is-visible="openDrawer"
        size="l"
        name="mb-drawer-id"
        :has-header="true"
        :has-footer="true"
      >
        <template slot="header">
          <p> Header Content </p>
        </template>
        <template slot="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </template>
        <template slot="footer">
          Footer
        </template>
      </mb-drawer>
    </section>

    <mb-radio
      label="test"
      name="test"
    ></mb-radio>
    <h3>MbAvatar</h3>
    <mb-avatar
      :avatar="userSmall"
      type="user"
      size="xs"
    ></mb-avatar>
    <mb-avatar
      :avatar="userSmall"
      type="user"
      size="s"
    ></mb-avatar>
    <mb-avatar
      :avatar="user"
      type="user"
      size="m"
    ></mb-avatar>
    <mb-avatar
      :avatar="user"
      type="user"
      size="l"
    ></mb-avatar>
    <mb-avatar
      :avatar="user"
      type="user"
      size="xl"
    ></mb-avatar>
    <mb-avatar
      :avatar="organization"
      type="organization"
      size="xs"
    ></mb-avatar>
    <mb-avatar
      :avatar="organization"
      type="organization"
      size="s"
    ></mb-avatar>
    <mb-avatar
      :avatar="organization"
      type="organization"
      size="m"
    ></mb-avatar>
    <mb-avatar
      :avatar="organization"
      type="organization"
      size="l"
    ></mb-avatar>
    <mb-avatar
      :avatar="organization"
      type="organization"
      size="xl"
    ></mb-avatar>
    <h3>MbMenu</h3>
    <mb-menu
      title="This is the menu title"
      :items="items"
      size="m"
      flow="vertical"
    >
    </mb-menu>
    <mb-menu
      title="Horizontal flow, size l"
      :items="menuItems"
      size="l"
      flow="horizontal"
    >
    </mb-menu>
    <section id="mb-modal">
      <h3>MbModal</h3>
      <mb-button
        v-on:click="openModal = !openModal"
        label="Open modal"
        soze
      ></mb-button>
      <mb-modal
        name="modal-id"
        title="Modal title"
        :is-visible="openModal"
        size="s"
      >
        <template slot="header">
          Header content
        </template>
        <template slot="content">
          Main content
        </template>
        <template slot="footer">
          Footer content
        </template>
      </mb-modal>
    </section>
    <section id="mb-panel">
      <h3>MbPanel</h3>
      <h4>card</h4>
      <mb-panel
        title="Panel Title"
        type="card"
        name="panel-title"
        :has-header="true"
        :has-footer="true"
      >
        <template slot="header">
          Header content
        </template>
        <template slot="content">
          Main content
        </template>
        <template slot="footer">
          Footer content
        </template>
      </mb-panel>
      <h4>base, without header and footer </h4>
      <mb-panel
        type="base"
        name="panel-title-2"
        :has-header="false"
        :has-footer="false"
      >
        <template slot="header">
          Header content
        </template>
        <template slot="content">
          Main content
        </template>
        <template slot="footer">
          Footer content
        </template>
      </mb-panel>
    </section>
    <section id="mb-button">
      <h3>MbButton</h3>
      <section id="buttons-types">
        <h4>Type</h4>
        <mb-button
          data-tooltip="B"
          data-tooltip-placement="bottom"
          label="link"
          type='link'
        />
        <mb-button
          data-tooltip="tooltip-test"
          label="button"
          type='button'
        />
        <mb-button
          data-tooltip="tooltip-test"
          label="button"
          type='button'
        />
        <mb-button
          label="submit"
          type='submit'
        />
        <mb-button
          label="reset"
          type='reset'
        />
        <mb-button
          label="dropdown"
          type='dropdown'
        />
      </section>
      <section id="buttons-priority">
        <h4>Priority</h4>
        <mb-button
          label='base'
          priority='base'
        />
        <mb-button
          label='secondary'
          priority='secondary'
        />
        <mb-button
          label='primary'
          priority='primary'
        />
        <mb-button
          label='base disabled'
          priority='base'
          disabled
        />
        <mb-button
          label='secondary disabled'
          priority='secondary'
          disabled
        />
        <mb-button
          label='primary disabled'
          priority='primary'
          disabled
        />
      </section>
      <section id="buttons-color">
        <h4>Colors</h4>
        <p>Priority primary and color</p>
        <mb-button
          label='danger'
          priority='primary'
          color='danger'
        />
        <mb-button
          label='success'
          priority='primary'
          color='success'
        />
        <mb-button
          label='warning'
          priority='primary'
          color='warning'
        />
        <mb-button
          label='info'
          priority='primary'
          color='info'
        />
        <mb-button
          label='note'
          priority='primary'
          color='note'
        />
        <mb-button
          label='blue'
          priority='primary'
          color='blue'
        />
        <mb-button
          label='red'
          priority='primary'
          color='red'
        />
        <mb-button
          label='green'
          priority='primary'
          color='green'
        />
        <mb-button
          label='orange'
          priority='primary'
          color='orange'
        />
        <mb-button
          label='cyan'
          priority='primary'
          color='cyan'
        />
        <mb-button
          label='yellow'
          priority='primary'
          color='yellow'
        />
        <mb-button
          label='indigo'
          priority='primary'
          color='indigo'
        />
        <mb-button
          label='purple'
          priority='primary'
          color='purple'
        />
        <mb-button
          label='pink'
          priority='primary'
          color='pink'
        />
        <mb-button
          label='teal'
          priority='primary'
          color='teal'
        />
        <mb-button
          label='lime'
          priority='primary'
          color='lime'
        />
        <p>Priority secondary and color</p>
        <mb-button
          label='danger'
          priority='secondary'
          color='danger'
        />
        <mb-button
          label='success'
          priority='secondary'
          color='success'
        />
        <mb-button
          label='warning'
          priority='secondary'
          color='warning'
        />
        <mb-button
          label='info'
          priority='secondary'
          color='info'
        />
        <mb-button
          label='note'
          priority='secondary'
          color='note'
        />
        <mb-button
          label='blue'
          priority='secondary'
          color='blue'
        />
        <mb-button
          label='red'
          priority='secondary'
          color='red'
        />
        <mb-button
          label='green'
          priority='secondary'
          color='green'
        />
        <mb-button
          label='orange'
          priority='secondary'
          color='orange'
        />
        <mb-button
          label='cyan'
          priority='secondary'
          color='cyan'
        />
        <mb-button
          label='yellow'
          priority='secondary'
          color='yellow'
        />
        <mb-button
          label='indigo'
          priority='secondary'
          color='indigo'
        />
        <mb-button
          label='purple'
          priority='secondary'
          color='purple'
        />
        <mb-button
          label='pink'
          priority='secondary'
          color='pink'
        />
        <mb-button
          label='teal'
          priority='secondary'
          color='teal'
        />
        <mb-button
          label='lime'
          priority='secondary'
          color='lime'
        />
        <p>Priority base and color</p>
        <mb-button
          label='danger'
          priority='base'
          color='danger'
        />
        <mb-button
          label='success'
          priority='base'
          color='success'
        />
        <mb-button
          label='warning'
          priority='base'
          color='warning'
        />
        <mb-button
          label='info'
          priority='base'
          color='info'
        />
        <mb-button
          label='note'
          priority='base'
          color='note'
        />
        <mb-button
          label='blue'
          priority='base'
          color='blue'
        />
        <mb-button
          label='red'
          priority='base'
          color='red'
        />
        <mb-button
          label='green'
          priority='base'
          color='green'
        />
        <mb-button
          label='orange'
          priority='base'
          color='orange'
        />
        <mb-button
          label='cyan'
          priority='base'
          color='cyan'
        />
        <mb-button
          label='yellow'
          priority='base'
          color='yellow'
        />
        <mb-button
          label='indigo'
          priority='base'
          color='indigo'
        />
        <mb-button
          label='purple'
          priority='base'
          color='purple'
        />
        <mb-button
          label='pink'
          priority='base'
          color='pink'
        />
        <mb-button
          label='teal'
          priority='base'
          color='teal'
        />
        <mb-button
          label='lime'
          priority='base'
          color='lime'
        />
      </section>
      <section id="buttons-size">
        <h4>Size</h4>
        <mb-button
          label='s'
          priority='primary'
          size='s'
        />
        <mb-button
          label='m'
          priority='primary'
          size='m'
        />
        <mb-button
          label='l'
          priority='primary'
          size='l'
        />
      </section>
      <section id="buttons-icons">
        <h4>Icons</h4>
        <mb-button
          label='icon-name'
          :icon-before="{name: 'icon-picture', size: 14}"
          priority='primary'
          size='m'
        />
        <mb-button
          label='icon-name'
          priority='primary'
          size='m'
          :icon-after="{name: 'pen', size: 20}"
        />
        <mb-icon name="add"></mb-icon>
      </section>
    </section>
  </div>
</template>
