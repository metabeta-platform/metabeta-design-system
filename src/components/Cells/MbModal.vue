<template>
  <section class="mb-backdrop" :class="[modalVisibility ? 'is-visible' : 'is-hidden']">
    <div :class="['mb-modal', `mb-size-${size}`]" is-visible>
      <div class="mb-modal-header">
        <slot name="header">
          <h3>{{title}}</h3>
          <mb-button  @click="modalVisibility = false; $emit('on-close')" priority="base" label="close" :iconBefore="iconClose"></mb-button>
        </slot>
      </div>
      <div class="mb-modal-content">
        <slot name="content"></slot>
      </div>
      <div class="mb-modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MbModal",
  data:()=>({
    iconClose: {
      name: 'close'
    }
  }),
  props: {
    size: {
      type: String,
      default: 'm',
    },
    title:{
      type: String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    modalVisibility: {
      get(){
        console.log(this.isVisible);
        return this.isVisible;
      },
      set(value){
        this.isVisible = value;
      }
    }
  },
  components: {
    MbButton : () => import('@/components/cells/MbButton'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_motion.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
  .mb-backdrop{
    position : fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background-color:rgba($mb-color-black, $mb-opacity-m);
    overflow: hidden;
    &.is-visible{
      display: block;
      transition: $mb-speed-slow $mb-ease-intro;
    }
    &.is-hidden{
      display: none;
      transition: $mb-speed-fast $mb-ease-intro;
    }
    .mb-modal{
      position: absolute;
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
      background-color: $mb-color-white;
      padding:$mb-space-m;
      @include mb-border-radius(m);
      .mb-modal{
        &-header{
          h3{
            margin-top:0;
          }
          .mb-button{
          position: absolute;
          top: 0;
          right: 0;
          }
        }
        &-content{
        p {
           @include mb-font(body, s, normal, normal);
          }
        }
        &-footer{
        p {
          @include mb-caption(s);
          }
        }
      
      }
      &.mb-size{
        &-xl{
          @include mb-shadow();
          width: 95vw;
        }
        &-l{
          @include mb-shadow();
          width: 66.66vw;
        }
        &-m{
          @include mb-shadow();
          width: 50vw;
        }
        &-s{
          @include mb-shadow();
          width: 33.33vw;
        }
      }
    }
  }
</style>