<template>
  <fieldset
    :class="flow === 'horizontal' ? 'horizontal' : 'vertical'"
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
  margin-bottom: $mb-space-xs;
  box-sizing: border-box;
  &.horizontal {
    display: flex;
    align-items: center;
  }
  &.vertical {
    display: block;
  }
}
</style>