<template>
<a :href="link" v-link="routerLink" class="weui_grid">
  <div class="weui_grid_icon" v-if="imageUrl">
    <img :src="imageUrl" alt="">
  </div>
  <p class="weui_grid_label" v-if="label">{{label}}</p>
</a>
</template>

<script>
export default {
  props: {
    /**
     * 跳转链接，会添加在标签的href属性中
     */
    link: {
      type: String,
      required: false
    },

    /**
     * vue-router使用的跳转链接
     * 若使用vue-router，推荐使用router-link而非link
     * 会添加在v-link属性中
     */
    routerLink: {
      type: null,
      required: false
    },

    /**
     * 图标地址
     */
    imageUrl: {
      type: String,
      required: false
    },

    /**
     * 标签，显示在图标下方
     */
    label: {
      type: null,
      required: false
    }
  }
}
</script>
