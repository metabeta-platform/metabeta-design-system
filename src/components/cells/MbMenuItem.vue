<template>
  <li :class="['mb-menu-item', menuItemDisabled ? 'mb-is-disabled' : null, menuItemSelected ? 'mb-is-selected' : null]">
    <mb-icon
      v-if="icon"
      :name="icon.name"
      :size="icon.size"
    ></mb-icon>
    <a
      :href="href"
      @click="$emit('click', $event)"
    >
      {{menuItemContent}}
    </a>
  </li>
</template>

<script>
export default {
  name: 'MbMenuItem',
  props: {
    menuItemContent: {
      type: String,
      default: '',
    },
    icon: {
      type: Object,
      default: () => { },
    },
    href: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    menuItemDisabled: {
      get () {
        return this.isDisabled;
      },
      set (value) {
        this.isDisabled = value;
      }
    },
    menuItemSelected: {
      get () {
        return this.isSelected;
      },
      set (value) {
        this.isSelected = value;
      }
    }
  },
  components: {
    MbIcon: () => import('./MbIcon'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-menu-item {
  a {
    width: 100%;
    padding: $mb-space-xs;
    @include mb-border-radius(s);
    color: $mb-color-text-medium;
    outline: none;
    @include mb-font(body, s, normal, normal);
    @include mb-wrap-text(false);
    &:hover {
      color: $mb-color-headings;
      background-color: $mb-color-gray-highlight;
    }
    &:active {
      background-color: $mb-color-primary-highlight;
      color: $mb-color-primary;
    }
  }
  &.mb-is-disabled {
    a {
      cursor: not-allowed;
      background-color: fade-out(
        desaturate($mb-color-gray, $mb-opacity-m),
        $mb-opacity-xxl
      );
      color: fade-out($mb-color-text-medium, $mb-opacity-l);
    }
  }
  &.mb-is-selected {
    a {
      background-color: $mb-color-primary-highlight;
      color: $mb-color-primary;
    }
  }
}
.mb-menu {
  &.mb-size {
    &-m {
      .mb-menu-item {
        a {
          @include mb-font(body, s, normal, normal);
        }
      }
    }
    &-l {
      .mb-menu-item {
        a {
          @include mb-font(body, m, normal, normal);
          padding: $mb-space-xs $mb-space-s;
        }
      }
    }
  }
}
.mb-is-colllapsed {
  .mb-menu {
    .mb-menu-item {
    }
  }
}
</style>