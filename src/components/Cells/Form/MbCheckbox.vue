<template>
  <div
    @click="checkEvent"
    :class="['mb-checkbox', checkState ? 'mb-is-checked' : '', checkboxDisabled ? 'mb-is-disabled' : '']"
  >
    <input
      type="checkbox"
      :name="name"
      :checked="checkState"
      :disabled="isDisabled"
      :value="name"
    >
    <mb-icon :name="checkState ? 'icon-forms-checkbox-selected' : 'icon-forms-checkbox'"> </mb-icon>
    <label :for="name">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "MbCheckbox",
  data: () => ({
    checkState: false,
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
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    checkEvent () {
      if (!this.isDisabled) {
        if (!this.checkState) {
          this.checkState = true; this.$emit('checked', this.name)
        }
        else {
          this.checkState = false; this.$emit('unchecked', this.name)
        };
      }
    },
  },
  computed: {
    checkboxDisabled: {
      get () {
        return this.isDisabled;
      },
      set (value) {
        this.isDisabled = value;
      }
    },
  },
  watch: {
    isChecked (val) {
      this.checkState = val;
    }
  },
  components: {
    MbIcon: () => import('../MbIcon'),
  },
  created () {
    this.checkState = this.isChecked;
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/partials/_mb_color.scss";
@import "../../../assets/styles/partials/_mb_space.scss";
@import "../../../assets/styles/partials/_mb_typography.scss";
@import "../../../assets/styles/partials/_mb_interaction.scss";
.mb-checkbox {
  display: flex;
  align-items: center;
  padding: $mb-space-xs 0;
  .mb-is-disabled {
    cursor: not-allowed;
  }
  label {
    color: $mb-color-text-medium;
    @include mb-font(body, normal, normal, s);
    margin: 0 0 0 $mb-space-xxs;
  }
  &.mb-is-checked {
    label {
      color: $mb-color-headings;
    }
  }
}
</style>