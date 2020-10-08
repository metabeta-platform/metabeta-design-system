<template>
  <div
    @mouseenter="show = true"
    @mouseleave="show = false"
    :class="`mb-tooltip mb-placement-${placement} ${show ? '' : 'hidden'}`"
  >
    <div class="mb-tooltip-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    show () {
      return this.isVisible;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-tooltip {
  position: absolute;
  display: inline-block;
  width: 100%;
  @include mb-elevation(10);
  &.hidden {
    visibility: hidden;
    display: none;
  }
  &.mb-placement {
    &-top {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      @include mb-border-radius(xxs);
    }
    &-top-left {
      bottom: calc(100% + 2px);
      left: 0;
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        left: 4px;
        @include mb-border-radius(xxs);
        background-color: inherit;
        transform: rotate(45deg);
        bottom: -$mb-space-xxs;
        background: rgba($mb-color-black, $mb-opacity-xl);
      }
    }
    &-top-right {
      bottom: calc(100% + 2px);
      right: -33.33334%;
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        @include mb-border-radius(xxs);
        width: 10px;
        height: 10px;
        left: 4px;
        background-color: inherit;
        transform: rotate(45deg);
        bottom: -$mb-space-xxs;
        background: rgba($mb-color-black, $mb-opacity-xxl);
      }
    }
    &-bottom {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
    &-left {
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
    &-right {
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }
  }
  &:not(.hidden) .mb-tooltip-content {
    position: relative;
    max-width: 300px;
    min-width: 250px;
    background: rgba($mb-color-black, $mb-opacity-xxl);
    color: $mb-color-white;
    text-align: center;
    @include mb-border-radius(s);
    @include mb-font(body, s, normal, normal);
    padding: $mb-space-xxs $mb-space-xs;
    z-index: 3;
  }
}

// /* Tooltip top arrow */
// .mb-placement-top .mb-tooltip-content::after {
//   margin-left: -$mb-space-xxs;
//   left: 50%;
//   top: 100%;
//   border-color: rgba($mb-color-black, $mb-opacity-xxl) transparent transparent
//     transparent;
// }
// /* Tooltip bottom arrow */
// .mb-placement-bottom .mb-tooltip-content::after {
//   margin-left: -$mb-space-xxs;
//   bottom: 100%;
//   left: 50%;
//   border-color: transparent transparent rgba($mb-color-black, $mb-opacity-xxl)
//     transparent;
// }
// /* Tooltip left arrow */
// .mb-placement-left .mb-tooltip-content::after {
//   top: 50%;
//   margin-top: -$mb-space-xxs;
//   left: 100%;
//   border-color: transparent transparent transparent
//     rgba($mb-color-black, $mb-opacity-xxl);
// }
// /* Tooltip right arrow */
// .mb-placement-right .mb-tooltip-content::after {
//   top: 50%;
//   margin-top: -$mb-space-xxs;
//   right: 100%;
//   border-color: transparent rgba($mb-color-black, $mb-opacity-xxl) transparent
//     transparent;
// }
// .mb-tooltip:hover .mb-tooltip-content {
//   visibility: visible;
//   opacity: 1;
// }
</style>