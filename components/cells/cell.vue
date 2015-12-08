<template>
<a :href="link" v-link="vLink" class="weui_cell" v-if="link || vLink"><slot></slot></a>
<div class="weui_cell" v-else><slot></slot></div>
</template>

<script>
export default {
  props: {
    /**
     * 跳转链接，若设置则此列表项可点击跳转
     */
    link: {
      type: String,
      required: false
    },

    /**
     * vue-router使用的跳转链接
     * 若使用vue-router，推荐使用v-link而非link
     */
    vLink: {
      type: null,
      required: false
    }
  }
};
</script>
