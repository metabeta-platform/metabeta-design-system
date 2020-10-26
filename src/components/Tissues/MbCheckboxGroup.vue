<template>
  <div :class="['mb-checkbox-group', `mb-flow-${flow}`]">
    <ul
      v-for="(checkboxIndex, i) in checkedValues"
      :key="checkboxIndex._id"
    >
      <li>
        <mb-checkbox
          @unchecked="uncheckedEmit"
          @checked="checkedEmit"
          :name="checkboxIndex.name"
          :is-checked="checkboxIndex.checked"
          :label="checkboxIndex.label"
          :is-disabled="!!checkboxIndex.disabled && checkboxIndex.disabled === true"
        ></mb-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MbCheckboxGroup',
  data: () => ({
    checkedArr: [],
  }),
  props: {
    flow: {
      type: String,
      default: 'horizontal',
    },
    checkedValues: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    checkedEmit (checkedInput) {
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit (uncheckedInput) {
      console.log(uncheckedInput);
      this.checkedArr = this.checkedArr.filter(checkedItem => checkedItem !== uncheckedInput);
      console.log(this.checkedArr);
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbCheckbox: () => import('../cells/form/MbCheckbox.vue'),
  },
  created () {
    this.checkedArr = this.checkedValues.filter(e => e.checked === true).map(e => e.name);
    this.$emit('inputChanged', this.checkedArr);
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
.mb-checkbox-group {
  ul {
    li {
      margin: 0;
      padding: 0;
    }
  }
  &.mb-flow {
    &-horizontal {
      ul {
        li {
          display: inline-block;
          margin-right: $mb-space-xs;
        }
      }
    }
    &-vertical {
      ul {
        li {
          display: flex;
        }
      }
    }
  }
}
</style>