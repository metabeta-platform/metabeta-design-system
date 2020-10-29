<template>
  <mb-fieldset>
    <template slot="legend">
      <label :for="`select${name}`">{{label}}</label>
    </template>
    <template slot="content">
      <div
        class="mb-form-select"
        :class="[{'active' : active}, `mb-size-${size}`]"
      >
        <div
          @click="active = !active"
          class="mb-selected-input"
          :class="priority"
        >
          <span>{{selectedInput !== '' ? selectedInput : placeholder}}</span>
          <mb-icon name="dropdown-up"></mb-icon>
        </div>
        <ul class="mb-options">
          <li
            v-for="option in options"
            :key="option.id"
            :class="[{'active' : option.name === selectedInput}, option.disabled ? 'disabled' : '']"
            @click="select(option.name)"
          > {{option.name}} </li>
        </ul>
      </div>
      <div
        v-if="hint"
        class="mb-hint-wrapper"
      >
        <p :class="['mb-form-input-hint', `mb-error-${error}`]">{{hint}}</p>
        <mb-icon name="help"></mb-icon>
      </div>
    </template>
  </mb-fieldset>
</template>

<script>
export default {
  name: "MbFormSelect",
  data: () => ({
    selectedInput: '',
    active: false,
  }),
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Please select',
    },
    value: {
      type: String,
      default: ''
    },
    priority: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'l'
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: '',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    select (option) {
      this.selectedInput = option.name || option.label || option;
      this.active = false;
      this.$emit('option-selected', this.selectedInput);
    }
  },
  created () {
    this.value = this.selectedInput;
  },
  components: {
    MbIcon: () => import('../MbIcon'),
    MbFieldset: () => import('../form/MbFieldset'),
    MbPopover: () => import('../MbTooltip'),
  }
}
</script>

<style lang="scss" scoped>
.mb-form-select {
  .mb-icon {
    @include mb-transition("smooth");
    transform: rotateZ(180deg);
  }
  .mb-options {
    margin: $mb-space-xs 0 0;
    background-color: $mb-color-white;
    @include mb-border-radius(s);
    @include mb-shadow(l);
    li {
      position: relative;
      @include mb-caption(s);
      &::after {
        content: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 1L3.7844 6.52165C3.7242 6.61099 3.64749 6.68488 3.55945 6.73832C3.47141 6.79176 3.3741 6.8235 3.2741 6.83139C3.1741 6.83928 3.07375 6.82313 2.97983 6.78406C2.88592 6.74498 2.80063 6.68387 2.72973 6.60487L0.5 4.12075' stroke='%235F6E7D' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        position: absolute;
        opacity: $mb-opacity-transparent;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
      }
      &.active {
        background-color: rgba($mb-color-primary, 0.34);
      }
      &:hover {
        background-color: rgba($mb-color-gray-300, 0.34);
        &::after {
          opacity: $mb-opacity-full;
        }
      }
      &:last-of-type {
        margin: 0;
      }
    }
  }
  .mb-options {
    transition: padding $mb-speed-fast $mb-ease-intro;
    max-height: 0px;
    padding: 0;
    overflow: hidden;
  }
  &.active {
    .mb-icon {
      transform: rotateZ(0deg);
    }
    .mb-options {
      max-height: none;
      padding: $mb-space-s $mb-space-s;
    }
  }
  .mb-selected-input {
    display: inline-block;
    align-items: center;
    background-color: $mb-color-white;
    padding: $mb-space-xs $mb-space-s;
    cursor: pointer;
    @include mb-border-radius(s);
  }
}
</style>