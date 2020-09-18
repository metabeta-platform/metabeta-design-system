<template>
  <div class="tooltip" :class="[isVisible ? '_visible' : '', position]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MbTooltip",
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
  .tooltip{
    position: absolute;
    visibility: hidden;
    &_visible{
      visibility: visible;
    }
    &.top{
      top: 0;
    }
    &.left{
      left: 0;
    }
    &.right{
      right: 0;
    }
    &.bottom{
      bottom: 0;
    }
  }
</style>
