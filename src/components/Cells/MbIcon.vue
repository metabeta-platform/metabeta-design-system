<template>
  <i :class="['mb-icon', `mb-size-${size}` ]">
  <component
    :height="size"
    :width="size"
    :is="iconComponent"
  />
  </i>
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
  stroke:transparent;
  fill: transparent;
  #svg-stroke, .svg-stroke{
      stroke: $mb-color-gray;
  }
  #svg-fill, .svg-fill {
      fill: $mb-color-gray;
  } 
}
</style>