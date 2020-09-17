<template>
<keep-alive>
  <component
    :type="type != 'link' ? type : null"
    :is="componentType" 
    @click="$emit('click', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    :href="type === 'link' ? href : false"
    :class="['mb-button', `mb-type-${type}`, `mb-priority-${priority}`,`mb-color-${color}`, `mb-size-${size}`]"
    :disabled="isDisabled">
      <i v-if="!responsiveLabelOnly && isBefore" :name="type === 'action' ? iconBefore.name = 'dropdown' : iconBefore.name"></i>
      <span class="mb-button-label" v-if="!responsiveIconOnly">{{label}}</span>
      <i v-if="!responsiveLabelOnly && isAfter" :name="type === 'action' ? iconBefore.name = 'dropdown' : iconBefore.name"></i>
  </component>
</keep-alive>
</template>

<script>
export default {
  name: "MbButton",
  data:() => ({  
    responsiveLabelOnly: '',
    responsiveIconOnly: '',
  }),
  props: {
    type: {
      type: String,
      default: 'button',
    },
    href:{
      type: String,
      default: '/',
      required: false,
    },
    isBefore:{
      type: Object,
      default: () => {},
    },
    isAfter:{
      type: Object,
      default: () => {},
    },
    isDisabled:{
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      default: 'base',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'm',
    },
    iconBefore:{
      type: Object,
      default: () => {},
    },
    iconAfter:{
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      default: '',
    },
    onDesktop: {
      type: String,
      default: 'default',
    },
    onLaptop: {
      type: String,
      default: 'default',
    },
    onTablet: {
      type: String,
      default: 'default',
    },
    onPhone: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    componentType() {
      return this.type === 'link' ? 'a' : 'button';
    },
  },
  components: {
    MbIcon: () => import('@/components/cells/MbIcon'),
  },
  created() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    switch (windowWidth) {
    case windowWidth > 1367:
      this.responsiveIconOnly = this.onDesktop === 'icon-only';
      this.responsiveLabelOnly = this.onDesktop === 'label-only';
      break;
    case windowWidth > 768 && windowWidth < 1367:
      this.responsiveIconOnly = this.onLaptop === 'icon-only';
      this.responsiveLabelOnly = this.onLaptop === 'label-only';
      break;
    case windowWidth > 568 && windowWidth < 768:
      this.responsiveIconOnly = this.onTablet === 'icon-only';
      this.responsiveLabelOnly = this.onTablet === 'label-only';
      break;
    case windowWidth < 568:
      this.responsiveIconOnly = this.onPhone === 'icon-only';
      this.responsiveLabelOnly = this.onPhone === 'label-only';
      break;
    default:
      break;
    }
  },
};
</script>

<style lang="scss">
  .mtb-button{
    align-items: center;
    justify-content: center;
    .mtb-button-label{
      margin: 0;
    }
  }
</style>
