<template>
<a :href="cloneLink" v-link="routerLink" class="weui_cell" >
  <cell-header><slot name="header"></slot></cell-header>
  <cell-body><slot name="body"></slot></cell-body>
  <cell-footer><slot name="footer"></slot></cell-footer>
</a>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';

export default {
  data() {
    return {
      cloneLink: null
    };
  },
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
     * 若使用vue-router，推荐使用router-link而非link
     */
    routerLink: {
      type: null,
      required: false
    }
  },

  components: {
    CellHeader,
    CellBody,
    CellFooter
  },

  ready() {
    /**
     * 如果调用该组件时设置了 link 并且未设置 routerLink
     * 则将 link 值拷贝至 cloneLink 以解决该问题：
     * https://github.com/adcentury/vue-weui/issues/38
     * 
     * 该做法相当于在 v-link 指令初始化完成并覆写 href 属性之后
     * 再度为 href 进行了赋值
     */
    if (this.link && this.routerLink === undefined) {
      this.cloneLink = this.link;
    }
    this.$watch('link', (newVal) => {
      this.cloneLink = newVal;
    });
  }
};
</script>
