<template>
  <div @click="checkEvent" class="checkbox">
    <input type="checkbox" :name="name" :checked="checkState">
    <label :for="name">{{labe}}</label>
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
    checked:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    checkEvent() {
      if(!this.checkState) 
        {this.checkState = false; this.$emit('checked')} 
      else 
        {this.checkState = true; this.$emit('unchecked')};
    },
  },
  created () {
    this.checkState = this.checked;
  },
}
</script>

<style>

</style>