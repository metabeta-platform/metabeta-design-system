<template>
  <header v-if="isVisible">
    <slot name="header-title"></slot>
    <aside class="actions">
      <slot name="header-actions"></slot>
    </aside>
  </header>
</template>

<script>
export default {
  name: "MbHeaderActions",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    side: {
      type: String,
      default: 'right',
    },
  },
};
</script>

<style lang="scss">
  .actions{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &+div,
    &+button{
      margin: 0 $mb-space-s;
    }
  }
</style>
