<template>
<div class="mb-navigation-list">
  <h5>{{title}}</h5>
  <nav>
    <ul class="nav-link">
      <li v-for="link in links" :key="link._id" @click="$router.push({name : link.url})">
        <router-link :to="link.url">
          <mb-avatar :type="type" :avatar="link.data"></mb-avatar>
        </router-link>
      </li>
    </ul>
  </nav>
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
    },
    links:{
      type: [Array, Object],
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
      padding: $mb-space-xs;
      margin: 0 $mb-space-xs;
      @include mb-border-radius(m);
      &:hover{
        background-color: $mb-color-gray-300;
      }
    }
  }
</style>