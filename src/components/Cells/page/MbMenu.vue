<template>
  <aside>
    <mb-icon name="metabeta-icon"></mb-icon>
    <section class="side-nav-options" :class="{ 'sub-menu': hasSubMenu }">
      <ul class="side-nav-options-list">
        <li
          v-if="pages.length === 0 && isAuthenticated"
          class="side-nav-option"
          title="Personal dashboard"
          v-b-tooltip.hover.right
          @click.stop="$router.push({ name: 'profileDashboard' })"
          :class="{ selected: $route.name.includes('profileDashboard') }"
        >
          <mb-icon name="navigation-home" width="24" height="24" hoverClass="dark" :iconClass="$route.name.includes('profileDashboard') ? 'primary' : 'default'" class="icon"/>
          <span class="name">Personal dashboard</span>
        </li>
        <li
          v-for="(page) in level0Pages"
          :key="page.id"
          :title="page.name"
          v-b-tooltip.hover.right
          :class="{ selected: $route.name.includes(page.routeName) }"
          @click="changeRoute(page)"
          class="side-nav-option"
        >
          <mb-icon :name="page.icon" width="24" height="24" hoverClass="dark" :iconClass="$route.name.includes(page.routeName) ? 'primary' : 'default'" class="icon"/>
          <span class="name">{{page.name}}</span>
        </li>
        <li
          v-for="(page) in level1Pages"
          :key="page.id"
          :title="page.name"
          v-b-tooltip.hover.right
          @click="changeRoute(page)"
          :class="{ selected: $route.name.includes(page.routeName)}"
          class="side-nav-option"
        >
          <mb-icon :name="page.icon" width="24" height="24" :iconClass="$route.name.includes(page.routeName) ? 'primary' : 'default'" class="icon"/>
          <span class="name">{{page.name}}</span>
        </li>
        <li
          v-for="(page) in level2Pages"
          :key="page.id"
          :title="page.name"
          :class="{ selected: $route.name.includes(page.routeName) }"
          @click="changeRoute(page)"
          v-b-tooltip.hover.right
          class="side-nav-option"
        >
          <mb-icon :name="page.icon" width="24" height="24" :iconClass="$route.name.includes(page.routeName) ? 'primary' : 'default'" class="icon"/>
          <span class="name">{{page.name}}</span>
        </li>
      </ul>
    </section>
    <section class="side-nav-footer">
      <p class="ui-caption">{{currentVersion}}</p>
    </section>
  </aside>
</template>

<script>
import config from './menu-configuration';

export default {
  name: 'SideMenu',
  data() {
    return {
      pages: [],
      hasSubMenu: false,
    };
  },
  props: {
    currentVersion:{
      type: String,
      default: '1.5.2',
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    currentWorkspace: {
      immediate: true,
      handler(val) {
        this.pages = config.getMenuOptions(val.pages);
      },
    },
    subMenu(val) {
      if (val.length > 0) {
        this.hasSubMenu = true;
      } else {
        this.hasSubMenu = false;
      }
    },
    activePage: {
      immediate: true,
      handler() {
        this.$emit('page-change', { subMenu: this.hasSubMenu });
        this.toggleSubMenu(this.hasSubMenu);
      },
    },
    expanded: {
      immediate: true,
      handler(val) {
        this.toggleMenuCollapse(val);
      },
    },
  },
  computed: {
    ...mapState({
      workspaces: state => state.workspacesModule.data,
    }),
    ...mapGetters(['settings_currentWorkspace', 'currentWorkspaceRole', 'isAuthenticated']),
    organizations() {
      return Array.isArray(this.workspaces.organizations) ? this.workspaces.organizations : [];
    },
    programs() {
      return Array.isArray(this.workspaces.programs) ? this.workspaces.programs : [];
    },
    currentWorkspace() {
      if (typeof this.settings_currentWorkspace.id !== 'undefined') {
        const matchedProgramWorkspaces = this.programs.filter(x => x.id === this.settings_currentWorkspace.id);
        if (matchedProgramWorkspaces.length === 1) {
          return matchedProgramWorkspaces[0];
        }
        const matchedOrganizationWorkspaces = this.organizations.filter(x => x.id === this.settings_currentWorkspace.id);
        if (matchedOrganizationWorkspaces.length === 1) {
          return matchedOrganizationWorkspaces[0];
        }
      }
      return {
        id: 'none',
      };
    },
    level0Pages() {
      return this.pages.filter(x => x.level === 0);
    },
    level1Pages() {
      return this.pages.filter(x => x.level === 1);
    },
    level2Pages() {
      return this.pages.filter(x => x.level === 2);
    },
    subMenu() {
      const subMenu = this.tryGet(() => this.activePage) === '' ? [] : this.activePage.subMenu;
      if (typeof subMenu !== 'undefined') {
        return subMenu.filter((x) => {
          if (typeof x.role === 'undefined') {
            return true;
          }
          return this.currentWorkspaceRole.includes(x.role);
        });
      }
      return [];
    },
    subMenuGroups() {
      return [...new Set(this.subMenu.map(x => x.group))];
    },
    activePage() {
      const subRoutes = this.$route.name.split('.');
      const parrentRoute = subRoutes[0];
      return this.pages.filter(x => x.routeName === parrentRoute)[0];
    },
  },
}
</script>

<style lang="scss" scoped>
.separator-blank {
  height: 16px;
}
.side-nav-sub-options {
  position: fixed;
  top: 64px;
  left: 64px;
  transition: all .2s ease-in-out;
  transform-origin: left;
  height: 100%;
  width: 216px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 90px;
  padding-bottom: 16px;
  &.expanded {
    left: 216px;
  }
  .sub-menu-group {
    .side-nav-option {
      border-radius: 4px;
      height: 30px;
      display: flex;
      align-items: center;
      .icon {
        margin: 12px;
      }
      .name {
        color: $gray2;
        font-size: 14px;
        line-height: 16px;
      }

      &:hover {
        background: $gray5;
        .name {
          color: $gray1;
        }
      }
      &.selected {
        background: $focus;
        .name {
          color: $primary;
        }
      }
    }
    .sub-menu-group-title {
      display: flex;
      align-items: center;
      height: 24px;
      padding-left: 8px;
      padding-right: 8px;
      .title {
        font-size: 10px;
        line-height: 12px;
        color: $gray3;
        text-transform: uppercase;
      }
    }
  }
}
.side-nav {
  box-shadow: 1px 1px 1px $gray5;
  z-index: 305;
  height: 100%;
  width: 216px;
  background: $white;
  position: fixed;
  transition: all .2s ease-in-out;
  transform-origin: left;
  overflow: hidden;
  &.expanded {
    width: 216px;
    .side-nav-options {
      .side-nav-options-list {
        .side-nav-option {
          .name {
            white-space: nowrap;
            display: block;
          }
        }
      }
    }
  }

  .side-nav-header {
    height: 64px;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 24px;
    .close {
      margin-left: auto;
    }
    .icon {
      display: none;
    }
  }

  .side-nav-footer {
    position: fixed;
    bottom: 0;
    height: 30px;
    padding-left: 1em;
  }

  .side-nav-options {
    height: 100%;
     &.sub-menu {
        border-right: 1px solid $gray5;
      }
    .side-nav-options-list {
      margin: 0;
      padding: 8px;
      .side-nav-option {
        border-radius: 4px;
        cursor: pointer;
        height: 48px;
        display: flex;
        align-items: center;
        .icon {
          margin: 12px;
        }
        .name {
          display: none;
          color: $gray2;
          font-size: 14px;
          line-height: 16px;
        }

        &:hover {
          background: $gray7;
          .name {
            color: $gray1;
          }
        }
        &.selected {
          background: $focus;
          .name {
            color: $primary;
          }
        }
      }
    }
  }
}
.side-nav {
  width: 64px;
  .side-nav-header {
    .close {
      display: none;
    }
    .logo {
      display: none;
    }
    .icon {
      display: block;
    }
  }
  &.expanded {
    .side-nav-header {
      .close {
        display: block;
      }
      .icon {
        display: none;
      }
      .logo {
        display: block;
      }
    }
  }
  .side-nav-options {
    @include mb-shadow(xl);
  }
}

@include mb-media(laptop) {
  .side-nav {
    &.expanded {
      .side-nav-header {
        .close {
          display: none;
        }
      }
    }
  }
}
</style>
