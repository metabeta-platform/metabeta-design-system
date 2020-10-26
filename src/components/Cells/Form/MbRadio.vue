<template>
  <div
    @click="radioEvent"
    class="radiobox"
  >
    <input
      type="radio"
      :name="name"
      :checked="radioState"
      :value="name"
    >
    <label :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "MbRadio",
  data: () => ({
    radioState: false,
  }),
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    isChecked: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    radioEvent () {
      this.$emit('inputChanged', this.name);
    },
  },
  watch: {
    isChecked (val) {
      this.radioState = val;
    }
  },
  created () {
    this.radioState = this.isChecked;
  },
}
</script>

<style>
</style>