<template>
  <div class="mb-avatar">
    <img class="avatar-image" :class="type == 'organization' ? 'org-icon' : 'user-icon'" :src="avatar.avatarUrl ? avatar.avatarUrl : defaultImages.getImage(type, 'icon')">
    <div class="avatar-text">
      <p class="mb-label">
        {{avatar.name}}
      </p>
      <p class="mb-desc" v-if="avatar.desc">
        <small>
          {{avatar.desc}}
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
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
  .mb-avatar{
    display: flex;
    align-items: center;
    .avatar-image{
      width: 32px;
      height:32px;
      object-fit: cover;
    }
    .user-icon{
      @include mb-border-radius(circle);
    }
    .org-icon{
      @include mb-border-radius(s);
    }
    .avatar-text{
      display: block;
      margin-left: $mb-space-s;
      .mb-label{
        margin: 0;
        font-weight: $mb-font-weight-bold;
        line-height: $mb-line-height-xs;
        font-size: $mb-font-size-s;
      }
      .mb-desc{
        margin: 0;
        line-height: $mb-line-height-xxs;
        font-size: $mb-font-size-xs;
      }
    }
  }
</style>