<template>
  <mb-fieldset>
    <mb-icon
      v-if="iconBefore"
      :class="{iconBefore : 'icon-before'}"
      @click="emit('icon-clicked')"
      class="input-icon"
      :name="dynamicAfter"
    ></mb-icon>
    <input
      class="mb-input"
      :class="[{'has-before-icon' : iconBefore}, {'has-after-icon' : iconAfter}]"
      :type="type"
      v-model="inputValue"
    >
    <mb-icon
      v-if="iconAfter || type === 'password' || type === 'email' || type === 'url'"
      :class="{iconAfter : 'icon-after'}"
      @click="emit('icon-clicked')"
      class="input-icon"
      :name="dynamicAfter"
    ></mb-icon>
  </mb-fieldset>
</template>

<script>
export default {
  name: "MbInput",
  data: () => ({
    inputValue: '',
  }),
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: null,
    },
    iconAfter: {
      type: Object,
      default: () => { },
    },
    iconBefore: {
      type: Object,
      default: () => { },
    }
  },
  components: {
    MbIcon: () => import('@/components/cells/MbIcon'),
    MbFieldset: () => import('@/components/cells/form/MbFieldset'),
  },
  computed: {
    dynamicAfter () {
      switch (this.type) {
        case 'password':
          return 'icon-forms-password';
          break;
        case 'email':
          return 'icon-forms-email';
          break;
        case 'url':
          return 'icon-forms-link';
          break;
        default:
          return this.iconAfter.name;
          break;
      }
    }
  },
  watch: {
    value (newValue) {
      this.$emit('changed', newValue);
      this.inputValue = newValue;
    },
  },
  created () {
    this.inputValue = this.value;
  }
}
</script>

<style lang="scss">
.mb-input {
  width: 100%;
  box-sizing: border-box;
  & + .has-after-icon {
    padding-right: 50px;
    &.input-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
  }
  & + .has-before-icon {
    padding-left: 50px;
    &.input-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
  }
}
</style>