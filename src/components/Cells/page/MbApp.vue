<template>
  <main :class="expanded ? 'is-expended' : 'is-collapsed'">
    <slot name="left-bar"></slot>
    <slot name="title-bar"></slot>
    <slot name="content-bar"></slot>
    <div v-if="isLoading">
      <mb-loader></mb-loader>
    </div>
    <div v-else>
      <slot name="content-bar">
        <router-view :key="$route.fullPath"/>
      </slot>
    </div>
  </main>
</template>

<script>

export default {
  name: "MbApp",
  props: {
    isLoading:{
      type: Boolean,
      default: true,
    },
    expanded:{
      type: Boolean,
    }
  },
};

</script>

<style lang="scss">

</style>
