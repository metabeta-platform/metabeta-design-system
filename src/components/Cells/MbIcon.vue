<template>
    <component :is="iconComponent"/>
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
    }
  },
  computed: {
    iconComponent() {
      console.log(icons);
      return icons[this.name]
    },
  },
}
</script>

<style lang="scss" scoped>
  .float{
    &__right{
      float: right;
    }
    &__left{
      float: left;
    }
  }
</style>