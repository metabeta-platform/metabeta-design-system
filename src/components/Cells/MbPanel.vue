<template>
  <article :class="['mb-panel', `mb-type-${type}`]">
    <nav class="mb-panel-title" v-if="hasTitle">
      <slot name="title"></slot>
    </nav>
    <header class="mb-panel-header" v-if="hasHeader">
      <slot name="header"></slot>
    </header>
    <section class="mb-panel-content" v-if="hasContent">
      <slot name="content"></slot>
    </section>
    <footer class="mb-panel-footer" v-if="hasFooter">
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
    }
  },
  computed: {
    hasTitle () {
      return (!!this.$slots['title']);
    },
    hasHeader () {
      return !!this.$slots['header'];
    },
    hasContent () {
      return (!!this.$slots['content']);
    },
    hasFooter () {
      return !!this.$slots['footer'];
    },
  },
};

</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_color.scss";
.mb-panel {
  margin-bottom: $mb-space-m;
  &.mb-type-base {
    background-color: $mb-color-transparent;
  }
  &.mb-type-card {
    background-color: $mb-color-white;
    @include mb-border-radius(l);
    border: $mb-border-thin solid transparent;
    @include mb-shadow(2);
  }
  &.mb-type-well {
    background-color: $mb-color-gray-100;
    @include mb-border-radius(l);
    border: $mb-border-thin solid transparent;
  }
  .mb-panel {
    &-title{
      padding: $mb-space-s $mb-space-m;
      > h1,
      > h2,
      > h3,
      > h4,
      > h5,
      > h6,
      > p {
        margin: 0 $mb-space-m 0 0;
      }
    }
    &-header {
      padding: $mb-space-s $mb-space-m;
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
