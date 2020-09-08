<template>
  <div @click="radioEvent" class="radiobox">
    <input type="radio" :name="name" :checked="radioState" :value="name">
    <label :for="name">{{labe}}</label>
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
    checked:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    radioEvent() {
      if(!this.radioState) 
        {this.radioState = false; this.$emit('checked')} 
      else 
        {this.radioState = true; this.$emit('unchecked')};
    },
  },
  created () {
    this.radioState = this.checked;
  },
}
</script>

<style>

</style>