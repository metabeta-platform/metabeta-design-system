<template>
<div class="mb-checkbox-group">
  <ul v-for="(checkboxIndex, i) in value" :key="checkboxIndex._id" :class="alignment">
    <li>
      <mb-radio @unchecked="uncheckedEmit" @checked="checkedEmit" :name="checkboxIndex.name" :is-checked="checkedValue[i]" :label="checkboxIndex.label"></mb-radio>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'MbRadioGroup',
  data: () => ({
    checkedArr: [],
  }),
  props: {
    alignment: {
      type: String,
      default: 'horizontal',
    },
    checkedValues:{
      type: Array,
      default: () => [],
    }
  },
  methods: {
    checkedEmit(checkedInput){
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit(uncheckedInput){
      this.checkedArr.filter(checkedItem => this.checkedArr.includes(checkedItem));
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbRadio: () => import('../cells/form/MbRadio.vue'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
.mb-checkbox-group{
  .horizontal{
    display: flex;
    margin-right: $mb-space-m;
    &:last-child{
      margin-right: 0;
    }
  }
  .vertical{

  }
}
</style>