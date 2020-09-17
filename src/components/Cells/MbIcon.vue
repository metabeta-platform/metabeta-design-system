<template>
  <div :class="iconBefore ? 'float__left' : 'float__right'" :width="iconBefore.size || iconAfter.size" :is="iconBefore.name || iconAfter.name" v-html="svg"></div>
</template>

<script>
export default {
  name: "MbIcon",
  data: () => ({
    svg: '',
  }),
  iconBefore:{
    type: Object,
    default:{
      name: {
        type: String,
        default: '',
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
  },
  created(){
    this.svg = require(`../../assets/icons/${this.iconBefore.name || this.iconAfter.name}.svg`);
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