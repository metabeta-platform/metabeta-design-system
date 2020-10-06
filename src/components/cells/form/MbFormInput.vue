<template>
<div :class="['mb-form-input', `mb-size-${size}`, inputRequired ? 'mb-is-required' : null, inputDisabled ? 'mb-is-disabled' : null, inputReadonly ? 'mb-is-readonly' : null ]">
  <label class="mb-label-input" :for="name">{{label}}<span class="mb-label-help">{{help}}</span></label>
  <input :id="name" class="mb-input" :type="type" v-model="inputValue" :pattern="pattern" :placeholder="placeholder" :value="value" :disabled="inputDisabled" :required="inputRequired" :readonly="inputReadonly">
  <p :class="['mb-form-input-hint', `mb-error-${error}`]">{{hint}}</p>
</div>
</template>

<script>
export default {
  name: "MbFormInput",
  data: () =>({
    inputValue: '',
  }),
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    help: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'm',
    },
    pattern: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value:{
      type: [String, Number],
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    iconAfter: {
      type: Object,
      default: () => {},
    },
    iconBefore:{
      type: Object,
      default: () => {},
    }
  },
  components: {
    MbIcon: () => import('@/components/cells/MbIcon'),
  },
   computed:{
  
    inputRequired:{
      get(){
        return this.isRequired;
      },
      set(value){
        this.isRequired = value;
      }
    },
    inputReadonly:{
    get(){
        return this.isReadonly;
      },
      set(value){
        this.isReadonly = value;
      }
    },
    inputDisabled:{
      get(){
        return this.isDisabled;
      },
      set(value){
        this.isDisabled = value;
      }
    }
  },
  watch: {
    value(newValue) {
      this.$emit('changed', newValue);
      this.inputValue = newValue;
    },
  },
  created(){
    this.inputValue = this.value;
  }
}
</script>

<style lang="scss">
  @import "../../../assets/styles/partials/_mb_space.scss";
  @import "../../../assets/styles/partials/_mb_color.scss";
  @import "../../../assets/styles/partials/_mb_typography.scss";
  .mb-form-input{
    .mb-label-help{
      @include mb-caption(xs);
      display: block;
      color:$mb-color-text-light;
    }
    .mb-form-input-hint{
      @include mb-caption(xs);
      padding: $mb-space-xxs 0;
      color:$mb-color-text-light;
      &.mb-error{
        &-danger{
          color:$mb-color-danger;
        }
        &-success{
          color:$mb-color-success;
        }
        &-warning{
          color:$mb-color-warning;
        }
      }
    }
  }
</style>