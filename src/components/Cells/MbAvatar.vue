<template>
  <div
    @mouseenter="TRUE_FLAG = true"
    @mouseleave="TRUE_FLAG = false"
    :class="['mb-avatar', `mb-size-${size}` , {'only-image' : onlyImage}]"
  >
    <img
      svg-inline
      class="mb-avatar-image"
      :class="type == 'organization' ? 'mb-organization-avatar' : 'mb-user-avatar'"
      :src="avatar.avatarUrl === '' || avatar.avatarUrl === null ? defaultImages.getImage(type, 'icon') : avatar.avatarUrl"
    >
    <div
      v-if="!onlyImage"
      class="mb-avatar-description"
    >
      <p class="mb-label">
        {{avatar.name}}
      </p>
      <p
        class="mb-caption"
        v-if="avatar.description"
      >
        {{avatar.description}}
      </p>
    </div>
    <div v-if="onlyImage">
      <mb-tooltip
        :placement="tooltip"
        :is-visible="TRUE_FLAG"
      >
        <template slot="content">
          <div class="tooltip">
            <p class="mb-label">
              {{avatar.name}}
            </p>
            <p
              class="mb-caption"
              v-if="avatar.description"
            >
              {{avatar.description}}
            </p>
          </div>
        </template>
      </mb-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    TRUE_FLAG: false,
  }),
  props: {
    type: {
      type: String,
      default: 'organization',
    },
    avatar: {
      type: Object,
      default: () => { },
    },
    size: {
      type: String,
      default: 'm',
    },
    tooltip: {
      type: String,
      default: 'top-right',
    },
    onlyImage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MbTooltip: () => import('@/components/cells/MbTooltip.vue'),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
.mb-avatar {
  display: flex;
  position: relative;
  &.only-image {
    display: inline-block;
  }
  .mb-avatar-image {
    object-fit: cover;
  }
  .mb-user-avatar {
    @include mb-border-radius(circle);
  }
  .mb-avatar-description {
    display: block;
    max-width: 32em;
    .mb-label {
      @include mb-wrap-text(false);
    }
  }
  .tooltip {
    text-align: left;
    .mb-caption {
      color: $mb-color-gray-400 !important;
    }
    .mb-label {
      color: $mb-color-gray-100 !important;
    }
  }
  &.mb-size {
    &-xs {
      .mb-avatar-image {
        width: 1rem;
        height: 1rem;
      }
      .mb-avatar-description {
        margin-left: $mb-space-xxs;
        .mb-label {
          @include mb-caption(s);
          color: $mb-color-headings;
          margin: 0;
        }
        .mb-caption {
          display: none;
          @include mb-caption(xs);
        }
      }
      .mb-organization-avatar {
        @include mb-border-radius(xs);
      }
    }
    &-s {
      .mb-avatar-image {
        width: 1.25rem;
        height: 1.25rem;
      }
      .mb-avatar-description {
        margin-left: $mb-space-xs;
        .mb-label {
          @include mb-label(s);
          margin: 0;
          color: $mb-color-text-medium;
        }
        .mb-caption {
          display: none;
          @include mb-caption(xs);
        }
      }
      .mb-organization-avatar {
        @include mb-border-radius(s);
      }
    }
    &-m {
      .mb-avatar-image {
        width: 2.5rem;
        height: 2.5rem;
      }
      .mb-avatar-description {
        margin-left: $mb-space-s;
        .mb-label {
          @include mb-label(s);
          margin: 0;
        }
        .mb-caption {
          @include mb-caption(xs);
          margin: 0;
        }
      }
      .mb-organization-avatar {
        @include mb-border-radius(s);
      }
    }
    &-l {
      .mb-avatar-image {
        width: 3.75rem;
        height: 3.75rem;
      }
      .mb-avatar-description {
        margin-left: $mb-space-s;
        .mb-label {
          @include mb-label(l);
          margin: 0;
        }
        .mb-caption {
          @include mb-caption(s);
        }
      }
      .mb-organization-avatar {
        @include mb-border-radius(m);
      }
    }
    &-xl {
      .mb-avatar-image {
        width: 4.5rem;
        height: 4.5rem;
      }
      .mb-avatar-description {
        margin-left: $mb-space-s;
        .mb-label {
          @include mb-label(xl);
          margin: 0;
        }
        .mb-caption {
          @include mb-caption(m);
        }
      }
      .mb-organization-avatar {
        @include mb-border-radius(l);
      }
    }
  }
}
</style>