<template>
  <section class="mb-tabs">
    <ul
      class="mb-tab-options"
      v-for="(tab,i) in tabs"
    >
      <li @click="tabChange(i)">tab.name</li>
    </ul>
    <slot />
  </section>
</template>

<script>
export default {
  name: "MbTabGroup",
  props: {
    activeIndex: {
      type: [Number, String],
      default: 0,
    }
  },
  methods: {
    tabChange (i) {
      this.activeIndex = i;
      this.$emit('tab-changed');
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
.mb-tabs {
  width: 100%;
  .mb-tab-options {
    display: flex;
    margin: 0 $mb-space-s;
  }
  &.mb-tab {
    display: none;
    &.active {
      display: block;
    }
  }
}
</style>