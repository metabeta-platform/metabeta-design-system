<template>
  <component :is="elementType" v-if="isVisible">
    <slot name="title"></slot>
    <aside class="actions">
      <slot name="actions"></slot>
    </aside>
  </component>
</template>

<script>
export default {
  name: "MbEdgesLayout",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    side: {
      type: String,
      default: 'right',
    },
    elementType:{
      type: String,
      default: 'div',
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
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
