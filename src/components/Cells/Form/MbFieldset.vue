<template>
  <fieldset
    :class="flow === 'horizontal' ? 'mb-flow-horizontal' : 'mb-flow-vertical'"
    class="mb-fieldset"
  >
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: "MbFieldset",
  props: {
    flow: {
      type: String,
      default: 'horizontal',
    }
  },
}
</script>

<style lang="scss">
@import "../../../assets/styles/partials/_mb_space.scss";
.mb-fieldset {
  position: relative;
  appearance: none;
  box-sizing: border-box;
  &.mb-flow-horizontal {
    display: flex;
    align-items: center;
  }
  &.mb-flow-vertical {
    display: block;
  }
}
</style>