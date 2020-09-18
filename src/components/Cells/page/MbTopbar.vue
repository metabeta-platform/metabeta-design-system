<template>
  <header class="mb-topbar" :class="{'active': active}">
    <mb-edges-layout> 
      <template slot="title">
        <mb-button :isBefore="burgerButton"></mb-button>
        <!-- we need hamburger icon here unless I do it myself with animations which you may or may not like :))))) -->
        <h1>{{title}}</h1>
      </template>
      <template slot="actions">
        <mb-organization></mb-organization>
        <mb-user></mb-user>
      </template>
    </mb-edges-layout>
    <slot name="mb-header-extra">
      
    </slot>
  </header>
</template>

<script>
export default {
  data:()=>({
    burgerButton:{
      name: 'hamburger',
    }
  }),
  components: {
    MbEdgesLayout: () => import('../MbEdgesLayout'),
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="scss" scoped>
  .mb-topbar{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    
  }
</style>