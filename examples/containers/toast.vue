<template>
<div class="page toast">
  <div class="hd">
    <h1 class="page_title">Toast</h1>
  </div>
  <div class="bd spacing">
    <weui-button type="primary" @click="showToast">点击弹出Toast</weui-button>
    <weui-button type="primary" @click="showLoadingToast">点击弹出Loading Toast</weui-button>
  </div>
  <toast v-show="toastShow">已完成</toast>
  <toast type="loading" v-show="loadingToastShow">数据加载中</toast>
</div>
</template>

<script>
import {Button, Toast} from 'vue-weui';

export default {
  data() {
    return {
      toastShow: false,
      loadingToastShow: false
    };
  },

  methods: {
    showToast() {
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, 2000);
    },
    showLoadingToast() {
      this.loadingToastShow = true;
      setTimeout(() => {
        this.loadingToastShow = false;
      }, 3000);
    },
  },

  components: {
    'weui-button': Button,
    Toast
  },
}
</script>
