<template>
  <div class="mb-modal" :class="[dialogVisibility ? 'mb-is-visible' : 'mb-is-hidden']" >
    <article :class="['mb-dialog', `mb-size-${size}`]" >
      <nav class="mb-dialog-title">
        <slot name="title"></slot>
        <mb-button @click="dialogVisibility = false; $emit('on-close')" :icon-before="{name: 'icon-close'}" ></mb-button>
      </nav>
      <header class="mb-dialog-header" v-if="hasHeader">
        <slot name="header"></slot>
      </header>
      <section class="mb-dialog-content" v-if="hasContent">
        <slot name="content"> </slot>
      </section>
      <footer class="mb-dialog-footer" v-if="hasFooter">
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
.mb-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color: rgba($mb-color-black, $mb-opacity-l);
  overflow: hidden;
  transition: none;
  &.mb-is-visible {
    display: flex;
    z-index: 9999;
  }
  &.mb-is-hidden {
    display: none;
  }
  .mb-dialog {
    position: absolute; 
    top: 50vh;
    left: 50vw;
    transform: translate(-50%,-70%);
    background-color: $mb-color-white;
    @include mb-border-radius(l);
    border: $mb-border-thin solid transparent;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    .mb-dialog {
      max-width: 95vw;
      &-title{
        padding: $mb-space-s $mb-space-xl $mb-space-s $mb-space-m;
        > h1, > h2, >h3, >h4, >h5, >h6, >p {
          margin: 0 $mb-space-m 0 0;
        }
        .mb-button{
          position: absolute;
          right: $mb-space-xs;
          top: $mb-space-xs;
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
        width: 95vw;
      }
      &-l {
        width: $mb-space-m * 64;
      }
      &-m {
        width: $mb-space-m * 48;
      }
      &-s {
        width: $mb-space-m * 24;
      }
    }
  }
}
</style>