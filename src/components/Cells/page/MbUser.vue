<template>
  <div class="user-header-menu clickable" @mouseover="expanded = true" @mouseleave="expanded = false">
    <div class="user-preview" @click="() => $router.push({ name: 'profileDashboard' })">
      <img class="user-icon" :src="tryGet(() => profile.avatarUrl) !== '' ? profile.avatarUrl: defaultImages.getImage('user', 'icon')" width="32" height="32" />
      <div class="user-info">
        <div class="d-flex align-items-center">
          <mb-icon name="mini-arrow" width="8" height="8" iconClass="default"/>
        </div>
      </div>
    </div>
    <ul class="user-menu-items menu-dropdown-list" :class="{ expanded: expanded }" style="right:0; top:57px; margin-right:24px">
      <section class="account-items menu-dropdown-list-section">
        <p class="user-role" v-if="getRole(currentWorkspaceRole) !== ''">{{profile.firstName}} {{profile.lastName}} &#8226; {{getRole(currentWorkspaceRole)}}</p>
        <p class="user-role" v-else>{{profile.firstName}} {{profile.lastName}}</p>
        <li
          class="menu-dropdown-list-item"
          v-on:click.stop="$router.push({ name: 'previewProfile' })"
        >
          <mb-icon name="icon-profile" width="16" height="16" iconClass="default" hoverClass="black" class="icon"/>
          <p class="title">My profile</p>
        </li>
        <li class="menu-dropdown-list-item" v-on:click.stop="$router.push({ name: 'personalProfile' })">
          <mb-icon name="settings" width="16" height="16" iconClass="default" hoverClass="black" class="icon"/>
          <p class="title">Account settings</p>
        </li>
      </section>
      <section class="organization-items menu-dropdown-list-section">
        <li class="menu-dropdown-list-item"  v-on:click="$refs.addOrgModal.open()">
          <mb-icon name="add" width="16" height="16" iconClass="default" hoverClass="black" class="icon"/>
          <p class="title">Add organization</p>
        </li>
      </section>
      <section class="personal-items menu-dropdown-list-section">
        <li class="menu-dropdown-list-item" v-on:click.stop="goToHelp">
          <mb-icon name="icon-feedback" width="16" height="16" iconClass="default" hoverClass="black" class="icon"/>
          <p class="title">Need help?</p>
        </li>
        <li class="menu-dropdown-list-item" v-on:click="onLogout">
          <mb-icon name="navigation-logout" width="16" height="16" iconClass="default" hoverClass="black" class="icon"/>
          <p class="title">Logout</p>
        </li>
      </section>
    </ul>
    <add-organization-modal ref="addOrgModal" />
  </div>
</template>

<script>
// import { mapActions, mapState, mapGetters } from 'vuex';

const roleMap = [
  {
    key: 'reviewer',
    value: 'Reviewer',
  },
  {
    key: 'mentor',
    value: 'Mentor',
  },
  {
    key: 'founders',
    value: 'Founder',
  },
  {
    key: 'advisors',
    value: 'Advisor',
  },
  {
    key: 'boardMembers',
    value: 'Board member',
  },
  {
    key: 'keyEmployees',
    value: 'Employee',
  },
  {
    key: 'managers',
    value: 'Manager',
  },
];
const getRole = (keys) => {
  if (Array.isArray(keys)) {
    const matchedValues = keys.map((key) => {
      const matchedRoles = roleMap.filter(x => x.key === key);
      if (matchedRoles.length === 1) {
        return matchedRoles[0].value;
      }
      return '';
    });

    if (matchedValues.length > 0) {
      return matchedValues.join(', ');
    }
  } else {
    const matchedRoles = roleMap.filter(x => x.key === keys);
    if (matchedRoles.length === 1) {
      return matchedRoles[0].value;
    }
  }
  return '';
};

export default {
  name: 'UserMenu',
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    ...mapState({
      profile: state => state.profileModule.myProfile.data,
      workspaces: state => state.workspacesModule.data,
    }),
    ...mapGetters(['currentWorkspaceRole', 'isAuthenticated']),
    organizations() {
      return Array.isArray(this.workspaces.organizations) ? this.workspaces.organizations : [];
    },
    programs() {
      return Array.isArray(this.workspaces.programs) ? this.workspaces.programs : [];
    },
    showLogin() {
      let value = null;
      if (this.$route.name !== 'viewPublicProgram') {
        value = true;
      } else {
        value = false;
      }
      return value;
    },
  },
  methods: {
    ...mapActions(['logout']),
    getRole,
    async onLogout() {
      sessionStorage.setItem('logout-clicked', true);
      await this.logout();
      this.$router.push({ name: 'login' });
    },
    goToHelp() {
      window.open('https://www.metabeta.com/en/feedback/', '_blank');
    },
  },
  components: {
    BaseIcon,
    BaseButton,
    AddOrganizationModal,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/partials/_mb_color.scss";
@import "../../../assets/styles/partials/_mb_space.scss";
  ul, li {
  margin: 0;
  padding: 0;
}
.user-preview {
  display: flex;
  align-items: center;
  .user-icon {
    border-radius: 16px;
  }
  .user-info {
    display: none;
    margin-left: 8px;
    .user-name {
      font-size: 14px;
      line-height: 20px;
      margin-right: 8px;
    }
  }
}

.menu-dropdown-list {
  min-width: 250px;
  position: absolute;
  background: $mb-color-white;;
  @include mb-shadow(l);
  border-radius: .25rem;
  z-index: 350;
  transform: scaleY(0);
  transition: all .2s ease-in-out;
  transform-origin: top;
  &.expanded {
    transform: scaleY(1);
    min-width: 250px;
  }
  .menu-dropdown-list-section {
    padding: 8px;
    border-top: 1px solid $mb-color-gray-500;
    &:first-of-type {
      border-top: none;
    }
    .user-role {
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px;
      font-size: 11px;
      line-height: 12px;
      color: $mb-color-gray-300;
      text-transform: uppercase;
    }
  }
  .menu-dropdown-list-item {
    height: 32px;
    padding: 8px;
    color: $mb-color-gray-200;
    display: flex;
    align-items: center;
    border-radius: 3px;
    &:hover {
      color: $mb-color-gray-100;
      background: $mb-color-gray-700;
      .title {
        color: $mb-color-gray-100;
      }
    }

    .icon {
      margin-right: 8px;
    }
    .title {
      color: $mb-color-gray-200;
      font-size: 14px;
      line-height: 16px;
    }
  }
}
</style>