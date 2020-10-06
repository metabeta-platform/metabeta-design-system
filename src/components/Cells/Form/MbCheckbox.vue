<template>
  <div @click="checkEvent" :class="['mb-checkbox', checkboxDisabled ? 'mb-is-disabled' : null]">
    <input type="checkbox" :name="name" :checked="checkState" :disabled="isDisabled">
    <label :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "MbCheckbox",
  data:() => ({
    checkState: false, 
  }),
  props: {
    name: {
      type: String,
      default: '',
    },
    label:{
      type: String,
      default: '',
    },
    isChecked:{
      type: Boolean,
      default: false,
    },
    isDisabled:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    checkEvent() {
      if(!this.isDisabled){
        if(!this.checkState) {
          this.checkState = true; this.$emit('checked', this.name)
        }
        else {
          this.checkState = false; this.$emit('unchecked', this.name)
        };
      }
    },
  },
  computed: {
    checkboxDisabled:{
      get(){
        return this.isDisabled;
      },
      set(value){
        this.isDisabled = value;
      }
    },
  },
  created () {
    this.checkState = this.checked;
  },
}
</script>

<style lang="scss">
@import "../../../assets/styles/partials/_mb_color.scss";
@import "../../../assets/styles/partials/_mb_space.scss";
@import "../../../assets/styles/partials/_mb_typography.scss";
.mb-checkbox{
  .mb-is-disabled{
    pointer-events:none;
    cursor: not-allowed;
    }
}

</style>