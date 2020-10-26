<template>
  <nav :class="['mb-menu', `mb-size-${size}`, `mb-flow-${flow}`]">
    <h5 class="mb-menu-title">{{title}}</h5>
    <ul>
      <mb-menu-item
        v-for="item in items"
        :key="item._id"
        @click="navigateIfRouterLink"
        :href="item.href"
        :menuItemContent="item.menuItemContent"
        :isDisabled="item.isDisabled"
      >
      </mb-menu-item>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MbMenu',
  props: {
    title: {
      type: [String, Number],
    },
    size: {
      type: String,
      default: 'm',
    },
    flow: {
      type: String,
      default: 'vertical',
    },
    items: {
      type: [Array, Object],
    }
  },
  methods: {
    navigateIfRouterLink (anchor) {
      !anchor.includes('#') ? this.$router.push({ name: item.href }) : null;
    }
  },
  components: {
    MbMenuItem: () => import('@/components/cells/MbMenuItem'),
  },
}
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-menu {
  & + .mb-menu {
    padding-top: $mb-space-xs;
    margin-top: $mb-space-xs;
    border-top: $mb-border-thin solid $mb-color-border-light;
  }
  &-title {
    padding: 0 $mb-space-xs;
    @include mb-heading(xs);
    color: $mb-color-text-light;
  }
  ul {
    li {
      margin: 0 0 1px 0;
      padding: 0;
    }
  }
  &.mb-flow {
    &-horizontal {
      ul {
        padding-bottom: $mb-space-xs;
      }
      li {
        display: inline-block;
        margin-right: $mb-space-xs;
      }
    }
    &-vertical {
      li {
        display: flex;
      }
    }
  }
  &.mb-size {
    &-m {
      .mb-menu-title {
        @include mb-heading(xs);
        padding: $mb-space-xxs $mb-space-xs;
        margin: 0;
        color: $mb-color-text-light;
      }
    }
    &-l {
      .mb-menu-title {
        @include mb-heading(xs);
        padding: $mb-space-xs $mb-space-s;
        margin: 0;
        color: $mb-color-text-light;
      }
    }
  }
}
</style>