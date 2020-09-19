<template>
  <section class="mb-modal" :class="[modalVisibility ? 'is-visible' : 'is-hidden', size]">
    <div class="content">
      <mb-header-actions is-visible>
        <template slot="header-title">
          <h3>{{title}}</h3>
          <mb-button @click="modalVisibility = false; $emit('on-close')" priority="base" label="close" :iconBefore="iconClose"></mb-button>
        </template>
      </mb-header-actions>
      <slot name="header"></slot>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "MbModal",
  data:()=>({
    iconClose: {
      name: 'close'
    }
  }),
  props: {
    size: {
      type: String,
      default: 'l',
    },
    title:{
      type: String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
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
    MbHeaderActions : () => import('@/components/cells/MbHeaderActions'),
    MbButton : () => import('@/components/cells/MbButton'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_color.scss";
  .mb-modal{
    position : fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    @include mb-elevation(5);
    &.is-visible{
      display: block;
     transition: $mb-speed-slow $mb-ease-intro;
    }
    &.is-hidden{
      display: none;
      transition: $mb-speed-fast $mb-ease-intro;
    }
    .content{
      position: absolute;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mb-color-white;
      &.xl{
        @include mb-border-radius(xxl);
        @include mb-shadow();
        width: 75vw;
      }
      &.l{
        @include mb-border-radius(xl);
        @include mb-shadow();
        width: 60vw;
      }
      &.m{
        @include mb-border-radius(l);
        @include mb-shadow();
        width: 50vw;
      }
      &.s{
        @include mb-border-radius(m);
        @include mb-shadow();
        width: 35vw;
      }
    }
  }
</style>