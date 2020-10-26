<script>
import Vue from 'vue';
import {
  MbButton,
  MbChip,
  MbAlert,
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
    checkboxGroupData: [{
      _id: 'i1',
      name: 'one',
      value: 'one',
      checked: false,
      label: 'one',
    }, {
      _id: 'i2',
      name: 'two',
      value: 'two',
      disabled: true,
      label: 'two',
    }, {
      _id: 'i3',
      name: 'three',
      value: 'three',
      disabled: true,
      checked: true,
      label: 'three',
    }, {
      _id: 'i4',
      name: 'four',
      value: 'four',
      checked: false,
      label: 'four',
    },],
    radioGroupData: [{
      _id: 'i1',
      name: 'one',
      value: 'one',
      selected: false,
      label: 'one',
    }, {
      _id: 'i2',
      name: 'two',
      value: 'two',
      selected: true,
      label: 'two',
    }, {
      _id: 'i3',
      name: 'three',
      value: 'three',
      label: 'three',
    }, {
      _id: 'i4',
      name: 'four',
      value: 'four',
      selected: false,
      label: 'four',
    },],
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
      }
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
    sideNavItems: [
      {
        _id: 'icons-doc11122',
        href: '#doc-section-icon',
        menuItemContent: 'MbIcon [Testing]'
      },
      {
        _id: 'buttons-doc11122',
        href: '#doc-section-buttons',
        menuItemContent: 'MbButton [Waiting]'
      },
      {
        _id: 'panels-doc11122',
        href: '#doc-section-panels',
        menuItemContent: 'MbPanel [Testing]'
      },
      {
        _id: 'drawer-doc11122',
        href: '#doc-section-drawer',
        menuItemContent: 'MbDrawer [Testing]'
      },
      {
        _id: 'modal-doc11122',
        href: '#doc-section-modal',
        menuItemContent: 'MbModal [Testing]'
      },
      {
        _id: 'menu-doc11122',
        href: '#doc-section-menu',
        menuItemContent: 'MbMenu [Testing]'
      }
    ],
    openModalS: false,
    openModalM: false,
    openModalL: false,
    openModalXl: false,
    openModalFooter: false,
    openModalHeader: false,
    openDrawerS: false,
    openDrawerM: false,
    openDrawerL: false,
    openDrawerXL: false,
    openDrawerFooter: false,
    openDrawerHeader: false,
    checkedArr: [],
    selectedRadio: '',
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
    noUrl: {
      avatarUrl: '',
      name: 'Pied Piper',
      description: "Inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel. A radical inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel."
    },
    marius: {
      avatarUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/13912706_10154427613364161_4664911369655757049_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=Yl1uRkHhLzYAX9I8X1Z&_nc_ht=scontent.fias1-1.fna&oh=68beec904d76af7d72593f5eb0bd3f82&oe=5FA35BF4',
      name: 'Marius',
      description: "Metabeta, Boss"
    },
    ozgur: {
      avatarUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/110242239_3763569180325905_8256757860282009782_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=UyNXs3qmnQoAX-sq5gJ&_nc_ht=scontent.fias1-1.fna&oh=f923f0c4dddd622c54c47e536038145b&oe=5FA4FFA9',
      name: 'Ozgur',
      description: "Metabeta, Developer"
    },
    cristian: {
      avatarUrl: 'https://scontent.fias1-1.fna.fbcdn.net/v/t1.0-9/45987617_10218113947499143_8767349249932263424_n.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=364UuUGpgjcAX_0Vorl&_nc_ht=scontent.fias1-1.fna&oh=7fd9cac1585a4cc5fa26c5c0ea83e320&oe=5FA3559D',
      name: 'Cristian',
      description: "Metabeta, Designer"
    },
    organization: {
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwMYrqRxreis8fdCGMc3-1jnsR8SdwrgThzA&usqp=CAU',
      name: 'Pied Piper',
      description: "Inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel. A radical inventor of compression algorithms that will disrupt Artificial Intelligence, blockchain, biotech, drones, space and time travel."
    },
  }),
  name: 'ServeDev',
  methods: {
    inputChanged (val) {
      this.checkedArr = val;
    },
    radioChange (val) {
      this.selectedRadio = val;
    }
  },
  components: {
    MbButton,
    MbChip,
    MbAlert,
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
/*---Navigation---*/

.mb-side-navigation {
  position: fixed;
  top: 0;
  left: 0;
  background: $mb-color-white;
  width: 200px;
  padding: 8px;
  height: 100%;
  box-shadow: 1px 0 4px -2px rgba(0, 0, 0, 0.1);
}

.mb-side-menu {
  padding: $mb-space-xs;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 80%;
}

main {
  width: calc(100% - 200px);
  margin-left: 200px;
}

.mb-checkbox-group,
.mb-radio-group {
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
.mb-icon-container {
  display: inline-flex;
  align-items: flex-end;
  padding: 1rem;
  i {
    margin-right: $mb-space-xs;
  }
}
</style> 

<template>
  <div id="app">
    <aside class="mb-side-navigation">
      <mb-menu
        title="Cells"
        :items="sideNavItems"
        size="m"
        flow="vertical"
      >
      </mb-menu>

    </aside>
    <main>
      <h1>Cells</h1>
      <mb-panel
        title="Cells"
        type="card"
        id="cells-table"
        :has-header="true"
        :has-footer="true"
      >
        <template slot="header">
          <mb-chip
            label='To do'
            color='base'
            size="s"
          />
          <mb-chip
            label='Doing'
            color='info'
            size="s"
          />
          <mb-chip
            label='Waiting'
            color='warning'
            size="s"
          />
          <mb-chip
            label='Testing'
            color='lime'
            size="s"
          />
          <mb-chip
            label='Done'
            color='success'
            size="s"
          />
        </template>
        <template slot="content">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Version</th>
                <th>Responsible</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#section-button">MbButton</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbTooltip</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-panel">MbPanel</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-modal">MbModal</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-drawer">MbDrawer</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#doc-section-icon">MbIcon</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="marius"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Testing'
                    color='lime'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbFormInput</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbFormSelect</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbFormDataList</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbFormFieldset</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbFormTextArea</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Doing'
                    color='info'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-checkbox">MbCheckbox</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-checkbox-group">MbCheckboxGroup</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-radio">MbRadio</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Doing'
                    color='info'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-radio-group">MbRadioGroup</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Doing'
                    color='info'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-menu">MbMenu</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="marius"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Testing'
                    color='lime'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-menu">MbMenuItem</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="marius"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Testing'
                    color='lime'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbTab</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbTabGroup</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td><a href="#section-avatar">MbAvatar</a></td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbUser</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Doing'
                    color='info'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbOrganization</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Waiting'
                    color='warning'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbTopbar</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='Doing'
                    color='info'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbTable</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='To do'
                    color='base'
                    size="s"
                  />
                </td>
              </tr>
              <tr>
                <td>MbApp</td>
                <td>1.0.0</td>
                <td>
                  <mb-avatar
                    :avatar="ozgur"
                    type="user"
                    size="s"
                  ></mb-avatar>
                </td>
                <td>
                  <mb-chip
                    label='To do'
                    color='base'
                    size="s"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </template>
        <template slot="footer">
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon
                size="s"
                name="icon-alert-warning-fill"
                color="warning"
              /> This should be maintained updated!
            </template>
          </mb-alert>
        </template>
      </mb-panel>

      <h2>Pre testing - Needs small fixez</h2>
      <section id="section-avatar">
        <h3>MbAvatar</h3>
        <p>
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon
                name="icon-alert-warning-fill"
                color="warning"
              /> Needs to have the default icon for organization, needs improvements for tooltip (display only the name on it)
            </template>
          </mb-alert>
        </p>
        <mb-avatar
          :avatar="noUrl"
          only-image
          tooltip="right"
          type="user"
          size="l"
        ></mb-avatar>
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
      </section>
      <h3>MbFormInput</h3>
      <p></p>

      <mb-form-input
        type="text"
        label="Label for input"
        help="Help for label"
        name="input-test"
        placeholder="input-placeholder"
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
      >
      </mb-form-input>
      <mb-form-input
        type="email"
        label="Label for email"
        name="input-email"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Email"
      >
      </mb-form-input>
      <mb-form-input
        type="phone"
        label="Label for phone"
        name="input-phone"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Phone"
      >
      </mb-form-input>
      <mb-form-input
        type="url"
        label="Label for url"
        name="input-url"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        placeholder="Url"
      >
      </mb-form-input>

      <section id="section-radio">
        <h3>MbRadio</h3>
        <p>
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon
                name="icon-alert-warning-fill"
                color="warning"
              />Label and the radiobox should be aligned
            </template>
          </mb-alert>
        </p>
        <mb-radio
          label="Radio label"
          name="test1"
        ></mb-radio>
      </section>
      <section id="section-radio-group">
        <h3>MbRadioGroup</h3>
        <p>
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon
                name="icon-alert-warning-fill"
                color="warning"
              />Cristian added only the markup and classes to check the styles, but need to be tested with real that if the component works
            </template>
          </mb-alert>
        </p>
        <mb-radio-group
          @inputChanged="radioChange"
          :radioValues="radioGroupData"
        > </mb-radio-group>
        Selected radio option is <span class="danger"> {{selectedRadio}} </span>
        <div class="mb-radio-group mb-flow-horizontal">
          <ul>
            <li>
              <mb-radio
                label="RadioBox"
                name="test"
              ></mb-radio>
            </li>
            <li>
              <mb-radio
                label="RadioBox2"
                name="test"
              ></mb-radio>
            </li>
            <li>
              <mb-radio
                label="RadioBox3"
                name="test"
              ></mb-radio>
            </li>
          </ul>
        </div>
      </section>

      <h2>In progress</h2>

      <mb-organization :currentWorkspace="currentWorkspace">

      </mb-organization>
      <mb-tabs :tabs="tabs">
      </mb-tabs>
      <br />

      <h2>For documentation (Includes extra styling for proper layout)</h2>

      <section id="section-checkbox">
        <h3>MbCheckboxGroup</h3>
        <mb-checkbox-group
          @inputChanged="inputChanged"
          :checkedValues="checkboxGroupData"
        ></mb-checkbox-group>
        Checkbox group output = {{checkedArr.join(' ') || 'empty'}}
        <h3>MbCheckbox</h3>
        <mb-checkbox
          name="checkbox-1"
          label="Checkbox-1"
          :is-disabled="true"
          :is-checked="false"
        ></mb-checkbox>
        <mb-checkbox
          name="checkbox-2"
          label="Checkbox-2"
          :is-disabled="false"
          :is-checked="true"
        ></mb-checkbox>
      </section>
      <mb-panel
        id="doc-section-buttons"
        type="card"
      >
        <template slot="content">
          <p>Buttons communicate actions that users can take.</p>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>type</td>
                  <td>string</td>
                  <td>button</td>
                  <td>link, button, submit, reset, dropdown</td>
                  <td>The link type will render an anchor </td>
                </tr>
                <tr>
                  <td>priority</td>
                  <td>string</td>
                  <td>base</td>
                  <td>base, primary, secondary</td>
                  <td>To set the priorities for </td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>string</td>
                  <td>none</td>
                  <td>danger, success, warning, info, note, blue, red, green, orange, cyan, yellow, indigo, purple, pink, teal, lime</td>
                  <td>Override the color of the cell with an utility color or a decorative color.</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>m</td>
                  <td>s, m, l</td>
                  <td>Used for handlign the sizes of the button</td>
                </tr>
                <tr>
                  <td>:tooltip</td>
                  <td>object</td>
                  <td>none</td>
                  <td>tooltip-data:'', tooltip-placement:''</td>
                  <td>Used for adding a tooltip to the button</td>
                </tr>
                <tr>
                  <td>:icon-before</td>
                  <td>object</td>
                  <td>none</td>
                  <td>name: 'string', size: 'string'</td>
                  <td>Adds an icon before the label. Use the specifications that are for MbIcon</td>
                </tr>
                <tr>
                  <td>:icon-after</td>
                  <td>object</td>
                  <td>none</td>
                  <td>name: 'string', size: 'string'</td>
                  <td>Adds an icon after the label. Use the specifications that are for MbIcon</td>
                </tr>
                <tr>
                  <td>isDisabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td></td>
                  <td>If the button is disabled or not
                  </td>
                </tr>
                <tr>
                  <td>@click</td>
                  <td>function</td>
                  <td>none</td>
                  <td></td>
                  <td>Action that dispatches on clicking button
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>Type</h4>
          <mb-button
            label="link"
            type='link'
          />
          <mb-button
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
            :is-disabled="true"
          />
          <mb-button
            label='secondary disabled'
            priority='secondary'
            :is-disabled="true"
          />
          <mb-button
            label='primary disabled'
            priority='primary'
            :is-disabled="true"
          />
          <h4>Colors</h4>
          <h6>priority="primary" and color=""</h6>
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
          <h6>priority="secondary" and color=""</h6>
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
          <h6>priority="base" and color=""</h6>
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
          <h4>Size</h4>
          <mb-button
            label='size=s'
            priority='primary'
            size='s'
          />
          <mb-button
            label='size=s'
            priority='primary'
            size='s'
            :icon-before="{name: 'icon-format-image'}"
          />
          <mb-button
            label='size=m'
            priority='primary'
            size='m'
          />
          <mb-button
            label='size=m'
            priority='primary'
            size='m'
            :icon-before="{name: 'icon-format-image'}"
          />
          <mb-button
            label='size=l'
            priority='primary'
            size='l'
          />
          <mb-button
            label='size=l'
            priority='primary'
            size='l'
            :icon-before="{name: 'icon-format-image'}"
          />
          <h4>Button with icon</h4>
          <h6>icon-before="icon-name"</h6>
          <mb-button
            label='icon-format-image'
            priority='primary'
            :icon-before="{name: 'icon-format-image'}"
          />
          <h6>icon-after="icon-name"</h6>
          <mb-button
            label='icon-format-image'
            priority='primary'
            :icon-after="{name: 'icon-format-image'}"
          />
          <h6>priority="primary" and color=""</h6>
          <mb-button
            label='danger'
            priority='primary'
            color='danger'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='success'
            priority='primary'
            color='success'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='warning'
            priority='primary'
            color='warning'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='info'
            priority='primary'
            color='info'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='note'
            priority='primary'
            color='note'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='blue'
            priority='primary'
            color='blue'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='red'
            priority='primary'
            color='red'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='green'
            priority='primary'
            color='green'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='orange'
            priority='primary'
            color='orange'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='cyan'
            priority='primary'
            color='cyan'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='yellow'
            priority='primary'
            color='yellow'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='indigo'
            priority='primary'
            color='indigo'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='purple'
            priority='primary'
            color='purple'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='pink'
            priority='primary'
            color='pink'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='teal'
            priority='primary'
            color='teal'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='lime'
            priority='primary'
            color='lime'
            :icon-before="{name: 'icon-image'}"
          />
          <h6>priority="secondary" and color=""</h6>
          <mb-button
            label='danger'
            priority='secondary'
            color='danger'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='success'
            priority='secondary'
            color='success'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='warning'
            priority='secondary'
            color='warning'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='info'
            priority='secondary'
            color='info'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='note'
            priority='secondary'
            color='note'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='blue'
            priority='secondary'
            color='blue'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='red'
            priority='secondary'
            color='red'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='green'
            priority='secondary'
            color='green'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='orange'
            priority='secondary'
            color='orange'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='cyan'
            priority='secondary'
            color='cyan'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='yellow'
            priority='secondary'
            color='yellow'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='indigo'
            priority='secondary'
            color='indigo'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='purple'
            priority='secondary'
            color='purple'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='pink'
            priority='secondary'
            color='pink'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='teal'
            priority='secondary'
            color='teal'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='lime'
            priority='secondary'
            color='lime'
            :icon-before="{name: 'icon-image'}"
          />
          <h6>priority="base" and color=""</h6>
          <mb-button
            label='danger'
            priority='base'
            color='danger'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='success'
            priority='base'
            color='success'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='warning'
            priority='base'
            color='warning'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='info'
            priority='base'
            color='info'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='note'
            priority='base'
            color='note'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='blue'
            priority='base'
            color='blue'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='red'
            priority='base'
            color='red'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='green'
            priority='base'
            color='green'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='orange'
            priority='base'
            color='orange'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='cyan'
            priority='base'
            color='cyan'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='yellow'
            priority='base'
            color='yellow'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='indigo'
            priority='base'
            color='indigo'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='purple'
            priority='base'
            color='purple'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='pink'
            priority='base'
            color='pink'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='teal'
            priority='base'
            color='teal'
            :icon-before="{name: 'icon-image'}"
          />
          <mb-button
            label='lime'
            priority='base'
            color='lime'
            :icon-before="{name: 'icon-image'}"
          />
          </section>
          <section>
            <h4>Buttons with icon that have 2 colors</h4>
            <h6>priority="primary" and color=""</h6>
            <mb-button
              label='danger'
              priority='primary'
              color='danger'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='success'
              priority='primary'
              color='success'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='warning'
              priority='primary'
              color='warning'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='info'
              priority='primary'
              color='info'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='note'
              priority='primary'
              color='note'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='blue'
              priority='primary'
              color='blue'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='red'
              priority='primary'
              color='red'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='green'
              priority='primary'
              color='green'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='orange'
              priority='primary'
              color='orange'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='cyan'
              priority='primary'
              color='cyan'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='yellow'
              priority='primary'
              color='yellow'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='indigo'
              priority='primary'
              color='indigo'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='purple'
              priority='primary'
              color='purple'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='pink'
              priority='primary'
              color='pink'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='teal'
              priority='primary'
              color='teal'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='lime'
              priority='primary'
              color='lime'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <h6>priority="secondary" and color=""</h6>
            <mb-button
              label='danger'
              priority='secondary'
              color='danger'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='success'
              priority='secondary'
              color='success'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='warning'
              priority='secondary'
              color='warning'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='info'
              priority='secondary'
              color='info'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='note'
              priority='secondary'
              color='note'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='blue'
              priority='secondary'
              color='blue'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='red'
              priority='secondary'
              color='red'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='green'
              priority='secondary'
              color='green'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='orange'
              priority='secondary'
              color='orange'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='cyan'
              priority='secondary'
              color='cyan'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='yellow'
              priority='secondary'
              color='yellow'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='indigo'
              priority='secondary'
              color='indigo'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='purple'
              priority='secondary'
              color='purple'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='pink'
              priority='secondary'
              color='pink'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='teal'
              priority='secondary'
              color='teal'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='lime'
              priority='secondary'
              color='lime'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <h6>priority="base" and color=""</h6>
            <mb-button
              label='danger'
              priority='base'
              color='danger'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='success'
              priority='base'
              color='success'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='warning'
              priority='base'
              color='warning'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='info'
              priority='base'
              color='info'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='note'
              priority='base'
              color='note'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='blue'
              priority='base'
              color='blue'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='red'
              priority='base'
              color='red'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='green'
              priority='base'
              color='green'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='orange'
              priority='base'
              color='orange'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='cyan'
              priority='base'
              color='cyan'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='yellow'
              priority='base'
              color='yellow'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='indigo'
              priority='base'
              color='indigo'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='purple'
              priority='base'
              color='purple'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='pink'
              priority='base'
              color='pink'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='teal'
              priority='base'
              color='teal'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              label='lime'
              priority='base'
              color='lime'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <h6>icon without label</h6>
            <mb-button
              priority='primary'
              :icon-before="{name: 'icon-alert-success-fill'}"
            />
            <mb-button
              priority='primary'
              :icon-after="{name: 'icon-alert-success-fill'}"
            />
          </section>
        </template>
      </mb-panel>
      <br />
      <mb-panel
        id="doc-section-panel"
        title="MbPanel"
        type="card"
      >
        <template slot="content">
          <p>Panel description</p>
          <h4>How it works</h4>
          <pre>
            <code> 
              &lt;mb-panel title="Panel title" type="card" :has-header="true" :has-footer="true" &gt;
                &lt;template slot="header">
                  Any type of content
                &lt;/template&gt;
                &lt;template slot="content">
                  Any type of content
                &lt;/template&gt;
                &lt;template slot="footer">
                  Any type of content
                &lt;/template&gt;
              &lt;/mb-panel&gt;
            </code>
          </pre>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Adds a title to the panel</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Renders in markup the id of the panel</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>string</td>
                  <td>base</td>
                  <td>base, card</td>
                  <td>It is used for styling the panel</td>
                </tr>
                <tr>
                  <td>:has-header</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the header slot of the panel</td>
                </tr>
                <tr>
                  <td>:has-footer</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the footer slot of the panel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>MbPanel type</h4>
          <h6>Card</h6>
          <mb-panel
            title="Panel card"
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
          <h6>Base</h6>
          <mb-panel
            title="Panel base"
            type="base"
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
          <h4>MbPanel :has-header="false" </h4>
          <mb-panel
            type="base"
            title="Panel Title"
            name="panel-title-2"
            :has-header="false"
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
          <h4>MbPanel :has-footer="false" </h4>
          <mb-panel
            title="Panel Title"
            type="base"
            name="panel-title-2"
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
        </template>
      </mb-panel>
      </br>
      <mb-panel
        id="doc-section-modal"
        title="MbModal"
        type="card"
      >
        <template slot="content">
          <p>MbModal it is used to focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content.</p>
          <h4>How it works</h4>
          <pre> <code> &lt;mb-modal name="modal-name" size="m" :has-header="true" :has-footer="true" /&gt;</code></pre>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Adds a title to the modal</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Renders in markup the id of the modal</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>m</td>
                  <td>s, m, l, xl</td>
                  <td>Handles the width of the modal</td>
                </tr>
                <tr>
                  <td>:has-header</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the header slot of the modal</td>
                </tr>
                <tr>
                  <td>:has-footer</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the footer slot of the modal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>MbModal sizes</h4>
          <mb-button
            @click="openModalS = !openModalS"
            label="Open modal size s"
          />
          <mb-button
            @click="openModalM = !openModalM"
            label="Open modal size m"
          />
          <mb-button
            @click="openModalL = !openModalL"
            label="Open modal size l"
          />
          <mb-button
            @click="openModalXl = !openModalXl"
            label="Open modal size xl"
          />
          <mb-modal
            name="modal-s"
            title="Modal title"
            :is-visible="openModalS"
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
          <mb-modal
            name="modal-m"
            title="Modal title"
            :is-visible="openModalM"
            size="m"
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
          <mb-modal
            name="modal-l"
            title="Modal title"
            :is-visible="openModalL"
            size="l"
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
          <mb-modal
            name="modal-xl"
            title="Modal title"
            :is-visible="openModalXl"
            size="xl"
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
          <h4>MbModal :has-header="false"</h4>
          <mb-button
            @click="openModalHeader = !openModalHeader"
            label="Open modal"
          />
          <mb-modal
            name="modal-header"
            title="Modal title"
            :is-visible="openModalHeader"
            :has-header="false"
            size="l"
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
          <h4>MbModal :has-footer="false" </h4>
          <mb-button
            @click="openModalFooter = !openModalFooter"
            label="Open modal"
          />
          <mb-modal
            name="modal-footer"
            title="Modal title"
            :is-visible="openModalFooter"
            :has-footer="false"
            size="l"
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
        </template>
      </mb-panel>
      <br />
      <mb-panel
        id="doc-section-drawer"
        title="MbDrawer"
        type="card"
      >
        <template slot="content">
          <p>MbDrawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.</p>
          <h4>How it works</h4>
          <pre> <code> &lt;mb-drawer name="drawer-name" size="l" :has-header="true" :has-footer="true" /&gt;</code></pre>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Renders in markup the id of the drawer</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>l</td>
                  <td>s, m, l, xl</td>
                  <td>Handles the width of the drawer</td>
                </tr>
                <tr>
                  <td>:has-header</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the header slot of the drawer</td>
                </tr>
                <tr>
                  <td>:has-footer</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>true, false</td>
                  <td>Used for when you want to hide the footer slot of the drawer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>MbDrawer sizes</h4>
          <mb-button
            @click="openDrawerS = true"
            label="Open drawer size s"
          ></mb-button>
          <mb-button
            @click="openDrawerM = true"
            label="Open drawer size m"
          ></mb-button>
          <mb-button
            @click="openDrawerL = true"
            label="Open drawer size l"
          ></mb-button>
          <mb-button
            @click="openDrawerXL = true"
            label="Open drawer size xl"
          ></mb-button>
          <mb-drawer
            :is-visible.sync="openDrawerS"
            size="s"
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
          <mb-drawer
            :is-visible.sync="openDrawerM"
            size="l"
            name="mb-drawer-size-m"
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
          <mb-drawer
            :is-visible.sync="openDrawerL"
            size="l"
            name="mb-drawer-size-l"
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
          <mb-drawer
            :is-visible.sync="openDrawerXL"
            size="xl"
            name="mb-drawer-size-xl"
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
          <h4>MbDrawer :has-header="false"</h4>
          <mb-button
            @click="openDrawerHeader = true"
            label="Open drawer"
          ></mb-button>
          <mb-drawer
            :is-visible.sync="openDrawerHeader"
            size="xl"
            name="mb-drawer-footer"
            :has-header="false"
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
          <h4>MbDrawer :has-footer="false"</h4>
          <mb-button
            @click="openDrawerFooter = true"
            label="Open drawer"
          ></mb-button>
          <mb-drawer
            :is-visible.sync="openDrawerFooter"
            size="xl"
            name="mb-drawer-footer"
            :has-header="true"
            :has-footer="false"
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

        </template>
      </mb-panel>
      </br>
      <mb-panel
        id="doc-section-menu"
        title="MbMenu + MbMenuItem"
        type="card"
        :has-header="true"
        :has-footer="true"
      >
        <template slot="content">
          <p>MbMenu offers a list of items, actions or functions that a user can access. It can be used in any type of container.</p>
          <h4>How it works</h4>
          <pre> <code> &lt;mb-menu title="Menu title" :items="MenuItems" size="m" flow="vertical" /&gt;</code></pre>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>none</td>
                  <td>none</td>
                  <td>Is the title that will be displayed in menu heading</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>m</td>
                  <td>m, l</td>
                  <td>Use for handlign the sizes of the menu items</td>
                </tr>
                <tr>
                  <td>flow</td>
                  <td>string</td>
                  <td>vertical</td>
                  <td>vertical, horizontal</td>
                  <td>You can use for vertical or horizontal displaying of the items</td>
                </tr>
                <tr>
                  <td>:items</td>
                  <td>array</td>
                  <td>none</td>
                  <td>_id: 'string', href: 'string', menuItemContent: 'string', isDisabled: boolean</td>
                  <td>Used for defigning the MbMenuItem, that includes the list of items and actions displayed in MbMenu</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>MbMenu sizes</h4>
          <mb-menu
            title="Size M"
            :items="items"
            size="m"
            flow="vertical"
          >
          </mb-menu>
          <mb-menu
            title="Size L"
            :items="menuItems"
            size="l"
            flow="vertical"
          >
          </mb-menu>
          <h4>MbMenu flows</h4>
          <mb-menu
            title="Vertical Flow"
            :items="items"
            size="m"
            flow="vertical"
          >
          </mb-menu>
          <mb-menu
            title="Horizontal Flow"
            :items="menuItems"
            size="m"
            flow="horizontal"
          >
          </mb-menu>
        </template>
      </mb-panel>
      </br>
      <mb-panel
        id="doc-section-icon"
        title="MbIcon"
        type="card"
      >
        <template slot="content">
          <p>
            Icons are visual symbols used to represent ideas, objects, or actions. Are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics. They communicate messages at a glance, afford interactivity, and draw attention to important information.
          </p>
          <h4>How it works</h4>
          <pre> <code> &lt;mb-icon name="icon-user" size="m" /&gt;</code></pre>
          <div class="mb-props-table">
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Options</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>string</td>
                  <td>none</td>
                  <td><a>List with all icons</a></td>
                  <td>You can use any icon name from the list</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>string</td>
                  <td>m</td>
                  <td>s, m, l</td>
                  <td> - </td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>string</td>
                  <td>$mb-color-gray</td>
                  <td>none</td>
                  <td>The color of an icon is set by the parent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>Icons with fill and stroke</h4>
          <p>Exists a list of icons that have fill and stroke that should have different colors.</p>
          <h6><strong>Icons that have stroke different that default color</strong></h6>
          <p>To style them in different contexts you can use their name classes. </p>
          <p>
            <code>
              <pre>
                .mb-icon-name{
                  .svg-stroke{
                    stroke: $mb-color-white;
                  }
                }
              </pre>
            </code>
          </p>
          <p><small><strong>List of icons:</strong> .mb-icon-checkbox-selected, .mb-icon-alert-add-fill, .mb-icon-alert-danger-fill, .mb-icon-alert-delete-fill, .mb-icon-alert-error-fill, .mb-icon-alert-help-fill, .mb-icon-alert-info-fill, .mb-icon-alert-more-fill, .mb-icon-alert-remove-fill, .mb-icon-alert-success-fill, .mb-icon-alert-warning-fill, .mb-icon-mini-add,
              .mb-icon-mini-delete, .mb-icon-mini-error, .mb-icon-mini-more, .mb-icon-mini-remove, .mb-icon-mini-success, .mb-icon-file-csv, .mb-icon-file-doc, .mb-icon-file-google-doc, .mb-icon-file-google-sheet, .mb-icon-file-google-slides, .mb-icon-file-json, .mb-icon-file-other, .mb-icon-file-pdf, .mb-icon-file-ppt, .mb-icon-file-sql, .mb-icon-file-xls,
              .mb-icon-file-xml, .mb-icon-file-zip </small></p>
          <p><strong> Icons that have fill different that default color</strong></p>
          <p> To style them in different contexts you can use their name classes. </p>
          <p>
            <code>
              <pre>
                .mb-icon-name{
                  .svg-fill{
                    fill: $mb-color-white;
                  }
                }
              </pre>
            </code>
          </p>
          <p><small><strong>List of icons:</strong>.mb-icon-checkbox,.mb-icon-radio </small></p>
          <h4>Icon sizes</h4>
          <div class="mb-icon-container">
            <mb-icon
              name="icon-utility-star-fill"
              size="xs"
            />
            <small>size="xs"</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon
              name="icon-utility-star-fill"
              size="s"
            />
            <small>size="s"</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon
              name="icon-utility-star-fill"
              size="m"
            />
            <small>size="m"</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon
              name="icon-utility-star-fill"
              size="l"
            />
            <small>size="l"</small>
          </div>
          <h4>All Icons</h4>
          <h6>Navigation</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-admin" />
            <small>icon-admin</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-archive" />
            <small>icon-archive</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-billing" />
            <small>icon-billing</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-burger-collapsed" />
            <small>icon-burger-collapsed</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-burger" />
            <small>icon-burger</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-calendar" />
            <small>icon-calendar</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-contacts" />
            <small>icon-contacts</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-conversations" />
            <small>icon-conversations</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-dashboard" />
            <small>icon-dashboard</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-dealflow" />
            <small>icon-dealflow</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-filter" />
            <small>icon-filter</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-help" />
            <small>icon-help</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-home" />
            <small>icon-home</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-investor" />
            <small>icon-investor</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-logout" />
            <small>icon-logout</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-organization-profile" />
            <small>icon-organization-profile</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-performance" />
            <small>icon-performance</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-program-profile" />
            <small>icon-program-profile</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-program" />
            <small>icon-program</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-settings" />
            <small>icon-settings</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-profile" />
            <small>icon-user-profile</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-workspace" />
            <small>icon-workspace</small>
          </div>
          <h6>Business</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-accounting" />
            <small>icon-business-accounting</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-activity" />
            <small>icon-business-activity</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-apps" />
            <small>icon-business-apps</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-archive" />
            <small>icon-business-archive</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-area" />
            <small>icon-business-chart-area</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-bar" />
            <small>icon-business-chart-bar</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-column-notepad" />
            <small>icon-business-chart-column-notepad</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-column" />
            <small>icon-business-chart-column</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-complex" />
            <small>icon-business-chart-complex</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-line" />
            <small>icon-business-chart-line</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-lines" />
            <small>icon-business-chart-lines</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-chart-pie" />
            <small>icon-business-chart-pie</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-design" />
            <small>icon-business-design</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-education" />
            <small>icon-business-education</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-idea" />
            <small>icon-business-idea</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-inbox" />
            <small>icon-business-inbox</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-investment" />
            <small>icon-business-investment</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-metrics" />
            <small>icon-business-metrics</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-money" />
            <small>icon-business-money</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-paperwork" />
            <small>icon-business-paperwork</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-performance" />
            <small>icon-business-performance</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-report" />
            <small>icon-business-report</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-site" />
            <small>icon-business-site</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-strategy" />
            <small>icon-business-strategy</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-target" />
            <small>icon-business-target</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-business-work" />
            <small>icon-business-work</small>
          </div>

          <h6>Formatting</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-attachment" />
            <small>icon-format-attachment</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-body" />
            <small>icon-format-body</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-close-quote" />
            <small>icon-format-close-quote</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-code" />
            <small>icon-format-code</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-email" />
            <small>icon-format-email</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-eraser" />
            <small>icon-format-eraser</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-h1" />
            <small>icon-format-h1</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-h2" />
            <small>icon-format-h2</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-h3" />
            <small>icon-format-h3</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-hash" />
            <small>icon-format-hash</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-image" />
            <small>icon-format-image</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-line" />
            <small>icon-format-line</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-link" />
            <small>icon-format-link</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-ordered-list" />
            <small>icon-format-ordered-list</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-redo" />
            <small>icon-format-redo</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-resizer" />
            <small>icon-format-resizer</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-table" />
            <small>icon-format-table</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-text-bold" />
            <small>icon-format-text-bold</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-text-italic" />
            <small>icon-format-text-italic</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-text-strike-through" />
            <small>icon-format-text-strike-through</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-text-underline" />
            <small>icon-format-text-underline</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-todo" />
            <small>icon-format-todo</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-undo" />
            <small>icon-format-undo</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-format-unordered-list" />
            <small>icon-format-unordered-list</small>
          </div>

          <h6>Forms</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-call" />
            <small>icon-forms-call</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-check" />
            <small>icon-forms-check</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-checkbox" />
            <small>icon-forms-checkbox</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-checkbox-selected" />
            <small>icon-forms-checkbox-selected</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-disabled" />
            <small>icon-forms-disabled</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-edit" />
            <small>icon-forms-edit</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-email" />
            <small>icon-forms-email</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-formula" />
            <small>icon-forms-formula</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-hide" />
            <small>icon-forms-hide</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-lock" />
            <small>icon-forms-lock</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-password" />
            <small>icon-forms-password</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-radio" />
            <small>icon-forms-radio</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-radio-selected" />
            <small>icon-forms-radio-selected</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-search" />
            <small>icon-forms-search</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-submit" />
            <small>icon-forms-submit</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-sync" />
            <small>icon-forms-sync</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-tags" />
            <small>icon-forms-tags</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-time" />
            <small>icon-forms-time</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-unlock" />
            <small>icon-forms-unlock</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-forms-view" />
            <small>icon-forms-view</small>
          </div>
          <h6>Alerts</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-add-fill" />
            <small>icon-alert-add-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-add" />
            <small>icon-alert-add</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-danger-fill" />
            <small>icon-alert-danger-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-danger" />
            <small>icon-alert-danger</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-delete-fill" />
            <small>icon-alert-delete-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-delete" />
            <small>icon-alert-delete</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-error-fill" />
            <small>icon-alert-error-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-error" />
            <small>icon-alert-error</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-help-fill" />
            <small>icon-alert-help-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-help" />
            <small>icon-alert-help</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-info-fill" />
            <small>icon-alert-info-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-info" />
            <small>icon-alert-info</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-more-fill" />
            <small>icon-alert-more-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-more" />
            <small>icon-alert-more</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-remove-fill" />
            <small>icon-alert-remove-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-remove" />
            <small>icon-alert-remove</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-success-fill" />
            <small>icon-alert-success-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-success" />
            <small>icon-alert-success</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-warning-fill" />
            <small>icon-alert-warning-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-alert-warning" />
            <small>icon-alert-warning</small>
          </div>

          <h6>Utility</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-add" />
            <small>icon-utility-add</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-arrow-left" />
            <small>icon-utility-arrow</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-both" />
            <small>icon-utility-both</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-check" />
            <small>icon-utility-check</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-close" />
            <small>icon-utility-close</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-copy" />
            <small>icon-utility-copy</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-custom" />
            <small>icon-utility-custom</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-doublecheck" />
            <small>icon-utility-doublecheck</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-download" />
            <small>icon-utility-download</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-layout" />
            <small>icon-utility-layout</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-love" />
            <small>icon-utility-love</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-menu" />
            <small>icon-utility-menu</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-more" />
            <small>icon-utility-more</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-notification" />
            <small>icon-utility-notification</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-pin" />
            <small>icon-utility-pin</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-print" />
            <small>icon-utility-print</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-previous" />
            <small>icon-utility-previous</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-rating" />
            <small>icon-utility-rating</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-save" />
            <small>icon-utility-save</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-star-fill" />
            <small>icon-utility-star-fill</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-star" />
            <small>icon-utility-star</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-select" />
            <small>icon-utility-select</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-two-colums" />
            <small>icon-utility-two-colums</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-utility-upload" />
            <small>icon-utility-upload</small>
          </div>
          <h6>Concepts</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-block" />
            <small>icon-concepts-block</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-blocks" />
            <small>icon-concepts-blocks</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-briefcase" />
            <small>icon-concepts-briefcase</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-bug" />
            <small>icon-concepts-bug</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-chart" />
            <small>icon-concepts-chart</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-database" />
            <small>icon-concepts-database</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-deal" />
            <small>icon-concepts-deal</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-experiment" />
            <small>icon-concepts-experiment</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-goals" />
            <small>icon-concepts-goals</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-hub" />
            <small>icon-concepts-hub</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-idea" />
            <small>icon-concepts-idea</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-mentor" />
            <small>icon-concepts-mentor</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-mood" />
            <small>icon-concepts-mood</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-tabbed" />
            <small>icon-concepts-tabbed</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-team" />
            <small>icon-concepts-team</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-concepts-wealth" />
            <small>icon-concepts-wealth</small>
          </div>

          <h6>Misc</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-chat" />
            <small>icon-misc-chat</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-chat" />
            <small>icon-misc-chat</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-checklists" />
            <small>icon-misc-checklists</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-document" />
            <small>icon-misc-document</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-documents" />
            <small>icon-misc-documents</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-flag" />
            <small>icon-misc-flag</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-add" />
            <small>icon-misc-folder-add</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-ban" />
            <small>icon-misc-folder-ban</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-close" />
            <small>icon-misc-folder-close</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-closed" />
            <small>icon-misc-folder-closed</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-locked" />
            <small>icon-misc-folder-locked</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-open" />
            <small>icon-misc-folder-open</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-remove" />
            <small>icon-misc-folder-remove</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-sync" />
            <small>icon-misc-folder-sync</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-tree" />
            <small>icon-misc-folder-tree</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-folder-warning" />
            <small>icon-misc-folder-warning</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-message-square" />
            <small>icon-misc-message-square</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-notify" />
            <small>icon-misc-notify</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-thumbsdown" />
            <small>icon-misc-thumbsdown</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-thumbsup" />
            <small>icon-misc-thumbsup</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-trend-down" />
            <small>icon-misc-trend-down</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-misc-trend-up" />
            <small>icon-misc-trend-up</small>
          </div>

          <h6>Users</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-add" />
            <small>icon-user-add</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-delete" />
            <small>icon-user-delete</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-group" />
            <small>icon-user-group</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-network" />
            <small>icon-user-network</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-remove" />
            <small>icon-user-remove</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-search" />
            <small>icon-user-search</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user-success" />
            <small>icon-user-success</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-user" />
            <small>icon-user</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-users" />
            <small>icon-users</small>
          </div>
          <h6>Mini icons</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-add" />
            <small>icon-mini-add</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-arrow" />
            <small>icon-mini-arrow</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-check" />
            <small>icon-mini-check</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-close" />
            <small>icon-mini-close</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-delete" />
            <small>icon-mini-delete</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-down" />
            <small>icon-mini-down</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-error" />
            <small>icon-mini-error</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-arrow" />
            <small>icon-mini-arrow</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-filter" />
            <small>icon-mini-filter</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon
              name="icon-mini-heart"
              size="xs"
            />
            <small>icon-mini-heart</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-more" />
            <small>icon-mini-more</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-remove" />
            <small>icon-mini-remove</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-sort" />
            <small>icon-mini-sort</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-sorted" />
            <small>icon-mini-sorted</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-star" />
            <small>icon-mini-star</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-success" />
            <small>icon-mini-success</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-mini-up" />
            <small>icon-mini-up</small>
          </div>
          <h6>Files</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-csv" />
            <small>icon-file-csv</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-doc" />
            <small>icon-file-doc</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-google-doc" />
            <small>icon-file-google-doc</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-google-sheet" />
            <small>icon-file-google-sheet</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-google-slides" />
            <small>icon-file-google-slides</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-json" />
            <small>icon-file-json</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-other" />
            <small>icon-file-other</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-pdf" />
            <small>icon-file-pdf</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-ppt" />
            <small>icon-file-ppt</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-sql" />
            <small>icon-file-sql</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-xls" />
            <small>icon-file-xls</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-xml" />
            <small>icon-file-xml</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-file-zip" />
            <small>icon-file-zip</small>
          </div>
          <h6>Social</h6>
          <div class="mb-icon-container">
            <mb-icon name="icon-contact-email" />
            <small>icon-contact-email</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-contact-phone" />
            <small>icon-contact-phone</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-contact-scheduler" />
            <small>icon-contact-scheduler</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-contact-skype" />
            <small>icon-contact-web</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-angellist" />
            <small>icon-social-angellist</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-crunchbase" />
            <small>icon-social-crunchbase</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-dribbble" />
            <small>icon-social-dribbble</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-facebook" />
            <small>icon-social-facebook</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-github" />
            <small>icon-social-github</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-linkedin" />
            <small>icon-social-linkedin</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-medium" />
            <small>icon-social-medium</small>
          </div>
          <div class="mb-icon-container">
            <mb-icon name="icon-social-twitter" />
            <small>icon-social-twitter</small>
          </div>
        </template>
      </mb-panel>
    </main>
  </div>
</template>
