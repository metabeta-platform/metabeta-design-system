<template>
<mb-fieldset>
  <mb-icon @click="emit('icon-clicked')" class="input-icon" :iconBefore="iconBefore" :iconAfter="iconBefore" v-if="iconBefore.name.length > 0"></mb-icon>
  <input class="mb-input" :class="{'has-icon' : iconName.length > 0}" :type="type" :name="name" v-model="value">
  <mb-icon @click="emit('icon-clicked')" class="input-icon" :iconBefore="iconBefore" :iconAfter="iconAfter" v-if="iconAfter.name.length > 0"></mb-icon>
</mb-fieldset>
</template>

<script>
export default {
  name: "MbInput",
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value:{
      type: [String, Number],
      default: null,
    },
    iconAfter: {
      type: Object,
      default: () => {},
    },
    iconBefore:{
      type: Object,
      default: () => {},
    }
  },
  components: {
    MbIcon: () => import('./MbIcon'),
    MbFieldSet: () => import('./MbFieldset'),
  },
  watch: {
    value(newValue) {
      this.$emit('changed', newValue);
    },
  },
}
</script>

<style lang="scss">
.mb-input{
  &+.has-icon{
    padding-right: 50px;
    &.input-icon{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
  }
}
</style>