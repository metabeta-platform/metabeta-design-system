<template>
  <component
    :class="['mb-icon', type]"
    :height="size"
    :width="size"
    :is="iconComponent"
  />
</template>

<script>
const icons = {}
const requireComponents = require.context('../../assets/icons/', false, /.svg$/)
requireComponents.keys().forEach(fileName => {
  const iconName = fileName.replace(/(\.\/|\.svg)/g, '');
  const componentConfig = requireComponents(fileName)
  icons[iconName] = componentConfig.default || componentConfig
});

export default {
  name: "MbIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 18,
    },
    type: {
      type: String,
      default: 'base',
    }
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_color.scss";
.mb-icon {
  stroke: $mb-color-black;
  fill: $mb-color-transparent;
  &.base {
    stroke: $mb-color-black;
    fill: $mb-color-transparent;
  }
  &.primary {
    stroke: $mb-color-white;
    fill: $mb-color-transparent;
  }
}
</style>