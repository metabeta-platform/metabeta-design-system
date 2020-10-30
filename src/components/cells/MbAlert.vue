<template>
  <div
    :class="['mb-alert', `mb-color-${color}`, `mb-size-${size}`]"
    v-if="hasContent"
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "MbAlert",
  props: {
    color: {
      type: String,
      default: 'warning',
    }
  },
  computed: {
    hasContent () {
      return !!this.$slots['content'] || !!this.$defaultSlots['content'];
    },
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_icons.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_theme.scss";
.mb-alert {
  padding: $mb-space-s $mb-space-s $mb-space-s $mb-space-s * 4;
  @include mb-font(body, s, normal, normal);
  @include mb-border-radius(m);
  position: relative;
  &.mb-color {
    &-success {
      color: $mb-color-success-dark;
      background-color: rgba($mb-color-success, $mb-opacity-m);
      .svg-fill {
        fill: $mb-color-success !important;
      }
    }
    &-danger {
      color: $mb-color-danger-dark;
      background-color: rgba($mb-color-danger, $mb-opacity-m);
      .svg-fill {
        fill: $mb-color-danger !important;
      }

    }
    &-warning {
      color: $mb-color-warning-dark;
      background-color: rgba($mb-color-warning, $mb-opacity-s);
      .svg-fill {
        fill: $mb-color-warning !important;
      }
    }
    &-info {
      color: $mb-color-info-dark;
      background-color: rgba($mb-color-info, $mb-opacity-m);
      .svg-fill {
        fill: $mb-color-info !important;
      }
    }
    &-note {
      color: $mb-color-note-dark;
      background-color: rgba($mb-color-note, $mb-opacity-m);
      .svg-fill {
        fill: $mb-color-note !important;
      }
    }
  }
  & > .mb-icon {
    position: absolute;
    top: $mb-space-m * 0.9;
    left: $mb-space-m;
  }
}
</style>
