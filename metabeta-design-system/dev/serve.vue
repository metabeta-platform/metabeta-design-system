<script>
import Vue from 'vue';
import { MetabetaDesignSystemSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    MetabetaDesignSystemSample,
  }
});
</script>

<template>
  <div id="app">
    <metabeta-design-system-sample />
  </div>
</template>
