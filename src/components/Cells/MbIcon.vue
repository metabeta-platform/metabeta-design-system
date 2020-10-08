<template>
  <i :class="['mb-icon',`mb-color-${color}`, `mb-size-${size}` ]">
    <component
      :height="size"
      :width="size"
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
      type: Number,
      default: 18,
    },
    color: {
      type: String,
      default: 'base',
    }
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_color.scss";
.mb-icon {
  line-height: 0;
  stroke: transparent;
  fill: transparent;
  #svg-stroke,
  .svg-stroke {
    stroke: $mb-color-gray;
  }
  #svg-fill,
  .svg-fill {
    fill: $mb-color-gray;
  }
   &.mb-color{
    &-danger{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-danger;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-danger;
      }
    }
    &-success{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-success;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-success;
      }
    }
    &-warning{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-warning;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-warning;
      }
    }
    &-info{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-info;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-info;
      }
    }
    &-note{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-note;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-note;
      }
    }
    &-blue{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-blue;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-blue;
      }
    }
    &-red{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-red;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-red;
      }
    }
    &-green{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-green;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-green;
      }
    }
    &-orange{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-orange;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-orange;
      }
    }
    &-cyan{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-cyan;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-cyan;
      }
    }
    &-yellow{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-yellow;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-yellow;
      }
    }
    &-indigo{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-indigo;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-indigo;
      }
    }
    &-purple{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-purple;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-purple;
      }
    }
    &-pink{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-pink;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-pink;
      }
    }
    &-teal{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-teal;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-teal;
      }
    }
    &-lime{
      #svg-stroke, .svg-stroke{
        stroke: $mb-color-lime;
      }
      #svg-fill, .svg-fill {
        fill: $mb-color-lime;
      }
    }
  }
}
</style>