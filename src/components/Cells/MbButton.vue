<template>
<keep-alive>
  <component
    :type="type != 'link' ? type : null"
    :is="componentType" @click="$emit('click', $event)"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
    :class="['mtb-button', type, priority, color, size, `display-${onDesktop === 'hidden' ? 'none' : 'flex'}-${onLaptop  === 'hidden' ? 'none' : 'flex'}-${onTablet  === 'hidden' ? 'none' : 'flex'}-${onPhone  === 'hidden' ? 'none' : 'flex'}`]"
    :disabled="isDisabled">
      <mb-icon v-if="!responsiveLabelOnly && isBefore" :name="type === 'action' ? 'dropdown' : iconName"></mb-icon>
      <label class="mtb-button-label" v-if="!responsiveIconOnly">{{label}}</label>
      <mb-icon v-if="!responsiveLabelOnly && isAfter" :name="type === 'action' ? 'dropdown' : iconName"></mb-icon>
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
    isBefore:{
      type: Boolean,
      default: true,
    },
    isAfter:{
      type:Boolean,
      default: false,
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
    iconName: {
      type: String,
      default: null,
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
    this.isAfter ? this.isBefore = false : this.isBefore = true;
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
