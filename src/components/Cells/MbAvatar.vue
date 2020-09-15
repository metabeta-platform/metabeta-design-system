<template>
  <div class="mb-avatar">
    <img :class="type == 'organization' ? 'org-icon' : 'user-icon'" :src="avatar.avatarUrl ? avatar.avatarUrl : defaultImages.getImage(type, 'icon')">
    <div class="avatar-text">
      <p class="mb-label">
        avatar.name
      </p>
      <p v-if="avatar.desc">
        <small>
          avatar.desc
        </small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'user',
    },
    avatar:{
      type: Object,
      default: () => {},
    }
  },
}
</script>

<style lang="scss" scoped>
  .mb-avatar{
    display: flex;
    align-items: center;
    .user-icon{
      @include mb-border-radius(circle);
    }
    .org-icon{
      @include mb-border-radius(s);
    }
    .avatar-text{
      display: block;
      margin-left: $space-m;
      &:not(.mb-label){
        margin-top: $space-xs;
      }
    }
  }
</style>