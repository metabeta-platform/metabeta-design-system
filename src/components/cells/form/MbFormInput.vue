<template>
  <mb-fieldset
    flow="'vertical'"
    :class="['mb-form-input', `mb-size-${size}`, inputRequired ? 'mb-is-required' : null, inputDisabled ? 'mb-is-disabled' : null, inputReadonly ? 'mb-is-readonly' : null ]"
  >
    <label
      class="mb-label-input"
      :for="name"
    >{{label}}<span class="mb-label-help">{{help}}</span></label>
    <div class="mb-input-wrapper">
      <mb-icon
        v-if="iconBefore || type === 'password' || type === 'email' || type === 'url'"
        :class="{'icon-before' : iconBefore || type === 'password' || type === 'email' || type === 'url'}"
        @click="emit('icon-clicked')"
        class="input-icon"
        :name="dynamicBefore"
      ></mb-icon>
      <input
        :id="name"
        class="mb-input"
        :class="[{'has-before-icon' : iconBefore || type === 'password' || type === 'email' || type === 'url'}, {'has-after-icon' : iconAfter || type === 'password' || type === 'email' || type === 'url'}]"
        :type="type"
        v-model="inputValue"
        :pattern="pattern"
        :placeholder="placeholder"
        :value="value"
        :disabled="inputDisabled"
        :required="inputRequired"
        :readonly="inputReadonly"
      >
      <mb-icon
        v-if="iconAfter || type === 'password'"
        @click="emit('icon-clicked')"
        class="input-icon"
        :class="{'icon-after' : iconAfter || type === 'password'}"
        :name="iconAfter || type === 'password' ? 'view-icon' : !!iconAfter.name"
      ></mb-icon>
    </div>
    <p :class="['mb-form-input-hint', `mb-error-${error}`]">{{hint}}</p>
  </mb-fieldset>
</template>

<script>
export default {
  name: "MbFormInput",
  data: () => ({
    inputValue: '',
    dynamicBefore: '',
  }),
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    help: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'm',
    },
    pattern: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: null,
    },
    error: {
      type: String,
      default: null,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
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
    MbFieldset: () => import('@/components/cells/form/MbFieldset.vue')
  },
  computed: {
    inputRequired: {
      get () {
        return this.isRequired;
      },
      set (value) {
        this.isRequired = value;
      }
    },
    inputReadonly: {
      get () {
        return this.isReadonly;
      },
      set (value) {
        this.isReadonly = value;
      }
    },
    inputDisabled: {
      get () {
        return this.isDisabled;
      },
      set (value) {
        this.isDisabled = value;
      }
    },
  },
  watch: {
    value (newValue) {
      this.$emit('changed', newValue);
      this.inputValue = newValue;
    },
  },
  created () {
    this.inputValue = this.value;
    switch (this.type) {
      case 'password':
        this.dynamicBefore = 'icon-forms-password';
        break;
      case 'email':
        this.dynamicBefore = 'icon-forms-email';
        break;
      case 'url':
        this.dynamicBefore = 'icon-format-link';
        break;
      default:
        if (this.iconBefore) { this.dynamicBefore = !!this.iconBefore.name };
        break;
    }
  },
}
</script>

<style lang="scss">
@import "../../../assets/styles/partials/_mb_space.scss";
@import "../../../assets/styles/partials/_mb_color.scss";
@import "../../../assets/styles/partials/_mb_typography.scss";
.mb-form-input {
  .mb-input-wrapper {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    .has-after-icon {
      padding-right: 50px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
    .has-before-icon {
      margin-left: 20px;
    }
    .input-icon {
      position: absolute;
      left: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .mb-label-help {
    @include mb-caption(xs);
    display: block;
    color: $mb-color-text-light;
  }
  .mb-form-input-hint {
    @include mb-caption(xs);
    padding: $mb-space-xxs 0;
    color: $mb-color-text-light;
    &.mb-error {
      &-danger {
        color: $mb-color-danger;
      }
      &-success {
        color: $mb-color-success;
      }
      &-warning {
        color: $mb-color-warning;
      }
    }
  }
}
</style>