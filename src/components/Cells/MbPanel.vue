<template>
  <section :class="{type}">
    <mb-header-actions :is-visible="$slots.headerActions.length > 0 || $scopedSlots.headerActions.length > 0">
      <template name="header-title">
        <slot name="header-title">Panel title </slot>
      </template>
      <template name="header-actions">
        <slot name="header-actions"></slot>
      </template>
    </mb-header-actions>
    <slot name="content"></slot>
    <mb-footer-actions :is-visible="$slots.footerActions.length > 0 || $scopedSlots.footerActions.length > 0">
      <template name="footer-actions">
        <slot name="header-actions"></slot>
      </template>
    </mb-footer-actions>
  </section>
</template>

<script>
import MbHeaderActions from './MbHeaderActions.vue';

export default {
  name: "MbPanel",
  components: {
    MbHeaderActions,
  },
  props: {
    type: {
      type: String,
      default: 'base',
    },
  },
};

</script>

<style lang="scss">

</style>
