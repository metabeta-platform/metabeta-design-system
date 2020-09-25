<template>
<nav :class="['mb-menu', `mb-size-${size}`, `mb-flow-${flow}`]">
  <h5 class="mb-menu-title">{{title}}</h5>
  <ul>
      <mb-menu-item v-for="link in links" :key="link._id" @click="$router.push({name : link.href})" :href="link.href" :menuItemContent="link.menuItemContent" :isDisabled="link.isDisabled"> 
      </mb-menu-item>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'MbMenu',
  props: {
    title:{
      type: [String, Number],
    },
    size:{
      type: String,
      default: 'm',
    },
    flow:{
      type: String,
      default: 'vertical',
    },
    links:{
      type: [Array, Object],
    }
  },
  components: {
    MbMenuItem : () => import('@/components/cells/MbMenuItem'),
  },
}
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-menu{
  &-title{
    padding: 0 $mb-space-xs;
    @include mb-heading(xs);
    color: $mb-color-text-light;
  }
  ul{
    li{
    margin:0;
    padding:0;
    }
  }
  &.mb-flow{
    &-horizontal{
      li{
        display:inline-block;
        margin-right:$mb-space-xs;
      }
    }
    &-vertical{
      li{
        display:flex;
      }
    }
  }
  &.mb-size{
    &-m{
      .mb-menu-title{
        @include mb-heading(xs);
        color: $mb-color-text-light;
      }
    }
    &-l{
      .mb-menu-title{
        @include mb-heading(s);
        padding: $mb-space-xs;
        color: $mb-color-text-light;
      }
    }
  }
}
</style>