<script>
// import Vue from 'vue';
import { MbButton } from '../src/components/index';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    MbButton,
  }
});
</script>

<template>
  <div id="app">
    <mb-button label='test'/>
  </div>
</template>
