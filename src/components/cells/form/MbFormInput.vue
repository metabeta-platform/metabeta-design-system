<template>
  <mb-fieldset
    flow="'vertical'"
    :class="['mb-form-input', `mb-size-${size}`, inputRequired ? 'mb-is-required' : null, inputDisabled ? 'mb-is-disabled' : null, inputReadonly ? 'mb-is-readonly' : null ]"
  >
    <template slot="legend">
      <label
        class="mb-label-input"
        :for="name"
      >{{label}}<span class="mb-label-help">{{help}}</span></label>
    </template>
    <template slot="content">
      <div class="mb-input-wrapper">
        <input
          :id="name"
          class="mb-input"
          :class="[{'mb-form-icon-before' : iconBefore || type === 'password' || type === 'email'  ||  type === 'phone'  || type === 'url'}, {'mb-form-icon-after' : iconAfter || type === 'password' || type === 'email' ||  type === 'phone'  || type === 'url'}]"
          :type="dynamicType"
          v-model="inputValue"
          :pattern="pattern"
          :placeholder="placeholder"
          :value="value"
          :disabled="inputDisabled"
          :required="inputRequired"
          :readonly="inputReadonly"
        >
        <mb-icon
          v-if="iconBefore || type === 'password' || type === 'email' ||  type === 'phone'  || type === 'url'"
          :class="{'icon-before' : iconBefore || type === 'password' || type === 'email' ||  type === 'phone'  || type === 'url'}"
          @click="emit('icon-clicked')"
          class="input-icon"
          :name="dynamicBefore"
        ></mb-icon>
        <mb-icon
          v-if="iconAfter || type === 'password'"
          @click="handleAfterClick"
          class="input-icon"
          :class="{'icon-after' : iconAfter || type === 'password'}"
          :name="iconAfter || type === 'password' ? dynamicType === 'text' ? 'icon-forms-hide' : 'icon-forms-view' : !!iconAfter.name"
        ></mb-icon>
      </div>
      <div class="mb-hint-wrapper">
        <p :class="['mb-form-input-hint', `mb-error-${error}`]">{{hint}}</p>
        <mb-icon name="help"></mb-icon>
      </div>
    </template>
  </mb-fieldset>
</template>

<script>
export default {
  name: "MbFormInput",
  data: () => ({
    inputValue: '',
    dynamicBefore: '',
    dynamicType: '',
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
  methods: {
    handleAfterClick () {
      if (this.dynamicType === 'password') {
        this.dynamicType = 'text';
      }
      else {
        this.dynamicType = 'password';
      }
      this.$emit('icon-clicked');
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
    this.dynamicType = this.type;
    switch (this.type) {
      case 'password':
        this.dynamicBefore = 'icon-forms-password';
        break;
      case 'email':
        this.dynamicBefore = 'icon-forms-email';
        break;
      case 'phone':
        this.dynamicBefore = 'icon-forms-call';
        break;
      case 'url':
        this.dynamicBefore = 'icon-format-link';
        break;
      default:
        if (this.iconBefore) { this.dynamicBefore = !!this.iconBefore.name };
        break;
    };
  },
}
</script>

<style lang="scss"></style>