<template>
  <div
    class="mb-drawer-wrapper"
    :class="drawerVisibility ? 'mb-is-visible' : 'mb-is-hidden'"
  >
    <article
      :id="name"
      :class="['mb-drawer', `mb-size-${size}`]"
    >
      <nav class="mb-drawer-title">
        <mb-button
          @click="drawerVisibility = false; $emit('on-close')"
          :icon-before="{name: 'icon-close'}"
          priority="base"
        ></mb-button>
        <slot name="title"></slot>
      </nav>
      <header 
        class="mb-drawer-header"
        v-if="hasHeader"
        >
        <slot name="header"></slot>
      </header>
      <section
        class="mb-drawer-content"
        v-if="hasContent"
      >
        <slot name="content"></slot>
      </section>
      <footer
        class="mb-drawer-footer"
        v-if="hasFooter"
      >
        <slot name="footer"></slot>
      </footer>
    </article>
    <div class="mb-drawer-background"></div>
  </div>
</template>

<script>
export default {
  name: 'MbIcon',
  data: () => ({
    drawerVisibility: false,
  }),
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'l',
    },
    name: {
      type: String,
      default: '',
    },
    contentId: {
      type: [String, Number],
    },
    onRefresh: {
      type: Function,
      default: () => { },
    }
  },
  methods: {
    keyUp (e) {
      e.key == "escape" ? this.isVisible = true : this.isVisible = false;
    }
  },
  watch: {
    isVisible (val) {
      if (val) {
        document.body.style.setProperty('overflow', 'hidden');
        this.drawerVisibility = true;
      }
      else {
        document.body.style.removeProperty('overflow', 'hidden');
        this.drawerVisibility = false;
      }
    },
    drawerVisibility (val) {
      this.$emit('update:isVisible', this.drawerVisibility);
    }
  },
  computed: {
    hasTitle () {
      return !!this.$slots['title'];
    },
    hasContent () {
      return !!this.$slots['content'];
    },
    hasHeader () {
      return !!this.$slots['header'];
    },
    hasFooter () {
      return !!this.$slots['footer'];
    },

  },
  components: {
    MbButton: () => import('@/components/cells/MbButton'),
  },
  created () {
    document.addEventListener('keyup', this.keyUp);
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyUp);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_space.scss";
.mb-drawer-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: 2;
  &.mb-is-visible {
    visibility: visible;
    .mb-drawer-background {
      transition: opacity $mb-speed-faster $mb-ease-intro;
      opacity: 1;
    }
    .mb-drawer {
      transition: all $mb-speed-fast $mb-ease-intro;
      right: 0;
    }
  }
  &.mb-is-hidden {
    visibility: hidden;
    .mb-drawer-background {
      opacity: 0;
      transition: opacity $mb-speed-faster $mb-ease-outro;
    }
    .mb-drawer {
      right: -100vw;
      transition: all $mb-speed-fast $mb-ease-outro;
    }
  }
  .mb-drawer-background {
    background-color: rgba($mb-color-black, $mb-opacity-m);
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
  .mb-drawer {
    background-color: $mb-color-white;
    position: absolute;
    width: 75vw;
    height: 100vh;
    z-index: 3;
    .mb-drawer-title{
      display: flex;
      width: 100%;
      padding: $mb-space-xxs;
      vertical-align: middle;
    }
    .mb-drawer-header{
      overflow: hidden;
      border-bottom: $mb-border-thin solid $mb-color-border-light;
      padding: $mb-space-s $mb-space-m;
    }
    .mb-drawer-content {
      max-height: 90vh;
      overflow-y: scroll;
      padding: $mb-space-s $mb-space-m;
    }
    .mb-drawer-footer {
      position: fixed;
      padding: $mb-space-s $mb-space-m;
      bottom: 0;
      width: 100%;
      border-top: $mb-border-thin solid $mb-color-border-light;
    }
    &.mb-size {
      &-xl {
        @include mb-shadow();
        width: 95vw;
      }
      &-l {
        @include mb-shadow();
        width: 66.66vw;
      }
      &-m {
        @include mb-shadow();
        width: 50vw;
      }
      &-s {
        @include mb-shadow();
        width: 33.33vw;
      }
    }
  }
}
</style> 
