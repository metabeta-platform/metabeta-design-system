<template>
  <header class="header" :class="alignment === '' || alignment === 'default' ? 'default' : 'reverse' " v-if="isVisible">
    <section class="title">
      <slot name="header-title"></slot>
    </section>
    <aside class="actions">
      <slot name="header-actions">

      </slot>
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
    alignment:{
      type: String,
      default: 'default',
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
  .header{
  display: flex;
  &.default{
    flex-direction: column;
  }
  &.reverse{
    flex-direction: column-reverse;
  }
  .actions{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &+div,
    &+button{
      margin: 0 $mb-space-s;
    }
  }
  }
</style>
