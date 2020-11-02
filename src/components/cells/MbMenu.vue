<template>
  <nav :class="['mb-menu', `mb-size-${size}`]">
    <section
      v-if="sections"
      v-for="(section,i) in sections"
      :class="`nav-section-${i}`"
    >
      <h5
        v-if="title"
        class="mb-menu-title"
      >{{title}}</h5>
      <ul class="mb-menu-section">
        <mb-menu-item
          v-for="item in section.items"
          :key="item._id"
          :content="item.content"
          :is-selected="item.selected"
          :is-disabled="item.isDisabled"
          :href="item.href"
          @click="navigateIfRouterLink(item.href)"
        >
          <template slot="content">
            <slot :name="item._id"> </slot>
          </template>
        </mb-menu-item>
      </ul>
    </section>
    <h5
      v-if="title && !sections"
      class="mb-menu-title"
    >{{title}}</h5>
    <ul
      v-if="!sections"
      class="mb-menu-section"
    >
      <mb-menu-item
        v-for="item in items"
        :key="item._id"
        :content="item.content"
        :is-selected="item.selected"
        :is-disabled="item.isDisabled"
        :href="item.href"
        @click="navigateIfRouterLink(item.href)"
      >
        <template slot="content">
          <slot :name="item._id"> </slot>
        </template>
      </mb-menu-item>
    </ul>
  </nav>
</template>
<!-- Icon example -->
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
    items: {
      type: [Array, Object],
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    navigateIfRouterLink (anchor) {
      !anchor.includes('#') ? this.$router.push({ name: anchor }) : null;
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