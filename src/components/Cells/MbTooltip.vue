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
  max-width: 16rem;
  @include mb-elevation(10);
  &.hidden {
    visibility: hidden;
    display: none;
  }
  &.mb-placement {
    &-top {
      bottom: calc(100% + 3px);
      left: 50%;
      transform: translateX(-50%);
      @include mb-border-radius(xxs);
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        @include mb-border-radius(xxs);
        width: 10px;
        height: 10px;
        left: 50%;
        bottom: 0;
        background-color: inherit;
        transform: rotate(45deg) translateX(-50%);
        background: rgba($mb-color-black, $mb-opacity-xxl);
      }
    }
    &-top-left {
      bottom: calc(100% + 3px);
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
      top: calc(100% + 2px);
      left: 50%;
      transform: translateX(-50%);
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        @include mb-border-radius(xxs);
        width: 10px;
        height: 10px;
        left: 50%;
        bottom: calc(100% - 8px);
        background-color: inherit;
        transform: rotate(45deg) translateX(-50%);
        background: rgba($mb-color-black, $mb-opacity-xxl);
      }
    }
    &-left {
      top: 50%;
      transform: translateY(-50%);
      right: calc(100% + 2px);
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        @include mb-border-radius(xxs);
        width: 10px;
        height: 10px;
        right: -2px;
        top: 50%;
        background-color: inherit;
        transform: rotate(45deg) translateY(-50%);
        background: rgba($mb-color-black, $mb-opacity-xxl);
      }
    }
    &-right {
      top: 50%;
      transform: translateY(-50%);
      left: calc(100% + 2px);
      .mb-tooltip-content::after {
        content: "";
        position: absolute;
        @include mb-border-radius(xxs);
        width: 10px;
        height: 10px;
        left: -8px;
        top: 50%;
        background-color: inherit;
        transform: rotate(45deg) translateY(-50%);
        background: rgba($mb-color-black, $mb-opacity-xxl);
      }
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
    @include mb-font(body, xs, normal, normal);
    padding: $mb-space-xxs $mb-space-xs;
    z-index: 3;
  }
}
</style>