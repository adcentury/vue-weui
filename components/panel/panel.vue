<template>
<div class="weui_panel" :class="{'weui_panel_access': access}">
  <div class="weui_panel_hd"><slot name="header"></slot></div>
  <div class="weui_panel_bd"><slot name="body"></slot></div>
  <a href="link || 'javascript:;'" v-link="routerLink" class="weui_panel_ft" v-if="access"><slot name="footer"></slot></a>
</div>
</template>

<script>
export default {
  props: {
    /**
     * 底部部分是否包含“查看更多”样式
     */
    access: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * 底部跳转链接
     */
    link: {
      type: String,
      required: false
    },

    /**
     * vue-router使用的跳转链接
     * 若使用vue-router，推荐使用router-link而非link
     */
    routerLink: {
      type: null,
      required: false
    }
  }
}
</script>
