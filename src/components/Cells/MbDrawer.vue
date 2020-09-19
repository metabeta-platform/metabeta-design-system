<template>
  <section class="mb-transition-drawer" :class="drawerVisibility ? 'mb-state-visible' : 'mb-state-hidden'">
    <mb-header-actions is-visible alignment="reverse">
      <template slot="header-actions">
        <div class="button-group">
          <mb-button @click="drawerVisibility = false; $emit('on-close')" priority="base" :iconBefore="iconClose"></mb-button>
          <mb-button @click="$emit('on-prev')" priority="base" :iconBefore="iconLeftNav"></mb-button>
          <mb-button @click="$emit('on-next')" priority="base" :iconBefore="iconRightNav"></mb-button>
        </div>
        <slot name="drawer-header-actions"></slot>
      </template>
      <template slot="header-title">
        <slot name="drawer-title"></slot>
      </template>
    </mb-header-actions>
    <div class="main">
      <div class="drawer-content">
        <slot name="drawer-content"></slot>
      </div>
      <aside v-if="sideMenuHasContent" class="drawer-content-side">
        <slot name="drawer-content-side"></slot>
      </aside>
    </div>
    <mb-modal v-if="hasConfirmationModal"></mb-modal>
  </section>
</template>

<script>
export default {
  data:() => ({
    iconClose:{
      name: 'close',
    },
    iconLeftNav:{
      name: 'arrow-left',
    },
    iconRightNav:{
      name: 'arrow-right',m
    },
    drawerContent: null,
  }),
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    contentId:{
      type: [String, Number],
    },
    hasConfirmationModadl:{
      type: Boolean,
      default: false,
    },
    onRefresh:{
      type: Function,
      default: () => {},
    }
  },
  watch:{
    contentId(newValue){
      this.drawerContent = newValue;
      this.onRefresh(newValue);
    }
  },
  components: {
    MbModal: () => import('@/components/cells/MbModal'),
    MbButton:() => import('@/components/cells/MbButton'),
    MbHeaderActions:() => import('@/components/cells/MbHeaderActions')
  },
  computed:{
     sideMenuHasContent () {
      return !!this.$slots['drawer-content-side'] || !!this.$defaultSlots['drawer-content-side'];
    },
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
.mb-transition-drawer {
  position: fixed;
  top: 0;
  &.mb-state-visible {
    transition: all $mb-speed-slow $mb-ease-intro;
    right: 0;
  }
  &.mb-state-hidden {
    transition: all $mb-speed-fast $mb-ease-outro;
    right: -100%;
  }
}
.main{
  .drawer-content{
    flex-grow: 2;
  }
  .drawer-side-menu{
    flex-grow: 1;
  }
  .header-actions{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .button-group{
      justify-self: flex-start;
      button{
        margin-right: $mb-space-m;
      }
    }
  }
}
</style>