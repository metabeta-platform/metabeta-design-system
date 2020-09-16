<template>
  <footer v-if="isVisible">
    <slot name="footer-title"></slot>
    <aside class="actions">
      <slot name="footer-actions"></slot>
    </aside>
  </footer>
</template>

<script>
export default {
  name: "MbFooterActions",
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
