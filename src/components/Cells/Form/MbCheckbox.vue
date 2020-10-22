<template>
  <div
    @click="checkEvent"
    :class="['mb-checkbox', checkState ? 'mb-is-checked' : '', checkboxDisabled ? 'mb-is-disabled' : null]"
  >
    <input
      type="checkbox"
      :name="name"
      :checked="checkState"
      :disabled="isDisabled"
    >
    <mb-icon name="metabeta"> </mb-icon>
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
  components: {
    MbIcon: () => import('../MbIcon.vue'),
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
.mb-checkbox {
  display: flex;
  align-items: center;
  svg {
    path {
      opacity: $mb-opacity-transparent;
    }
  }
  &.mb-is-checked {
    svg {
      g {
        stroke: $mb-color-primary;
      }
      path {
        opacity: $mb-opacity-full;
      }
    }
  }
  &.mb-is-disabled {
    opacity: $mb-opacity-m;
    svg {
      path {
        opacity: 1;
      }
    }
  }
  .mb-is-disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
  label {
    margin: 0 0 0 $mb-space-xxs;
  }
}
</style>