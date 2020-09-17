<template>
  <section class="mb-tabs">
    <nav>
      <ul>
        <li v-for="(tab, index) in tabs" :key="tab._id" :class="{active : tab.active }" @click="switchTab(index)">
          {{tab.name}}
        </li>
      </ul>
    </nav>
    <div class="tab-wrapper">
      <div v-for="tab in tabs" :key="tab._id || tab.name" class="mb-tab" :class="{active : tab.active }">
        <slot :name="tab.name"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: [],
    },
  },
  methods: {
    switchTab(tabIndex) {
      this.tabs.forEach((tab) => {
        tab.active = false;
      });
      this.tabs[tabIndex].active = true;
    }
  },
}
</script>

<style lang="scss">
@import "../../../assets/styles/partials/_mb_color.scss";
@import "../../../assets/styles/partials/_mb_space.scss";
  .mb-tabs{
    ul{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li{
        position: relative;
        padding: $mb-space-m;
        &.active{
          &::after{
            background-color: $mb-color-blue-400;
            position: absolute;
            left: 0;
            bottom: -$mb-space-xxs;
          }
        }
      }
    }
    .tab-wrapper{
      width: 100%;
      height: auto;
      .mb-tab{
        display: none;
        &.active{
          display: block;
        }
      }
    }
  }
</style>