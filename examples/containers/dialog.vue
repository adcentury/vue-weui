<template>
<div class="page dialog">
  <div class="hd">
    <div class="page_title">Dialog</div>
  </div>
  <div class="bd spacing">
    <weui-button type="primary" @click="showDialog(1)">点击弹出Dialog样式一</weui-button>
    <weui-button type="primary" @click="showDialog(2)">点击弹出Dialog样式二</weui-button>
  </div>
  <dialog :show.sync="dialog1Show" type="confirm" title="弹窗标题">
    自定义弹窗内容
    <br>
    ...
  </dialog>
  <dialog :show.sync="dialog2Show" type="alert" title="弹窗标题">
    弹窗内容，告知当前页面信息等
  </dialog>
</div>
</template>

<script>
import {Button, Dialog} from 'vue-weui';

export default {
  data() {
    return {
      dialog1Show: false,
      dialog2Show: false
    }
  },

  methods: {
    showDialog(id) {
      this[`dialog${id}Show`] = true;
    }
  },

  components: {
    'weui-button': Button,
    Dialog
  }
}
</script>
