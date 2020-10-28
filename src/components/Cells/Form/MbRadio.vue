<template>
  <div
    @click="radioEvent"
    class="mb-radio"
  >
    <input
      type="radio"
      :name="name"
      :checked="radioState"
      :value="name"
    >
    <mb-icon :name="radioState ? 'icon-forms-radio-selected' : 'icon-forms-radio'"> </mb-icon>
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
  components: {
    MbIcon: () => import('../MbIcon.vue')
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

<style lang="scss" scoped>
.mb-radio{
  display: flex;
  align-items: center;
  padding: $mb-space-xs 0;
  label {
    color: $mb-color-text-medium;
    @include mb-font(body, normal, normal, s);
    margin: 0 0 0 $mb-space-xxs;
  }
}
</style>