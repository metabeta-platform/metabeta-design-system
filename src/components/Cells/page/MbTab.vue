<template>
  <section
    class="mb-tab"
    :class="'active' : activeIndex"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: "MbTabGroup",
  props: {
    activeIndex: {
      type: [Number, String],
      default: 0,
    }
  }
}
</script>