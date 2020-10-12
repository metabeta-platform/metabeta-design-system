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
.mb-checkbox-group,.mb-radio-group {
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
</style> 

<template>
  <div id="app">
    <h1>Cells</h1>
    <mb-panel
        title="Cells"
        type="card"
        name="cells" 
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
                <th>Responsabile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#section-button">MbButton</a></td>
                <td>1.0.0</td>
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><a href="#section-icon">MbIcon</a></td>
                <td>1.0.0</td>
                <td><mb-avatar
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
                <td>MbFormInput</td>
                <td>1.0.0</td>
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><a href="#section-menu">MbMenuItem</a></td>
                <td>1.0.0</td>
                <td><mb-avatar
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
                <td>MbTab</td>
                <td>1.0.0</td>
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
                <td><mb-avatar
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
              <mb-icon name="icon-alert-warning-fill" color="warning" /> This should be maintained updated!
            </template>
          </mb-alert>
        </template>
    </mb-panel>
   
    <h2>Ready for testing</h2>
   
    <section id="section-menu">
      <h3>MbMenu + MbMenuItem</h3>
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
    </section>
    <h2>Pre testing - Needs small fixez</h2>
     <section id="section-avatar">
      <h3>MbAvatar</h3>
        <p>
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon name="icon-alert-warning-fill" color="warning" /> Needs to have the default icon for organization, needs improvements for tooltip (display only the name on it)
            </template>
          </mb-alert>
        </p>
       <mb-avatar
        :avatar="noUrl"
        only-image
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
    <section id="section-checkbox">
      <h3>MbCheckbox</h3>
      <p>
        <mb-alert color="warning">
          <template slot="content">
            <mb-icon name="icon-alert-warning-fill" color="warning" />Needs to have the Metabeta icon
          </template>
        </mb-alert>
      </p>
      <mb-checkbox
        name="checkbox-1"
        label="Checkbox-1"
        :isDisabled="true"
      ></mb-checkbox>
      <p>
        <mb-alert color="warning">
          <template slot="content">
            <mb-icon name="icon-alert-warning-fill" color="warning" />When is check and disabled I can't see the checked icon
          </template>
        </mb-alert>
      </p>
      <mb-checkbox
        name="checkbox-2"
        label="Checkbox-2"
        :isDisabled="true"
        :isChecked="true"
      ></mb-checkbox>
    </section>
    <section id="section-checkbox-group">
      <h3>MbCheckboxGroup</h3>
      <p>
        <mb-alert color="warning">
          <template slot="content">
            <mb-icon name="icon-alert-warning-fill" color="warning" />Cristian added only the markup and classes to check the styles, but need to be tested with real that if the component works
          </template>
        </mb-alert>
      </p>
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
    </section>
    <section id="section-radio">
      <h3>MbRadio</h3>
      <p>
        <mb-alert color="warning">
          <template slot="content">
            <mb-icon name="icon-alert-warning-fill" color="warning" />Label and the radiobox should be aligned
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
            <mb-icon name="icon-alert-warning-fill" color="warning" />Cristian added only the markup and classes to check the styles, but need to be tested with real that if the component works
          </template>
        </mb-alert>
      </p>
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
    <section id="section-modal">
      <h3>MbModal</h3>
      <mb-button
        tooltip="'top'"
        @click="openModal = !openModal"
        label="Open modal"
      >
        <template slot="tooltip">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </template>
      </mb-button>
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
    <section id="section-drawer">
      <h3>MbDrawer</h3>
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
    <section id="section-button">
      <h3>MbButton</h3>
      <p>
        <mb-alert color="warning">
          <template slot="content">
            <mb-icon name="icon-alert-warning-fill" color="warning" />Needs styling for mb-type-dropdown button and to update the markup
          </template>
        </mb-alert>
      </p>
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
        <h4>Button with icon</h4>
        <p>Priority primary and color</p>
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
        <p>Priority secondary and color</p>
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
        <p>Priority base and color</p>
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
      <section id="section-icon">
        <h3>MbIcon</h3>
        <p>
          <mb-alert color="warning">
            <template slot="content">
              <mb-icon name="icon-alert-warning-fill" color="warning" />Size prop needs to be fixed
            </template>
          </mb-alert>
        </p>
        <mb-icon name="icon-user"/>
        <mb-icon name="icon-business-work"/>
        <mb-icon name="icon-mini-arrow"/>
        <mb-icon name="icon-close"/>
        <mb-icon name="icon-password"/>
        <mb-icon name="icon-search"/>
        <mb-icon name="icon-view"/>
        <mb-icon name="icon-hide"/>
        <mb-icon name="icon-call"/>
        <mb-icon name="icon-email"/>
        <mb-icon name="icon-alert-warning-fill"/>
        <mb-icon name="icon-radio"/>
        <mb-icon name="icon-radio-selected"/>
        <mb-icon name="icon-checkbox"/>
        <mb-icon name="icon-checkbox-selected"/>
      </section>
    <h2>In progress</h2>

    <mb-organization :currentWorkspace="currentWorkspace">

    </mb-organization>
    <mb-tabs :tabs="tabs">
    </mb-tabs>
    <br />

    
    
      
  </div>
</template>
