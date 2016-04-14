<template>
<a href="link || 'javascript:;'" v-link="routerLink" class="weui_media_box" :class="typeClass" v-if="!!link || !!routerLink">
  <slot></slot>
</a>
<div class="weui_media_box" :class="typeClass" v-else>
  <slot></slot>
</div>
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
