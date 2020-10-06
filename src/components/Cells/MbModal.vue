<template>
  <div class="mb-backdrop" :class="[modalVisibility ? 'mb-is-visible' : 'mb-is-hidden']">
    <article :id="name" :class="['mb-modal', `mb-size-${size}`]">
      <header class="mb-modal-header">
        <header class="mb-header-title-bar">
          <h3>{{title}}</h3>
          <mb-button class="mb-header-close" @click="modalVisibility = false; $emit('on-close')" priority="base" label="close"></mb-button>
        </header>
        <section class="mb-header-content" v-show="hasHeader">
          <slot name="header"></slot>
        </section>
      </header>
      <section class="mb-modal-content">
        <slot name="content"> </slot>
      </section>
      <footer class="mb-modal-footer" v-show="hasFooter">
        <slot name="footer"></slot>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'MbModal',
  props: {
    size: {
      type: String,
      default: 'm',
    },
    name:{
      type: String,
      default: '',
    },
    title:{
      type: String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    hasHeader:{
      type: Boolean,
      default: true,
    },
    hasFooter:{
      type: Boolean,
      default: true,
    },
  },
  computed: {
    modalVisibility: {
      get(){
        console.log(this.isVisible);
        return this.isVisible;
      },
      set(value){
        this.isVisible = value;
      }
    }
  },
  components: {
    MbButton : () => import('@/components/cells/MbButton'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-backdrop{
  position : fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  background-color:rgba($mb-color-black, $mb-opacity-m);
  overflow: hidden;
  &.mb-is-visible{
    display: block;
    transition: $mb-speed-slow $mb-ease-intro;
    z-index: 9999;
  }
  &.mb-is-hidden{
    display: none;
    transition: $mb-speed-fast $mb-ease-intro;
  }
  .mb-modal{
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: $mb-color-white;
    @include mb-border-radius(m);
    border: $mb-border-thin solid transparent;
    .mb-modal{
      &-header{
        .mb-header{
          &-title-bar{
            padding: $mb-space-s $mb-space-m;
            h3{
              display:inline-block;
              margin:0
            }
            .mb-header-close{
              float:right;
              margin-top: -$mb-space-xs;
              margin-right: -$mb-space-s;
            }
          }
          &-content{
              padding: $mb-space-s $mb-space-m;
            }
          }
        }
      &-content{
        padding: $mb-space-s $mb-space-m;
      }

      &-footer{
        padding: $mb-space-s $mb-space-m;
      }
    
    }
    &.mb-size{
      &-xl{
        @include mb-shadow();
        width: 95vw;
      }
      &-l{
        @include mb-shadow();
        width: 66.66vw;
      }
      &-m{
        @include mb-shadow();
        width: 50vw;
      }
      &-s{
        @include mb-shadow();
        width: 33.33vw;
      }
    }
  }
}
</style>