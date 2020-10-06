<template>
   <i :class="['mb-icon',`mb-color-${color}`,`mb-size-${size}`]"> <component :is="iconComponent"/> </i>
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
      type: String,
      default: 'm'
    },
    color: { //or should be overwritten by the parent, e.g. the states of the MbButton
      type: String,
      default: 'gray'
    },
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
  .mb-icon{
    &.mb-size{
      &-xs{

      }
      &-s{

      }
      &-m{
        width: 1rem;
        height: 1rem;
      }
      &-l{
        
      }
    }
    &.mb-color{
      &-gray{

      }
    }
 
  }
</style>