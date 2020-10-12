<template>
<div class="mb-backdrop" :class="drawerVisibility ? 'mb-is-visible' : 'mb-is-hidden'">
  <article :id="name" :class="['mb-drawer', `mb-size-${size}`]">
      <header class="mb-drawer-header">
        <header class="mb-header-title-bar">
          <mb-button @click="drawerVisibility = false; $emit('on-close')"  :icon-before="{name: 'icon-close'}" priority="base"></mb-button>
        </header>
        <section class="mb-header-content" v-show="hasHeader">
          <slot name="header"></slot>
        </section>
      </header>
      <section class="mb-drawer-content"> 
          <slot name="content"></slot>
      </section>
      <footer class="mb-drawer-footer" v-show="hasFooter">
          <slot name="footer"></slot>
      </footer>
  </article>
</div>
</template>

<script>
export default {
  name: 'MbIcon',
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
    hasFooter:{
    type: Boolean,
    default: true,
    },
    hasHeader:{
    type: Boolean,
    default: true,
    },
    contentId:{
      type: [String, Number],
    },
    onRefresh:{
      type: Function,
      default: () => {},
    }
  },

  components: {
    MbButton:() => import('@/components/cells/MbButton'),
  },
  computed:{
  
    drawerVisibility:{
      get(){
        return this.isVisible;
      },
      set(value){
        this.isVisible = value;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_space.scss";
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
  z-index:2;
  &.mb-is-visible {
  transition: all $mb-speed-fast $mb-ease-outro;
  display:block
  }
  &.mb-is-hidden {
    transition: all $mb-speed-fast $mb-ease-outro;
    display:none;
    right: -100%;
  }
}

.mb-drawer{
  background-color:$mb-color-white;
  position: absolute;
  width: 75vw;
  height: 100vh;
  z-index:3;
  right: 0;
  .mb-drawer-header{
    overflow: hidden;
    border-bottom: $mb-border-thin solid $mb-color-border-light;
    .mb-header-content{
      padding: $mb-space-s $mb-space-m;
    }
    .mb-header-title-bar{
      display: flex;
      width: 100%;
      justify-content: space-between;
      justify-self: flex-start;
      padding: $mb-space-xxs;
    }
  }
  .mb-drawer-content{
    max-height: 100vh;
    overflow-y: scroll;
    padding: $mb-space-s $mb-space-m;
  }
  .mb-drawer-footer{
    position: fixed;
    padding: $mb-space-s $mb-space-m;
    bottom: 0;
    width: 100%;
    border-top: $mb-border-thin solid $mb-color-border-light;
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
</style> 
