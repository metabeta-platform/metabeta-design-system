<template>
  <div @click="radioEvent" class="radiobox">
    <input type="radio" :name="name" :checked="radioState" :value="name">
    <label :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "MbRadio",
  data:() => ({
    radioState: false, 
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
    radioEvent() {
      if(!this.radioState) 
        {this.radioState = true; this.$emit('checked', this.name)}
      else 
        {this.radioState = false; this.$emit('unchecked', this.name)};
    },
  },
  created () {
    this.radioState = this.checked;
  },
}
</script>

<style>

</style>