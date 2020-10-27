<template>
  <i :class="['mb-icon',`mb-size-${size}`]">
    <component
      :viewBox="`0 0 16 16`"
      :is="iconComponent"
    />
  </i>
</template>

<script>
const icons = {}
const requireComponents = require.context('../../assets/icons/', false, /.svg$/)
requireComponents.keys().forEach(fileName => {
  const iconName = fileName.replace(/(\.\/|\.svg)/g, '');
  const componentConfig = requireComponents(fileName)
  icons[iconName] = componentConfig.default || componentConfig
});

export default {
  name: "MbIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'm',
    },
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_color.scss";
.mb-icon {
  line-height: 0;
  stroke: transparent;
  fill: transparent;
  vertical-align: middle;
  .svg-stroke {
    stroke: $mb-color-gray;
  }
  .svg-fill {
    fill: $mb-color-gray;
  }
  &.mb-size-xs{
    svg{
    width: 0.5rem;
    height:0.5rem;
    }
  }
  &.mb-size-s{
    svg{
      width: 0.75rem;
      height:0.75rem;
    }
  }
  &.mb-size-m{
    svg{
      width: 1rem;
      height:1rem;
    }
  }
  &.mb-size-l{
    svg{
      width: 1.5rem;
      height:1.5rem;
    }
  }
  .mb-icon-checkbox-selected,
  .mb-icon-alert-add-fill,
  .mb-icon-alert-danger-fill,
  .mb-icon-alert-delete-fill,
  .mb-icon-alert-error-fill,
  .mb-icon-alert-help-fill,
  .mb-icon-alert-info-fill,
  .mb-icon-alert-more-fill,
  .mb-icon-alert-remove-fill,
  .mb-icon-alert-success-fill,
  .mb-icon-alert-warning-fill,
  .mb-icon-file-csv,
  .mb-icon-file-doc,
  .mb-icon-file-google-doc,
  .mb-icon-file-google-sheet,
  .mb-icon-file-google-slides,
  .mb-icon-file-json,
  .mb-icon-file-other,
  .mb-icon-file-pdf,
  .mb-icon-file-ppt,
  .mb-icon-file-sql,
  .mb-icon-file-xls,
  .mb-icon-file-xml,
  .mb-icon-file-zip {
    .svg-stroke {
      stroke: $mb-color-white;
    }
  }
  .mb-icon-checkbox,
  .mb-icon-radio {
    .svg-fill {
      fill: $mb-color-white;
    }
  }
}
</style>