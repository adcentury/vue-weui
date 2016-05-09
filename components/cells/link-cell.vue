<template>
<a v-if="routerLink" v-link="routerLink" class="weui_cell" >
  <cell-header><slot name="header"></slot></cell-header>
  <cell-body><slot name="body"></slot></cell-body>
  <cell-footer><slot name="footer"></slot></cell-footer>
</a>
<a v-else :href="link" class="weui_cell" >
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
  }
};
</script>
