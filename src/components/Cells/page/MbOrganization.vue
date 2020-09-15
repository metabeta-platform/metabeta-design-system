<template>
  <section class="mb-organization">
    <mb-avatar type="organization" :avatar="organizations" title="Organizations"></mb-avatar>
    <mb-avatar type="organization" :avatar="organizations" title="Programs"></mb-avatar>
  </section>
</template> 

<script>
export default {
  components: {
    MbAvatar: () => import('../MbAvatar'),
  },
}
</script>

<style>

</style>