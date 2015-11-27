<template>
<a href="javascript:;" class="weui_btn" :class="[typeClass, disabled ? 'weui_btn_disabled' : '', mini ? 'weui_btn_mini' : '']">
  <slot></slot>
</a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
      required: false
    },

    disabled: {
      type: Boolean,
      default: false,
      required: false
    },

    mini: {
      type: Boolean,
      default: false,
      required: false
    },

    plain: {
      type: Boolean,
      default: false,
      required: false
    }
  },

  computed: {
    typeClass() {
      return `weui_btn${this.plain ? '_plain' : ''}_${this.type}`;
    }
  }
}
</script>

<style lang="less">
// @import 'weui_button';
</style>
