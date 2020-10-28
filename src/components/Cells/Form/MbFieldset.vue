<template>
  <fieldset
    :class="flow === 'horizontal' ? 'mb-flow-horizontal' : 'mb-flow-vertical'"
    class="mb-fieldset"
  >
    <div
      v-if="hasHeader"
      class="mb-fieldset legend"
    >
      <slot name="legend"> </slot>
    </div>
    <div
      v-if="hasContent"
      class="mb-fieldset-content"
    >
      <slot name="content"></slot>
    </div>
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
  computed: {
    hasContent () {
      return !!this.$slots['content'] || !!this.$defaultSlots['content'];
    },
    hasHeader () {
      return !!this.$slots['legend'] || !!this.$defaultSlots['legend'];
    },
  }
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