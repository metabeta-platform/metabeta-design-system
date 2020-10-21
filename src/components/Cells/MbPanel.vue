<template>
  <article :class="['mb-panel', `mb-type-${type}`]">
    <header class="mb-panel-header">
      <header class="mb-header-title-bar">
        <h3 v-if="title.length > 0">{{title}}</h3>
      </header>
      <section class="mb-header-content">
        <slot name="header"></slot>
      </section>
    </header>
    <section class="mb-panel-content">
      <slot name="content"></slot>
    </section>
    <footer class="mb-panel-footer">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>
 
<script>
export default {
  name: "MbPanel",
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    hasHeader: {
      type: Boolean,
      default: true,
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    hasContent () {
      return (!!this.$slots['content'] || !!this.$defaultSlots['content']);
    },
    hasHeaderSlot () {
      return (!!this.$slots['header'] || !!this.$defaultSlots['header']) && this.hasHeader;
    },
    hasFooterSlot () {
      return (!!this.$slots['footer'] || !!this.$defaultSlots['footer']) && this.hasFooter;
    },
  },
  created () {
    console.log(this);
  }
};

</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_color.scss";
.mb-panel {
  .display-none {
    display: none;
  }
  &.mb-type-base {
    background-color: $mb-color-transparent;
  }
  &.mb-type-card {
    background-color: $mb-color-white;
    @include mb-border-radius(m);
    border: $mb-border-thin solid transparent;
  }
  .mb-panel {
    &-header {
      .mb-header {
        &-title-bar {
          h3 {
            padding: $mb-space-s $mb-space-m;
            margin: 0;
          }
        }
        &-content {
          padding: $mb-space-s $mb-space-m;
        }
      }
    }
    &-content {
      padding: $mb-space-s $mb-space-m;
    }
    &-footer {
      padding: $mb-space-s $mb-space-m;
    }
  }
}
</style>
