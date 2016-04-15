<template>
<a class="weui_panel_ft" :href="link || 'javascript:;'" v-link="routerLink"><slot></slot></a>
</template>

<script>
export default {
  props: {
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
