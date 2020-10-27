<template>
  <div
    class="mb-backdrop"
    :class="[dialogVisibility ? 'mb-is-visible' : 'mb-is-hidden']"
  >
    <article
      :class="['mb-dialog', `mb-size-${size}`]"
    >
      <nav class="mb-dialog-title">
          <slot name="title"></slot>
          <mb-button
            class="mb-dialog-close-button"
            @click="dialogVisibility = false; $emit('on-close')"
            priority="base"
            :icon-before="{name: 'icon-close'}"
          ></mb-button>
      </nav>
      <header 
         class="mb-dialog-header"
          v-if="hasHeader"
      >
          <slot name="header"></slot>
      </header>
      <section
        class="mb-dialog-content"
        v-if="hasContent"
      >
        <slot name="content"> </slot>
      </section>
      <footer
        class="mb-dialog-footer"
        v-if="hasFooter"
      >
        <slot name="footer"></slot>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'MbDialog',
  data: () => ({
    dialogVisibility: false,
  }),
  props: {
    size: {
      type: String,
      default: 'm',
    },
    isVisible: {
      type: Boolean,
      default: false,
    },

  },
  computed: {
    hasTitle () {
      return !!this.$slots['title'];
    },
    hasHeader () {
      return !!this.$slots['header'];
    },
    hasContent () {
      return !!this.$slots['content'];
    },
    hasFooter () {
      return !!this.$slots['footer'];
    },
   
  },
  watch: {
    isVisible (val) {
      if (val) {
        document.body.style.setProperty('overflow', 'hidden');
        this.dialogVisibility = true;
      }
      else {
        document.body.style.removeProperty('overflow', 'hidden');
        this.dialogVisibility = false;
      }
    },
    modalVisibility (val) {
      this.$emit('update:isVisible', this.dialogVisibility);
    }
  },
  methods: {
    keyUp (e) {
      e.key == "escape" ? this.isVisible = true : this.isVisible = false;
    }
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
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color: rgba($mb-color-black, $mb-opacity-m);
  overflow: hidden;
  &.mb-is-visible {
    display: block;
    transition: $mb-speed-slow $mb-ease-intro;
    z-index: 9999;
  }
  &.mb-is-hidden {
    display: none;
    transition: $mb-speed-fast $mb-ease-intro;
  }
  .mb-dialog {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: $mb-color-white;
    @include mb-border-radius(m);
    border: $mb-border-thin solid transparent;
    .mb-dialog {
      &-title{
        padding: $mb-space-s $mb-space-m;
        h3 {
          display: inline-block;
          margin: 0;
        }
        .mb-dialog-close-button{
          float: right;
          margin-top: -$mb-space-xs;
          margin-right: -$mb-space-m;
          .mb-button {
            margin-right: 0;
          }
        }
      }
      &-header{
        padding: $mb-space-s $mb-space-m;
      }
      &-content {
        padding: $mb-space-s $mb-space-m;
      }

      &-footer {
        padding: $mb-space-s $mb-space-m;
      }
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