<template>
<keep-alive>
  <component
    :type="type != 'link' ? type : null"
    :is="componentType" @click="$emit('click', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    :class="[type, priority, color, size, 'mtb-button', `display-${onDesktop === 'hidden' ? 'none' : 'flex'}-${onLaptop  === 'hidden' ? 'none' : 'flex'}-${onTablet  === 'hidden' ? 'none' : 'flex'}-${onPhone  === 'hidden' ? 'none' : 'flex'}`]"
    :disabled="isDisabled">
      <mb-icon v-if="!responsiveLabelOnly && iconPosition !== 'after'" :name="type === 'action' ? 'dropdown' : icon"></mb-icon>
      <label v-if="!responsiveIconOnly">{{label}}</label>
      <mb-icon v-if="!responsiveLabelOnly && iconPosition !== 'before'" :name="type === 'action' ? 'dropdown' : icon"></mb-icon>
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
    icon: {
      type: String,
      default: null,
    },
    iconPosition: {
      type: String,
      default: 'before',
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
    MbIcon: () => import('./MbIcon'),
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
  }
</style>
