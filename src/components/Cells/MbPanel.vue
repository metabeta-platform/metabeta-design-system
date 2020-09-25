<template>
  <article :class="['mb-panel', `mb-type-${type}`]" :id="name">
    <header class="mb-panel-header" v-show="hasHeader">
      <header class="mb-header-title-bar">
       <h3>{{title}}</h3>
      </header>
      <section class="mb-header-content">
        <slot name="header">
        </slot>
      </section>
    </header>
    <section class="mb-panel-content">
      <slot name="content"></slot>
    </section>
    <footer class="mb-panel-footer" v-show="hasFooter">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>
 
<script>
export default {
  name: "MbPanel",
  props: {
    type: {
      type: String,
      default: '',
    },
    name:{
      type: String,
      default: '',
    },
    title:{
      type: String,
      default: '',
    },
    hasHeader:{
      type: Boolean,
      default: true,
    },
    hasFooter:{
      type: Boolean,
      default: true,
    },
  },
};

</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_color.scss";
.mb-panel{
   &.mb-type-base{
    background-color: $mb-color-transparent;
  }
  &.mb-type-card{
    background-color: $mb-color-white;
    @include mb-border-radius(m);
    border: $mb-border-thin solid transparent;
  }
  .mb-panel{
    &-header{
      .mb-header{
        &-title-bar{
          h3 {
            padding: $mb-space-s $mb-space-m;
            margin:0;
          }
        }
        &-content{
          padding: $mb-space-s $mb-space-m;
        }
      }
    }
    &-content{
      padding: $mb-space-s $mb-space-m;
    }
    &-footer{
      padding: $mb-space-s $mb-space-m;
    }
  }

}
</style>
