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

<style>
  .mb-fieldset{
    position: relative;
    appearance: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
</style>