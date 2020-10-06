<template>
  <section class="mb-organization">
    <mb-button type="dropdown" >
      <mb-avatar :avatar="currentWorkspace"></mb-avatar>
    </mb-button>
    <div class="mb-dropdown-container" :class="{expanded : 'mb-is-expanded'}">
      <mb-menu v-for="organization in organizations" type="organization" :key="organization._id" :avatar="organization" title="Organizations"></mb-menu>
      <mb-menu v-for="programs in programs" type="program" :key="program._id" :avatar="program" title="Programs"> </mb-menu>
    </div>
  </section>
</template> 

<script>
export default {
  components: {
    MbAvatar: () => import('../MbAvatar.vue'),
    MbMenu: () => import('../MbMenu.vue'),
  },
  props: {
    currentWorkspace: {
      type: [Array,Object],
      default: () => {},
    },
    organizations:{
      type: [Array,Object],
      default: () => {},
    },
    programs:{
      type: [Array,Object],
      default: () => {},
    }
  },
}
</script>

<style lang="scss" scoped>
 
</style>