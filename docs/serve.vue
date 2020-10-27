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
  MbDialog,
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
      },
      {
        _id: 'asdgashjdgksja1213a',
        href: 'https://medium.com/',
        menuItemContent: 'Menu Item 2',
        isDisabled: true
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
        menuItemContent: 'MbIcon [Done]'
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
        href: '#doc-section-dialog',
        menuItemContent: 'MbDialog [Testing]'
      },
      {
        _id: 'menu-doc11122',
        href: '#doc-section-menu',
        menuItemContent: 'MbMenu [Testing]'
      }
    ],
    openDialogS: false,
    openDialogM: false,
    openDialogL: false,
    openDialogXl: false,
    openDialogFooter: false,
    openDialogHeader: false,
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
    MbDialog,
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
      <mb-panel
        type="card"
        id="cells-table"
      >
        <template slot="title">
          <h1>Cells</h1>
        </template>
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
                <td><a href="#section-modal">MbDialog</a></td>
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
                    label='Done'
                    color='success'
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
          tooltip="right"
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
        <mb-radio-group
          @inputChanged="radioChange"
          :radioValues="radioGroupData"
        > </mb-radio-group>
        Selected radio option is <span class="danger"> {{selectedRadio}} </span>
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
        <template slot="title">
          <h1>Buttons</h1>
        </template>
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
            :tooltip="'top'"
          >
          <template name="tooltip">
            dafsdfa
            </template>
          </mb-button>
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
        type="card"
      >
        <template slot="title">
          <h1>MbPanel</h1>
        </template>
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
        id="doc-section-dialog"
        type="card"
      >
         <template slot="title">
          <h1>MbDialog</h1>
        </template>
        <template slot="content">
          <p>MbDialog it is used to focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content.</p>
          <h4>How it works</h4>
          <pre> <code> 
            &lt;mb-dialog size="m" /&gt; 
              &lt;template slot="title"&gt;
                Title content
              &lt;/template&gt;
              &lt;template slot="header"&gt;
                Header content
              &lt;/template&gt;
              &lt;template slot="content"&gt;
                Main content
              &lt;/template&gt;
              &lt;template slot="footer"&gt;
                Footer content
              &lt;/template&gt;
            &lt;/mb-dialog size="m" &gt; 
            </code></pre>
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
                  <td>size</td>
                  <td>string</td>
                  <td>m</td>
                  <td>s, m, l, xl</td>
                  <td>Handles the width of the MbDialog</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4>MbDialog sizes</h4>
          <mb-button
            @click="openDialogS = !openDialogS"
            label="Open dialog size s"
          />
          <mb-button
            @click="openDialogM = !openDialogM"
            label="Open dialog size m"
          />
          <mb-button
            @click="openDialogL = !openDialogL"
            label="Open dialog size l"
          />
          <mb-button
            @click="openDialogXl = !openDialogXl"
            label="Open dialog size xl"
          />
          <mb-dialog
            :is-visible="openDialogS"
            size="s"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>   
            <template slot="header">
              Header content
            </template>
            <template slot="content">
              Main content
            </template>
            <template slot="footer">
              Footer content
            </template>
          </mb-dialog>
          <mb-dialog
            :is-visible="openDialogM"
            size="m"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
            <template slot="header">
              Header content
            </template>
            <template slot="content">
              Main content
            </template>
            <template slot="footer">
              Footer content
            </template>
          </mb-dialog>
          <mb-dialog
            :is-visible="openDialogL"
            size="l"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
            <template slot="header">
              Header content
            </template>
            <template slot="content">
              Main content
            </template>
            <template slot="footer">
              Footer content
            </template>
          </mb-dialog>
          <mb-dialog
            :is-visible="openDialogXl"
            size="xl"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
            <template slot="header">
              Header content
            </template>
            <template slot="content">
              Main content
            </template>
            <template slot="footer">
              Footer content
            </template>
          </mb-dialog>
          <h4>MbDialog without header</h4>
          <mb-button
            @click="openDialogHeader = !openDialogHeader"
            label="Open dialog"
          />
          <mb-dialog
            :is-visible="openDialogHeader"
            size="l"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
            <template slot="content">
              Main content
            </template>
            <template slot="footer">
              Footer content
            </template>
          </mb-dialog>
          <h4>MbDialog wihout footer </h4>
          <mb-button
            @click="openDialogFooter = !openDialogFooter"
            label="Open dialog"
          />
          <mb-dialog
            :is-visible="openDialogFooter"
            size="l"
          >
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
            <template slot="header">
              Header content
            </template>
            <template slot="content">
              Main content
            </template>
          </mb-dialog>
        </template>
      </mb-panel>
      <br />
      <mb-panel
        id="doc-section-drawer"
        type="card"
      >
         <template slot="title">
          <h1>MbDrawer</h1>
        </template>
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
            size="m"
            name="mb-drawer-size-m"
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
            <template slot="title">
              <h3>Dialog title</h3>
            </template>
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
          <h4>MbDrawer without header</h4>
          <mb-button
            @click="openDrawerHeader = true"
            label="Open drawer"
          ></mb-button>
          <mb-drawer
            :is-visible.sync="openDrawerHeader"
            size="xl"
          >
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
          <h4>MbDrawer without footer</h4>
          <mb-button
            @click="openDrawerFooter = true"
            label="Open drawer"
          ></mb-button>
          <mb-drawer
            :is-visible.sync="openDrawerFooter"
            size="xl"
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
          </mb-drawer>

        </template>
      </mb-panel>
      </br>
      <mb-panel
        id="doc-section-menu"
        type="card"
      >
        <template slot="title">
          <h3>MbMenu+MbMenuItem</h3>
        </template>
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
        type="card"
      >
        <template slot="content">
          <h1>MbIcon</h1>
          <article>
            <p>Icons are visual symbols used to represent ideas, objects, or actions. Are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics. They communicate messages at a glance, afford interactivity, and draw attention to important information. </p>
            <h3>Usage</h3>
            <pre><code>&lt;mb-icon name="icon-user" size="m" /&gt;</code></pre>
            <h3>Props</h3>
            <table class="mb-props-table">
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
                  <td><code>name</code></td>
                  <td>String</td>
                  <td>Empty</td>
                  <td><a href="#all-icons">List with all icons</a></td>
                  <td>You can use any icon name from the list</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td>String</td>
                  <td><code>m</code></td>
                  <td><code>xs / s / m / l</code></td>
                  <td>For 1rem=16px, the sizes are 12px / 16px / 24px </td>
                </tr>
              </tbody>
            </table>
            <ul class="mb-list-inline">
              <li>Size examples: </li>
              <li><mb-icon name="icon-utility-star-fill" size="xs" /> <code>size="xs"</code></li>
              <li><mb-icon name="icon-utility-star-fill" size="s" /> <code>size="s"</code></li>
              <li><mb-icon name="icon-utility-star-fill" size="m" /> <code>size="m"</code></li>
              <li><mb-icon name="icon-utility-star-fill" size="l" /> <code>size="l"</code></li>
            </ul>
            <h3>Style</h3>
            <p>In some cases, icons will have a stroke color but also a fill color. To style them differently, you can define colors using two classes, <code>.svg-stroke</code> and <code>.svg-fill</code></p>
            <pre><code>.mb-icon-name .svg-stroke {
  stroke: $mb-color-white;
}
.mb-icon-name .svg-fill {
  fill: $mb-color-red;
}</code></pre>
            <h4>List of icons with stroke and fill</h4>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-checkbox-selected" /> icon-checkbox-selected</li> 
              <li><mb-icon name="icon-alert-add-fill" /> icon-alert-add-fill</li>
              <li><mb-icon name="icon-alert-danger-fill" /> icon-alert-danger-fill</li>
              <li><mb-icon name="icon-alert-delete-fill" /> icon-alert-delete-fill</li>
              <li><mb-icon name="icon-alert-error-fill" /> icon-alert-error-fill</li>
              <li><mb-icon name="icon-alert-help-fill" /> icon-alert-help-fill</li>
              <li><mb-icon name="icon-alert-info-fill" /> icon-alert-info-fill</li>
              <li><mb-icon name="icon-alert-more-fill" /> icon-alert-more-fill</li>
              <li><mb-icon name="icon-alert-remove-fill" /> icon-alert-remove-fill</li>
              <li><mb-icon name="icon-alert-success-fill" /> icon-alert-success-fill</li>
              <li><mb-icon name="icon-alert-warning-fill" /> icon-alert-warning-fill</li>
              <li><mb-icon name="icon-file-csv" /> icon-file-csv</li>
              <li><mb-icon name="icon-file-doc" /> icon-file-doc</li>
              <li><mb-icon name="icon-file-google-doc" /> icon-file-google-doc</li>
              <li><mb-icon name="icon-file-google-sheet" /> icon-file-google-sheet</li>
              <li><mb-icon name="icon-file-google-slides" /> icon-file-google-slides</li>
              <li><mb-icon name="icon-file-json" /> icon-file-json</li>
              <li><mb-icon name="icon-file-other" /> icon-file-other</li>
              <li><mb-icon name="icon-file-pdf" /> icon-file-pdf</li>
              <li><mb-icon name="icon-file-ppt" /> icon-file-ppt</li>
              <li><mb-icon name="icon-file-sql" /> icon-file-sql</li>
              <li><mb-icon name="icon-file-xls" /> icon-file-xls</li>
              <li><mb-icon name="icon-file-xml" /> icon-file-xml</li>
              <li><mb-icon name="icon-file-zip" /> icon-file-zip</li>
            </ul>
            <h3 id="all-icons">All Icons</h3>
            <h5>Navigation</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-admin" /> icon-admin</li>
              <li><mb-icon name="icon-archive" /> icon-archive</li>
              <li><mb-icon name="icon-billing" /> icon-billing</li>
              <li><mb-icon name="icon-burger-collapsed" /> icon-burger-collapsed</li>
              <li><mb-icon name="icon-burger" /> icon-burger</li>
              <li><mb-icon name="icon-calendar" /> icon-calendar</li>
              <li><mb-icon name="icon-contacts" /> icon-contacts</li>
              <li><mb-icon name="icon-conversations" /> icon-conversations</li>
              <li><mb-icon name="icon-dashboard" /> icon-dashboard</li>
              <li><mb-icon name="icon-dealflow" /> icon-dealflow</li>
              <li><mb-icon name="icon-filter" /> icon-filter</li>
              <li><mb-icon name="icon-help" /> icon-help</li>
              <li><mb-icon name="icon-home" /> icon-home</li>
              <li><mb-icon name="icon-investor" /> icon-investor</li>
              <li><mb-icon name="icon-logout" /> icon-logout</li>
              <li><mb-icon name="icon-organization-profile" /> icon-organization-profile</li>
              <li><mb-icon name="icon-performance" /> icon-performance</li>
              <li><mb-icon name="icon-program-profile" /> icon-program-profile</li>
              <li><mb-icon name="icon-program" /> icon-program</li>
              <li><mb-icon name="icon-settings" /> icon-settings</li>
              <li><mb-icon name="icon-user-profile" /> icon-user-profile</li>
              <li><mb-icon name="icon-workspace" /> icon-workspace</li>
            </ul>
            <h5>Business</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-business-accounting" /> icon-business-accounting</li>
              <li><mb-icon name="icon-business-activity" /> icon-business-activity</li>
              <li><mb-icon name="icon-business-apps" /> icon-business-apps</li>
              <li><mb-icon name="icon-business-archive" /> icon-business-archive</li>
              <li><mb-icon name="icon-business-chart-area" /> icon-business-chart-area</li>
              <li><mb-icon name="icon-business-chart-bar" /> icon-business-chart-bar</li>
              <li><mb-icon name="icon-business-chart-column-notepad" /> icon-business-chart-column-notepad</li>
              <li><mb-icon name="icon-business-chart-column" /> icon-business-chart-column</li>
              <li><mb-icon name="icon-business-chart-complex" /> icon-business-chart-complex</li>
              <li><mb-icon name="icon-business-chart-line" /> icon-business-chart-line</li>
              <li><mb-icon name="icon-business-chart-lines" /> icon-business-chart-lines</li>
              <li><mb-icon name="icon-business-chart-pie" /> icon-business-chart-pie</li>
              <li><mb-icon name="icon-business-design" /> icon-business-design</li>
              <li><mb-icon name="icon-business-education" /> icon-business-education</li>
              <li><mb-icon name="icon-business-idea" /> icon-business-idea</li>
              <li><mb-icon name="icon-business-inbox" /> icon-business-inbox</li>
              <li><mb-icon name="icon-business-investment" /> icon-business-investment</li>
              <li><mb-icon name="icon-business-metrics" /> icon-business-metrics</li>
              <li><mb-icon name="icon-business-money" /> icon-business-money</li>
              <li><mb-icon name="icon-business-paperwork" /> icon-business-paperwork</li>
              <li><mb-icon name="icon-business-performance" /> icon-business-performance</li>
              <li><mb-icon name="icon-business-report" /> icon-business-report</li>
              <li><mb-icon name="icon-business-site" /> icon-business-site</li>
              <li><mb-icon name="icon-business-strategy" /> icon-business-strategy</li>
              <li><mb-icon name="icon-business-target" /> icon-business-target</li>
              <li><mb-icon name="icon-business-work" /> icon-business-work</li>
            </ul>
            <h5>Formatting</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-format-attachment" /> icon-format-attachment</li>
              <li><mb-icon name="icon-format-body" /> icon-format-body</li>
              <li><mb-icon name="icon-format-close-quote" /> icon-format-close-quote</li>
              <li><mb-icon name="icon-format-code" /> icon-format-code</li>
              <li><mb-icon name="icon-format-email" /> icon-format-email</li>
              <li><mb-icon name="icon-format-eraser" /> icon-format-eraser</li>
              <li><mb-icon name="icon-format-h1" /> icon-format-h1</li>
              <li><mb-icon name="icon-format-h2" /> icon-format-h2</li>
              <li><mb-icon name="icon-format-h3" /> icon-format-h3</li>
              <li><mb-icon name="icon-format-hash" /> icon-format-hash</li>
              <li><mb-icon name="icon-format-image" /> icon-format-image</li>
              <li><mb-icon name="icon-format-line" /> icon-format-line</li>
              <li><mb-icon name="icon-format-link" /> icon-format-link</li>
              <li><mb-icon name="icon-format-ordered-list" /> icon-format-ordered-list</li>
              <li><mb-icon name="icon-format-redo" /> icon-format-redo</li>
              <li><mb-icon name="icon-format-resizer" /> icon-format-resizer</li>
              <li><mb-icon name="icon-format-table" /> icon-format-table</li>
              <li><mb-icon name="icon-format-text-bold" /> icon-format-text-bold</li>
              <li><mb-icon name="icon-format-text-italic" /> icon-format-text-italic</li>
              <li><mb-icon name="icon-format-text-strike-through" /> icon-format-text-strike-through</li>
              <li><mb-icon name="icon-format-text-underline" /> icon-format-text-underline</li>
              <li><mb-icon name="icon-format-todo" /> icon-format-todo</li>
              <li><mb-icon name="icon-format-undo" /> icon-format-undo</li>
              <li><mb-icon name="icon-format-unordered-list" /> icon-format-unordered-list</li>
            </ul>
            <h5>Forms</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-forms-call" /> icon-forms-call</li>
              <li><mb-icon name="icon-forms-check" /> icon-forms-check</li>
              <li><mb-icon name="icon-forms-checkbox" /> icon-forms-checkbox</li>
              <li><mb-icon name="icon-forms-checkbox-selected" /> icon-forms-checkbox-selected</li>
              <li><mb-icon name="icon-forms-disabled" /> icon-forms-disabled</li>
              <li><mb-icon name="icon-forms-edit" /> icon-forms-edit</li>
              <li><mb-icon name="icon-forms-email" /> icon-forms-email</li>
              <li><mb-icon name="icon-forms-formula" /> icon-forms-formula</li>
              <li><mb-icon name="icon-forms-hide" /> icon-forms-hide</li>
              <li><mb-icon name="icon-forms-lock" /> icon-forms-lock</li>
              <li><mb-icon name="icon-forms-password" /> icon-forms-password</li>
              <li><mb-icon name="icon-forms-radio" /> icon-forms-radio</li>
              <li><mb-icon name="icon-forms-radio-selected" /> icon-forms-radio-selected</li>
              <li><mb-icon name="icon-forms-search" /> icon-forms-search</li>
              <li><mb-icon name="icon-forms-submit" /> icon-forms-submit</li>
              <li><mb-icon name="icon-forms-sync" /> icon-forms-sync</li>
              <li><mb-icon name="icon-forms-tags" /> icon-forms-tags</li>
              <li><mb-icon name="icon-forms-time" /> icon-forms-time</li>
              <li><mb-icon name="icon-forms-unlock" /> icon-forms-unlock</li>
              <li><mb-icon name="icon-forms-view" /> icon-forms-view</li>
            </ul>
            <h5>Alerts</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-alert-add-fill" /> icon-alert-add-fill</li>
              <li><mb-icon name="icon-alert-add" /> icon-alert-add</li>
              <li><mb-icon name="icon-alert-danger-fill" /> icon-alert-danger-fill</li>
              <li><mb-icon name="icon-alert-danger" /> icon-alert-danger</li>
              <li><mb-icon name="icon-alert-delete-fill" /> icon-alert-delete-fill</li>
              <li><mb-icon name="icon-alert-delete" /> icon-alert-delete</li>
              <li><mb-icon name="icon-alert-error-fill" /> icon-alert-error-fill</li>
              <li><mb-icon name="icon-alert-error" /> icon-alert-error</li>
              <li><mb-icon name="icon-alert-help-fill" /> icon-alert-help-fill</li>
              <li><mb-icon name="icon-alert-help" /> icon-alert-help</li>
              <li><mb-icon name="icon-alert-info-fill" /> icon-alert-info-fill</li>
              <li><mb-icon name="icon-alert-info" /> icon-alert-info</li>
              <li><mb-icon name="icon-alert-more-fill" /> icon-alert-more-fill</li>
              <li><mb-icon name="icon-alert-more" /> icon-alert-more</li>
              <li><mb-icon name="icon-alert-remove-fill" /> icon-alert-remove-fill</li>
              <li><mb-icon name="icon-alert-remove" /> icon-alert-remove</li>
              <li><mb-icon name="icon-alert-success-fill" /> icon-alert-success-fill</li>
              <li><mb-icon name="icon-alert-success" /> icon-alert-success</li>
              <li><mb-icon name="icon-alert-warning-fill" /> icon-alert-warning-fill</li>
              <li><mb-icon name="icon-alert-warning" /> icon-alert-warning</li>
            </ul>
            <h5>Utility</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-utility-add" /> icon-utility-add</li>
              <li><mb-icon name="icon-utility-arrow-left" /> icon-utility-arrow</li>
              <li><mb-icon name="icon-utility-both" /> icon-utility-both</li>
              <li><mb-icon name="icon-utility-check" /> icon-utility-check</li>
              <li><mb-icon name="icon-utility-close" /> icon-utility-close</li>
              <li><mb-icon name="icon-utility-copy" /> icon-utility-copy</li>
              <li><mb-icon name="icon-utility-custom" /> icon-utility-custom</li>
              <li><mb-icon name="icon-utility-doublecheck" /> icon-utility-doublecheck</li>
              <li><mb-icon name="icon-utility-download" /> icon-utility-download</li>
              <li><mb-icon name="icon-utility-layout" /> icon-utility-layout</li>
              <li><mb-icon name="icon-utility-love" /> icon-utility-love</li>
              <li><mb-icon name="icon-utility-menu" /> icon-utility-menu</li>
              <li><mb-icon name="icon-utility-more" /> icon-utility-more</li>
              <li><mb-icon name="icon-utility-notification" /> icon-utility-notification</li>
              <li><mb-icon name="icon-utility-pin" /> icon-utility-pin</li>
              <li><mb-icon name="icon-utility-print" /> icon-utility-print</li>
              <li><mb-icon name="icon-utility-previous" /> icon-utility-previous</li>
              <li><mb-icon name="icon-utility-rating" /> icon-utility-rating</li>
              <li><mb-icon name="icon-utility-save" /> icon-utility-save</li>
              <li><mb-icon name="icon-utility-star-fill" /> icon-utility-star-fill</li>
              <li><mb-icon name="icon-utility-star" /> icon-utility-star</li>
              <li><mb-icon name="icon-utility-select" /> icon-utility-select</li>
              <li><mb-icon name="icon-utility-two-colums" /> icon-utility-two-colums</li>
              <li><mb-icon name="icon-utility-upload" /> icon-utility-upload</li>
            </ul>
            <h5>Concepts</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-concepts-block" /> icon-concepts-block</li>
              <li><mb-icon name="icon-concepts-blocks" /> icon-concepts-blocks</li>
              <li><mb-icon name="icon-concepts-briefcase" /> icon-concepts-briefcase</li>
              <li><mb-icon name="icon-concepts-bug" /> icon-concepts-bug</li>
              <li><mb-icon name="icon-concepts-chart" /> icon-concepts-chart</li>
              <li><mb-icon name="icon-concepts-database" /> icon-concepts-database</li>
              <li><mb-icon name="icon-concepts-deal" /> icon-concepts-deal</li>
              <li><mb-icon name="icon-concepts-experiment" /> icon-concepts-experiment</li>
              <li><mb-icon name="icon-concepts-goals" /> icon-concepts-goals</li>
              <li><mb-icon name="icon-concepts-hub" /> icon-concepts-hub</li>
              <li><mb-icon name="icon-concepts-idea" /> icon-concepts-idea</li>
              <li><mb-icon name="icon-concepts-mentor" /> icon-concepts-mentor</li>
              <li><mb-icon name="icon-concepts-mood" /> icon-concepts-mood</li>
              <li><mb-icon name="icon-concepts-tabbed" /> icon-concepts-tabbed</li>
              <li><mb-icon name="icon-concepts-team" /> icon-concepts-team</li>
              <li><mb-icon name="icon-concepts-wealth" /> icon-concepts-wealth</li>
            </ul>
            <h5>Misc</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-misc-chat" /> icon-misc-chat</li>
              <li><mb-icon name="icon-misc-chat" /> icon-misc-chat</li>
              <li><mb-icon name="icon-misc-checklists" /> icon-misc-checklists</li>
              <li><mb-icon name="icon-misc-document" /> icon-misc-document</li>
              <li><mb-icon name="icon-misc-documents" /> icon-misc-documents</li>
              <li><mb-icon name="icon-misc-flag" /> icon-misc-flag</li>
              <li><mb-icon name="icon-misc-folder-add" /> icon-misc-folder-add</li>
              <li><mb-icon name="icon-misc-folder-ban" /> icon-misc-folder-ban</li>
              <li><mb-icon name="icon-misc-folder-close" /> icon-misc-folder-close</li>
              <li><mb-icon name="icon-misc-folder-closed" /> icon-misc-folder-closed</li>
              <li><mb-icon name="icon-misc-folder-locked" /> icon-misc-folder-locked</li>
              <li><mb-icon name="icon-misc-folder-open" /> icon-misc-folder-open</li>
              <li><mb-icon name="icon-misc-folder-remove" /> icon-misc-folder-remove</li>
              <li><mb-icon name="icon-misc-folder-sync" /> icon-misc-folder-sync</li>
              <li><mb-icon name="icon-misc-folder-tree" /> icon-misc-folder-tree</li>
              <li><mb-icon name="icon-misc-folder-warning" /> icon-misc-folder-warning</li>
              <li><mb-icon name="icon-misc-message-square" /> icon-misc-message-square</li>
              <li><mb-icon name="icon-misc-notify" /> icon-misc-notify</li>
              <li><mb-icon name="icon-misc-thumbsdown" /> icon-misc-thumbsdown</li>
              <li><mb-icon name="icon-misc-thumbsup" /> icon-misc-thumbsup</li>
              <li><mb-icon name="icon-misc-trend-down" /> icon-misc-trend-down</li>
              <li><mb-icon name="icon-misc-trend-up" /> icon-misc-trend-up</li>
            </ul>
            <h5>Users</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-user-add" /> icon-user-add</li>
              <li><mb-icon name="icon-user-delete" /> icon-user-delete</li>
              <li><mb-icon name="icon-user-group" /> icon-user-group</li>
              <li><mb-icon name="icon-user-network" /> icon-user-network</li>
              <li><mb-icon name="icon-user-remove" /> icon-user-remove</li>
              <li><mb-icon name="icon-user-search" /> icon-user-search</li>
              <li><mb-icon name="icon-user-success" /> icon-user-success</li>
              <li><mb-icon name="icon-user" /> icon-user</li>
              <li><mb-icon name="icon-users" /> icon-users</li>
            </ul>
            <h5>Files</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-file-csv" /> icon-file-csv</li>
              <li><mb-icon name="icon-file-doc" /> icon-file-doc</li>
              <li><mb-icon name="icon-file-google-doc" /> icon-file-google-doc</li>
              <li><mb-icon name="icon-file-google-sheet" /> icon-file-google-sheet</li>
              <li><mb-icon name="icon-file-google-slides" /> icon-file-google-slides</li>
              <li><mb-icon name="icon-file-json" /> icon-file-json</li>
              <li><mb-icon name="icon-file-other" /> icon-file-other</li>
              <li><mb-icon name="icon-file-pdf" /> icon-file-pdf</li>
              <li><mb-icon name="icon-file-ppt" /> icon-file-ppt</li>
              <li><mb-icon name="icon-file-sql" /> icon-file-sql</li>
              <li><mb-icon name="icon-file-xls" /> icon-file-xls</li>
              <li><mb-icon name="icon-file-xml" /> icon-file-xml</li>
              <li><mb-icon name="icon-file-zip" /> icon-file-zip</li>
            </ul>
            <h5>Social</h5>
            <ul style="column-count: 4; column-gap: 2rem; margin-bottom: 1rem;">
              <li><mb-icon name="icon-contact-email" /> icon-contact-email</li>
              <li><mb-icon name="icon-contact-phone" /> icon-contact-phone</li>
              <li><mb-icon name="icon-contact-scheduler" /> icon-contact-scheduler</li>
              <li><mb-icon name="icon-contact-skype" /> icon-contact-web</li>
              <li><mb-icon name="icon-social-angellist" /> icon-social-angellist</li>
              <li><mb-icon name="icon-social-crunchbase" /> icon-social-crunchbase</li>
              <li><mb-icon name="icon-social-dribbble" /> icon-social-dribbble</li>
              <li><mb-icon name="icon-social-facebook" /> icon-social-facebook</li>
              <li><mb-icon name="icon-social-github" /> icon-social-github</li>
              <li><mb-icon name="icon-social-linkedin" /> icon-social-linkedin</li>
              <li><mb-icon name="icon-social-medium" /> icon-social-medium</li>
              <li><mb-icon name="icon-social-twitter" /> icon-social-twitter</li>
            </ul>
          </article>
        </template>
      </mb-panel>
    </main>
  </div>
</template>
