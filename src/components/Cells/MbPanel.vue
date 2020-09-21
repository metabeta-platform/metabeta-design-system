<template>
  <section :class="type">
    <mb-header-actions :is-visible="$slots.headerActions || $scopedSlots.headerActions">
      <template name="header-title">
        <slot name="header-title"></slot>
      </template>
      <template name="header-actions">
        <slot name="header-actions"></slot>
      </template>
    </mb-header-actions>
    <slot name="content"></slot>
    <mb-footer-actions :is-visible="$slots.footerActions || $scopedSlots.footerActions">
      <template name="footer-actions">
        <slot name="header-actions"></slot>
      </template>
    </mb-footer-actions>
  </section>
</template>
 
<script>

export default {
  name: "MbPanel",
  components: {
    MbHeaderActions: () => import('@/components/cells/MbHeaderActions'),
    MbFooterActions: () => import('@/components/cells/MbFooterActions'),
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
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_color.scss";
  .base{
    border: none;
    background-color: $mb-color-white;
    @include mb-border-radius(m);
    padding: $mb-space-m;
  }
</style>
