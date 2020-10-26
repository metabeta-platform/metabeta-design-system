<template>
   <li  :class="['mb-menu-item', menuItemDisabled ? 'mb-is-disabled' : null]">
      <a :href="href"
      @click="$emit('click', $event)"
      >
        {{menuItemContent}}
      </a>
    </li>
</template>

<script>
export default {
  name: 'MbMenuItem',
  props: {
    menuItemContent: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },

  },
   computed:{
    menuItemDisabled:{
      get(){
        return this.isDisabled;
      },
      set(value){
        this.isDisabled = value;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-menu-item{
  a{
    width:100%;
    padding: $mb-space-xs;
    @include mb-border-radius(s);
    color: $mb-color-text-medium;
    outline: none;
    @include mb-font(body, s, normal, normal);
    @include mb-wrap-text(false);
    &:hover{
      color: $mb-color-headings;
      background-color: $mb-color-gray-highlight;
    }
     &:active{
      background-color: $mb-color-primary-highlight;
      color: $mb-color-primary;
    }
  }
  &.mb-is-disabled{
    a{
    // pointer-events:none;
    cursor: not-allowed;
    background-color: fade-out(desaturate($mb-color-gray, $mb-opacity-m),$mb-opacity-xxl);
    color: fade-out($mb-color-text-medium, $mb-opacity-l);
    }
  }
}
.mb-menu{
  &.mb-size{
    &-m{
      .mb-menu-item{
        a{
         @include mb-font(body, s, normal, normal);
        }
      }
    }
    &-l{
      .mb-menu-item{
      a{
        @include mb-font(body, m, normal, normal);
        padding: $mb-space-xs $mb-space-s;
      }
    }
    }
  }
}
</style>