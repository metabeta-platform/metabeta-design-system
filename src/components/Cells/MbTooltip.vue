<template>
  <div class="tooltip" :class="[isVisible : '_visible', position]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
    },
  },
};
</script>

<style lang="scss">

</style>
