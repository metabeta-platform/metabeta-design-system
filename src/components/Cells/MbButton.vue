<template>
  <div class="mb-btn-anc">
    <keep-alive>
      <component
        :type="type != 'link' ? type : null"
        :is="componentType"
        @click="$emit('click', $event)"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
        :href="type === 'link' ? href : false"
        :class="['mb-button', `mb-type-${type}`, `mb-priority-${priority}`,`mb-color-${color}`, `mb-size-${size}`]"
        :disabled="isDisabled"
      >
        <mb-icon
          :type="priority"
          :size="iconBefore.size"
          class="mb-button-icon-left"
          v-if="!responsiveLabelOnly && iconBefore"
          :name="type === 'action' ? 'dropdown' : iconBefore.name"
        ></mb-icon>
        <span
          class="mb-button-label"
          v-if="!responsiveIconOnly"
        >{{label}}</span>
        <mb-icon
          :type="priority"
          :size="iconAfter.size"
          class="mb-button-icon-right"
          v-if="!responsiveLabelOnly && iconAfter"
          :name="type === 'action' ? 'dropdown' : iconAfter.name"
        ></mb-icon>
      </component>
    </keep-alive>
    <div
      v-if="tooltip"
      class="tooltip-wrap"
    >
      <mb-tooltip :is-visible="TRUE_FLAG">
        <template slot="content">
          <slot name="tooltip"></slot>
        </template>
      </mb-tooltip>
    </div>
  </div>
</template>

<script>
import MbTooltip from '@/components/cells/MbTooltip';

export default {
  name: "MbButton",
  data: () => ({
    responsiveLabelOnly: '',
    responsiveIconOnly: '',
    TRUE_FLAG: false,
  }),
  props: {
    type: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: '/',
      required: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      default: 'base',
    },
    color: {
      type: String,
      default: 'base',
    },
    size: {
      type: String,
      default: 'm',
    },
    iconBefore: {
      type: Object,
      default: () => { },
    },
    iconAfter: {
      type: Object,
      default: () => { },
    },
    label: {
      type: String,
      default: '',
    },
    onDesktop: {
      type: String,
      default: 'default',
    },
    onLaptop: {
      type: String,
      default: 'default',
    },
    onTablet: {
      type: String,
      default: 'default',
    },
    tooltip: {
      type: String,
      default: '',
    },
    onPhone: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    componentType () {
      return this.type === 'link' ? 'a' : 'button';
    },
  },
  components: {
    MbIcon: () => import('@/components/cells/MbIcon'),
    MbTooltip,
  },
  created () {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    switch (windowWidth) {
      case windowWidth > 1367:
        this.responsiveIconOnly = this.onDesktop === 'icon-only';
        this.responsiveLabelOnly = this.onDesktop === 'label-only';
        break;
      case windowWidth > 768 && windowWidth < 1367:
        this.responsiveIconOnly = this.onLaptop === 'icon-only';
        this.responsiveLabelOnly = this.onLaptop === 'label-only';
        break;
      case windowWidth > 568 && windowWidth < 768:
        this.responsiveIconOnly = this.onTablet === 'icon-only';
        this.responsiveLabelOnly = this.onTablet === 'label-only';
        break;
      case windowWidth < 568:
        this.responsiveIconOnly = this.onPhone === 'icon-only';
        this.responsiveLabelOnly = this.onPhone === 'label-only';
        break;
      default:
        break;
    }
  },
  methods: {
    mouseEnter (event) {
      this.$emit('mouseenter', event);
      this.TRUE_FLAG = true;
    },
    mouseLeave () {
      this.$emit('mouseleave', event);
      this.TRUE_FLAG = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/partials/_mb_space.scss";
@import "../../assets/styles/partials/_mb_icons.scss";
@import "../../assets/styles/partials/_mb_typography.scss";
@import "../../assets/styles/partials/_mb_color.scss";
@import "../../assets/styles/partials/_mb_theme.scss";
.mb-btn-anc {
  display: inline-block;
  position: relative;
  .mb-button {
    margin-right: $mb-space-xxs;
    display: flex;
    align-items: center;
    justify-content: center;
    &.mb-type-link {
      @extend button;
      margin-right: $mb-space-xs;
    }
    .mb-button-icon {
      &-left {
        margin-right: 0;
      }
      &-right {
        margin-left: 0;
      }
    }
    .mb-button-label {
      margin: 0;
    }

    &.mb-size {
      &-s {
        padding: $mb-space-xxs $mb-space-xs;
        @include mb-font(body, xs, normal, normal);
        @include mb-border-radius(s);
      }
      &-m {
        padding: $mb-space-xs $mb-space-s;
        @include mb-font(body, s, normal, normal);
        @include mb-border-radius(m);
      }
      &-l {
        padding: $mb-space-s $mb-space-m;
        @include mb-font(body, m, normal, normal);
        @include mb-border-radius(l);
      }
    }
  }
}
</style>
