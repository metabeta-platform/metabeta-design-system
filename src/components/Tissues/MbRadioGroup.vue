<template>
  <ul :class="['mb-radio-group', `mb-flow-${flow}`]">
      <li
        v-for="(radioIndex, i) in radioValues"
        :key="radioIndex._id"
      >
        <mb-radio
          @inputChanged="inputChanged"
          :name="radioIndex.name"
          :is-checked="selectedOne === radioIndex.name"
          :label="radioIndex.label"
        ></mb-radio>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'MbRadioGroup',
  data: () => ({
    selectedOne: '',
  }),
  props: {
    flow: {
      type: String,
      default: 'horizontal',
    },
    radioValues: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    inputChanged (checkedInput) {
      this.selectedOne = checkedInput;
      this.$emit('inputChanged', this.selectedOne);
    },
  },
  components: {
    MbRadio: () => import('../cells/form/MbRadio.vue'),
  },
  created () {
    this.selectedOne = this.radioValues.filter(e => e.selected === true).map(e => e.name).toString() || '';
    this.$emit('inputChanged', this.selectedOne);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
.mb-radio-group {
    li {
      margin: 0;
      padding: 0;
    }
  &.mb-flow {
    &-horizontal {
        li {
          display: inline-block;
          margin-right: $mb-space-xs;
        }
    }
    &-vertical {
        li {
          display: flex;
        }
    }
  }
}
</style>