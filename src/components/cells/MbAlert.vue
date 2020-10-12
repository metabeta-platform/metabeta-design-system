<template>
    <div
        :class="['mb-alert', `mb-color-${color}`, `mb-size-${size}`]"
      >
        <slot name="content"></slot>
      </component>
    </div>
</template>

<script>
export default {
  name: "MbChip",
  props: {
    color: {
      type: String,
      default: 'base',
    },
    size: {
      type: String,
      default: 'm',
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_icons.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_theme.scss";
  .mb-alert {
    margin-right: $mb-space-xs;
    display: inline-block;
    align-items: center;
    justify-content: center;
    &.mb-size {
      &-s {
        padding: $mb-space-xxs $mb-space-xs;
        @include mb-font(body, xs, normal, normal);
        @include mb-border-radius(s);
      }
      &-m {
        padding: $mb-space-xs $mb-space-s;
        @include mb-font(body, s, normal, normal);
        @include mb-border-radius(m);
      }
      &-l {
        padding: $mb-space-s $mb-space-m;
        @include mb-font(body, m, normal, normal);
        @include mb-border-radius(l);
      }
    }
    &.mb-color{
      &-base{
        color:$mb-color-text-dark;
        background-color: rgba($mb-color-gray, $mb-opacity-s);

      }
      &-primary{
        color:$mb-color-primary;
        background-color: rgba($mb-color-primary, $mb-opacity-s);
      }
      &-success{
        color:$mb-color-success;
        background-color: rgba($mb-color-success, $mb-opacity-s);
      }
      &-danger{
        color:$mb-color-danger;
        background-color: rgba($mb-color-danger, $mb-opacity-s);
      }
      &-warning{
        color:$mb-color-warning;
        background-color: rgba($mb-color-warning, $mb-opacity-s);
      }
      &-info{
        color:$mb-color-info;
        background-color: rgba($mb-color-info, $mb-opacity-s);
      }
      &-note{
        color:$mb-color-note;
        background-color: rgba($mb-color-note, $mb-opacity-s);
      }
      &-blue{
        color:$mb-color-blue;
        background-color: rgba($mb-color-blue, $mb-opacity-s);
      }
      &-red{
        color:$mb-color-red;
        background-color: rgba($mb-color-red, $mb-opacity-s);
      }
      &-orange{
        color:$mb-color-orange;
        background-color: rgba($mb-color-orange, $mb-opacity-s);
      }
      &-yellow{
        color:$mb-color-yellow;
        background-color: rgba($mb-color-yellow, $mb-opacity-s);
      }
      &-cyan{
        color:$mb-color-cyan;
        background-color: rgba($mb-color-cyan, $mb-opacity-s);
      }
      &-teal{
        color:$mb-color-teal;
        background-color: rgba($mb-color-teal, $mb-opacity-s);
      }
      &-lime{
        color:$mb-color-lime;
        background-color: rgba($mb-color-lime, $mb-opacity-s);
      }
      &-green{
        color:$mb-color-green;
        background-color: rgba($mb-color-green, $mb-opacity-s);
      }
      &-indigo{
        color:$mb-color-indigo;
        background-color: rgba($mb-color-indigo, $mb-opacity-s);
      }
      &-pink{

      }
      &-purple{
        background-color: rgba($mb-color-purple, $mb-opacity-s);
      }
    }
  }
</style>
