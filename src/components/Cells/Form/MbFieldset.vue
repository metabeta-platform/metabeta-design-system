<template>
  <fieldset class="mb-fieldset">
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: "MbFieldset"
}
</script>

<style lang="scss">
  .mb-fieldset{
    position: relative;
    appearance: none;
    margin-bottom: $mb-space-xs;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
</style>