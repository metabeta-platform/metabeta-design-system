<template>
  <div :class="`mb-tooltip mb-placement-${placement}`">
    <div class="mb-tooltip-content"><slot name="content"></slot></div>
  </div>
</template>


<script>
export default {
  props: {
    placement: {
        type: String,
        default: 'top'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-tooltip {
  position: relative;
  display: inline-block;
  width: 100%;
}
.mb-tooltip .mb-tooltip-content {
  //visibility: hidden;
  width: auto;
  background:rgba($mb-color-black, $mb-opacity-xxl);
  color: $mb-color-white;
  text-align: center;
  @include mb-border-radius(s);
  @include mb-font(body, s, normal, normal);
  padding: $mb-space-xxs $mb-space-xs;
  position: absolute;
  z-index: 3;
 // opacity: 0;
}
/* Tooltip top content */
.mb-placement-top .mb-tooltip-content {
  top: 10%;
  left: 50%;
  margin-left: -50%; 
  width:auto;
}
/* Tooltip right content */
.mb-placement-right .mb-tooltip-content {
  top: -$mb-space-xxs;
  left: $mb-space-xs;
}
/* Tooltip bottom content */
.mb-placement-bottom .mb-tooltip-content {
  top: 100%;
  left: 50%;
  margin-left: -50%; 
}
/* Tooltip left content */
.mb-placement-left .mb-tooltip-content{
  top: -$mb-space-xxs;
  right: 110%; 
}
.mb-tooltip .mb-tooltip-content::after {
  content: "";
  position: absolute;
  border-width: $mb-space-xxs;
  border-style: solid;
}
/* Tooltip top arrow */
.mb-placement-top .mb-tooltip-content::after {
  margin-left: -$mb-space-xxs;
  left: 50%;
  top: 100%;
  border-color: rgba($mb-color-black, $mb-opacity-xxl) transparent transparent transparent;
}
/* Tooltip bottom arrow */
.mb-placement-bottom .mb-tooltip-content::after {
  margin-left: -$mb-space-xxs;
  bottom: 100%;
  left: 50%;
  border-color: transparent transparent rgba($mb-color-black, $mb-opacity-xxl) transparent;
}
/* Tooltip left arrow */
.mb-placement-left .mb-tooltip-content::after {
  top: 50%;
  margin-top: -$mb-space-xxs;
  left: 100%;
  border-color: transparent transparent transparent rgba($mb-color-black, $mb-opacity-xxl);
}
/* Tooltip right arrow */
.mb-placement-right .mb-tooltip-content::after {
  top: 50%;
  margin-top: -$mb-space-xxs;
  right: 100%;
  border-color: transparent rgba($mb-color-black, $mb-opacity-xxl) transparent transparent;
}
.mb-tooltip:hover .mb-tooltip-content {
  visibility: visible;
  opacity: 1;
}
</style>