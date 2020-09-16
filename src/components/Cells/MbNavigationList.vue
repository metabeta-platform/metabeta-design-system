<template>
<div class="mb-navigation-list">
  <h5>{{title}}</h5>
  <ul class="nav-link">
    <li v-for="link in links" :key="link._id" @click="$router.push({name : link.url})">
      <router-link :to="link.url">
        <MbAvatar :type="type" :avatar="link.data"></MbAvatar>
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    title:{
      type: [String, Number],
    }
  },
  components: {
    MbAvatar : () => import('@/components/cells/MbAvatar'),
  },
}
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_space.scss";
  .mb-navigation-list{
    li{
      padding: $mb-space-l;
      &:hover{
        background-color: $mb-color-gray-500;
      }
    }
  }
</style>