<template>
  <div @click="checkEvent" class="checkbox">
    <input type="checkbox" :name="name" :checked="checkState">
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
    }
  },
  methods: {
    checkEvent() {
      if(!this.checkState) 
        {this.checkState = true; this.$emit('checked', this.name)}
      else 
        {this.checkState = false; this.$emit('unchecked', this.name)};
    },
  },
  created () {
    this.checkState = this.checked;
  },
}
</script>

<style>

</style>