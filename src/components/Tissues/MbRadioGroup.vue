<template>
  <div class="mb-checkbox-group">
    <ul>
      <li
        v-for="(radioIndex, i) in radioValues"
        :key="radioIndex._id"
        :class="alignment"
      >
        <mb-radio
          @inputChanged="inputChanged"
          :name="radioIndex.name"
          :is-checked="selectedOne === radioIndex.name"
          :label="radioIndex.label"
        ></mb-radio>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MbRadioGroup',
  data: () => ({
    selectedOne: '',
  }),
  props: {
    alignment: {
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
.mb-checkbox-group {
  .horizontal {
    display: flex;
    margin-right: $mb-space-m;
    &:last-child {
      margin-right: 0;
    }
  }
  .vertical {
  }
}
</style>