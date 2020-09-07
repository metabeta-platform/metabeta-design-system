<template>
  <section>
    <div v-if="hasLeftBar">
      <slot name="left-bar"></slot>
    </div>
    <div v-if="hasTitleBar">
      <slot name="title-bar"></slot>
    </div>
    <div v-if="hasSectionBar">
      <slot name="section-bar">
    </div>
     <main v-if="isLoading">
        <slot name="main-bar"></slot>
     </main>
     <main v-else-if="!isLoading">
        <router-view :key="$route.fullPath"/>
     </main>
  </section>
</template>

<script>

export default {
  props: {
    hasLeftBar: {
      type: Boolean,
      default: true,
    },
    hasTopBar: {
      type: Boolean,
      default: true,
    },
    hasTitleBar: {
      type: Boolean,
      default: true,
    },
    hasSectionBar: {
      type: Boolean,
      default: true,
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
