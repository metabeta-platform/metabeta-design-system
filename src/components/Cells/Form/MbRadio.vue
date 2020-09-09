<template>
  <div @click="radioEvent" class="radiobox">
    <input type="radio" :name="name" :is-checked="radioState" :value="name">
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
    isChecked:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    radioEvent() {
      if(!this.checkState) 
        {this.checkState = false; this.$emit('checked', this.name)}
      else 
        {this.checkState = true; this.$emit('unchecked', this.name)};
    },
  },
  created () {
    this.radioState = this.checked;
  },
}
</script>

<style>

</style>