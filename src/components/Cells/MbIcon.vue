<template>
  <component :class="iconBefore ? 'float__left' : 'float__right'" :width="iconBefore.size || iconAfter.size" :is="iconBefore.name || iconAfter.name"></component>
</template>

<script>
export default {
  name: "MbIcon",
  iconBefore:{
    type: Object,
    default:{
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40,
      }
    }
  },
  iconAfter:{
    type: Object,
    default:{
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40,
      },
    }
  }
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